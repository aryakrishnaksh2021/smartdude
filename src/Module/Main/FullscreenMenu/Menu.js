import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MenuList from './MenuList'
import ServiceList from './ServiceList'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const serviceVariant = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};
export default function BasicGrid() {
    const [current, setCurrent] = React.useState('home')
    const serviceControl = useAnimation();
    const [ref, inView] = useInView();
    React.useEffect(() => {
        if (inView) {
            serviceControl.start("visible");
        } else {
            serviceControl.start("hidden");
        }
    }, [serviceControl, inView,current]);
    return (
        <Container maxWidth={'md'}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={8}>
                    <Grid item xs={5} sx={{ height: '90vh', }}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center" sx={{ height: '100%' }}>
                            <MenuList setCurrent={setCurrent} />
                        </Stack>
                    </Grid>
                    <Grid item xs={7} sx={{ height: '90vh', }}>
                        {current === 'SERVICES' &&
                            <Stack
                                component={motion.div}
                                transition={{ duration: 0.5, delay: .5 }}
                                variants={serviceVariant}
                                animate={serviceControl}
                                ref={ref}
                                direction="row"
                                justifyContent="center"
                                alignItems="center" 
                                sx={{ height: '100%' }}>
                                <ServiceList/>

                            </Stack>
                        }
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
