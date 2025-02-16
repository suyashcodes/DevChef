import React, { useEffect, useState } from 'react'
import Papa from "papaparse";


const CombinedLeaderboard = () => {

    const [leaderboards, setLeaderboards] = useState({})
    const [files, setFiles] = useState([])
    const [userData, setUserData] = useState({})
    const [scores, setScores] = useState({})
    const [final, setFinal] = useState([])

    useEffect(() => {
        fetch('/leaderboardData/combined/leaderboards.json')
            .then((response) => response.json())
            .then((data) => setLeaderboards(data))
            .catch((error) => console.error("Error while fetching json file:", error));
        
        return () => {
            setLeaderboards({})
        }
    }, [])

    
    useEffect(() => {
        const keys = Object.keys(leaderboards)
        if(!keys.length) return 

        for (const key of keys) {
            const fileName = leaderboards[key]
            fetch(fileName)
                .then((response) => response.text())
                .then((csvText) => {
                    // check if the csvText starts with html document (file does not exist)
                    if (csvText.startsWith('<!doctype html>')) {
                        throw new Error(`${fileName} not found`)
                    }
                    else {
                        Papa.parse(csvText, {
                            header: true,
                            complete: (results) => {
                                let resData = results.data.filter(item => item.Rank != '')
                                resData = resData.map(item => {
                                    return {
                                        Name: item.Name,
                                        Username: item.Username,
                                        Score: item.Score
                                    }
                                })
                                if(resData.length > 0) {
                                    setFiles(pre => {
                                        if (pre.includes(key)) return pre
                                        else return [...pre, { [key]: resData }]
                                    })
                                }
                            },
                            error: (error) => {
                                console.error("Error while parsing: ", error);
                            },
                        });
                    }
                })
                .catch((error) => console.error("Error while fetching CSV: ", error));
        }

        return () => {
            setFiles([])
        }

    }, [leaderboards])


    useEffect(() => {
        if(!files.length) return

        for (const file of files) {
            const userArray = Object.values(file)

            for (const users of userArray) {
                for (const user of users) {
                    // update userData
                    setUserData(pre => {
                        return { ...pre, [user.Username]: user }
                    })

                    // update scores
                    setScores(pre => {
                        const score = Number((scores[user.Username] ? scores[user.Username].Score : 0) + user.Score)
                        // console.log(file)
                        // console.log(scores[user.Username] ? scores[user.Username].Score: 0)
                        return { 
                            ...pre, 
                            [user.Username]: score 
                        }
                    })
                }
            }
        }

    }, [files])



    useEffect(() => {
        if(!userData) return
        const sortScores = (scores) => {
            return Object.entries(scores).sort(([, a], [, b]) => b - a)
        }
        setFinal(sortScores(scores))
    }, [scores, userData])



    return final
}

export default CombinedLeaderboard
