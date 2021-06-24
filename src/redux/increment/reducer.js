import { INCREMENT, DECREMENT, FETCH_DATA_SUCCESS } from "../actions";

const init = {
  counter: 0,
};

export default (state = init, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
