import { Action, createReducer, on } from "@ngrx/store"
import { loginFailure, loginSuccess } from "./login.action"


export interface State {
  user: any,
  token: string,
  loginError?: string
}


export const initialState: State = {
  token: "",
  user: null
}

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user, token }) => {
    return {
      ...state, token, user

    }
  }),

  on(loginFailure, (state, { error }) => {
    return {
      ...state,
      loginError: error,
      token: "",
      user: null

    }
  })
)
export function authReducer(state: State = initialState, action: Action) {
  return _authReducer(state, action)
}