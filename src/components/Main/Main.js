import { Card} from '@mui/material';
import React from 'react';
//import TableElements from '../Elements/TableElements.json'
// import Checkbox from '@mui/material/Checkbox';

// import CardActions from '@mui/material/CardActions';
//  import CardContent from '@mui/material/CardContent';
//import { DataGrid } from '@mui/x-data-grid';

// import Button from '@mui/material/Button';
import TableElements from '../Elements/TableElements';
// import SearchIcon from '@mui/icons-material/Search';
import './Main.css'

  
function Main() {
    return (
        <div  className='form-container' ><h1>Custom Table Elements</h1>
        <Card   >
               
                  
        <TableElements/>
         
        
       
      </Card>
       
           
        </div>
    );
}

export default Main;