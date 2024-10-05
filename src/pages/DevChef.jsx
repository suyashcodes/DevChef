import React, { useState, useEffect } from 'react'
import WavyBackground from '../components/WavyBackground'
import DynamicNavbar from '../components/DynamicNavbar'
import { motion } from 'framer-motion'
import LeaderBoard from './LeaderBoard'

const DevChef = () => {

    const [width, setWidth] = useState(window.innerWidth)

    function handleResize() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='w-screen text-white bg-[#1a1816] text-[16px] s800:text-[12px] s1230:text-[16px]'>




            <div className='w-full relative overflow-hidden '>

                <DynamicNavbar
                    links={
                        [
                            {
                                name: 'About',
                                link: '#about'
                            },
                            {
                                name: 'Event Details',
                                link: '#event-details'
                            },
                            {
                                name: 'Why Participate',
                                link: '#why-participate'
                            },

                        ]
                    }
                    button={{
                        text: 'Leaderboard',
                        link: '/leaderboard'
                    }}
                    colors={{
                        primary: '#ea580c',
                        secondary: '#ffb48d',
                        mobileBackground: '#282523bf',
                        background: '#0000',
                        buttonText: 'white'
                    }}
                    logo={{
                        logoURL: "/logos/DevChef Posters (4).png",
                        width: 140,
                        mobileWidth: 100
                    }}
                    activeInNavbar={true}


                />

                <section className='w-full px-[20px] s800:px-[50px] s1000:px-0 s1000:w-[950px] s1230:w-[1000px] h-100svh pt-[100px] s600:pt-[50px] s600:h-[550px]  m-auto flex text-orange-500 '>
                    <WavyBackground />
                    <div className='w-full h-full s600:w-[60%] s800:w-[55%] s1000:w-[65%] s1230:w-[75%] relative top-[50px] z-[20]   flex flex-col gap-[50px] items-start justify-start ' >

                        <div className='flex flex-col gap-[80px] items-center '>
                            <div className='w-[60%] s600:w-[80%] m-auto flex justify-start items-start scale-150 s600:scale-100 s600:ml-[0px] s800:ml-[-20px] s1000:ml-0'><img className='w-full' src="/logos/DevChef Posters (4).png" alt="devchefLogo" /></div>
                            {width < 600 && <div className='w-[60%] s600:w-[80%] m-auto flex justify-start items-start scale-150 s600:scale-100 s600:ml-[-40px] s800:ml-[-20px]'><img className='w-full' src="/logos/DevChef Posters (7).png" alt="combined logo" /></div>}
                        </div>

                        <div className='w-full h-full  flex flex-col gap-[10px] s600:gap-[50px] justify-end s600:justify-start pb-[70px]'>
                            {/* <div>
                                <p className='text-[20px] font-bold'>26th september 2024</p>
                            </div> */}

                            <div className="tagline arvo-bold tracking-wider py-[20px] s600:py-0">
                                <div className='flex flex-col s600:flex-row items-start s600:gap-[10px] s600:items-center s600:mt-[-10px]'>
                                    <div className='flex gap-[10px]'>
                                        <p className='text-white text-[250%] s800:text-[300%]'>Flavour</p>
                                        <p className='text-white text-[250%] s800:text-[300%]'>your</p>
                                    </div>
                                    <p className='text-white text-[250%] s800:text-[300%] hollowTextBold tracking-widest'>algorithms</p>
                                </div>
                                <div className='flex flex-col s600:flex-row items-start s600:gap-[10px] s600:items-center s600:mt-[-10px]'>
                                    <div className='flex gap-[10px]'>
                                        <p className='text-white text-[250%] s800:text-[300%]'>Spice</p>
                                        <p className='text-white text-[250%] s800:text-[300%]'>up</p>
                                        <p className='text-white text-[250%] s800:text-[300%]'>your</p>
                                    </div>
                                    <p className='text-white  text-[250%] s800:text-[300%] hollowTextBold tracking-widest'>skills!</p>
                                </div>
                            </div>

                            <motion.button
                                className='w-full s600:w-[370px] px-[20px] py-[13px] text-[110%] s600:px-[10px] s600:py-[10px] text-white bg-orange-500 rounded-[10px] font-bold'
                                // initial={{ scale: 1 }}
                                // whileHover={{ scale: 1.1 }}
                                disabled={true}
                            >Registrations will open soon!</motion.button>

                        </div>

                    </div>

                    {width >= 600 && <div className='relative  top-0  s600:w-[40%] s800:w-[45%] s1000:w-[35%] s1230:w-[25%] h-full font-semibold symbols'>

                        <div className='rotate-[-34deg] text-[6px] s600:text-[10px]'>

                            <div className='flex  items-center  justify-between w-[80%] s1230:w-[100%] '>
                                <div className='flex gap-[15px]'>
                                    <motion.p
                                        className='text-[400%] s600:text-[600%] s800:text-[800%]'
                                        initial={{
                                            x: -4,
                                            y: 4
                                        }}
                                        animate={{
                                            x: 4,
                                            y: 0,
                                            scale: 1.05,
                                            transition: {
                                                type: 'spring',
                                                repeatType: 'mirror',
                                                repeat: Infinity
                                            }
                                        }}
                                    >&#123;</motion.p>
                                    <motion.p
                                        className='text-[600%] s800:text-[800%]'
                                        initial={{
                                            x: 7,
                                            y: -4,

                                        }}
                                        animate={{
                                            x: -4,
                                            y: 0,
                                            scale: 1.1,
                                            transition: {
                                                type: 'spring',
                                                duration: 2,
                                                repeatType: 'mirror',
                                                repeat: Infinity
                                            }
                                        }}
                                    >&#125;</motion.p>
                                </div>
                                <motion.p
                                    className='text-[1000%] s800:text-[1200%]'
                                    initial={{
                                        x: 1,
                                        y: 0
                                    }}
                                    animate={{
                                        x: -6,
                                        y: -3,
                                        scale: 1.2,
                                        transition: {
                                            type: 'spring',
                                            duration: 2,
                                            repeatType: 'mirror',
                                            repeat: Infinity
                                        }
                                    }}
                                >&gt;</motion.p>
                            </div>

                            <div className='flex w-[70%] s1230:w-[80%]   items-center justify-between  absolute '>
                                <motion.p
                                    className='text-[800%] s800:text-[1000%]'
                                    initial={{
                                        x: 0,
                                        y: 8
                                    }}
                                    animate={{
                                        x: 4,
                                        y: -4,
                                        scale: 1.2,
                                        transition: {
                                            type: 'spring',
                                            duration: 1,
                                            repeatType: 'mirror',
                                            repeat: Infinity,
                                            delay: 0.2
                                        }
                                    }}
                                >;</motion.p>

                                <motion.p
                                    className='text-[800%] s800:text-[1000%]'
                                    initial={{
                                        x: 1,
                                        y: 3
                                    }}
                                    animate={{
                                        x: 9,
                                        y: -2,
                                        scale: 1.3,
                                        transition: {
                                            type: 'spring',
                                            duration: 3,
                                            repeatType: 'mirror',
                                            repeat: Infinity
                                        }
                                    }}
                                >*</motion.p>
                            </div>
                        </div>
                    </div>}
                </section>

            </div>


            <div id='about' className='w-screen '>
                <section className='s1000:w-[950px] s1230:w-[1000px] m-auto p-[20px] s1000:p-[50px] flex s600:gap-0 gap-[70px] flex-col  justify-start'>


                    {width > 600 && <div className='m-auto scale-150 w-[40%] py-[60px]'><img className='w-full' src="/logos/DevChef Posters (7).png" alt="" /></div>}



                    <motion.div
                        className='overflow-hidden flex justify-center items-center '
                        initial={{
                            scale: 1,
                        }}
                        whileHover={{
                            scale: 1.03,
                        }}
                    >
                        <div className='flex justify-center relative items-center gap-[20px]'>

                            <div id='about' className='flex flex-col gap-[10px] s600:gap-[20px]'>
                                <p className='text-[200%] font-bold '>About the event</p>
                                <div className='flex flex-col gap-[15px]'>
                                    <p>The DevChef Monthly DSA Coding Contest is designed to help students refine their coding skills through competitive programming. Each month, participants will tackle three problems ranging from Easy to Hard, designed to test their understanding of Data Structures and Algorithms.</p>
                                    <p>Sharpen your skills, compete with fellow coders, and track your progress with our monthly Leaderboard. The contest format will prepare you for coding interviews and technical rounds that top companies look for during recruitment.</p>
                                </div>
                            </div>

                            {width <= 600 && <div className='scale-[45%] absolute top-[-76px] right-[4px]' ><motion.p
                                className='hollowTextBold text-[1000%] s600:text-[2000%] font-bold mt-[-40px]'
                                initial={{ scaleY: 0.8 }}
                                animate={{ scaleY: 1.2 }}
                                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror' }}
                            >;</motion.p></div>}

                            {width > 600 && <div ><motion.p
                                className='hollowTextBold text-[1000%] s600:text-[2000%] font-bold mt-[-40px]'
                                initial={{ scaleY: 0.8 }}
                                animate={{ scaleY: 1.2 }}
                                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror' }}
                            >;</motion.p></div>}
                        </div>
                    </motion.div>



                    <motion.div
                        className='overflow-hidden  flex justify-center items-center '
                        initial={{
                            scale: 1,
                        }}
                        whileHover={{
                            scale: 1.03,
                        }}
                    >
                        <div className='flex justify-center relative items-center gap-[20px]'>

                            {width > 600 && <div><motion.p
                                className='hollowTextBold text-[1000%] s600:text-[2000%] font-bold mt-[-40px]'
                                initial={{ scaleY: 0.6 }}
                                animate={{ scaleY: 1.2 }}
                                transition={{ type: 'spring', repeat: Infinity, delay: 1, repeatType: 'mirror' }}
                            >&#125;</motion.p></div>}

                            {width <= 600 && <div className='scale-[35%] absolute top-[-66px] right-[-16px]' ><motion.p
                                className='hollowTextBold text-[1000%] s600:text-[2000%] font-bold mt-[-40px]'
                                initial={{ scaleY: 0.6 }}
                                animate={{ scaleY: 1.2 }}
                                transition={{ type: 'spring', repeat: Infinity, delay: 1, repeatType: 'mirror' }}
                            >&#125;</motion.p></div>}


                            <div className='flex flex-col gap-[10px] s600:gap-[20px]'>
                                <p className='text-[200%] font-bold '>What is this about?</p>
                                <p>Welcome to DevChef Monthly DSA Coding Contest!
                                    Brought to you by Team Devkraft & GDSC DIT
                                    Get ready to dive into the world of Data Structures and Algorithms (DSA) with our monthly DevChef Coding Contest, hosted at Dr. D. Y. Patil Institute of Technology, Pune. Whether you are preparing for placements or looking to enhance your problem-solving skills, this event is the perfect opportunity to strengthen your DSA expertise and compete for exciting prizes!</p>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        className='overflow-hidden  flex justify-center items-center '
                        initial={{
                            scale: 1,
                        }}
                        whileHover={{
                            scale: 1.03,
                        }}
                    >
                        <div className='flex justify-between relative w-full items-center gap-[20px]'>

                            <div id='event-details' className='flex flex-col gap-[10px] s600:gap-[20px]'>
                                <p className='text-[200%] font-bold '>Event Details</p>
                                <div className='flex flex-col gap-[15px]'>
                                    <p>📅 Contest Date: 26th September 2024 <br />
                                        🕒 Format: 3 DSA problems (Easy, Medium, Hard) <br />
                                        ⏱️ Duration: 1.5 hours <br />
                                        💸 Entry Fee: ₹19 per participant <br />
                                        🌍 Eligibility: Open to all students at Dr. D. Y. Patil Institute of Technology</p>
                                </div>
                            </div>

                            {width > 600 && <div><motion.p
                                className='hollowTextBold text-[1000%] s600:text-[2000%] font-bold mt-[-40px]'
                                initial={{ scaleY: 0.8 }}
                                animate={{ scaleY: 1.2 }}
                                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror' }}
                            >i</motion.p></div>}


                            {width <= 600 && <div className='scale-[35%] absolute top-[-65px] right-[-10px]' ><motion.p
                                className='hollowTextBold text-[1000%] s600:text-[2000%] font-bold mt-[-40px]'
                                initial={{ scaleY: 0.8 }}
                                animate={{ scaleY: 1.2 }}
                                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror' }}
                            >i</motion.p></div>}

                        </div>
                    </motion.div>




                    <motion.div
                        className='overflow-hidden  flex justify-center items-center '
                        initial={{
                            scale: 1,
                        }}
                        whileHover={{
                            scale: 1.03,
                        }}
                    >
                        <div className='flex justify-center relative items-center gap-[50px]'>

                            {width > 600 && <div><motion.p
                                className='hollowTextBold text-[1000%] s600:text-[2000%] font-bold mt-[-40px]'
                                initial={{ scaleY: 0.6 }}
                                animate={{ scaleY: 1.2 }}
                                transition={{ type: 'spring', repeat: Infinity, delay: 1, repeatType: 'mirror' }}
                            >!</motion.p></div>}

                            {width <= 600 && <div className='scale-[35%] absolute top-[-65px] right-[-10px]' ><motion.p
                                className='hollowTextBold text-[1000%] s600:text-[2000%] font-bold mt-[-40px]'
                                initial={{ scaleY: 0.8 }}
                                animate={{ scaleY: 1.2 }}
                                transition={{ type: 'spring', repeat: Infinity, delay: 1, repeatType: 'mirror' }}
                            >!</motion.p></div>}

                            <div id='why-participate' className='flex flex-col gap-[10px] s600:gap-[20px]'>
                                <p className='text-[200%] font-bold '>Why participate?</p>
                                <div className='flex flex-col gap-[15px]'>
                                    <p>Perfect Placement Prep: Practice DSA problems and get placement-ready by honing your problem-solving skills. </p>
                                    <p>Compete & Win: Compete against the best coding minds and win cash prizes, trophies, and bragging rights!
                                        Track Your Progress: Our monthly Leaderboard will help you stay on top of your game.</p>
                                    <p>Exclusive Grand Finale: The top 30 participants of the year will qualify for the Grand Finale, where the ultimate DevChef will be crowned with a grand trophy and cash prize.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>



                    <motion.div
                        className='overflow-hidden  flex justify-center items-center '
                        initial={{
                            scale: 1,
                        }}
                        whileHover={{
                            scale: 1.03,
                        }}
                    >
                        <div className='flex justify-center relative items-center gap-[20px]'>

                            <div className='flex flex-col gap-[10px] s600:gap-[20px]'>
                                <p className='text-[200%] font-bold '>Prizes & Leaderboard</p>
                                <div className='flex flex-col gap-[15px]'>
                                    <p>💰 Cash Prizes: Up to ₹1,000 for top performers.</p>
                                    <p>🏆 Trophies: Awarded to the monthly contest winners.</p>
                                    <p>📈 Leaderboard: Your scores will be reflected on a monthly updated leaderboard, displayed on this website. By the end of the year, the top 30 coders will be invited to the Grand Finale!
                                        In the Grand Finale, the best coding minds will compete for the ultimate DevChef Trophy and a special cash prize.</p>
                                </div>
                            </div>

                            {width > 600 && <div><motion.p
                                className='hollowTextBold text-[1000%] s600:text-[2000%] font-bold mt-[-40px]'
                                initial={{ scaleY: 0.8 }}
                                animate={{ scaleY: 1.2 }}
                                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror' }}
                            >$</motion.p></div>}

                            {width <= 600 && <div className='scale-[35%] absolute top-[-55px] right-[-20px]' ><motion.p
                                className='hollowTextBold text-[1000%] s600:text-[2000%] font-bold mt-[-40px]'
                                initial={{ scaleY: 0.8 }}
                                animate={{ scaleY: 1.2 }}
                                transition={{ type: 'spring', repeat: Infinity, repeatType: 'mirror' }}
                            >$</motion.p></div>}

                        </div>
                    </motion.div>




                </section>





            </div>


            <footer className='w-full p-[30px] text-center text-[80%]'>
                <p>© 2024 DevKraft. All rights reserved.</p>
            </footer>


        </div>
    )
}

export default DevChef
