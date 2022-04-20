import React from 'react';
import styles from './App.module.scss';
import {BrowserRouter as Router } from "react-router-dom";


const App:React.FC = ()=> {
  return (
      <Router>
          <div className={styles.App}>
              Hello
          </div>
      </Router>
  );
}

export default App;
