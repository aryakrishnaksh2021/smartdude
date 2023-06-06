import * as React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
import { motion } from "framer-motion";
export default function NestedList({setCurrent}) {
    // const [open, setOpen] = React.useState(true);

    // const handleClick = () => {
    //     setOpen(!open);
    // };
    const links = [
        { name: "HOME", to: "#", id: 1 },
        { name: "ABOUT", to: "#", id: 2 },
        { name: "SERVICES", to: "#", id: 3 },
        { name: "CONTACT", to: "#", id: 4 }
    ];

    const itemVariants = {
        closed: {
            opacity: 0,fontWeight:'200'
        },
        open: { opacity: 1,fontWeight:'600' }
    };



    return (
        <List
            sx={{ width: '100%' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        //   subheader={
        //     <ListSubheader component="div" id="nested-list-subheader">
        //       Nested List Items
        //     </ListSubheader>
        //   }
        >

            {links.map(({ name, to, id }) => (
                <motion.a
                    key={id}
                    href={to}
                    whileHover={{ scale: 1.1,fontWeight:'600',color:'#ED1F24' }}
                    variants={itemVariants}
                    style={{
                        // color: '#f9fafb',
                        textDecoration: 'none',
                        fontSize: '2.75rem',
                        fontWeight: '200',
                        display: 'block',
                        margin: '20px',
                        color: 'black',
                        transformOrigin: '0% 0%',
                        textTransform:'capitalize'
                    }}
                    onMouseEnter={() => { setCurrent(name); }}
                    onMouseLeave={() => { setCurrent(name); }}
                >
            {name}
        </motion.a>
    ))
}

{/* <ListItemButton
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    >
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse> */}
        </List >
    );
}
