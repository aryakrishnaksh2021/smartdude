

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
      variants={current === 2 ?container:null}
      initial="hidden"
      animate={containerControl}
        ref={ref}
        custom={matches}

        
    >
    <Typography variant="h2" component={motion.p}
      className="item" variants={item}
      sx={{ fontWeight: 600 }}
    >
     HAIR SPA
    </Typography>
    <Typography variant="subtitle2" sx={{fontWeight:300,letterSpacing:'.1rem'}} component={motion.p} variants={item}>
    Welcome to our Hair Spa section, where you can indulge in the ultimate pampering experience for your hair and scalp. Our expert stylists are dedicated to providing you with a revitalizing treatment that will leave your hair feeling nourished, rejuvenated, and beautifully transformed.
    </Typography>
    </StyledBox>
    )
}