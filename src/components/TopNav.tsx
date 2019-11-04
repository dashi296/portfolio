import React, { FC, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText, { ListItemTextProps } from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const menuList: string[] = ["profile", "skills", "products", "contact"];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //width: '100%',
      height: '97.5vh',
      backgroundColor: '#1C1C1C',
      overflowY: 'scroll',
      [theme.breakpoints.down('xs')]: {
        height: '27.5vh',
      }
    },
    wsMenuItem: {
      fontSize: '1.0rem',
      paddingTop: 0,
      paddingBottom: 0,
      backgroundColor: '#2A2A2A',
      '&:hover': {
        backgroundColor: '#2A2A2A',
      },
    },
    menuItem: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: theme.spacing(4),
      '&:hover': {
        backgroundColor: '#202222',
      },
      '&$selected': {
        backgroundColor: '#15385C',
        '&:hover': {
          backgroundColor: '#15385C',
        }
      },
    },
    menuItemNested: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: theme.spacing(6),
      '&:hover': {
        backgroundColor: '#202222',
      },
      '&$selected': {
        backgroundColor: '#15385C',
        '&:hover': {
          backgroundColor: '#15385C',
        }
      },
    },
    menuItemJPText: {
      fontWeight: 'bold',
      color: '#BFC0BF',
    },
    menuItemText: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      fontFamily: 'Monaco, Courier New, monospace',
      color: '#BFC0BF',
    },
    folderIcon: {
      color: '#BFC0BF',
    },
    icons: {
      minWidth: 5,
      paddingRight: 5,
    },
    nested: {
      paddingLeft: theme.spacing(6),
    },
    selected: {

    },
    hover: {
    }
  }),
);

const MenuItemText = (props: ListItemTextProps) => {
  const classes = useStyles();
  return (
    <ListItemText {...props} primary={<div className={classes.menuItemText}>{props.children}</div>} />
  )
}

export interface TopNavProps {
  menuName: string;
  setMenu: (menuName: string) => void;
}

const TopNav: FC<TopNavProps> = ({
  menuName,
  setMenu,
}) => {
  const classes = useStyles();

  const [wsOpen, setWSOpen] = useState(true);
  const [pfOpen, setPfOpen] = useState(true);
  const [pfSelected, setPfSelected] = useState(false);

  const handleWSClick = () => {
    setWSOpen(!wsOpen);
    setPfSelected(false);
  }

  const handlePfClick = () => {
    setPfOpen(!pfOpen);
    setPfSelected(true);
  }

  const handleFileClick = (menuName: string) => {
    setMenu(menuName);
    setPfSelected(false);
  }

  return (
    <div className={classes.root}>
      <List aria-label="workspace-nav" style={{ padding: 0 }}>
        <ListItem button onClick={() => handleWSClick()}>
          <ListItemText primary={<div className={classes.menuItemJPText}>エクスプローラー</div>} />
        </ListItem>
        <ListItem button className={classes.wsMenuItem} onClick={() => handleWSClick()}>
          <ListItemIcon className={classes.icons}>
            {
              wsOpen ?
                <ExpandMoreIcon fontSize="small" className={classes.folderIcon} />
                :
                <ChevronRightIcon fontSize="small" className={classes.folderIcon} />
            }
          </ListItemIcon>
          <ListItemText primary={<div className={classes.menuItemJPText}>ワークスペース</div>} />
        </ListItem>
      </List>
      <Collapse in={wsOpen} timeout={0} unmountOnExit>
        <List aria-label="main-nav" style={{ padding: 0 }}>
          <ListItem button selected={pfSelected} classes={{ root: classes.menuItem, selected: classes.selected }} onClick={() => handlePfClick()}>
            <ListItemIcon className={classes.icons}>
              {
                pfOpen ?
                  <ExpandMoreIcon fontSize="small" className={classes.folderIcon} />
                  :
                  <ChevronRightIcon fontSize="small" className={classes.folderIcon} />
              }
            </ListItemIcon>
            <ListItemText primary={<div className={classes.menuItemText}>portfolio</div>} />
          </ListItem>
        </List>
        <Collapse in={pfOpen} timeout={0} unmountOnExit>
          <List aria-label="rb-list" style={{ padding: 0 }}>
            {
              menuList.map(menu => {
                const isSelected = menu == menuName;
                return (
                  <ListItem key={menu} button onClick={() => handleFileClick(menu)} selected={(!pfSelected && isSelected)} classes={{ root: classes.menuItemNested, selected: classes.selected }} >
                    <span className="ruby-icon" />
                    <MenuItemText children={`${menu}.rb`} />
                  </ListItem>)
              })
            }
          </List>
        </Collapse>
      </Collapse>
    </div>
  );
};

export default TopNav;
