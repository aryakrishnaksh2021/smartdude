
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useAnimation } from "framer-motion";
import recruitment from 'assets/salon/3.jpg'
import contract from 'assets/salon/4.jpg'
import services from 'assets/salon/5.jpg'
import discussion from 'assets/salon/1.jpg'
import sitout from 'assets/salon/2.jpg'


import Ahs from './Sections/Ahs'
import Vision from './Sections/Vision'
import Recruitment from './Sections/Recruitment'
import Contract from './Sections/Contract'
import Services from './Sections/Services'
import HairCut from './Sections/HairCut'


const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
    overflow: 'hidden',
    // boxShadow: '0 0 200px rgba(0, 0, 0, 0.9) inset',
    '& .MuiImageListItemBar-root': {
        background: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transition: 'all 0.275s ease-in-out,visibility 0s 0.275s',
        visibility: 'hidden',
        willChange: 'transform',
        transform: 'translateX(100%)',
        width: '80%',
        '&:before': {
            position: 'absolute',
            top: '50%',
            transform: 'translateX(1%) translateY(-50%)',
            right: '100%',
            content: '""',
            width: 0,
            height: 0,
            // borderStyle: 'solid',
            // borderWidth: '25rem 4rem 25rem 0',
            // borderColor: 'transparent rgba(0, 0, 0, 0.8) transparent transparent',
            overflow: 'hidden'
        },
        '& .MuiImageListItemBar-titleWrap': {
            transform: 'translateX(-20px)',
        },
        '& .MuiImageListItemBar-title': {
            overflow: 'visible',
            fontSize: '1.5rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '.1em',
            textShadow: '0px 0px 10px rgb(0 0 0 / 50 %)',
            marginBottom: theme.spacing(1),
            position: 'relative',
            top: '0px',
            transition: '.1s ease-in-out',
            transform: 'translateX(-10px)',
        },
        '& .MuiImageListItemBar-subtitle': {
            whiteSpace: 'normal',
            transform: 'translateX(-10px)',
            lineHeight: '1.5em'
        }

    },
    '& .MuiImageListItem-img': {
        transition: '.5s',
        transformOrigin: 'bottom right',
        filter: 'grayscale(0)',
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        // border: 'rgb(255 255 255 / 30%) solid 2px',
        top: '4px',
        left: '4px',
        right: '4px',
        bottom: '4px',
        opacity: 1,
        transitionDuration: '0.3s',
        transitionProperty: 'opacity border',
        zIndex: 1,
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        opacity: 1,
        zIndex: 1,
    },
    '&:hover': {
        '& .MuiImageListItemBar-root': {
            // transform: 'none',
            visibility: 'visible',
            transitionDelay: '0s',
            transform: 'translateX(30%) translateY(0%)',
            '&:after': {
                transform: 'translateX(0)',
                opacity: 1
            }
        },
        '& .MuiImageListItem-img': {
            transform: 'scale(1.004)',
            filter: 'grayscale(1)'
        },
        '&:before': {
            top: '-3px',
            left: '-3px',
            right: '-3px',
            bottom: '-3px',
        }
    }
}))



export default function Tiles() {

    // const isSmallDevice = useMediaQuery('(max-width:600px)');
    const matches = useMediaQuery('(min-width:1024px)');

    const divAnimationControls = useAnimation();
    // const containerControl = useAnimation();

    const [current, setCurrent] = React.useState(0)


    // React.useEffect(() => {
    //   // containerControl.start('hidden');
    //   containerControl.start('visible');
    // }, [current])

    // const controls = useAnimation();
    // const [ref, inView] = useInView();
    // React.useEffect(() => {
    //   if (inView) {
    //     containerControl.start("visible");
    //   }else{
    //     containerControl.start("hidden");
    //   }
    // }, [containerControl, inView,current]);



    return (
        <Container sx={{ flexGrow: 1, }} maxWidth={true}>
            <Grid container spacing={2} sx={{ p: 0, }}
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid container item xs={12} lg={8}
                    sx={{
                        color: 'white', position: 'relative', pl: 0, pt: 0
                    }}>
                    <ImageList
                        variant="quilted"
                        cols={matches ? 15 : 15}
                        rowHeight={matches ? 80 : 120}
                        gap={0}
                        sx={{ margin: 0, padding: 0, pt: 5 }}
                    >
                        <StyledImageListItem cols={matches ? 9 : 9} rows={matches ? 4 : 1} animate={divAnimationControls}
                            onMouseEnter={() => { setCurrent(1); }}
                            onMouseLeave={() => { setCurrent(0); }}
                        >
                            <img src={sitout} alt='education' loading="lazy" style={{ backgroundPosition:'bottom' }} />
                            <ImageListItemBar
                                title='Hair Cutting'
                                subtitle={<p>
                                    Transform your look with a stunning haircut tailored just for you.</p>}
                                sx={{ height: '100%', textAlign: 'right', fontWeight: 300, letterSpacing: '.15rem' }}
                            />
                        </StyledImageListItem>

                        <StyledImageListItem cols={matches ? 6 : 6} rows={matches ? 4 : 1}
                            onMouseEnter={() => { setCurrent(2); }}
                            onMouseLeave={() => { setCurrent(0); }}
                        >
                            <img src={discussion} alt='education' loading="lazy" />
                            <ImageListItemBar
                                title='Hair Spa'
                                subtitle={<p>Escape to a haven of tranquility and<br/> bliss with our luxurious hair spa treatments.</p>}
                                sx={{ height: '100%', textAlign: 'right', fontWeight: 300, letterSpacing: '.15rem' }}
                            />
                        </StyledImageListItem>
                        <StyledImageListItem cols={matches ? 5 : 5} rows={matches ? 4 : 1}
                            onMouseEnter={() => { setCurrent(3); }}
                            onMouseLeave={() => { setCurrent(0); }}>
                            <img src={recruitment} alt='education' loading="lazy" />
                            <ImageListItemBar
                                title={<p>Hair Styling</p>}
                                subtitle="Unlock your hair's full potential with our expert hair styling services, tailored to elevate your look to new heights."
                                sx={{ height: '100%', textAlign: 'right', fontWeight: 300, letterSpacing: '.15rem' }}
                            />
                        </StyledImageListItem>
                        <StyledImageListItem cols={matches ? 5 : 5} rows={matches ? 4 : 1}
                            onMouseEnter={() => { setCurrent(4); }}
                            onMouseLeave={() => { setCurrent(0); }}>
                            <img src={contract} alt='education' loading="lazy" />
                            <ImageListItemBar
                                title={<p>Skin Care</p>}

                                subtitle={<p>Rediscover your natural radiance with our transformative skin rejuvenation treatments, 
                                    designed to refresh, renew, and restore your skin's youthful glow.</p>}
                                sx={{ height: '100%', textAlign: 'right', fontWeight: 300, letterSpacing: '.15rem' }}
                            />
                        </StyledImageListItem>
                        <StyledImageListItem cols={matches ? 5 : 5} rows={matches ? 4 : 1}
                            onMouseEnter={() => { setCurrent(5); }}
                            onMouseLeave={() => { setCurrent(0); }}>
                            <img src={services} alt='education' loading="lazy" />
                            <ImageListItemBar
                                title={<p>Nail Care</p>}

                                subtitle='
                                Indulge in exquisite nail care and pampering treatments that will leave your hands and feet looking and feeling their best.'
                                sx={{ height: '100%', textAlign: 'right', fontWeight: 300, letterSpacing: '.15rem' }}
                            />
                        </StyledImageListItem>

                    </ImageList>


                </Grid>
                <Grid item xs={12} lg={4}  >
                    {current === 0 ? <HairCut current={current} matches={matches} />
                        : current === 1 ? <Ahs current={current} matches={matches} />
                            : current === 2 ? <Vision current={current} matches={matches} />
                                : current === 3 ? <Recruitment current={current} matches={matches} />
                                    : current === 4 ? <Contract current={current} matches={matches} />
                                        : <Services current={current} matches={matches} />


                    }



                </Grid>
            </Grid>
        </Container>
    )
}