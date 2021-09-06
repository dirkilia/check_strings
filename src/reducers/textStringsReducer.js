import axios from "axios";

const SET_STRINGS = "SET_STRINGS";
const DELETE_STRINGS = "DELETE_STRINGS";
const SET_ERROR = "SET_ERROR";

let initialState = {
  strings_array: [],
  error_data: "",
  error_status: "",
};

const textStringsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STRINGS:
      return {
        ...state,
        strings_array: [...state.strings_array, action.string_to_array],
      };
    case DELETE_STRINGS:
      return {
        ...state,
        strings_array: [],
      };
    case SET_ERROR:
      return {
        ...state,
        error_data: action.error_data,
        error_status: action.error_status,
      };
    default:
      return {
        ...state,
      };
  }
};

/**
 * Action Creators:
 * -for handling(ADD, DELETE) identificators of strings
 * -for setting error data
 */

const setStrings = (string_to_array) => {
  return {
    type: "SET_STRINGS",
    string_to_array,
  };
};

const deleteStrings = () => {
  return {
    type: "DELETE_STRINGS",
  };
};

const setError = (error_data, error_status) => {
  return {
    type: "SET_ERROR",
    error_data,
    error_status,
  };
};

export const getStrings = (strings_to_search) => {
  const unique_strings = new Set(strings_to_search);
  return (dispatch) => {
    dispatch(deleteStrings());
    // get strings by all identificators in the Set
    for (let single_str of unique_strings) {
      axios
        .get(
          `https://tmgwebtest.azurewebsites.net/api/textstrings/${single_str}`,
          {
            headers: {
              "TMG-Api-Key": "0J/RgNC40LLQtdGC0LjQutC4IQ==",
            },
          }
        )
        .catch((error) => {
          dispatch(setError(error.response.data, error.response.status));
        })
        .then((res) => {
          if (res !== undefined) {
            dispatch(setError(""));
            dispatch(setStrings(res.data.text));
          }
        });
    }
  };
};

export default textStringsReducer;
