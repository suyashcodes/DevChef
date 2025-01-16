import React, { useEffect, useState } from 'react'
import DynamicNavbar from '../components/DynamicNavbar'
import {  motion } from 'framer-motion';
import Papa from "papaparse";
import LeaderboardElement from '../components/LeaderboardElement';

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
        fetch("leaderboardData/SeptemberLeaderboard - Sheet1 (1).csv")
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

                <div className='w-full py-4 font-extrabold text-orange-600  flex gap-3 items-center'> 
                    <p className='text-[0.9rem] font-extrabold px-2 py-[6px] rounded-xl bg-[#453f39] w-fit'>Chapter 1</p> 
                    <p className='text-[17px]'>28th September 2024</p>
                </div>


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


                        return (<LeaderboardElement key={index} item={item} backgroundColor={backgroundColor} color={color} shadow={shadow} rank={index+1} />)
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
