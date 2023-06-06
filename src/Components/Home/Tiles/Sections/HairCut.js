

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

<Typography variant="h5" sx={{fontWeight:200,letterSpacing:'.1rem'}} component={motion.p} variants={item}>
Indulge<br></br> Rejuvenate <br></br>Unleash your beauty at
        </Typography>
        <Typography variant="h2" component={motion.p} variants={item}
          sx={{ fontWeight: 600 }}
        >
          SMARTDUDE SALON
        </Typography>





        <Typography variant="subtitle2" sx={{fontWeight:300,letterSpacing:'.1rem'}} component={motion.p} variants={item}>
          
        Ultimate destination for all things beauty and relaxation
        </Typography>
      </StyledBox> 
    )
}