import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';

import Editor, { EditorProps } from '../components/Editor';
import { setMenu } from '../menus/actions';

import { AppState } from '../store';

interface StateProps {
  menuName: string;
  code: string;
}

interface DispatchProps {
  setMenu: (menuName: string) => void;
}

type EnhancedEditorProps = EditorProps & StateProps & DispatchProps & RouteComponentProps<{ menuName: string }>;

const mapStateToProps = (state: AppState): StateProps => {
  const { menuName, editorCode } = state.menu;
  return {
    menuName: menuName,
    code: editorCode,
  }
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      setMenu: (menuName: string) => setMenu({ menuName }),
    },
    dispatch,
  );

const EditorContainer: FC<EnhancedEditorProps> = ({
  code,
  menuName,
  setMenu,
  //match,
}) => {
  //const { menuName } = match.params;

  return (
    <Editor menuName={menuName} code={code} />
  );
};


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(EditorContainer),
);
