import React, { useEffect, useState } from 'react'
import DynamicNavbar from '../components/DynamicNavbar'
import { motion } from 'framer-motion';
import Papa from "papaparse";

const LeaderBoard = () => {

    const [data, setData] = useState([])


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
                            name: 'About',
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

            <section className='w-full max-w-[1200px]  gap-y-[24px] flex flex-col  m-auto p-[20px] pt-[70px]'>


                <div className='ranker-section flex  items-center py-[20px] font-bold '>
                    <p className='  w-[20px] ml-[10px] s600:ml-0 s600:w-[10%] text-center' >Rank</p>
                    <p className=' flex-1 text-center'>Name</p>
                    <p className=' w-[15%] text-center'>Score</p>
                    <p className=' w-[10%] text-center'>Q1</p>
                    <p className=' w-[10%] text-center'>Q2</p>
                    <p className=" w-[10%] text-center ">Q3</p>
                </div>
                {
                    data.map((item, index) => {

                        let backgroundColor = '#383736'
                        let color = '#fff'
                        let shadow = ''

                        if (index+1  == 1) {
                            backgroundColor = '#FFD700'
                            color = '#000'
                            shadow = '0px 0px 7px 1px #FFD700'
                        }
                        else if (index+1 == 2) {
                            backgroundColor = '#C0C0C0'
                            color = '#000'
                            shadow = '0px 0px 7px 1px #C0C0C0'
                        }
                        else if (index+1  == 3) {
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
                                <p className='w-[20px] ml-[10px] s600:ml-0 s600:w-[10%]  text-center ' >{index+1}</p>
                                <div className=' w-[23%]  flex-1 flex justify-center items-center'>
                                    <div className='w-[25px] h-[13px] relative'>
                                        {index+1 == 1 && <img className='w-[25px] h-[13px] rotate-[-30deg] left-[13px] top-[-16px] absolute' src="/icons/golden-crown.png" alt="golden crown" />}
                                        {index+1 == 2 && <img className='w-[25px] h-[13px] rotate-[-30deg] left-[13px] top-[-16px] absolute' src="/icons/silver-crown.png" alt="golden crown" />}
                                        {index+1 == 3 && <img className='w-[25px] h-[13px] rotate-[-30deg] left-[13px] top-[-16px] absolute' src="/icons/bronze-crown.png" alt="golden crown" />}
                                    </div>
                                    <p className='text-center'>{item.Name}</p>
                                </div>
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
