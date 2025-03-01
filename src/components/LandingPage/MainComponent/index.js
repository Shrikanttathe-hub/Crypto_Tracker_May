import React from 'react'
import "./styles.css";
import { color } from '@mui/system';
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import {motion} from "framer-motion";
import Button from '../../Common/Button';
import { Link } from 'react-router-dom';

function MainComponent() {
  return (
    <div className='flexBox-info'>
        <div className='left-component'>
          <motion.h1 className='track-cryto-heading' 
          initial={{ opacity: 0, y:50}}
          animate={{ opacity: 1, y:0}}
          transition={{ duration : 0.5}}
          >
            Track Crypto</motion.h1>

          <motion.h1 className='Real-Time-heading'
          initial={{ opacity: 0, y:50}}
          animate={{ opacity: 1, y:0}}
          transition={{ duration : 0.5, delay: 0.5}}
          >Real Time.</motion.h1>

          <motion.p 
          className='text-info'
          initial={{ opacity:0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{ duration: 0.5, delay: 1}}
          >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
        
        <motion.div 
          className='btn-flex'
          initial={{ opacity: 0, x: 50}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          > 
        <Link to='/Dashboard'>
        <Button text= {"Dashboard"}
         onClick={() => console.log("Btn Clicked")}
       />
       </Link>
        <Button text={"Share"} outlined={true}/>
        </motion.div>
        </div>

        <div className='phone-container'>
          <motion.img src={iphone} className='iphone'
          initial={{ y: -10}}
          animate={{ y: 10}}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          />
          <img src={gradient} className='gradient'/>
          <img/>
        </div>
    </div>
  );
}

export default MainComponent;
