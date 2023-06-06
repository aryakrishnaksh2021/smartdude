import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function BasicGrid() {
  return (
    <Container sx={{ flexGrow: 1,textAlign:'center',py:20}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom color="primary.main">Welcome to Smartdude</Typography>
          <Typography variant="h4" gutterBottom>Your ultimate destination for all things beauty and relaxation</Typography>
          <Typography variant="body1">
           We are a premier beauty salon dedicated to providing our clients with exceptional services and a rejuvenating experience. 
          Our team of highly skilled professionals is committed to delivering top-notch treatments tailored to meet your individual needs.
          
          At Smartdude, we believe that beauty is an art form, and we strive to bring out the best in each of our clients. Whether you're looking for a refreshing haircut, a glamorous makeover, or a pampering spa treatment, we have you covered. Our talented hairstylists, estheticians, and nail technicians stay up-to-date with the latest trends and techniques to ensure you receive the best possible results.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
