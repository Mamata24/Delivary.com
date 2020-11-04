import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  HANDLE_CONTENT,
  GET_COORDINATES_CITY_REQUEST,
  GET_COORDINATES_CITY_SUCCESS,
  GET_COORDINATES_CITY_FAILURE,
  LOGOUT,
  CURRENT_LOCATION_SUCCESS,
  CURRENT_LOCATION_FAILURE,
} from "./actionTypes";
import { accessToken } from "../accessToken";
import axios from "axios";

// fetching coordinates from search query

export const getCoordinatesCityRequest = () => ({
  type: GET_COORDINATES_CITY_REQUEST,
});

export const getCoordinatesCitySuccess = (payload) => ({
  type: GET_COORDINATES_CITY_SUCCESS,
  payload,
});

export const getCoordinatesCityFailure = (payload) => ({
  type: GET_COORDINATES_CITY_FAILURE,
  payload,
});

export const getCoordinatesByCity = (payload) => (dispatch) => {
  dispatch(getCoordinatesCityRequest());
  axios
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${payload}.json?country=in&access_token=${accessToken}`
    )
    .then((res) => dispatch(getCoordinatesCitySuccess(res.data.features)))
    .catch((err) => dispatch(getCoordinatesCityFailure(err)));
};

// get current location
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export const success = (pos) => ({
  type: CURRENT_LOCATION_SUCCESS,
  pos,
});

export const error = (err) => ({
  type: CURRENT_LOCATION_FAILURE,
  err,
});

export const showCurrentLocation = () => (dispatch) => {
  console.log("request");
  navigator.geolocation.getCurrentPosition(success, error, options);
};

// change content

export const handleContent = (payload) => ({
  type: HANDLE_CONTENT,
  payload,
});

// register a new user

export const registerUserRequest = () => ({
  type: REGISTER_USER_REQUEST,
});

export const registerUserSuccess = (payload) => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserFailure = (payload) => ({
  type: REGISTER_USER_FAILURE,
  payload,
});

export const registerUser = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(registerUserRequest());
  axios
    .post("http://localhost:5000/signup", payload)
    .then((res) => console.log(res))
    .catch((err) => dispatch(registerUserFailure(err)));
  //dispatch(registerUserSuccess(res.data))
};

// login a user

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST,
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFailure = (payload) => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

export const loginUser = (payload) => (dispatch) => {
  dispatch(loginUserRequest());
  axios
    .post("http://localhost:/", payload)
    .then((res) => dispatch(loginUserSuccess(res.data)))
    .catch((err) => dispatch(loginUserFailure(err)));
};

// logout

export const logoutUser = () => ({
  type: LOGOUT,
});
