import React from 'react';
import './SideBar.css'
// import { useState } from 'react';
import Divider from '@mui/material/Divider';
//import Drawer from '@mui/material/Drawer';
//import IconButton from '@mui/material/IconButton';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import MailIcon from '@mui/icons-material/Mail';
import CssBaseline from '@mui/material/CssBaseline';
import SettingsIcon from '@mui/icons-material/Settings';
import ShowChartIcon from '@mui/icons-material/ShowChart';
//================================================================




import Collapse from '@mui/material/Collapse';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
//import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
//import IconExpandLess from '@mui/icons-material/ExpandLess'
import IconExpandMore from '@mui/icons-material/ExpandMore'
// import Main from '../Main/Main';

// import IconLibraryBooks from '@mui/icons-material/LibraryBooks'


//=============================================

function Sidebar(props) {
 
    const [first, setFirst] = React.useState(false)
    const [open, setOpen] = React.useState(false)

    function handleClick() {
      setOpen(!open)
    }
    function handlefirst() {
        setFirst(!first)
      }
      const handleMain={
        
      };
    return (
        <div>
             <CssBaseline />
      <Divider />
      <List component="nav" disablePadding>
                <ListItem button onClick={handlefirst} >
                    {/* <ListItemIcon >
                    <IconLibraryBooks />
                    </ListItemIcon> */}
                    <ListItemText primary="PAGES" />
                    {first ?  <IconExpandMore /> :<KeyboardArrowLeftIcon /> }
                </ListItem>
      <Collapse in={first} timeout="auto" unmountOnExit>
        <Divider />
                    <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemText inset primary="Nested Page 1" />
                            </ListItem>
                    <Divider />
                            <ListItem button >
                                <ListItemText inset primary="Nested Page 2" />
                            </ListItem>
                    <Divider />
                    </List>
      </Collapse>
    </List>
    
      <List component="nav" disablePadding>
                <ListItem button onClick={handleClick} >
                    {/* <ListItemIcon >
                    <IconLibraryBooks />
                    </ListItemIcon> */}
                    <ListItemText primary="CHARTS" />
                    {open ?  <IconExpandMore /> :<KeyboardArrowLeftIcon /> }
                </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
                    <List component="div" disablePadding>

                            <ListItem button >
                                <ListItemIcon  >
                                        <ShowChartIcon />
                                </ListItemIcon>
                                <ListItemText   inset primary="Fullscreen with Chart " />
                            </ListItem>
                    <Divider />
                            <ListItem button onClick={handleMain}> 
                                <ListItemIcon  >
                                <SettingsIcon right/>
                                </ListItemIcon>
                                <ListItemText inset primary="Table with Custom Elements" />
                            </ListItem>
                    <Divider />
                    </List>
      </Collapse>
    </List>
        </div>
    );
}



export default Sidebar;