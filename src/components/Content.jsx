import React from "react";
import { motion } from "framer-motion";
import vedio from "../assets/WhatsApp Video 2024-06-24 at 10.24.21.mp4";
import palm from  "../../public/singleHandWithoutBg.png" ;


function Content() {
  const letters = ["O'", "H", "a", "n", "l", "o", "n", "IP"];
  const title = " Creativity in The Palm of your Hand ";
  const titleSplit = title.split("");
  console.log(titleSplit);

  const letterVariants = {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: (custom) => ({
      opacity: 1,
      x: custom.x,
      y: custom.y,
      transition: { duration: 1, delay: custom.delay, ease: "easeOut" },
    }),
  };

  const titleVarient = {
    initialTitle: { opacity: 0, x: 0 },
    animate: (custom) => ({
      opacity: 1,
      x: custom.x,
      y: custom.y,
      transition: { duration: 1, delay: custom.delay, ease: "easeOut" },
    }),
  };

  const circleMoveUp = {
    initial: { y: 0 },
    animate: { y: -205, transition: { duration: 1.5, delay: 5 } },
  };

  const lineMotion = (index) => {
    const offset = 18;
    return {
      x: index * offset - 60,
      y: 0,
      transition: { duration: 1.5, delay: index * 0.1, ease: "easeOut" },
    };
  };

  const circularMotion2 = (index, total) => {
    const angleOffset = 2.4; 
    const angle = (index / total) * 1.5 * Math.PI + angleOffset;
    const radius = 107; 
    return {
      x: radius * Math.cos(-angle),
      y: radius * Math.sin(-angle),
      delay: index * 0.1, 
    };
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      x: custom.x,
      y: custom.y,
      transition: { duration: 2, delay: custom.delay, ease: "easeOut" },
    }),
    exit: { opacity: 0 },
  };

  return (
    <div className="relative w-full h-[655px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className=" top-0 left-0 w-full h-[690px] object-cover"
      >
        <source src={vedio} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-[680px] flex items-center overflow-y-hidden justify-center">
        <div>
          <motion.div
            className="text-2xl text-black rounded-full flex w-[260px] h-[260px] items-center border-2 border-white shadow-2xl justify-center bg-gray-200 text-center"
            initial="initial"
            animate="animate"
            variants={circleMoveUp}
          >
            {titleSplit.map((char, ind) => (
              <motion.div
                key={ind}
                className="absolute text-xl  font-semibold text-black"
                custom={circularMotion2(ind, titleSplit.length)}
                initial="initial"
                animate="animate"
                variants={titleVarient}
              >
                {char}
              </motion.div>
            ))}
            <motion.div
              className="text-2xl text-black rounded-full flex w-[180px] h-[180px] items-center justify-center bg-slate-100 border-4 border-white text-center"
              initial="initial"
              animate={{ x: 0, y: 1, delay: 2 }}
              variants={circleMoveUp}
            >
              {letters.map((letter, index) => (
                <motion.div
                  key={index}
                  className="absolute text-xl italic text-black"
                  custom={lineMotion(index, letters.length)}
                  initial="initial"
                  animate="animate"
                  variants={letterVariants}
                >
                  {letter}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute text-2xl text-white"
          custom={{ x: 600, y: 110, delay: 11 }}
          initial={{ x: 0, y: -245, opacity: 0 }}
          animate="visible"
          variants={variants}
        >
          Patent 3
          <img src={palm} alt="palm image" width={150} />
        </motion.div>
        <motion.div
          className="absolute text-2xl text-white"
          custom={{ x: 0, y: 110, delay: 9 }}
          initial={{ x: 0, y: -245, opacity: 0 }}
          animate="visible"
          variants={variants}
        >
          Patent 2
          <img src={palm} alt="palm image" width={150} />
        </motion.div>
        <motion.div
          className="absolute text-2xl text-white"
          custom={{ x: -600, y: 110, delay: 7 }}
          initial={{ x: 0, y: -245, opacity: 0 }}
          animate="visible"
          variants={variants}
        >
          Patent 1
          <img src={palm} alt="palm image" width={150} />
        </motion.div>
        <motion.div
          className="absolute text-2xl text-white"
          custom={{ x: -350, y: 220, delay: 14 }}
          initial={{ x: 0, y: -245, opacity: 0 }}
          animate="visible"
          variants={variants}
        >
          Patent 4
          <img src={palm} alt="palm image" width={150} />
        </motion.div>
        <motion.div
          className="absolute text-2xl text-white"
          custom={{ x: 350, y: 220, delay: 16 }}
          initial={{ x: 0, y: -245, opacity: 0 }}
          animate="visible"
          variants={variants}
        >
          Patent 5
          <img src={palm} alt="palm image" width={150} />
        </motion.div>
      </div>
    </div>
  );
}

export default Content;