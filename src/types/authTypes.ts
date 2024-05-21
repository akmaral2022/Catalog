export interface AuthState {
  email: string;
  password: string;
}

export enum AuthActionTypes {
  SET_EMAIL = "SET_EMAIL",
  SET_PASSWORD = "SET_PASSWORD",
}

export interface SetEmailAction {
  type: AuthActionTypes.SET_EMAIL;
  payload: string;
}

export interface SetPasswordAction {
  type: AuthActionTypes.SET_PASSWORD;
  payload: string;
}

export type AuthAction = SetEmailAction | SetPasswordAction;