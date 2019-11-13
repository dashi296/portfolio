import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';

import Header, { HeaderProps } from '../components/Header';

import { AppState } from '../store';

interface StateProps {
  title: string;
}

// interface DispatchProps {
//
// }

type EnhancedHeaderProps = HeaderProps & StateProps;
// DispatchProps &
// RouteComponentProps<{ menuName: string }>;

const mapStateToProps = (state: AppState): StateProps => {
  const { menuName } = state.menu;

  return {
    title: menuName,
  };
};

// const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
//  bindActionCreators({}, dispatch);

const HeaderContainer: FC<EnhancedHeaderProps> = ({ title }) => {
  return <Header title={title} />;
};

export default withRouter(
  connect(
    mapStateToProps,
    //mapDispatchToProps,
  )(HeaderContainer),
);
