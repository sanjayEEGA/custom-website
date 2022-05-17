
import './App.css';
import Box from '@mui/material/Box';
import React from 'react';
import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Appbar from './components/appbar/Appbar';
import Sidebar from './components/sidebar/Sidebar';
// import Main from './components/Main/Main';
import Main from './components/Main/Main'

const drawerWidth = 240;
function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 
  

  const drawer = (
    <div>
       <Sidebar/> 
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="App">
     
    <Box sx={{ display: 'flex' }}>
     
      <Appbar drawer={drawer} />
      
      <Box
        component="nav"
        sx={{  width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
         
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{ 
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer': {  width: drawerWidth ,backgroundColor:'red' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box',  width: drawerWidth , backgroundColor:'blue'},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* <Main></Main> */}
        <Main/>
        
      </Box>
    </Box>
    </div>
  );
}

export default App;
