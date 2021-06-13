import React, { useState, useEffect } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useHistory, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Header from '../../components/header/index'
import BottomNavigationBar from '../../components/bottomNavigation/index'

import './styles.css'

function Home() {
  const history = useHistory();

  const [sauces, setSauces] = useState<any[]>([])

  useEffect(() => {
    getSauces();
  }, []);

  const getSauces = () => {
    fetch('http://localhost:5555/sauces/')
      .then(response => response.json())
      .then(data => {
          console.log(data)
          setSauces(data)
      })
      .catch(err => console.error(err));
  }

  const gotoItem = (event: any, item: any) => {
    // event.preventDefault()

    history.push('/item/' + item.id)
  }

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div>
        <div className="homeDiv">
          {/* <Header /> */}
          <div className="items">
            {
              sauces.map((item, index) => {
                console.log(item)
                return(
                  // <div >
                    <button style={{width: '100%', backgroundColor: 'rgb(17, 17, 17)',  border: 'none'}} onClick={(event: React.MouseEvent<HTMLElement>) => {
                      gotoItem(event, item)
                    }}>
                    <Paper className="paperItem" elevation={3} >
                      <h2>{item.titulo}</h2>
                      <p>{item.descricao}</p>
                    </Paper >
                    </button>
                  // </div>
                )
              })
              
            }
          </div>
          <Fab className="addButton" color="primary" aria-label="add" onClick={getSauces}>
            <AddIcon />
          </Fab>
          
        </div>
        <BottomNavigationBar />
      </div>
    </motion.div>
  );
}

export default Home