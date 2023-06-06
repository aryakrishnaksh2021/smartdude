

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
      variants={current === 3 ?container:null}
      initial="hidden"
      animate={containerControl}
      ref={ref}
      custom={matches}
    >
    <Typography variant="h2" component={motion.p}
      className="item" variants={item}
      sx={{ fontWeight: 600 }}
    >
      HAIR STYLING
    </Typography>
    <Typography variant="subtitle2" sx={{fontWeight:300,letterSpacing:'.1rem'}} component={motion.p} variants={item}>
    Experience the artistry of hair styling at Smartdude, where our skilled professionals bring out the best in your locks, creating stunning and personalized looks for any occasion. From glamorous updos to sleek blowouts, we offer a wide range of hairstyling services tailored to your unique preferences and individual style.

At Smartdude, we understand that your hair is a reflection of your personality. Our experienced hairstylists take the time to listen to your desires, offering expert advice and guidance to achieve a hairstyle that complements your features and brings your vision to life. Whether you're attending a special event, preparing for a night out, or simply wanting to refresh your everyday look, our team is dedicated to delivering exceptional results.
    </Typography>
    </StyledBox>
    )
}