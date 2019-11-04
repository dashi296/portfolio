import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100vw',
      height: '2.5vh',
      backgroundColor: '#2269BD',
      alignItems: 'center',
      color: '#FFFFFF',
    }
  }),
);

export interface IFooterProps {

}

const Footer: FC<IFooterProps> = ({

}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Footer
    </div>
  );
}

export default Footer;
