import React from 'react'
import { motion } from 'framer-motion'
import EventCard from '../components/EventCard'
import ChangingWords from '../components/ChangingWords'
import PeopleCards from '../components/PeopleCards'
import Navbar from '../components/Navbar'
import MainDecorationLines from '../components/MainDecorationLines'
import DynamicNavbar from '../components/DynamicNavbar'

const Home = () => {

    const buttonsVariants = {
        initial: {
            scale: 1,
            color: '#4b4b4b'
        },
        whileHover: {
            scale: 1.3,
            color: '#fff'
        }
    }

    const socialButtonsVariants = {
        initial: {
            scale: 1,
            color: '#4b4b4b'
        },
        whileHover: {
            scale: 1.3,
            color: '#fff'
        }
    }


    return (
        <div className="w-screen h-screen  ">
            <img className="absolute top-0 left-0 h-100svh w-screen object-cover brightness-[0.3]" src="/backgrounds/red2.jpg" alt="" />
            <aside className='bg-[#282523] scale-x-0 s600:scale-x-100 s600:w-[100px]  desktop:w-[180px] h-full flex flex-col fixed left-0 top-0 '>

                <div className='w-full h-[150px]  gap-[15px]  flex flex-col justify-center items-center'>
                    <img className='w-[60%]' src="/logos/devkraft1.png" alt="" />
                </div>

                <div className='w-full flex-1 flex items-end justify-center'>
                    <ul className='flex flex-col items-center justify-center text-[20px] gap-[25px] font-semibold  mb-[50px]'>

                        <li className='rotate-[-90deg]'><motion.a
                            className='inline-block '
                            href="#"
                            variants={buttonsVariants}
                            initial={'initial'}
                            whileHover={'whileHover'}
                        >fb</motion.a>
                        </li>

                        <li className='rotate-[-90deg]'><motion.a
                            className='inline-block '
                            href="#"
                            variants={buttonsVariants}
                            initial={'initial'}
                            whileHover={'whileHover'}
                        >in</motion.a>
                        </li>

                        <li className='rotate-[-90deg]'><motion.a
                            className='inline-block '
                            href="#"
                            variants={buttonsVariants}
                            initial={'initial'}
                            whileHover={'whileHover'}
                        >li</motion.a>
                        </li>

                        <li className='rotate-[-90deg]'><motion.a
                            className='inline-block '
                            href="#"
                            variants={buttonsVariants}
                            initial={'initial'}
                            whileHover={'whileHover'}
                        >tw</motion.a>
                        </li>

                    </ul>
                </div>
            </aside>



            <main className='bg-[#1a1816] w-full pt-[80px] s600:pt-0 flex flex-col pl-0 s600:pl-[100px] desktop:pl-[180px]' >
                <DynamicNavbar 
                    links={
                        [
                            {
                                name: 'Projects',
                                link: '#projects'
                            },
                            {
                                name: 'Events',
                                link: '#events'
                            },
                            {
                                name: 'About',
                                link: '#about'
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

                    logoURL={"/logos/devkraft1.png"}

                    activeInNavbar={false}
                />


                <section className=' flex px-[20px] s600:px-[60px] min-h-100svh flex-col  s600:justify-end flex-1 pt-[30px] s600:pt-[150px] relative min-h-[calc(100svh-80px)] s600:min-h-[calc(100svh-150px)] '>
                    <MainDecorationLines color={'#f97316'} />
                    <div className='flex flex-col text-[20px] s335:w-full s335:text-[30px] s600:text-[35px] s800:text-[50px] s1230:text-[70px] font-bold s600:pt-[20px] pb-[30px] s600:pb-[40px]'>
                        <div className='flex gap-[10px] s600:gap-[23px] text-white'>
                            <p>Innovate</p>
                            <p >Together</p>
                        </div>
                        <div className='flex gap-[10px] s600:gap-[23px] text-white'>
                            <motion.div
                                className='text-orange-600 '
                                initial={{
                                    textShadow: '0px 0px 15px #ff6b2f'
                                }}
                                animate={{
                                    textShadow: '0px 0px 0px #ff6b2f',
                                    transition: {
                                        duration: 0.5,
                                        repeat: Infinity, // Repeat the animation infinitely
                                        repeatType: 'reverse',
                                    }
                                }}
                            >
                                <ChangingWords words={['Emerge', 'Expand', 'Evolve']} /></motion.div>
                            <p>Together</p>
                        </div>
                    </div>


                    <div className='hollowText absolute rotate-[270deg] h-fit  right-[-64px] bottom-[115px] s800:right-[-105px]  s800:bottom-[203px] items-center justify-center s800:gap-[7px] s1230:gap-[5px]  flex text-white'>
                        <motion.img
                            className='invert w-[25px] s800:w-[40px] s1230:w-[60px]' src="/icons/hollow-arrow.svg" alt=""
                            initial={{
                                x: -10
                            }}
                            animate={{
                                x: -20,
                                transition: {
                                    repeat: Infinity, // Repeat the animation infinitely
                                    repeatType: 'reverse',
                                    type: 'tween',
                                    duration: 0.5
                                }
                            }}
                        />

                        <div className='flex justify-center items-center py-[20px]'>
                            <div className='absolute w-[0px] h-[0px]'></div>
                            <p className='tracking-widest text-[30px] s800:text-[40px] s1230:text-[60px] font-bold w-fit' >There's more!</p>
                        </div>
                    </div>

                </section>






                <section id='about' className='text-white bg-[#140d08] w-full py-[100px]'>
                    <div className='max-w-[1000px] w-[80%] m-auto flex flex-col gap-[10px]'>
                        <p className='text-orange-500 text-[20px] s600:text-[30px]'>About us</p>
                        <p className='text-center text-[13px] s600:text-[20px] leading-[26px]'>
                            Devkraft is a tech-centric student club that was established with the primary goal of fostering a robust coding culture at Dr. D. Y. Patil Institute of Technology. Our mission is to empower students by equipping them with the skills and confidence to excel in competitive programming, software development, and emerging technologies. Through a series of curated events, workshops, and competitions, Devkraft provides a platform for students to grow, collaborate, and succeed in the ever-evolving tech landscape.
                        </p>
                    </div>

                    <div className='flex items-center justify-center my-[80px] gap-[30px] w-[80%] m-auto'>
                        <div className='bg-[#322f2c]  h-[1px] w-[500px] '></div>
                        <div className='bg-[#322f2c]  h-[1px] w-[50px] '></div>
                        <div className='bg-[#322f2c]  h-[1px] w-[50px] '></div>
                    </div>

                    <div className='max-w-[1000px] w-[80%] m-auto flex flex-col gap-[10px]'>
                        <p className='text-orange-500 text-[20px] s600:text-[30px] '>Our vision</p>
                        <p className='text-center text-[13px] s600:text-[20px] leading-[26px]'>
                            At Devkraft, we believe that coding is more than just writing lines of code – it's about solving real-world problems, thinking creatively, and pushing boundaries. Our vision is to cultivate a community where students can learn, experiment, and thrive by immersing themselves in the world of technology.
                        </p>
                    </div>
                </section>




                <section id='events' className='w-full'>
                    <div className='flex w-full justify-evenly  flex-wrap  gap-y-[30px] py-[20px] s600:py-[100px]'>
                        <EventCard image={'/images/events/devclash.jpg'} name={'DevClash'} redirectLink={'/'} text={'One of our flagship events, the 24-Hour City-Level DevClash Hackathon, brought together coding enthusiasts from across the city to build innovative solutions in a high-pressure environment. Participants tackled real-world challenges in domains like web development, AI/ML, and WEB3, demonstrating creativity and technical depth.'} />
                        <EventCard image={'/images/events/devclash.jpg'} name={'TechFued'} redirectLink={'/techfeud'} text={"Inspired by the popular game show \"Family Feud,\" our Tech Feud event is an exciting and interactive quiz competition that challenges participants' knowledge in areas such as technology, programming, and industry trends. With its unique blend of education and entertainment, Tech Feud offers a competitive yet enjoyable atmosphere where students can test their tech expertise while having fun."} />
                        <EventCard image={'/images/events/devclash.jpg'} name={'DevTalks'} redirectLink={'/'} text={"DevTalks is a series of interactive sessions where industry experts and alumni are invited to share their experiences, insights, and advice on various tech-related topics. It’s an opportunity for students to gain exposure to real-world trends, learn about new technologies, and understand how to navigate the industry."} />
                        <EventCard image={'/images/events/devclash.jpg'} name={'DevChef'} redirectLink={'/devchef'} text={"DevChef is Devkraft’s monthly coding contest, designed to challenge and enhance the coding skills of students across all levels. Each month, participants compete in algorithmic problem-solving, testing their knowledge in data structures, algorithms, and real-world coding challenges. Whether you're a beginner or a seasoned coder, DevChef provides an exciting platform to improve your skills and climb the leaderboard."} />
                    </div>
                </section>


                <section className='w-full '>
                    <div className='text-orange-500 text-[20px] s600:text-[30px] py-[20px] s1300:py-0 font-bold w-[80%] s1300:w-[85%] m-auto'>People behind us...</div>

                    <div className='w-full h-[800px] s1300:h-[500px]  '>
                        <PeopleCards />
                    </div>
                </section>


                <section className='block s600:hidden h-[100px] mt-[40px]'>
                    <ul className='flex h-full text-[#4b4b4b] items-center justify-center text-[12px] gap-[25px] font-semibold  mb-[50px]'>

                        <li className=''><motion.a
                            className='inline-block px-[15px] py-[7px] rounded-[13px] bg-[#241d19]'
                            href="#"
                            variants={socialButtonsVariants}
                            initial={'initial'}
                            whileHover={'whileHover'}
                        >fb</motion.a>
                        </li>

                        <li className=''><motion.a
                            className='inline-block px-[15px] py-[7px] rounded-[13px] bg-[#241d19]'
                            href="#"
                            variants={socialButtonsVariants}
                            initial={'initial'}
                            whileHover={'whileHover'}
                        >in</motion.a>
                        </li>

                        <li className=''><motion.a
                            className='inline-block px-[15px] py-[7px] rounded-[13px] bg-[#241d19]'
                            href="#"
                            variants={socialButtonsVariants}
                            initial={'initial'}
                            whileHover={'whileHover'}
                        >li</motion.a>
                        </li>

                        <li className=''><motion.a
                            className='inline-block px-[15px] py-[7px] rounded-[13px] bg-[#241d19]'
                            href="#"
                            variants={socialButtonsVariants}
                            initial={'initial'}
                            whileHover={'whileHover'}
                        >tw</motion.a>
                        </li>

                    </ul>
                </section>

            </main>
        </div>
    )
}

export default Home
