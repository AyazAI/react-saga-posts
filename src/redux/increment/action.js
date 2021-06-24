import {
  INCREMENT,
  DECREMENT,
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
} from "../actions";

export const incrementCounter = () => ({
  type: INCREMENT,
});

export const decrementCounter = () => ({
  type: DECREMENT,
});
export const fetchData = () => ({
  type: FETCH_DATA,
});
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
