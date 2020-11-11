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
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
  LOGOUT,
  CHANGE_PAGE,
  PUSH_ORDER,
  GET_PLACE_NAME,
  PAYMENT_SUCCESS,
  PAYMENT_FAILURE,
  GET_USER_ORDERS,
  ORDERS_FAILURE,
  BILL_AMOUNT,
} from "./actionTypes";
import { loadData, saveData } from "../localStorage";

export const initialState = {
  suggestions: [],
  user: loadData("delivaryUser") || [],
  isLoading: false,
  isError: false,
  errMsg: "",
  register: false,
  login: loadData("delivaryAuth") || false,
  lat: "",
  lon: "",
  currMsg: "",
  restaurants: [],
  activePage: loadData("delivaryPage") || 1,
  totalRestaurants: "",
  orders: [],
  place: loadData("delivaryPlace") || "",
  payment: false,
  userOrders: [],
  billAmt: 0,
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
        place: "",
      };

    case CURRENT_LOCATION_SUCCESS:
      saveData("deliveryAuth", true);
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
      saveData("delivaryAuth", true);
      saveData("delivaryUser", action.payload.user);
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: "",
        login: true,
        user: action.payload.user,
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: action.payload,
      };

    case FETCH_RESTAURANTS_SUCCESS:
      saveData("delivaryPage", action.payload.page);
      return {
        ...state,
        restaurants: action.payload.data,
        errMsg: "",
        activePage: action.payload.page,
        totalRestaurants: action.payload.total,
        isError: false,
      };

    case FETCH_RESTAURANTS_FAILURE:
      return {
        ...state,
        isError: true,
        errMsg: action.payload,
      };

    case LOGOUT:
      saveData("delivaryAuth", false);
      saveData("delivaryUser", []);
      saveData("delivaryPlace", "");
      return {
        ...state,
        login: false,
        register: false,
        user: [],
        place: "",
        payment: false,
        userOrders: [],
      };

    case CHANGE_PAGE:
      saveData("delivaryPage", action.payload);
      return {
        ...state,
        activePage: action.payload,
      };

    case PUSH_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        payment: false,
      };
    case GET_PLACE_NAME:
      saveData("delivaryPlace", action.payload);
      return {
        ...state,
        place: action.payload,
      };

    case PAYMENT_SUCCESS:
      return {
        ...state,
        payment: true,
      };

    case PAYMENT_FAILURE:
      return {
        ...state,
        payment: false,
      };

    case GET_USER_ORDERS:
      return {
        ...state,
        userOrders: action.payload,
      };

    case ORDERS_FAILURE:
      return {
        ...state,
        isError: true,
        errMsg: action.payload,
      };

    case BILL_AMOUNT:
      return {
        ...state,
        billAmt: action.payload,
      };

    default:
      return state;
  }
};
