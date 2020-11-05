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
  CURRENT_LOCATION_SUCCESS,
  CURRENT_LOCATION_FAILURE,
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
  LOGOUT,
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
    .then((res) => {
      dispatch(getCoordinatesCitySuccess(res.data.features));
    })
    .catch((err) => dispatch(getCoordinatesCityFailure(err)));
};

// get current location

export const currLocationSuccess = (payload) => ({
  type: CURRENT_LOCATION_SUCCESS,
  payload,
});

// fetch restaurants api

export const fetchRestaurantsRequest = () => ({
  type: FETCH_RESTAURANTS_REQUEST,
});

export const fetchRestaurantsSuccess = (payload) => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  payload,
});

export const fetchRestaurantsFailure = (payload) => ({
  type: FETCH_RESTAURANTS_FAILURE,
  payload,
});

export const fetchRestaurants = (payload) => (dispatch) => {
  dispatch(fetchRestaurantsRequest());
  axios
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${payload}.json?country=in&access_token=${accessToken}`
    )
    .then((res) =>
      axios
        .post(
          "http://localhost:5000/Restaurants?page=1&limit=5",
          res.data.features[0].center
        )
        .then((res) => dispatch(fetchRestaurantsSuccess(res.data)))
    )
    .catch((err) => dispatch(fetchRestaurantsFailure(err)));
};

// This is the idea to post the lat and long to backend//
export const showCurrentLocationSuccess = (payload) => (dispatch) => {
  dispatch(currLocationSuccess(payload));
  axios
    .post("http://localhost:5000/Restaurants?page=1&limit=5", payload)
    .then((res) => dispatch(fetchRestaurantsSuccess(res.data)))
    .catch((err) => dispatch(fetchRestaurantsFailure(err)));
};

export const showCurrentLocationFailure = (payload) => ({
  type: CURRENT_LOCATION_FAILURE,
  payload,
});

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
    .post("http://localhost:5000/login", payload)
    .then((res) => dispatch(loginUserSuccess(res.data)))
    .catch((err) => dispatch(loginUserFailure(err)));
};

// login with google success

export const googleLoginSuccess = (payload) => (dispatch) => {
  let payloadData = {
    first_name: payload.givenName,
    last_name: payload.familyName,
    email: payload.email,
    password: `${payload.givenName}1234`,
  };
  axios
    .post("http://localhost:5000/signup", payloadData)
    .then((res) => dispatch(loginUserSuccess(res.data)))
    .catch((err) => dispatch(loginUserFailure(err)));
};

// login with fb success

export const fbLoginSuccess = (payload) => (dispatch) => {
  let payloadData = {
    first_name: payload.name,
    last_name: payload.name,
    email: payload.email,
    password: `${payload.name}1234`,
  };
  axios
    .post("http://localhost:5000/signup", payloadData)
    .then((res) => dispatch(loginUserSuccess(res.data)))
    .catch((err) => dispatch(loginUserFailure(err)));
};

// logout

export const logoutUser = () => ({
  type: LOGOUT,
});
