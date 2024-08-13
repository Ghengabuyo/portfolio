import { useReducer } from "react";


function reducer(state, action) {

  switch (action.type) {

    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      };

    case 'SET_NAME_ERROR':
      return {
        ...state,
        nameError: action.payload
      };


    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload
      };
    case 'SET_EMAIL_ERROR':
      return {
        ...state,
        emailError: action.payload
      };

    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.payload
      };
    case 'SET_MESSAGE_ERROR':
      return {
        ...state,
        messageError: action.payload
      };

    case 'SUBMIT_FORM':
      return {
        ...state,
        formSubmitted: true,
      };




    default: return state;

  }
}

const useFormPageReducer = () =>
  useReducer(reducer, {
    name: '',
    email: '',
    message: '',
    nameError: '',
    emailError: '',
    messageError: '',
    formSubmitted: false,
  });

export default useFormPageReducer;
