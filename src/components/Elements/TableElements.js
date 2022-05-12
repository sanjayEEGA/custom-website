import React from 'react';
import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

import TextField from "@mui/material/TextField";

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { Divider } from '@mui/material';


function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function QuickSearchToolbar(Quickprops) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
      
    >
      <TextField 
        variant="standard"
        value={Quickprops.value}
        onChange={Quickprops.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: Quickprops.value ? 'visible' : 'hidden' }}
              onClick={Quickprops.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            
          },
          alignItems:'flex-end',
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          '& .MuiSvgIcon-root': {
            mr: 1,
          },
          '& .MuiInput-underline:before': {
            borderBottom: 1,
            borderColor: 'divider',
          },
        }}
      />
      <Divider/>
    </Box>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};


function TableElements(props) {
  const [searchText, setSearchText] = React.useState('');
  const [tableData, setTableData] = useState([])    
  const [rows, setRows] = useState([]) 
    const columns = [ 
        
         { field: 'Name', headerName: 'Name', width: 200 },
        { field: 'Position', headerName: 'Position', width: 250 },
        {
            field: "Office",
            headerName: "Office",
            width: 150,
            renderCell: (params) => {
                let listItemStyle = {
                   backgroundColor:params.row.color, 
                };
              return (
                <div style={listItemStyle}> 
                  {params.row.Office}
                </div>
              );
            }
          },
          { field: 'Age', headerName: 'Age' },
          { field: 'startDate', headerName: 'startDate' },
          { field: 'salary', headerName: 'salary' },
      ]
  useEffect(() => {
    let url = "https://mocki.io/v1/548a6a79-bf0b-4da5-9644-33b9eb017562";
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setTableData(data)
        setRows(data)
      })
  }, [tableData.rows])
  const requestSearch = (searchValue) => {
      setSearchText(searchValue);
      const searchRegex = new RegExp(escapeRegExp(searchValue));
      const filteredRows = rows.filter((row) => {
        return Object.keys(row).some((field) => {
          
          return searchRegex.test(row[field].toString());
        });
      });
      console.log(filteredRows.length)
      if(filteredRows.length === 0){
        setTableData({});
      }else{
        setTableData(filteredRows);
      }
  };
    return (
        <div style={{ height: 500, width: '100%' }}>   
          <DataGrid 
          components={{ Toolbar: QuickSearchToolbar }}
            rows={tableData}
            columns={columns}
            checkboxSelection
            pageSize={12}
            componentsProps={{
              toolbar: {
                value: searchText,
                onChange: (event) => requestSearch(event.target.value),
                clearSearch: () => requestSearch(''),
              },
            }}
          >
          </DataGrid>
    </div>
    );
}

export default TableElements;