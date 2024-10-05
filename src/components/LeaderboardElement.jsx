import React, {useEffect, useState} from 'react'
import { animate, motion } from 'framer-motion'




const LeaderboardElement = ({shadow, backgroundColor, color, rank, item}) => {

    const [width, setWidth] = useState(window.innerWidth)
    const [menuActive, setMenuActive] = useState(true)

    const boxVariants = {
        initial: {
            scale: 1,
        },
        whileHover: {
            scale: 1.02,
            backgroundColor: '#fff',
            color: '#000',
            boxShadow: '0px 0px 20px 2px #474340'
        },
        animate: {
            height: width <= 600 && !menuActive ? 170 : 65,
        }
    }

    const individualProblemsVariants = {
        initial: {
            display: 'none',
            backgroundColor: '#0000',
            scaleY: 0,
        },
        animate: {
            display: menuActive ? 'none' : 'block',
            backgroundColor: menuActive ? '#0000' : '#fff',
            color: menuActive ? '#000' : '#000',
            scaleY: menuActive ? 0 : 1,
            y: menuActive ? -40 : 0,
            transition: {
                type: 'linear'
            }
        }

    }

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

    return (
        <motion.div
            className='ranker-section flex flex-col s600:flex-row s600:justify-center  items-center py-[22px] rounded-[10px]'
            variants={boxVariants}
            initial={'intial'}
            whileHover={'whileHover'}
            animate={'animate'}
            onClick={() => setMenuActive(!menuActive)}
            style={{ backgroundColor, color, boxShadow: shadow }}
        >
            <div className='s600:flex-1 w-full s600:w-auto  flex px-[20px] s600:px-0'>
                <p className='w-[20px] ml-[10px] s600:ml-0 s600:w-[10%]  text-center ' >{rank}</p>
                <div className=' w-[23%]  flex-1 flex justify-center items-center'>
                    <div className='w-[25px] h-[13px] relative'>
                        {rank == 1 && <img className='w-[25px] h-[13px] rotate-[-30deg] left-[13px] top-[-16px] absolute' src="/icons/golden-crown.png" alt="golden crown" />}
                        {rank == 2 && <img className='w-[25px] h-[13px] rotate-[-30deg] left-[13px] top-[-16px] absolute' src="/icons/silver-crown.png" alt="golden crown" />}
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
                // style={{ display: 'none', scaleY: 0 }}
                className='w-[80%] m-auto p-[10px] rounded-lg mt-[20px]'
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

        </motion.div>
    )
}

export default LeaderboardElement
