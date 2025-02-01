import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "framer-motion"
import teksty from "/text/text.js"

const items = [
  { text: teksty[0], leftImage: "/images/left1.jpg", rightImage: "/images/right1.jpg" },
  { text: teksty[1], leftImage: "/images/left2.jpg", rightImage: "/images/right2.jpg" },
  { text: teksty[2], leftImage: "/images/left3.jpg", rightImage: "/images/right3.jpg" },
  { text: teksty[3], leftImage: "/images/left4.webp", rightImage: "/images/right4.jpg" },
];

function App() {
  return (
    <div className="h-fit w-fit flex flex-col items-center justify-center overflow-hidden">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center justify-center snap-center"        >
          <div className="grid grid-cols-3 gap-6 max-w-5xl items-center my-50">
            <img src={item.leftImage} alt="left" className="rounded-lg shadow-lg rotate-[-10deg]" />
            <p className="text-center text-lg font-semibold text-white">{item.text}</p>
            <img src={item.rightImage} alt="right" className="rounded-lg shadow-lg rotate-[10deg]" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default App;
