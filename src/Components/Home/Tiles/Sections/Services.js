

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {container,item} from 'Animation'

const StyledBox = styled(Box)(({ theme }) => ({
    background: 'rgba( 255, 255, 255, 0.9 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 4px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    padding: '1.5rem'
  }))
  
export default function Ahs({current,matches}){  
    const containerControl = useAnimation();
    const [ref, inView] = useInView();
    React.useEffect(() => {
      if (inView) {
        containerControl.start("visible");
      }else{
        containerControl.start("hidden");
      }
    }, [containerControl, inView,current]);
    return(
      <StyledBox component={motion.div}
      variants={container}
      initial="hidden"
      animate={containerControl}
      ref={ref}
      custom={matches}
    >
    <Typography variant="h2" component={motion.p}
      className="item" variants={item}
      sx={{ fontWeight: 600 }}
    >
      NAIL CARE
    </Typography>
    <Typography variant="subtitle2" sx={{fontWeight:300,letterSpacing:'.1rem'}} component={motion.p} variants={item}>
    At Smartdude, we understand the importance of healthy and radiant skin. Our comprehensive skin care services are designed to nourish, rejuvenate, and enhance your skin's natural beauty. Whether you're seeking a refreshing facial, a deep cleansing treatment, or targeted solutions for specific skin concerns, our skilled estheticians are here to provide you with personalized care and effective results.

During your skin care session, our knowledgeable estheticians will analyze your skin and discuss your concerns and goals. We believe that each individual has unique skin needs, so we tailor our treatments to address your specific concerns, whether it's acne, aging signs, dryness, sensitivity, or uneven tone.
    </Typography>
    </StyledBox> 
    )
}