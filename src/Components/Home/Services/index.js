import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import List from './List'

export default function BasicGrid() {
  return (
    <Container sx={{ flexGrow: 1, textAlign: 'center', py: {xs:5 , lg:20} }} maxWidth="xl">
      <Grid container spacing={0}>
        <Grid item xs={12} lg={4} sx={{ background: 'black', color: 'white', p: 4 }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{height:'100%'}}
          >
            <RoomServiceOutlinedIcon sx={{ fontSize: 80 }}/>
            <Typography variant="h2" gutterBottom>BRIDAL SERVICES</Typography>           
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ background: theme => theme.palette.primary.main, color: 'black', p: 4 }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{height:'100%'}}
          >
          <List/>          
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
