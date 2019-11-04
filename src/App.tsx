import React, { FC } from 'react';
import './App.css';

//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Header from './components/Header';
import TopNav from './containers/TopNav';
import Editor from './containers/Editor';
import Terminal from './containers/Terminal';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const App: FC = () => {

  return (
    <Grid container >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid container >
        <Grid item xs={12} sm={2}>
          <TopNav />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Hidden xsDown><Editor /></Hidden>
          <Terminal />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;