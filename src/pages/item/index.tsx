import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import { motion } from "framer-motion";

function Item() {
  return (
    <motion.div exit={{ opacity: 0 }}>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    </motion.div>
  );
}

export default Item