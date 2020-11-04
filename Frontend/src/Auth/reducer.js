import {
  GET_COORDINATES_CITY_REQUEST,
  GET_COORDINATES_CITY_SUCCESS,
  GET_COORDINATES_CITY_FAILURE,
  HANDLE_CONTENT,
} from "./actionTypes";

export const initialState = {
  content: "/login",
  suggestions: [],
  isLoading: false,
  isError: false,
  errMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CONTENT:
      return {
        ...state,
        content: action.payload,
      };

    case GET_COORDINATES_CITY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errMsg: "",
      };

    case GET_COORDINATES_CITY_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: "",
        suggestions: action.payload,
      };

    case GET_COORDINATES_CITY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: action.payload,
      };

    default:
      return state;
  }
};
