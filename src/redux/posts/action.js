import { FETCH_DATA, FETCH_DATA_SUCCESS } from "../actions";

export const fetchData = () => ({
  type: FETCH_DATA,
});
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
