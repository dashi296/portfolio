import * as ActionType from './constants';

export interface ISetMenuParams {
  menuName: string;
}

export const setMenu = (params: ISetMenuParams) => ({
  type: ActionType.SET_MENU,
  payload: { params }
});


export interface IUpdateTerminalParams {
  menuName: string;
}

export const updateTerminal = (params: IUpdateTerminalParams) => ({
  type: ActionType.UPDATE_TERMINAL,
  payload: { params }
});

export type MenuAction =
  ReturnType<typeof setMenu>
  | ReturnType<typeof updateTerminal>
  ;
