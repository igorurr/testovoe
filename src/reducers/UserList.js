import * as _ActionTypes from '../constants/ActionTypesUserList';
import DefaultUserList from '../constants/DefaultUserList';

const initialState = {
	List: DefaultUserList
};

export default function UserList(state = initialState, action) {
	console.log(action.type, state);
  switch (action.type) {
    case _ActionTypes.ADD_COWORKER:
      return {
        List: [
			...state.List,
			{
				dateOfBirth:	action.coworkerData.dateWasBorn,
				firstName:		action.coworkerData.firstName,
				lastName:		action.coworkerData.lastName,
				ava:			'https://pp.userapi.com/c846322/v846322871/a0c39/V8e-pUPjt8w.jpg?ava=1',
				post:			action.coworkerData.post,
				email:			action.coworkerData.email,
			}
		]
      }
	  
    case _ActionTypes.REFRESH_COWORKERS:
      return {
        List: DefaultUserList
      }

    default:
      return state;
  }
}