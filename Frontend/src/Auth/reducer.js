import {
  GET_COORDINATES_CITY_REQUEST,
  GET_COORDINATES_CITY_SUCCESS,
  GET_COORDINATES_CITY_FAILURE,
  CURRENT_LOCATION_SUCCESS,
  CURRENT_LOCATION_FAILURE,
  HANDLE_CONTENT,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT,
} from "./actionTypes";

export const initialState = {
  // content: "/login",
  suggestions: [],
  isLoading: false,
  isError: false,
  errMsg: "",
  register: false,
  login: false,
  lat: "",
  lon: "",
  currMsg: "",
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

    case CURRENT_LOCATION_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        lat: action.payload.latitude,
        lon: action.payload.longitude,
      };

    case CURRENT_LOCATION_FAILURE:
      return {
        ...state,
        currMsg: action.err,
      };

    case REGISTER_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errMsg: "",
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: "",
        register: true,
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: action.payload,
      };

    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errMsg: "",
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: "",
        login: true,
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        login: false,
        register: false,
      };

    default:
      return state;
  }
};
