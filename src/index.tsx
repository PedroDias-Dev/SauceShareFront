import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import Login from '../src/pages/login/index'
// import Cadastro from '../src/pages/cadastro/index'
// import Home from '../src/pages/home/index'
// import Item from '../src/pages/item/index'
// import NaoEncontrada from '../src/pages/404/index'

// import { AnimatePresence } from "framer-motion";

import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom';

import App from './App'


// const App = () =>{
//   const location = useLocation();

//   const routing = (
//     <Router>
//       <Switch location={location} key={location.pathname}>
        
//       </Switch>
//     </Router>
//   )

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
