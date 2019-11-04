import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import RubyHighlighter from './atoms/RubyHighlighter';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
      backgroundColor: '#171717',
      //width: 'auto',
      height: '27.5vh',
      padding: '1.0em',
      overflowY: 'scroll',
    },
    breadcrumbs: {
      display: 'flex',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      fontFamily: 'Monaco, Courier New, monospace',
      color: '#989998',
      beckgroundColor: '#171717',
      height: 15,
    },
    arrow: {
      margin: '0 5px',
    }
  }),
);

interface IBreadcrumbsProps {
  menuName?: string;
}
const Breadcrumbs: FC<IBreadcrumbsProps> = ({
  menuName,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.breadcrumbs}>
      portfolio
      <ArrowForwardIosIcon className={classes.arrow} fontSize="small" /> <span className="ruby-icon" />{menuName}.rb
    </div>
  )
}

export interface EditorProps {
  menuName: string;
  code: string;
}

const Editor: FC<EditorProps> = ({
  menuName,
  code,
}) => {
  const classes = useStyles();;

  return (
    <div className={classes.root}>
      <Breadcrumbs menuName={menuName} />
      <RubyHighlighter showLineNumbers={true}>
        {code}
      </RubyHighlighter>
    </div>
  );
};

export default Editor;
