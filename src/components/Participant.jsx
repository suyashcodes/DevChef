import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'




const Participant = ({ index, item, keys, questions }) => {

    const [width, setWidth] = useState(window.innerWidth)
    const [isActive, setIsActive] = useState(false)
    


    const boxVariants = {
        initial: {
            scale: 1,
            backgroundColor: '#123123'
        },
        whileHover: {
            scale: 1.02,
            backgroundColor: '#fff',
            color: '#000',
            boxShadow: '0px 0px 20px 2px #474340',
            // height: '220px'
        },
        expand: {
            scale: 1,
            backgroundColor: '#fff',
            color: '#000',
            boxShadow: '0px 0px 20px 2px #474340',
        }
    }

    const questionsVariants = {
        initial: {
            opacity: 1,
            // scale: 0
        },
        animate: {
            opacity: 1,
            // scale: 1,
        },
        whileHover: {
            opacity: 1,
        }
    }

    function getRankingColor(index) {
        if (index == 0) return 'bg-[#FFD700]'
        else if (index == 1) return 'bg-[#C0C0C0]'
        // else if (index == 2) return 'bg-[#CD7F32]'
        else return 'bg-[#383736]'
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
            className={`ranker-section overflow-hidden gap-[10px] flex flex-col items-center py-[22px] rounded-[10px] ${getRankingColor(index)} `}
            variants={boxVariants}
            whileTap={'expand'}
            whileHover={'whileHover'}
            onClick={() => setIsActive(!isActive)}
        >
            <div className="header w-full px-5 flex items-center justify-between">
                <h3>{item.Rank}</h3>
                <div className='relative'>
                    {index == 0 && <img className='absolute w-[20px] h-[20px] rotate-[-30deg] top-[-10px] left-[-10px]' src='/icons/golden-crown.png' />}
                    {index == 1 && <img className='absolute w-[20px] h-[20px] rotate-[-30deg] top-[-10px] left-[-10px]' src='/icons/silver-crown.png' />}
                    {/* {index == 2 && <img className='absolute w-[20px] h-[20px] rotate-[-30deg] top-[-10px] left-[-10px]' src='/icons/bronze-crown.png' />} */}
                    <h3>{item.Name}</h3>
                </div>
                <h3>{item.Score}</h3>
            </div>


            {isActive && <motion.div
                className='flex flex-col gap-3 justify-center items-center p-[10px] bg-white text-black rounded-md'
            // variants={questionsVariants}
            >{
                    keys.map((key, index) => {
                        if (key.startsWith('Q'))
                            return <div key={index} className=' flex items-center w-full gap-[50px] justify-between'>
                                <p className='font-bold'>{questions[key]}</p>
                                <p>{item[key]}</p>
                            </div>
                    })
                }</motion.div>}

        </motion.div>
    )
}

export default Participant
