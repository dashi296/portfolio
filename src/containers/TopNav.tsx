import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';

import TopNav, { TopNavProps } from '../components/TopNav';
//import { IMenuState } from '../menus/reducers';
import { setMenu } from '../menus/actions';

import { AppState } from '../store';

interface StateProps {
  menuName: string;
}

interface DispatchProps {
  setMenu: (menuName: string) => void;
}

type EnhancedTopNavProps = TopNavProps & StateProps & DispatchProps /*& RouteComponentProps<{ menuName: string }>*/;

const mapStateToProps = (state: AppState): StateProps => {
  const { menuName } = state.menu;
  return {
    menuName: menuName,
  }
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      setMenu: (menuName: string) => setMenu({ menuName }),
    },
    dispatch,
  );

const TopNavContainer: FC<EnhancedTopNavProps> = ({
  menuName,
  setMenu,
  //match,
}) => {
  //const { menuName } = match.params;

  useEffect(() => {
    !menuName && setMenu('profile');
  })

  return (
    <TopNav menuName={menuName} setMenu={setMenu} />
  );
};


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TopNavContainer),
);
