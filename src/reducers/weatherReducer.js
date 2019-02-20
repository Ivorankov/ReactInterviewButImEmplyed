import { GET_FORECAST } from '../constants/types';

const initialState = {
  forecast: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state,
        forecast: action.data
      };
    default:
      return state;
  }
}