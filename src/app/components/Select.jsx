"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 ,backgroundColor: 'white',  borderColor: 'yellow'}} size="small">
        {/* <InputLabel id="demo-simple-select-label">Today</InputLabel> */}
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">Today</MenuItem>
          <MenuItem value={10}>Month</MenuItem>
          <MenuItem value={20}>Year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}