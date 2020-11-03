import { GET_COORDINATES_CITY_REQUEST, HANDLE_CONTENT } from "./actionTypes";

export const initialState = {
  content: "/login",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
