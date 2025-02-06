import React, { useEffect, useState } from 'react'
import DynamicNavbar from '../components/DynamicNavbar'
import { motion } from 'framer-motion';
import Papa from "papaparse";
import LeaderboardElement from '../components/LeaderboardElement';
import { div } from 'framer-motion/client';
import LeaderboardItem from '../components/LeaderboardItem';

const LeaderBoard = () => {

    const [data, setData] = useState([])
    const [width, setWidth] = useState(window.innerWidth)
    const [month, setMonth] = useState('January')
    const [year, setYear] = useState('2025')
    const [keys, setKeys] = useState([])
    const [searchValue, setSearchValue] = useState('')
    let scrollTemp = true


    function handleResize() {
        setWidth(window.innerWidth)
    }

    function scrollToLeaderboardItem(e) {
        if (!searchValue || !(e.key == 'Enter' || e.key == 'Return')) return

        const item = data.filter(k => k.Name.toLowerCase().includes(searchValue))
        const element = document.getElementById(item[0]?.Name);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth", // Smooth scrolling
                block: "start", // Aligns element to the top
            });

            if (scrollTemp) {
                window.scrollBy(0, -400)
                scrollTemp = false
            }
        }
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
        const fileName = '/leaderboardData/' + month + year + '.csv'

        fetch(fileName)
            .then((response) => response.text())
            .then((csvText) => {
                // check if the csvText starts with html document (file does not exist)
                if (csvText.startsWith('<!doctype html>')) {
                    setData(null)
                    throw new Error(`${fileName} not found`)
                }


                Papa.parse(csvText, {
                    header: true,
                    complete: (results) => {
                        let resData = results.data.filter(item => item.Rank != '')
                        setData(resData);
                    },
                    error: (error) => {
                        console.error("Error while parsing:", error);
                    },
                });
            })
            .catch((error) => console.error("Error while fetching CSV:", error));
    }, [month, year]);


    useEffect(() => {
        if (!data || !data[0]) return
        const keys = Object.keys(data[0])
        setKeys(keys)
    }, [data])



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

            <section className='w-full max-w-[1200px]  gap-y-[24px] flex flex-col  m-auto p-[10px] s600:p-[20px] pt-[70px] '>


                <div className='w-full py-4 gap-x-20 gap-y-5 font-extrabold text-orange-600 flex-col s1000:flex-row flex justify-between  items-center    '>
                    <div className='flex gap-3 items-center'>
                        <p className='text-[0.9rem] font-extrabold px-2 py-[6px] rounded-xl bg-[#453f39] w-fit'>Chapter 3</p>
                        <p className='text-[17px]'>{month} {year}</p>
                    </div>

                    {/* <div className='flex-1 '>
                        <input
                            className='w-full px-2 py-2 text-white rounded-md bg-[#453f39]'
                            value={searchValue}
                            type="text"
                            placeholder='Search Participant'
                            onKeyDown={scrollToLeaderboardItem}
                            onChange={e => {
                                setSearchValue(e.target.value)
                                scrollTemp = false
                            }}
                        />
                    </div> */}

                    <div className="selectors flex items-center gap-3">
                        <select
                            className='py-1 px-3 rounded-md '
                            value={month}
                            onChange={e => setMonth(e.target.value)}
                        >
                            <option value="" disabled>Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>

                        <select
                            className='py-1 px-3 rounded-md '
                            value={year}
                            onChange={e => setYear(e.target.value)}
                        >
                            <option value="" disabled>Year</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>

                    </div>
                </div>


                <div className='overflow-x-scroll px-3'>
                    {(data && keys) ? <table className=" w-full border-separate border-spacing-y-4 ">
                        <thead>
                            <tr >{
                                keys.map((key, index) => {
                                    if (!key.toLowerCase().startsWith('q'))
                                        return <th key={index} className="text-left font-bold px-4 py-2 text-[#dc6e24] text-[16px]">{key}</th>
                                })
                            }</tr>
                        </thead>

                        <tbody>
                            {data.map((item, index) => (
                                <LeaderboardItem key={index} index={index} item={item} keys={keys} />
                            ))}
                        </tbody>
                    </table>
                        :
                        <div className='m-auto'>
                            Nothing Cooked.
                        </div>

                    }

                </div>

            </section>



            <footer className='w-full p-[30px] text-center text-[80%]'>
                <p>© 2024 DevKraft. All rights reserved.</p>
            </footer>

        </div>
    )
}

export default LeaderBoard
