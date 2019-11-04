
import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';

import Terminal, { TerminalProps } from '../components/Terminal';
import { setMenu, updateTerminal } from '../menus/actions';

import { AppState } from '../store';

interface StateProps {
  isSetting: boolean;
  settingMenuName: string;
  prevTerminalText: string;
  menuResult: string;
}

interface DispatchProps {
  setMenu: (menuName: string) => void;
  updateTerminal: (menuName: string) => void;
}

type EnhancedTerminalProps = TerminalProps & StateProps & DispatchProps;

const mapStateToProps = (state: AppState): StateProps => {
  const { isSetting, settingMenuName, prevTerminalText, menuResult } = state.menu;
  return {
    isSetting: isSetting,
    settingMenuName: settingMenuName,
    prevTerminalText: prevTerminalText,
    menuResult: menuResult,
  }
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      setMenu: (menuName: string) => setMenu({ menuName }),
      updateTerminal: (menuName: string) => updateTerminal({ menuName }),
    },
    dispatch,
  );

const TerminalContainer: FC<EnhancedTerminalProps> = ({
  isSetting,
  settingMenuName,
  prevTerminalText,
  menuResult,
  setMenu,
  updateTerminal,
}) => {

  return (
    <Terminal
      isSetting={isSetting}
      settingMenuName={settingMenuName}
      prevTerminalText={prevTerminalText}
      menuResult={menuResult}
      setMenu={setMenu}
      updateTerminal={updateTerminal}
    />
  );
};


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TerminalContainer),
);
