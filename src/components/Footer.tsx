import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
  FaCodeBranch as BranchIcon,
  FaSyncAlt as SyncIcon,
  FaTimesCircle as TimesIcon,
  FaExclamationTriangle as ExclamationIcon,
  FaBell as BellIcon,
  FaSmile as SmileIcon,
} from 'react-icons/fa';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100vw',
      height: '2.5vh',
      backgroundColor: '#2269BD',
      fontFamily: 'Roman, arial ,Courier New, monospace',
      fontWeight: 'bold',
      color: '#FFFFFF',
      justifyContent: 'flex-start',
      paddingLeft: 10,
      paddingRight: 10,
    },
    leftItems: {
      display: 'flex',
      alignSelf: 'center',
    },
    leftItem: {
      marginRight: 10,
    },
    rightItems: {
      display: 'flex',
      alignSelf: 'center',
      marginLeft: 'auto',
    },
    rightItem: {
      marginLeft: 10,
    },
  }),
);

// export interface FooterProps { }

const Footer: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.leftItems}>
        <div className={classes.leftItem}>
          <BranchIcon />
          master*
        </div>
        <div className={classes.leftItem}>
          <SyncIcon />
        </div>
        <div className={classes.leftItem}>
          <TimesIcon /> 0
        </div>
        <div className={classes.leftItem}>
          <ExclamationIcon /> 0
        </div>
      </div>
      <div className={classes.rightItems}>
        <div className={classes.rightItem}>UTF-8</div>
        <div className={classes.rightItem}>LF</div>
        <div className={classes.rightItem}>Ruby</div>
        <div className={classes.rightItem}>
          <SmileIcon />
        </div>
        <div className={classes.rightItem}>
          <BellIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
