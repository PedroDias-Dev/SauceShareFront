import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 375,
  },
});

export default function BottomNavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favoritos" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Pesquisar" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Conta" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}