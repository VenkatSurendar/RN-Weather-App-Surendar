// import { GET_AUTH } from "../Actions/Auth";

// const initialState = {
//   auth_info: null,
// };

// function authReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_AUTH:
//       return { ...state, auth_info: action.payload };
//     default:
//       return state;
//   }
// }

// export default authReducer;

// import {  LOGIN_TYPE, SET_ERROR } from "../actions/types";

// const initialState = {
//     isAuthenticated : false,
//     token: null,
//     data : null,
//     error: ''
// }

// export default (state = initialState, action) => {
//     switch (action.type) {
//         case LOGIN_TYPE:
//             return {
//                 isAuthenticated : true,
//                 token: action.payload.data.login.token,
//                 data : action.payload.data,
//                 error: ''
//             }

//         case SET_ERROR:
//             return {
//                 ...state,
//                 error: action.payload
//             }
//         default:
//             return state
//     }

// }
