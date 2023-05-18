import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { ListItemButton, Typography } from '@mui/material';
import { ListItemType } from '../type/type';
const ListButton = ({
  question,
  item,
  setChooseVal,
  chooseVal,
  setCurrentAnswer,
  
}: ListItemType) => {
  const [value1, value2, value3, value4] = item;
  const handleListItemClick = (index: number) => {
    setChooseVal(index);
    // if (item[index] === data.currentData.correctItem) {
    //   dispatch(ChangeNumberOfCorrect()) 
    // }
    setCurrentAnswer(item[index])
  };

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
          selected={chooseVal === 0}
          onClick={() => handleListItemClick(0)}
        >
          <ListItemText primary={value1} />
        </ListItemButton>
        <ListItemButton
          selected={chooseVal === 1}
          onClick={() => handleListItemClick(1)}
        >
          <ListItemText primary={value2} />
        </ListItemButton>
        <ListItemButton
          selected={chooseVal === 2}
          onClick={() => handleListItemClick(2)}
        >
          <ListItemText primary={value3} />
        </ListItemButton>
        <ListItemButton
          selected={chooseVal === 3}
          onClick={() => handleListItemClick(3)}
        >
          <ListItemText primary={value4} />
        </ListItemButton>
      </List>
    </>
  );
};

export default ListButton;
