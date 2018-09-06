import * as _ActionTypes from '../constants/ActionTypesUserList';

export function AddCoworker(coworkerData) {
  return {
    type: _ActionTypes.ADD_COWORKER,
    coworkerData
  };
}

export function ReloadCoworkers(coworkersData) {
  return {
    type: _ActionTypes.REFRESH_COWORKERS,
    coworkersData
  };
}