import { Card} from '@mui/material';
import React from 'react';

import TableElements from '../Elements/TableElements';
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