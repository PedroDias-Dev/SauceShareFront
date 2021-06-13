import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from '../src/pages/login/index'
import Cadastro from '../src/pages/cadastro/index'
import Home from '../src/pages/home/index'
import Item from '../src/pages/item/index'
import NaoEncontrada from '../src/pages/404/index'

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {/* <Router> */}
        <Switch location={location} key={location.pathname}>
            <Route path='/' exact component={Home} />
            <Route path='/login'  component={Login} />
            <Route path='/cadastro'  component={Cadastro} />
            <Route path='/item/:id'  component={Item} />

            <Route component={NaoEncontrada} />
        </Switch>
      {/* </Router> */}
    </AnimatePresence>
  );
};

export default App;