import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from 'assets/salon.png'


export default function BasicGrid() {
  const footerControl1 = useAnimation();
  // const footerControl2 = useAnimation();
  const [ref, inView] = useInView();
  const footerVariant = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  React.useEffect(() => {
    if (inView) {
      footerControl1.start("visible");
    } else {
      footerControl1.start("hidden");
    }
  }, [footerControl1, inView,]);
  return (
    <React.Fragment>

      <Container sx={{ flexGrow: 1, textAlign: 'center', py: 2, background: (theme) => theme.palette.primary.main }} maxWidth={false}
        component={motion.div}
        transition={{ duration: 0.5, delay: .5 }}
        variants={footerVariant}
        animate={footerControl1}
        ref={ref}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="p" gutterBottom color="primary.main">ABOUT US</Typography>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ flexGrow: 1, py: 5, background: 'black', color: 'white' }} maxWidth={false}
        component={motion.div}
        transition={{ duration: 0.5 }}
        variants={footerVariant}
        animate={footerControl1}
        ref={ref}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Stack sx={{ flexGrow: 1, py: 1 }} direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}>
              <img src={logo} alt="logo" height={60} />
              <Stack>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 600, letterSpacing: '.1rem', color: (theme) => theme.palette.primary.main }}
                >
                  SAMARTDUDE
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ fontWeight: 300, letterSpacing: '.2rem', color: 'white' }}
                >
                  BEAUTY SALON
                </Typography>

              </Stack>
            </Stack>

            {/* <br />
            <br />
            <Stack direction="column"
              justifyContent="center"
              alignItems="center">
              <Typography variant="caption" sx={{ fontWeight: 300, letterSpacing: '.2rem', color: 'white' }}>LOCATION</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 500, letterSpacing: '.1rem', color: 'white' }}>RTA Bus Station Side</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 500, letterSpacing: '.1rem', color: 'white' }}>Near Satwa Big Mosque</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 500, letterSpacing: '.1rem', color: 'white' }}>AL SIkka Side</Typography>

            </Stack>
            <br />
            <Stack direction="column"
              justifyContent="center"
              alignItems="center">
              <Typography variant="caption" sx={{ fontWeight: 300, letterSpacing: '.2rem', color: 'white' }}>PHONE NUMBER</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 500, letterSpacing: '.1rem', color: 'white' }}>+000000000</Typography>

            </Stack>
            <Divider /> */}
            <br />
            <br />

            <Typography
              variant="caption"
              component="div"
              sx={{ fontWeight: 300, letterSpacing: '.1rem', color: 'white' }}
            >
              All rights reserved 2023
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
