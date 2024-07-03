import React from 'react';
import Video from '../../src/assets/214709.mp4'
import single_hand from '../../public/singleHandWithoutBg.png';

import { motion } from 'framer-motion';

import './Only.css'

const Index = () => {
  const title = "Creativity in The Palm of your Hand";

  return (
    <div className='w-full h-[100vh]'>
      <div className="relative w-full h-full overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-screen object-cover" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        {/* Large Div with Rounded Border */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center top-[45px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 4 }}
        >
          <motion.div
            className="w-52 h-52 border-2 border-white flex items-center justify-center rounded-full"
            initial={{ y: 0 }}
            animate={{ y: -200 }}
            transition={{ delay: 5, duration: 1 }}
          >
            <motion.div
              className="w-40 h-40 rounded-full border-2 bg-[#9895957c] border-white shadow-md flex flex-col items-center justify-center relative"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 7, duration: 3 }}
            >
              <div className='flex font-extrabold font-tangerine'>
                <motion.p
                  initial={{ opacity: 0, x: 0, y: +200 }}
                  animate={{ opacity: 1,scale:[1,2,1] ,x: -35, y: 70 }}
                  transition={{ delay: 12, duration: 2}}
                  className="text-2xl text-white  mx-1 font-extrabold text-[80px] rounded-full"
                >
                  ℋ
                </motion.p>
              </div>

              <div className='flex font-extrabold font-tangerine'>
                <motion.p
                  initial={{ opacity: 0, x: 0, y: +200 }}
                  animate={{ opacity: 1,scale:[1,2,3,2,1], x: 30, y: 5 }}
                  transition={{ delay: 14, duration: 2 }}
                  className="text-2xl text-white   mx-1 font-bold text-[30px] rounded-full"
                >
                  𝓘
                </motion.p>
              </div>

              <div className='flex font-extrabold font-tangerine'>
                <motion.p
                  initial={{ opacity: 0, x: 0, y: +200 }}
                  animate={{ opacity: 0.5,scale:[1,2,3,2,1], x: 38, y: -20 }}
                  transition={{ delay: 16, duration: 2 }}
                  className="text-2xl text-white mx-1 font-bold text-[30px] rounded-full"
                >
                  𝓟
                </motion.p>
              </div>

              <div className='flex font-extrabold font-tangerine'>
                <motion.p
                  initial={{ opacity: 0, x: 0, y: +200 }}
                  animate={{ opacity: 1,scale:[1,2,3,2,1], x: 30, y: -10 }}
                  transition={{ delay: 18, duration: 2 }}
                  className="text-2xl text-white mx-1 font-bold text-[30px] rounded-full"
                >
                  𝓐
                </motion.p>
              </div>
              <div className='flex font-extrabold font-tangerine'>
                <motion.p
                  initial={{ opacity: 0, x: 0, y: +200 }}
                  animate={{ opacity: 0.5,scale:[1,2,3,2,1], x: 45, y: -35 }}
                  transition={{ delay: 20, duration: 2 }}
                  className="text-2xl text-white mx-1 font-bold text-[30px] rounded-full"
                >
                  𝓘
                </motion.p>
              </div>
              
              {/* Circular Text SVG */}
              <motion.div
                className="absolute flex items-center justify-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, x: -160, y: -130 }}
                animate={{ opacity: 1, x: -160, y: -130 }}
                transition={{ delay: 11, duration: 1 }}
              >
                <svg viewBox="0 0 200 200" className="circle-text">
                  <defs>
                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
                  </defs>

                  <text style={{ fill: 'white', fontStyle: 'italic', fontFamily: 'Old English Text MT',  fontSize:"17px"}}>
                    <textPath href="#circlePath">
                      {title}
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Vertical Text */}
              <motion.div
                className="absolute flex items-center justify-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 1, x: -150, y: +200 }}
                animate={{ opacity: 0,x: -160, y: +75 }}
                transition={{ delay: 10, duration: 1.5 }}
              >
                <text style={{ fill: 'white', fontStyle: 'italic', fontFamily: 'Old English Text MT', width: "1000px", fontSize:"19px" }}>
                  <p className='text-white  text-4xl align-center m-auto ' > Creativity in The Palm of Your  Hand</p>
                </text>
              </motion.div>
            </motion.div>

            {/* New Div with Border */}
            <motion.div
              className="absolute w-40 h-40 border border-white rounded-full flex items-center justify-center"
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              transition={{ delay: 7, duration: 1 }}
            >
              {/* Div with Background Color and Inset Image/Text */}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Patent Animation */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-white flex w-[90%] m-auto justify-between px-10">
          <motion.p
            initial={{ opacity: 0, x: 490, y: -150 }}
            animate={{ opacity: 1, x: 90, y: -80 }}
            transition={{ delay: 23, duration: 2 }}
            className="text-xl mx-2"
          >
            <p className='mb-[-20px]' >Patent1</p>
            <img  style={{transform: "rotateZ(45deg)"}} src={single_hand} alt="" className='w-[100px]' />
          </motion.p>
        </div>

        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-white flex w-[90%] m-auto justify-between px-10">
          <motion.p
            initial={{ opacity: 0, x: 490, y: -150 }}
            animate={{ opacity: 1, x: 330, y: -80 }}
            transition={{ delay: 24, duration: 2 }}
            className="text-xl mx-2"
          >
            <p className='mb-[-20px]' >Patent2</p>
            <img  style={{transform: "rotateZ(45deg)"}} src={single_hand} alt="" className='w-[100px]' />

          </motion.p>
        </div>

        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-white flex w-[90%] m-auto justify-between px-10">
          <motion.p
            initial={{ opacity: 0, x: 490, y: -150 }}
            animate={{ opacity: 1, x: 580, y: -80 }}
            transition={{ delay: 25, duration: 2 }}
            className="text-xl mx-2"
          >
            <p className='mb-[-20px]' >Patent3</p>
            <img  style={{transform: "rotateZ(45deg)"}} src={single_hand} alt="" className='w-[100px]' />

          </motion.p>
        </div>

        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-white flex w-[90%] m-auto justify-between px-10">
          <motion.p
            initial={{ opacity: 0, x: 490, y: -150 }}
            animate={{ opacity: 1, x: 810, y: -80 }}
            transition={{ delay: 26, duration: 2 }}
            className="text-xl mx-2"
          >
            <p className='mb-[-20px]' >Patent4</p>
            <img  style={{transform: "rotateZ(45deg)"}} src={single_hand} alt="" className='w-[100px]' />
          </motion.p>
        </div>

        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-white flex w-[90%] m-auto justify-between px-10">
          <motion.p
            initial={{ opacity: 0, x: 490, y: -150 }}
            animate={{ opacity: 1, x: 1000, y: -80 }}
            transition={{ delay: 27, duration: 2 }}
            className="text-xl mx-2"
          >
            <p className='mb-[-20px]'>Patent5</p>
            <img style={{transform: "rotateZ(45deg)"}} src={single_hand} alt="" className='w-[100px]' />

          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Index;