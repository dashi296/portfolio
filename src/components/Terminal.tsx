import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText, {
  ListItemTextProps,
} from '@material-ui/core/ListItemText';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import { Element, scroller } from 'react-scroll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#ffffff',
      backgroundColor: '#171717',
      height: '70vh',
      padding: '0 1em',
      borderTop: 'solid 1px #323232',
    },
    tabs: {
      display: 'flex',
      height: '5vh',
      minHeight: '5vh',
    },
    tab: {
      minWidth: 0,
      width: 'auto',
      color: '#E1E1E1',
      fontFamily: 'sans-serif, arial',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      padding: '7px 0',
      margin: '0 7px',
      minHeight: 'auto',
      '&$selected': {
        color: '#E1E1E1',
        backgroundColor: '#171717',
        borderBottom: '1px solid #323232',
        '&:hover': {
          backgroundColor: '#171717',
        },
      },
      '&:hover': {
        color: '#E1E1E1',
      },
    },
    terminal: {
      padding: '0.5em',
      overflowY: 'scroll',
      height: '65vh',
      maxHeight: '65vh',
    },
    typist: {
      display: 'inline-block',
      position: 'relative',
      '&:after': {
        content: '',
        position: 'absolute',
        top: 0,
        right: -15,
        display: 'inline-block',
        backgroundColor: '#606060',
        verticalAlign: 'top',
        width: 10,
        height: 24,
        WebkitAnimation: 'blink 1s step-end infinite',
        animation: 'blink 1s step-end infinite',
      },
    },
    result: {
      fontSize: '1.2rem',
      fontFamily: 'monaco, Consolas, Lucida Console, monospace',
    },
    selected: {},
    hover: {},
  }),
);

export interface TerminalProps {
  isSetting: boolean;
  settingMenuName: string;
  prevTerminalText: string;
  menuResult: string;
  setMenu: (menuName: string) => void;
  updateTerminal: (menuName: string) => void;
}

const Terminal: FC<TerminalProps> = ({
  isSetting,
  settingMenuName,
  prevTerminalText,
  menuResult,
  setMenu,
  updateTerminal,
}) => {
  const classes = useStyles();

  const TERMINAL_PHRASE = 'dashi-MBP:portfolio dashi$ ';

  useEffect(() => {
    scroller.scrollTo('terminalBottom', {
      delay: 0,
      containerId: 'terminal',
    });
  }, [prevTerminalText]);

  return (
    <div className={classes.root}>
      <List className={classes.tabs}>
        <ListItem
          classes={{ root: classes.tab, selected: classes.selected }}
          disabled
        >
          <ListItemText primary="問題" />
        </ListItem>
        <ListItem
          classes={{ root: classes.tab, selected: classes.selected }}
          disabled
        >
          <ListItemText primary="出力" />
        </ListItem>
        <ListItem
          classes={{ root: classes.tab, selected: classes.selected }}
          disabled
        >
          <ListItemText primary="デバッグコンソール" />
        </ListItem>
        <ListItem
          classes={{ root: classes.tab, selected: classes.selected }}
          selected
        >
          <ListItemText primary="ターミナル" />
        </ListItem>
      </List>

      <div id="terminal" className={classes.terminal}>
        <pre
          className={classes.result}
          dangerouslySetInnerHTML={{ __html: prevTerminalText }}
        />
        {TERMINAL_PHRASE}

        <TerminalInput
          isSetting={isSetting}
          settingMenuName={settingMenuName}
          updateTerminal={updateTerminal}
        />
        <Element name="terminalBottom" />
      </div>
    </div>
  );
};

interface TerminalInputProps {
  isSetting: boolean;
  settingMenuName: string;
  updateTerminal: (menuName: string) => void;
}

const TerminalInput: FC<TerminalInputProps> = ({
  isSetting,
  settingMenuName,
  updateTerminal,
}) => {
  const classes = useStyles();

  return (
    <>
      {isSetting ? (
        <>
          <Typist
            className={classes.typist}
            avgTypingDelay={20}
            cursor={{ show: false }}
            onTypingDone={() => updateTerminal(settingMenuName)}
          >
            <Typist.Delay ms={200} />
            {`ruby ${settingMenuName}.rb`}
          </Typist>
          <div className="typing" />
        </>
      ) : (
        <div className="cursor" />
      )}
    </>
  );
};

export default Terminal;
