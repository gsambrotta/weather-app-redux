import { FETCH_WEATHER } from '../actions/index';

// reducer
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			//state.concat([action.payload.date]) same as below
			return [ ...state, action.payload ]
	}

	return state
}
