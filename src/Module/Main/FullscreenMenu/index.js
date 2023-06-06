import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import Menu from './Menu'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left"
    //   timeout={{ enter:theme=> theme.transitions.duration.enteringScreen, exit: theme=>theme.transitions.duration.leavingScreen, }}
    //   easing={{ enter: theme=>theme.transitions.easing.easeOut, exit:  theme=>theme.transitions.easing.sharp, }} 
    easing={{
      enter: "ease-in-out",
      exit: "ease-in-out"
    }}
    timeout={{
      enter: '1s',
      exit: '1s'
    }}
    ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton aria-label="delete" onClick={handleClickOpen} size="large">
        <MenuRoundedIcon sx={{ color: 'inherit' }} fontSize="large" />
      </IconButton>
      {/* <Button variant="outlined" onClick={handleClickOpen} color="secondary">
        Open
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', background: 'transparent' }}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton> */}
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div"></Typography>
            <IconButton aria-label="delete" onClick={handleClose} size="large" autoFocus>
              <CloseIcon fontSize="large" />
            </IconButton>

          </Toolbar>
        </AppBar>
        <Menu />

      </Dialog>
    </React.Fragment>
  );
}
