import React, { useEffect, useState } from 'react'
import DynamicNavbar from '../components/DynamicNavbar'
import { motion } from 'framer-motion';
import Papa from "papaparse";

const LeaderBoard = () => {

    const [data, setData] = useState([])
    let rank = 0
    let preScore = -1;
    const [search, setSearch] = useState('')
    const filteredData = data.filter(item => {
        return item.Name.toLowerCase().includes(search.toLowerCase())
    })

    useEffect(() => {
        console.log(filteredData)

        return () => {

        }
    }, [filteredData])

    useEffect(() => {
        console.log(search)

        return () => {

        }
    }, [search])



    useEffect(() => {
        // Assuming the CSV file is located in the public folder
        fetch("leaderboardData/SeptemberLeaderboard - Sheet1.csv")
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    complete: (results) => {
                        console.log("Parsed data:", results.data);
                        setData(results.data);
                    },
                    error: (error) => {
                        console.error("Error while parsing:", error);
                    },
                });
            })
            .catch((error) => console.error("Error while fetching CSV:", error));
    }, []);




    const boxVariants = {
        initial: {
            scale: 1
        },
        whileHover: {
            scale: 1.02,
            backgroundColor: 'white',
            color: 'black',
            boxShadow: '0px 0px 20px 2px #474340'
        }
    }



    return (
        <div className='w-screen min-h-[100svh] bg-[#282523] text-white text-[12px] s600:text-[14px] s800:text-[16px]'>
            <DynamicNavbar
                links={
                    [
                        {
                            name: 'Home',
                            link: '/'
                        },
                        {
                            name: 'Events',
                            link: '/'
                        },
                        {
                            name: 'About',
                            link: '/'
                        }
                    ]
                }
                colors={{
                    primary: '#ea580c',
                    secondary: '#ffb48d',
                    mobileBackground: '#282523bf',
                    background: '#1a1816',
                    buttonText: 'white'
                }}
                logoURL={"/logos/DevChef Posters (4).png"}
                activeInNavbar={true}
            />

            <section className='w-full max-w-[1200px]  gap-y-[24px] flex flex-col  m-auto p-[20px] pt-[50px]'>

                {/* <div className='w-full flex flex-col s600:flex-row justify-center gap-[20px] s600:gap-0 items-center s600:justify-between'>
                    <h2 className='text-orange-500 text-[130%] font-bold '> September season results</h2>
                    <input className='text-black max-w-[250px]  w-full focus:outline-none px-[15px] py-[10px] rounded-[10px]' onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='search' />
                </div> */}

                <div className='ranker-section flex  items-center py-[20px] font-bold '>
                    <p className='  w-[20px] ml-[10px] s600:ml-0 s600:w-[10%] text-center' >Rank</p>
                    <p className=' flex-1 text-center'>Name</p>
                    <p className=' w-[23%] text-center'>Username</p>
                    <p className=' w-[15%] text-center'>Total Score</p>
                    <p className=' w-[10%] text-center'>Q1</p>
                    <p className=' w-[10%] text-center'>Q2</p>
                    <p className=" w-[10%] text-center ">Q3</p>
                </div>
                {
                    filteredData.map((item, index) => {

                        let backgroundColor = '#383736'
                        let color = '#fff'
                        let shadow = ''

                        if (item.Totalscore != preScore) {
                            rank++
                            preScore = item.Totalscore
                        }
                        if (rank == 1) {
                            backgroundColor = '#FFD700'
                            color = '#000'
                            shadow = '0px 0px 7px 1px #FFD700'
                        }
                        else if (rank == 2) {
                            backgroundColor = '#C0C0C0'
                            color = '#000'
                            shadow = '0px 0px 7px 1px #C0C0C0'
                        }
                        else if (rank == 3) {
                            backgroundColor = '#CD7F32'
                            color = '#000'
                            shadow = '0px 0px 7px 1px #CD7F32'
                        }


                        return (
                            <motion.div
                                key={index}
                                className='ranker-section flex  items-center py-[22px] rounded-[10px]'
                                variants={boxVariants}
                                initial={'intial'}
                                whileHover={'whileHover'}
                                style={{ backgroundColor, color, boxShadow: shadow }}
                            >
                                <p className='w-[20px] ml-[10px] s600:ml-0 s600:w-[10%]  text-center ' >{rank}</p>
                                <div className=' w-[23%]  flex justify-center items-center'>
                                    <div className='w-[25px] h-[13px] relative'>
                                        {rank == 1 && <img className='w-[25px] h-[13px] rotate-[-30deg] left-[13px] top-[-16px] absolute' src="/icons/golden-crown.png" alt="golden crown" />}
                                        {rank == 2 && <img className='w-[25px] h-[13px] rotate-[-30deg] left-[13px] top-[-16px] absolute' src="/icons/silver-crown.png" alt="golden crown" />}
                                        {rank == 3 && <img className='w-[25px] h-[13px] rotate-[-30deg] left-[13px] top-[-16px] absolute' src="/icons/bronze-crown.png" alt="golden crown" />}
                                    </div>
                                    <p className='text-center'>{item.Name}</p>
                                </div>
                                <p className=' flex-1 text-center'>{item.Username}</p>
                                <p className=' w-[15%] text-center'>{item.Totalscore}</p>
                                <p className=' w-[10%] text-center'>{item["Raj's Homework"]}</p>
                                <p className=' w-[10%] text-center'>{item["Alien Artifacts"]}</p>
                                <p className=" w-[10%] text-center ">{item["keeper of Mystical key"]}</p>
                            </motion.div>)
                    })
                }
            </section>

        </div>
    )
}

export default LeaderBoard
