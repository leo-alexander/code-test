import React, { Component } from 'react';

import styles from './app.css';
import Header from "../Header";
import MainPage from "../MainPage";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
