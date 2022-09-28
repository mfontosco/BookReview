import {
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAIL,
  GET_REVIEW_FAIL,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
  GET_SINGLE_REVIEW_FAIL,
  GET_SINGLE_REVIEW_SUCCESS,
  GET_SINGLE_REVIEW_REQUEST,
  UPDATE_REVIEW_FAIL,
  UPDATE_REVIEW_REQUEST,
  UPDATE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  CREATE_REVIEW_RESET,
  GET_REVIEW_RESET,
  GET_SINGLE_REVIEW_RESET,
  UPDATE_REVIEW_RESET,
  DELETE_REVIEW_RESET,
} from "../constants/BookConstants";

const createBookReducer = (state={}, action) => {
  switch (action.type) {
    case CREATE_REVIEW_REQUEST:
      return { loading: true };
    case CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true, bookreview: action.payload };
    case CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
const getAllBooksReducer = (state={}, action) => {
  switch (action.type) {
    case GET_REVIEW_REQUEST:
      return { loading: true };
    case GET_REVIEW_SUCCESS:
      return { loading: false, success: true, bookreview: action.payload };
    case GET_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case GET_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
const getSingleBookReducer = (state={}, action) => {
  switch (action.type) {
    case GET_SINGLE_REVIEW_REQUEST:
      return { loading: true };
    case GET_SINGLE_REVIEW_SUCCESS:
      return { loading: false, success: true, bookreview: action.payload };
    case GET_SINGLE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case GET_SINGLE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
const updateBookReducer = (state={}, action) => {
  switch (action.type) {
    case UPDATE_REVIEW_REQUEST:
      return { loading: true };
    case UPDATE_REVIEW_SUCCESS:
      return { loading: false, success: true, bookreview: action.payload };
    case UPDATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
const deleteBookReducer = (state={}, action) => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return { loading: true };
    case DELETE_REVIEW_SUCCESS:
      return { loading: false, success: true, bookreview: action.payload };
    case DELETE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export {
  getAllBooksReducer,
  getSingleBookReducer,
  createBookReducer,
  updateBookReducer,
  deleteBookReducer,
};
