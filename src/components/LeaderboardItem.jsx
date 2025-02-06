import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


const LeaderboardItem = ({ index, item, keys }) => {
    const [width, setWidth] = useState(window.innerWidth)

    const boxVariants = {
        initial: {
            scale: 1,
        },
        whileHover: {
            scale: 1.02,
            backgroundColor: '#fff',
            color: '#000',
            boxShadow: '0px 0px 20px 2px #474340',
        },
        // animate: {
        //     height: width <= 600 && !menuActive ? 170 : 65,
        // }
    }

    function getRankingColor(index) {
        if (index == 0) return 'bg-[#FFD700]'
        else if (index == 1) return 'bg-[#C0C0C0]'
        else if (index == 2) return 'bg-[#CD7F32]'
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
        <motion.tr
            key={index}
            className={`${getRankingColor(index)} `}
            variants={boxVariants}
            initial={'intial'}
            whileHover={'whileHover'}
            animate={'animate'}
            id={item.Name}
        >{
                // for widescreen`
                keys.map((key, index) => {
                    // if(!key.toLowerCase().startsWith('q'))
                        return <td key={index} className={` text-[13px] px-4 py-1 s1000:py-4 border-none ${index == 0 ? 'rounded-l-xl' : ''} ${index == keys.length - 1 ? 'rounded-r-xl' : ''}`}>{item[key]}</td>
                })

                // for mobile
                


        }</motion.tr>
    )
}

export default LeaderboardItem
