import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { v4 } from 'uuid'

/*
links is an array of objects
{
    name: name of the link
    link: link or endpoint 
}


colors is object of primary and secondary colors
{
    primary: primary color (main color)
    secondary: accent color (hover color)
}


heights contains height of navbar in mobile and desktop view
{
    mobileHeight: 
    normalHeight: 
}

*/


const DynamicNavbar = ({links, colors, logo, activeInNavbar, button}) => {

    const [width, setWidth] = useState(window.innerWidth)
    const [menuActivated, setMenuActivated] = useState(false)
    const navbarAnimationController = useAnimation()
    const navbarButtonsAnimationController = useAnimation()

    const expandMenuLine1Controller = useAnimation()
    const expandMenuLine2Controller = useAnimation()
    const expandMenuLine3Controller = useAnimation()

    function expandNavbar() {
        navbarAnimationController.start({
            height: menuActivated ? 80 : (links.length + 1 ) * 50
        })
        navbarButtonsAnimationController.start({
            display: menuActivated ? 'none' : 'flex',
            y: menuActivated ? -150 : 0,
            transition: {
                duration: 0.5,
                type: 'spring',

            }
        })
        setMenuActivated(!menuActivated)

        // menu
        expandMenuLine1Controller.start({
            rotateZ: menuActivated ? 0 : -45,
            x: menuActivated ? 0 : -5,
            y: menuActivated ? 0 : 9,
            width: menuActivated ?  24 : 15
        })

        expandMenuLine2Controller.start({
            // display: menuActivated ? 'block' : 'none',
            scale: menuActivated ? 1 : 0
        })

        expandMenuLine3Controller.start({
            rotateZ:  menuActivated ? 0 : 45,
            x:  menuActivated ? 0 : 4,
            y:  menuActivated ? 0 : -5,
            width:  menuActivated ? 24 : 15
        })
    }

    function handleResize() {
        setWidth(window.innerWidth)
        if (window.innerWidth <= 600) {
            setMenuActivated(false)

            navbarAnimationController.start({
                height: 80
            })

            navbarButtonsAnimationController.start({
                display: 'none' ,
                y: -100
            })
        }
        else {
            setMenuActivated(true)

            navbarAnimationController.start({
                height: 150
            })

            navbarButtonsAnimationController.start({
                display: 'flex' ,
                y: 0
            })
        }
    }


    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    const buttonsVariants = {
        initial: {
            scale: 1,
            color: colors.primary
        },
        whileHover: {
            scale: 1.3,
            color: colors.secondary
        }
    }



    

    return (
        <motion.nav
            className={` w-full  py-[10px] s600:py-0 ${width <= 600 && menuActivated ? 'h-[250px] items-start' : 'h-[80px]'} s600:h-[150px] ${width <= 600 ? 'fixed' : 'sticky'} top-0 right-0 z-[50]  backdrop-blur-[15px] s600:backdrop-blur-0`}
            style={{
                backgroundColor: width <= 600 ? colors.mobileBackground : colors.background
            }}
            initial={{
                height: width <= 600 ? 80 : 150
            }}
            animate={navbarAnimationController}

        >

            <ul className='flex h-full  w-full items-center s600:justify-evenly justify-between text-[12px] s800:text-[18px]'>

                 {/* logo */}
                {width <= 600 && <li className='scale-100  s600:scale-0 justify-center flex items-start h-full' style={{width: logo.mobileWidth}}>
                    <div className=' w-full h-[60px] flex justify-center items-center'>
                        <img className={`w-full s600:w-0 ml-[40px]`} src={logo.logoURL} alt="pagelogo" />
                    </div>
                </li>}


                

                <motion.div
                    className={width > 600 ? 'flex h-full w-full items-center justify-evenly' : (menuActivated ? 'h-full  flex flex-col items-center justify-between py-[20px] text-[13px]' : 'h-full  flex-col items-center justify-between py-[20px] text-[13px] hidden')}
                    initial={{
                        y: -100
                    }}
                    animate={navbarButtonsAnimationController}
                >
                    {activeInNavbar && width > 600 && <li className='inline-block'>
                        <img src={logo.logoURL} alt="" style={{width: logo.width}} />    
                    </li>}

                    {
                        links.map(item => {
                            return (
                                <li key={v4()}><motion.a
                                    className='inline-block  '
                                    href={item.link}
                                    variants={buttonsVariants}
                                    initial={'initial'}
                                    whileHover={'whileHover'}
                                >{item.name}</motion.a>
                                </li>
                            )
                        })
                    }


                    {button && <motion.li
                        className='rounded-[3px]' 
                        style={{
                            backgroundColor: colors.primary
                        }}
                        initial={{
                            scale: 1
                        }}
                        whileHover={{
                            scale: 1.1
                        }}

                    >
                        <a 
                            className='py-[5px] gap-[10px] px-[15px] s800:py-[10px] text-[white] rounded-[3px] flex justify-center items-center cursor-pointer'
                            href={button.link}>
                            <p style={{
                                color: colors.buttonText
                            }} >{button.text}</p>

                            <img className='w-[15px]' 
                                src="/icons/arrow.svg" 
                                alt="" 
                                style={{
                                    filter: colors.buttonText == 'white' ? '' : 'invert(100%)'
                                }}
                            />
                        </a>
                    </motion.li>}

                </motion.div>


                {/* menu buttons and animation */}
                {width <= 600 &&
                    <li className='w-[100px] h-full flex justify-center top-[10px] items-start '>
                        <button
                            className='flex flex-col justify-center items-center gap-[5px] h-[56px]'
                            onClick={expandNavbar}
                        >
                            <motion.div 
                                className='w-[24px] h-[2px]  '
                                style={{
                                    backgroundColor: colors.primary
                                }}
                                initial={{
                                    rotateZ: 0,
                                    x: 0,
                                    y: 0,
                                    scaleX: 1
                                }}
                                animate={expandMenuLine1Controller}
                            ></motion.div>

                            <motion.div 
                                className='w-[24px] h-[2px]  '
                                style={{
                                    backgroundColor: colors.primary
                                }}
                                initial2={{
                                    display: 'block',
                                    scale: 1
                                }}
                                animate={expandMenuLine2Controller}
                            ></motion.div>

                            <motion.div 
                                className='w-[24px] h-[2px]  '
                                style={{
                                    backgroundColor: colors.primary
                                }}
                                initial={{
                                    rotateZ: 0,
                                    x: 0,
                                    y: 0,
                                    scaleX: 1
                                }}
                                animate={expandMenuLine3Controller}
                            ></motion.div>

                        </button>
                    </li>}
            </ul>

        </motion.nav>
    
    )
}

export default DynamicNavbar
