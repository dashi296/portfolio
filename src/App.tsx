import React, { FC } from 'react';
import './App.css';

// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Div100vh from 'react-div-100vh';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Header from './components/Header';
import TopNav from './containers/TopNav';
import Editor from './containers/Editor';
import Terminal from './containers/Terminal';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <Div100vh>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <TopNav />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Hidden xsDown>
              <Editor />
            </Hidden>
            <Terminal />
          </Grid>
          <Footer />
        </Grid>
      </Grid>
    </Div100vh>
  );
};

export default App;
