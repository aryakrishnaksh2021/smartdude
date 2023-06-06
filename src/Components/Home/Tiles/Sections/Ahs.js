

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {container,item} from 'Animation'
// import useMediaQuery from '@mui/material/useMediaQuery';

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

        <Typography variant="h2" component={motion.p} variants={item}
          sx={{ fontWeight: 600 }}
        >
          HAIR CUTTING
        </Typography>
        <Typography variant="subtitle2" sx={{fontWeight:300,letterSpacing:'.1rem'}} component={motion.p} variants={item}>
        At Smartdude, we specialize in the art of hair cutting, offering expert precision and personalized styles to suit your unique preferences. Our skilled hairstylists are dedicated to crafting haircuts that enhance your features, reflect your personality, and leave you feeling confident and refreshed.

During your hair cutting session, our stylists will take the time to understand your desired look and listen to your specific needs. Whether you're looking for a trendy and bold haircut or a classic and timeless style, we will work closely with you to achieve the perfect result.
        </Typography>
        <Typography variant="subtitle2" component={motion.p} variants={item}>
          We are AHS
        </Typography>
      </StyledBox> 
    )
}