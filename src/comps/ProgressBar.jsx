import React , { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';


const ProgressBar = ({file, setFile}) => {
     const {url, progress} = useStorage(file);

     useEffect(() => {
        if (url) {
          setFile(null);
        }
      }, [url, setFile]);
    
      return (
        <motion.div 
          initial={{ 
            height: "5px",
            background: "red",
            marginTop: "20px",
             width: "60rem" }}
          animate={ { height: "5px",
          background: "red",
          marginTop: "20px",
            width: progress*550 + 'px' }}
       / >
      );
}

export default ProgressBar;