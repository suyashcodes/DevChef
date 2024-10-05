import React, { useEffect, useState } from 'react'
import DynamicNavbar from '../components/DynamicNavbar'
import {  motion } from 'framer-motion';
import Papa from "papaparse";

const LeaderBoard = () => {

    const [data, setData] = useState([])
    const [width, setWidth] = useState(window.innerWidth)


    function handleResize() {
        setWidth(window.innerWidth)
    }


    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])



    useEffect(() => {
        // Assuming the CSV file is located in the public folder
        fetch("leaderboardData/SeptemberLeaderboard - Sheet1.csv")
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    complete: (results) => {
                        // console.log("Parsed data:", results.data);
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
            backgroundColor: '#fff',
            color: '#000',
            boxShadow: '0px 0px 20px 2px #474340'
        },
        whileTap: {
            height: width <= 600 ? 170 : 'auto',
            gap:  width <= 600 ? '20px' : 'auto'
        }
    }

    const individualProblemsVariants = {
        initial: {
            display: 'none',
            backgroundColor: '#0000',
            scale: 0,
        },
        whileTap: {
            display: 'block',
            backgroundColor: '#fff',
            color: '#000',
        }
    }



    return (
        <div className='w-screen min-h-[100svh] bg-[#282523] text-white text-[14px] s600:text-[14px] s800:text-[16px]'>
            <DynamicNavbar
                links={
                    [
                        {
                            name: 'Home',
                            link: '/'
                        },
                    ]
                }


                colors={{
                    primary: '#ea580c',
                    secondary: '#ffb48d',
                    mobileBackground: '#282523bf',
                    background: '#1a1816',
                    buttonText: 'white'
                }}
                logo={{
                    logoURL: "/logos/DevChef Posters (4).png",
                    width: 140,
                    mobileWidth: 100
                }}
                activeInNavbar={true}
            />

            <section className='w-full max-w-[1200px]  gap-y-[24px] flex flex-col  m-auto p-[10px] s600:p-[20px] pt-[70px]'>


                <div className='ranker-section flex  items-center py-[20px] font-bold'>
                    <div className='w-full s600:w-auto s600:flex-1 flex items-center justify-between'>
                        <p className='  w-[20px] ml-[10px] s600:ml-0 s600:w-[10%] text-center' >Rank</p>
                        <p className=' flex-1 text-center'>Name</p>
                        <p className=' w-[15%] text-center'>Score</p>
                    </div>
                    {width > 600 && <div className='w-[30%] flex items-center justify-evenly'>
                        <p className=' w-1/3 text-center'>Q1</p>
                        <p className=' w-1/3 text-center'>Q2</p>
                        <p className=" w-1/3 text-center ">Q3</p>
                    </div>}
                </div>

                {/* <div className='s600:flex-1 w-full s600:w-auto  flex'>
                    <p className='w-[20px] ml-[10px] s600:ml-0 s600:w-[10%]  text-center ' >Rank</p>
                    <p className='  w-[23%] text-center'>Name</p>
                    <p className=' w-[15%] text-center'>Total score</p>
                </div> */}




                {
                    data.map((item, index) => {

                        let backgroundColor = '#383736'
                        let color = '#fff'
                        let shadow = ''

                        if (index + 1 == 1) {
                            backgroundColor = '#FFD700'
                            color = '#000'
                            shadow = '0px 0px 7px 1px #FFD700'
                        }
                        else if (index + 1 == 2) {
                            backgroundColor = '#C0C0C0'
                            color = '#000'
                            shadow = '0px 0px 7px 1px #C0C0C0'
                        }
                        else if (index + 1 == 3) {
                            backgroundColor = '#CD7F32'
                            color = '#000'
                            shadow = '0px 0px 7px 1px #CD7F32'
                        }


                        return (
                            <motion.div
                                key={index}
                                className='ranker-section flex flex-col s600:flex-row s600:justify-center  items-center py-[22px] rounded-[10px]'
                                variants={boxVariants}
                                initial={'intial'}
                                whileHover={'whileHover'}
                                whileTap={'whileTap'}
                                style={{ backgroundColor, color, boxShadow: shadow }}
                            >
                                <div className='s600:flex-1 w-full s600:w-auto  flex px-[20px] s600:px-0'>
                                    <p className='w-[20px] ml-[10px] s600:ml-0 s600:w-[10%]  text-center ' >{index + 1}</p>
                                    <div className=' w-[23%]  flex-1 flex justify-center items-center'>
                                        <div className='w-[25px] h-[13px] relative'>
                                            {index + 1 == 1 && <img className='w-[25px] h-[13px] rotate-[-30deg] left-[13px] top-[-16px] absolute' src="/icons/golden-crown.png" alt="golden crown" />}
                                            {index + 1 == 2 && <img className='w-[25px] h-[13px] rotate-[-30deg] left-[13px] top-[-16px] absolute' src="/icons/silver-crown.png" alt="golden crown" />}
                                            {index + 1 == 3 && <img className='w-[25px] h-[13px] rotate-[-30deg] left-[13px] top-[-16px] absolute' src="/icons/bronze-crown.png" alt="golden crown" />}
                                        </div>
                                        <p className='text-center'>{item.Name}</p>
                                    </div>
                                    <p className=' w-[15%] text-center'>{item.Totalscore}</p>
                                </div>


                                {width > 600 && <div className='w-[30%] flex'>
                                    <p className='w-1/3  text-center'>{item["Raj's Homework"]}</p>
                                    <p className='w-1/3  text-center'>{item["Alien Artifacts"]}</p>
                                    <p className='w-1/3 text-center'>{item["keeper of Mystical key"]}</p>
                                </div>}

                                {width <= 600 && <motion.div
                                    variants={individualProblemsVariants}
                                    style={{ display: 'none' }}
                                    className='w-[80%] m-auto p-[10px] rounded-lg '
                                >
                                    <div className=' w-full text-center flex items-center justify-between'>
                                        <p>Raj's Homework:</p>
                                        <p>{item["Raj's Homework"]}</p>
                                    </div>
                                    <div className=' w-full text-center flex items-center justify-between'>
                                        <p>Alien Artifacts:</p>
                                        <p>{item["Alien Artifacts"]}</p>
                                    </div>
                                    <div className=' w-full text-center flex items-center justify-between'>
                                        <p>Keeper of Mystical key:</p>
                                        <p>{item["keeper of Mystical key"]}</p>
                                    </div>

                                </motion.div>}

                            </motion.div>)
                    })
                }
            </section>



            <footer className='w-full p-[30px] text-center text-[80%]'>
                <p>© 2024 DevKraft. All rights reserved.</p>
            </footer>

        </div>
    )
}

export default LeaderBoard
