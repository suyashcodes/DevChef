import React, { useEffect, useState } from 'react'
import DynamicNavbar from '../components/DynamicNavbar'
import { motion } from 'framer-motion';

const LeaderBoard = () => {

    const [data, setData] = useState([])

    useEffect(() => {
      // data fetching
      const data = {
        models: [
            {
                "hacker_id": 26308361,
                "language": null,
                "worst_testcase_time": null,
                "rank": 1,
                "score": 5.0,
                "time_taken": 47.0,
                "index": 0,
                "hacker": "suyashdashputre7",
                "avatar": "https://d1ce3iv5vajdy.cloudfront.net/hackerrank/assets/gravatar.jpg",
                "country": "India",
                "school": null,
                "company": "",
                "timestamp": 1727185547,
                "submitted_at": "4 days",
                "is_multiple_contest": false,
                "level": 5
            },
            {
                "hacker_id": 19431366,
                "language": null,
                "worst_testcase_time": null,
                "rank": 1,
                "score": 5.0,
                "time_taken": 226.0,
                "index": 1,
                "hacker": "prathameshsatbh1",
                "avatar": "https://d1ce3iv5vajdy.cloudfront.net/hackerrank/assets/gravatar.jpg",
                "country": "India",
                "school": null,
                "company": "",
                "timestamp": 1727185726,
                "submitted_at": "4 days",
                "is_multiple_contest": false,
                "level": 5
            }
        ],
        "page": 1,
        "total": 2,
        "current_hacker": null,
        "available": true,
        "self_display": true
    }

    const filteredData = data.models.map(({ rank, score, hacker, hacker_id, avatar, time_taken }) => ({
        rank,
        score,
        hacker,
        hacker_id,
        avatar,
        time_taken
    }));

    setData(filteredData)
    
      return () => {
        
      }
    }, [])
    

    

    const boxVariants = {
        initial: {
            scale: 1
        },
        whileHover: {
            scale: 1.02,
            backgroundColor: 'white',
            color: 'black',
            boxShadow: '0px 0px 50px 4px #000'
        }
    }

    const imageVariants = {
        initial: {
            x: 0,
            y: 0
        },
        whileHover: {
            x: -10,
            y: -5,
            boxShadow: '0px 0px 50px 4px #000'
        }
    }


    return (
        <div className='w-screen h-100svh  bg-[#282523] text-white'>
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

            <section className='w-full max-w-[1000px] gap-y-[20px] flex flex-col  m-auto p-[20px] pt-[100px]'>

                <div className='ranker-section flex  items-center py-[20px] font-bold text-[110%]'>
                    <p className='rank w-[10%]  s600:mr-[50px] text-center' >Rank</p>
                    <div className='flex flex-1  items-center gap-[20px]'>
                        <p>Participant</p>
                    </div>
                    <p className='score w-[20%] text-center'>Score</p>
                    <p className="time w-[15%] text-center">Time</p>
                </div>
                {
                data.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className='ranker-section flex  items-center py-[15px] bg-[#383736] rounded-[10px]'
                        variants={boxVariants}
                        initial={'intial'}
                        whileHover={'whileHover'}
                    >
                        <p className='rank w-[10%] s600:mr-[50px] text-center' >{item.rank}</p>
                        <div className='flex flex-1 items-center gap-[20px]'>
                            <div className='w-[40px] h-[40px] '><motion.img
                                className='w-full h-full rounded-[50%]' 
                                src={item.avatar} 
                                alt="profile" 
                                variants={imageVariants}
                            /></div>
                            <p>{item.hacker}</p>
                        </div>
                        <p className='score w-[20%] pl-[10px] text-center'>{item.score}</p>
                        <p className="time w-[15%] text-center ">{item.time_taken}</p>
                    </motion.div>
                ))
            }</section>

        </div>
    )
}

export default LeaderBoard
