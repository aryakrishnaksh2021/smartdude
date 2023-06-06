import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';

import logo from 'assets/salon.png'
// import bg from 'assets/bg.jpg'

import { motion, useScroll } from "framer-motion";
import {
  // Routes,
  // Route,
  // Link,
  Outlet,
  // BrowserRouter,
} from "react-router-dom";
import Footer from './Footer'
// import Menu from './Menu'
import FullscreenMenu from './FullscreenMenu'
import ScrollToTop from 'Elements/ScrollToTop'



// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Services',"Contact Us"];

function DrawerAppBar(props) {
  const {  homeRef, aboutRef, serviceRef, contactRef  } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };
  
const navItems = [
  {
    label:'Home',
    ref:homeRef
  },
  {
    label:'About',
    ref:aboutRef
  },
  {
    label:'Services',
    ref:serviceRef
  },
  {
    label:'Contact Us',
    ref:contactRef
  },];
  const { scrollY } = useScroll();

  // console.log(scrollY)

  const [yValue, setYValue] = React.useState(0);
  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    setYValue(scrollY.current)
    // console.log(scrollY.current)
    // if (scrollY?.current < scrollY?.prev) {
    //   setHidden(false);
    // } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
    //   setHidden(true);
    // }
  }  /** update the onChange callback to call for `update()` **/
  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  //       <Stack sx={{ flexGrow: 1, py: 2,color:'black' }} direction="row"
  //           justifyContent="flex-start"
  //           alignItems="center"
  //           spacing={1}>
  //           <img src={logo} alt="logo" height={50} />
  //           <Stack direction="column"
  //           justifyContent="flex-start"
  //           alignItems="center"
  //           spacing={0}>
  //             <Typography
  //               variant="h6"
  //               component="div"
  //               sx={{ fontWeight: 600, letterSpacing: '.1rem', color: (theme) => theme.palette.primary.main}}
  //             >
  //               AMAARAN
  //             </Typography>
  //             <Typography
  //               variant="subtitle2"
  //               component="div"
  //               sx={{ fontWeight: 300, letterSpacing: '.2rem'}}
  //             >
  //               ENTERPRISES
  //             </Typography>
  //           </Stack>
  //         </Stack>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} disablePadding sx={{ textTransform: 'uppercase' }}>
  //           <ListItemButton sx={{ textAlign: 'center' }}>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  // const container = window !== undefined ? () => window().document.body : undefined;
  const menuvariants = {
    initial: { backgroundColor:'transparent',color:'white',borderRadius:0},  
    scrolled: { backgroundColor:'white',color:'black',borderRadius:0}, 
  };
  return (
    <React.Fragment>
      
    <Box sx={{
      display: 'flex', minHeight: '100vh',
      background: theme=>`linear-gradient(to right, #ffffff 0%, #ffffff 30%, ${theme.palette.primary.main} 30%, ${theme.palette.primary.main} 100%)`
    }}>

<div id="back-to-top-anchor" style={{ minHeight: '0px!important', height: 0 }} ></div>
      <AppBar  component={motion.nav} 
       variants={menuvariants}
       animate={yValue===0 ? "initial" : "scrolled"}
       transition={{ backgroundColor : {ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}}
       >

        <Toolbar>         
          <Stack sx={{ flexGrow: 1, py: 1 }} direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}>
            <img src={logo} alt="logo" height={60} />
            <Stack sx={{display:{xs:'none',lg:'block'}}}>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: 600, letterSpacing: '.1rem', color: (theme) => theme.palette.primary.main }}
              >
                SMARTDUDE
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: 300, letterSpacing: '.2rem' }}
              >
                BEAUTY SALON
              </Typography>
            </Stack>
          </Stack>  
            {/* <FullscreenMenu/> */}
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color:yValue===0 ? 'black':'black',textTransform: 'uppercase', letterSpacing: '.1rem' }}
              onClick={()=>{ item.ref.current.scrollIntoView({ behavior: 'smooth' })}}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

{/* <Menu/> */}

      {/* <Box component="nav"> */}
        {/* <Drawer
        anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,borderRadius:'10px 0px 0px 10px' },
          }}
        >
          {drawer}
        </Drawer> */}
       
      {/* </Box> */}

      <Box component="main" sx={{width: '100vw',}}>
        <Toolbar />
        <Box>
          <Outlet />
        </Box>
        <ScrollToTop/>

    
      </Box>
    </Box>
    <Footer/>
    </React.Fragment>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
