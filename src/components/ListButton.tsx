import React, { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { ListItemButton, Typography } from '@mui/material';
const ListButton = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // console.log(selectedIndex);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
    
    <Typography
          variant="h6"
          sx={{ width: 1, textAlign: 'center', fontWeight: 'bold' }}
        >
          Why this is happend in japan ? which one in correct
          aswer?????????????/
        </Typography>
    <List component="nav">
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemText primary="Item 1" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemText primary="Item 2" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
      >
        <ListItemText primary="Item 3" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(event, 3)}
      >
        <ListItemText primary="Item 4" />
      </ListItemButton>
    </List>
    </>
  );
};

export default ListButton;
