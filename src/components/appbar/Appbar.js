import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box } from '@mui/material';
import './AppBar.css'
const drawerWidth = 240;
function Appbar(appBar) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

    return (
        <Box sx={{ flexGrow: 1 }} > 
            <AppBar style={{ background: 'white' }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }} variant="h7" color="black" noWrap component="div">
            Table  custom element  
          </Typography>
          
                 <Typography variant="h7" color="black" noWrap component="div" style={{margin:10}}>Buy Now!</Typography>
            
                    <IconButton>
                          <NotificationsIcon/>
                     </IconButton>
                <IconButton
            
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ sm: 2, display: { mr: 'none' } }}
          >
           <SettingsIcon right/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {appBar.drawer}
        </Drawer>
        </Box>
    );
}

export default Appbar;