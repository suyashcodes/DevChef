import React, { useEffect, useState } from 'react'
import Papa from "papaparse";


const CombinedLeaderboard = () => {

    const [leaderboards, setLeaderboards] = useState({})
    const [files, setFiles] = useState([])
    const [userData, setUserData] = useState({})
    const [scores, setScores] = useState({})
    const [final, setFinal] = useState([])


    function splitMonthYear(monthYear) {
        const match = monthYear.match(/([A-Za-z]+)(\d{4})/);
        if (!match) return ''; 
        return match[1] +' '+match[2]
    }



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
                                    setFiles((pre) => {
                                        if (pre.some(file => file[key])) {
                                            return pre;
                                        }
                                        return [...pre, { [key]: resData }];
                                    });
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
    


    // update userData
    useEffect(() => {
        if(!files.length) return

        for (const file of files) {
            const userArray = Object.values(file)

            for (const users of userArray) {
                for (const user of users) {
                    setUserData(pre => {
                        return { ...pre, [user.Username]: user }
                    })
                }
            }
        }

        return () => {
            setUserData({})
        }

    }, [files])





    // update scores
    useEffect(() => {
        if(!files.length) return

        const tempScores = {}

        for (const file of files) {
            const userArray = Object.values(file)
            const month = splitMonthYear(Object.keys(file)[0])

            for (const users of userArray) {
                for (const user of users) {

                    const Score = Number(tempScores[user.Username]?.Score || 0) + Number(user.Score);
                    tempScores[user.Username] = {
                        ...tempScores[user.Username],
                        [month]: Math.floor(Number(user.Score)),
                        Score: Math.floor(Score),
                    }
                }
            }
        }

        setScores(tempScores)

        return () => {
            setScores({})
        }

    }, [files])




    useEffect(() => {
        if(!userData) return
        
        const sortScores = (scores) => {
            let arr = Object.entries(scores).sort(([, a], [, b]) => {
                return b.Score - a.Score
            })

            arr = arr.map((item, index) => {
                return {
                    Rank: index + 1,
                    Name: item[0],
                    ...item[1]
                }
            })
            return arr
        }
        setFinal(sortScores(scores))
        
        return () => {
            setFinal([])
        }

    }, [scores, userData])



    return final
}

export default CombinedLeaderboard
