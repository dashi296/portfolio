import { Reducer } from 'redux';

import { MenuAction } from './actions';

import * as ActionType from './constants';

import EditorData from '../data/editor';
import TerminalData from '../data/terminal';

export interface IMenuState {
  isSetting: boolean;
  menuName: string;
  settingMenuName: string;
  editorCode: string;
  prevTerminalText: string;
  menuResult: string;
}

export const initialState: IMenuState = {
  isSetting: false,
  menuName: "",
  settingMenuName: "",
  editorCode: "",
  prevTerminalText: "",
  menuResult: "",
};

const menuReducer: Reducer<IMenuState, MenuAction> = (
  state: IMenuState = initialState,
  action: MenuAction,
): IMenuState => {
  switch (action.type) {
    case ActionType.SET_MENU: {
      const { menuName } = action.payload.params;
      const editorCode = EditorData[menuName];

      return {
        ...state,
        isSetting: true,
        menuName: menuName,
        settingMenuName: menuName,
        editorCode: editorCode,
      };
    }

    case ActionType.UPDATE_TERMINAL: {
      const { menuName } = action.payload.params;

      const execCode = `ruby ${menuName}.rb`
      const terminalPhrase = "dashi-MBP:portfolio dashi$ ";
      const menuResult = TerminalData[menuName];
      const prevTerminalText = (state.prevTerminalText + terminalPhrase + execCode + menuResult).trim() + "\n";
      return {
        ...state,
        isSetting: false,
        settingMenuName: "",
        prevTerminalText: prevTerminalText,
      };
    }

    default: {
      return state;
    }
  }
};

export default menuReducer;
