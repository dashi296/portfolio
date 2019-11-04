import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100vw',
      height: '2.5vh',
      backgroundColor: '#272727',
      alignItems: 'center',
    },
    buttons: {
      display: 'flex'
    },
    title: {
      width: '100%',
      color: '#818181',
      textAlign: 'center',
    },
    roundButton: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      margin: 3,
    }
  }),
);

interface IRoundButtonProps {
  color: string;
}

const RoundButton: FC<IRoundButtonProps> = ({
  color,
}) => {
  const classes = useStyles();
  return (<div className={classes.roundButton} style={{ background: color }}></div>)
};


export interface IHeaderProps {
  title?: string;
}

const Header: FC<IHeaderProps> = ({
  title,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <RoundButton color="#F04040" />
        <RoundButton color="#FDB024" />
        <RoundButton color="#29C833" />
      </div>
      <div className={classes.title}>
        {title ? title : "dashi\'s portfolio"}
      </div>
    </div>
  );
}

export default Header;
