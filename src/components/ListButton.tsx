import React, { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { ListItemButton, Typography } from '@mui/material';
import { ListItemType } from '../type/type';
import { Data, ChangeAnswer } from '../redux/slices/data.slice';
import { useSelector, useDispatch } from 'react-redux';
const ListButton = ({ question, item }: ListItemType) => {
  const dispatch = useDispatch();
  const data = useSelector(Data);

  const [value1, value2, value3, value4] = item;
  const handleListItemClick = (index: number) => {
    dispatch(ChangeAnswer(index));
  };
  // const shuffleArray = (array: string[]) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };
  // const [value1, value2, value3, value4] = shuffleArray(item).slice(0, 4)


  return (
    <>
      <Typography
        variant="h6"
        sx={{ width: 1, textAlign: 'center', fontWeight: 'bold' }}
      >
        {question}
      </Typography>
      <List component="nav">
        <ListItemButton
          selected={data.correctAnswer === 0}
          onClick={() => handleListItemClick(0)}
        >
          <ListItemText primary={value1} />
        </ListItemButton>
        <ListItemButton
          selected={data.correctAnswer === 1}
          onClick={() => handleListItemClick(1)}
        >
          <ListItemText primary={value2} />
        </ListItemButton>
        <ListItemButton
          selected={data.correctAnswer === 2}
          onClick={() => handleListItemClick(2)}
        >
          <ListItemText primary={value3} />
        </ListItemButton>
        <ListItemButton
          selected={data.correctAnswer === 3}
          onClick={() => handleListItemClick(3)}
        >
          <ListItemText primary={value4} />
        </ListItemButton>
      </List>
    </>
  );
};

export default ListButton;
// console.log(setChooseVal);

// const strings = [item[0], item[1], item[2], item[3]];
