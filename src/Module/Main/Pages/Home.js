import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import AboutUs from 'Components/Home/AboutUs'
import Tiles from 'Components/Home/Tiles'
import Services from 'Components/Home/Services'

export default function BasicGrid({ homeRef, aboutRef, serviceRef, contactRef }) {

  return (
    <Box  ref={homeRef}>
      <Container
        sx={{ background: theme => `linear-gradient(to right, #ffffff 0%, #ffffff 30%, ${theme.palette.primary.main} 30%, ${theme.palette.primary.main} 100%)`, height: '80vh' }} maxWidth={true}>

        <Tiles />

      </Container>

      <Container sx={{ background: 'white', mt: 10 }} maxWidth={true}>
        <div ref={aboutRef}>
          <AboutUs />
        </div>
        <div ref={serviceRef}>
          <Services />
        </div>
      </Container>

      <Container sx={{ background: 'white', pt: 10 }} maxWidth={true}>
        <br />
        <br />
        <br />
        <br />
        <Stack direction="column"
          justifyContent="center"
          alignItems="center" ref={contactRef}>
          <Typography variant="h2" sx={{ fontWeight: 600, letterSpacing: '.2rem', }}>CONTACT US</Typography>
          <br />
          <br />
          <br />
          <Typography variant="caption" sx={{ fontWeight: 300, letterSpacing: '.2rem', }}>LOCATION</Typography>
          <Typography variant="h5" sx={{ fontWeight: 400, letterSpacing: '.1rem', }}>RTA Bus Station Side</Typography>
          <Typography variant="h5" sx={{ fontWeight: 400, letterSpacing: '.1rem', }}>Near Satwa Big Mosque</Typography>
          <Typography variant="h5" sx={{ fontWeight: 400, letterSpacing: '.1rem', }}>AL SIkka Side</Typography>

        </Stack>
        <br />
        <Stack direction="column"
          justifyContent="center"
          alignItems="center">
          <Typography variant="caption" sx={{ fontWeight: 300, letterSpacing: '.2rem', }}>PHONE NUMBER</Typography>
          <Typography variant="h5" sx={{ fontWeight: 400, letterSpacing: '.1rem', }}>+000000000</Typography>

        </Stack>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </Container>
    </Box>
  );
}
