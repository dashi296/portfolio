import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
    cursor: {
      display: 'inline',
      paddingRight: 0,
    },
    tabs: {
      height: '5vh',
      minHeight: '5vh',
    },
    tab: {
      minWidth: 0,
      width: 'auto',
      color: '#888888',
      fontFamily: 'sans-serif, arial',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      padding: 7
    },
    terminal: {
      padding: '0.5em',
      overflowY: 'scroll',
      height: '65vh',
      maxHeight: '65vh',
    },
    typist: {
      display: 'inline-block',
    },
    result: {
      fontSize: '1.2rem',
      fontFamily: 'monaco, Consolas, Lucida Console, monospace',
    }
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

  const TERMINAL_PHRASE = "dashi-MBP:portfolio dashi$ ";

  const [tab, setTab] = useState(3)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    //setTab(4);
  };

  useEffect(() => {
    scroller.scrollTo('terminalBottom', {
      delay: 0,
      containerId: 'terminal'
    });
  }, [prevTerminalText])

  return (
    <div className={classes.root}>

      <Tabs className={classes.tabs} value={tab} onChange={handleChange} TabIndicatorProps={{ children: <div /> }}>
        <Tab className={classes.tab} label="問題" />
        <Tab className={classes.tab} label="出力" />
        <Tab className={classes.tab} label="デバッグコンソール" />
        <Tab className={classes.tab} label="ターミナル" />
      </Tabs>

      <div id="terminal" className={classes.terminal}>
        <pre className={classes.result} dangerouslySetInnerHTML={{ __html: prevTerminalText }} />
        {TERMINAL_PHRASE}

        <TerminalInput isSetting={isSetting} settingMenuName={settingMenuName} updateTerminal={updateTerminal} />
        <Element name="terminalBottom" />
      </div>
    </div>
  );
};

interface ITerminalInputProps {
  isSetting: boolean;
  settingMenuName: string;
  updateTerminal: (menuName: string) => void;
}

const TerminalInput: FC<ITerminalInputProps> = ({
  isSetting,
  settingMenuName,
  updateTerminal,
}) => {
  const classes = useStyles();
  return (
    <>
      {isSetting ?
        <>
          <Typist className={classes.typist} avgTypingDelay={20} cursor={{ hideWhenDone: true }} onTypingDone={() => updateTerminal(settingMenuName)}>
            <Typist.Delay ms={200} />
            {`ruby ${settingMenuName}.rb`}
          </Typist>
        </>
        :
        <Typist className={classes.typist}>
          {``}
        </Typist>
      }
    </>
  )
}

export default Terminal;
