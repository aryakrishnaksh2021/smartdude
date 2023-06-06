import * as React from 'react';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
const StyledListItem = styled(ListItem)(({ theme }) => ({
  // alignItems:'baseline',

 '& .MuiTypography-root': {
  color:"black",
  fontFamily:"Poppins"
 } ,
 '& .MuiListItemIcon-root': {
  color:"black",
 '& .MuiSvgIcon-root': {
  fontSize:'2rem'

 }
 }

}))

export default function FolderList() {
  return (
    <List sx={{ width: '100%',color:'black' }}>
      <StyledListItem>
        <ListItemIcon>
          <WorkOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText 
        primary={<Typography variant='h5' sx={{fontWeight:700}}>Bridal Hairstyling</Typography>} 
        secondary={<Typography variant="body" sx={{fontWeight:300,letterSpacing:'.15rem'}}>Creating a beautiful and customized hairstyle for the bride on her wedding day.</Typography>} />
      </StyledListItem>
      <StyledListItem>
      <ListItemIcon>
          <WorkOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText 
        primary={<Typography variant='h5' sx={{fontWeight:700}}>Bridal Makeup</Typography>} 
        secondary={<Typography variant="body" sx={{fontWeight:300,letterSpacing:'.15rem'}}> Expertly applying makeup to enhance the bride's natural beauty and ensure a flawless look that lasts throughout the day.</Typography>} />
      </StyledListItem>
      <StyledListItem>
      <ListItemIcon>
          <WorkOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText 
        primary={<Typography variant='h5' sx={{fontWeight:700}}>Bridal skincare</Typography>} 
        secondary={<Typography variant="body" sx={{fontWeight:300,letterSpacing:'.15rem'}}>Customized skincare treatments and facials leading up to the wedding to ensure the bride's skin is glowing and radiant.</Typography>} />
      </StyledListItem>
    </List>
  );
}
