import { request } from "graphql-request";
import {
  TEST_SUCCESS,
  // USER_LOGIN_SUCCESS,
  // USER_PROFILE_REQUEST,
  // USER_PROFILE_RECEIVED,
  // USER_PROFILE_ERROR,
  // USER_SET_ID,
  USER_LOGOUT,
} from "./constants";

export const testAttempt = () => {
  return (dispatch) => {
    const query = `{
      books {
        title
        author
      }
    }`;
    request("http://localhost:4000/", query).then((data) =>
      dispatch(testSuccess(data))
    );
  };
};

export const testSuccess = (data) => {
  console.log(data);
  return {
    type: TEST_SUCCESS,
    data,
  };
};

// export const userLoginAttempt = (username, password) => {
//   return (dispatch) => {
//     return requests
//       .post(`/login_check`, { username, password }, false)
//       .then((response) =>
//         dispatch(userLoginSuccess(response.token, response.id))
//       );
//   };
// };
// export const userLoginSuccess = (token, userId) => {
//   return {
//     type: USER_LOGIN_SUCCESS,
//     token,
//     userId,
//   };
// };

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

// export const userSetId = (userId) => {
//   return {
//     type: USER_SET_ID,
//     userId,
//   };
// };

// export const userProfileRequest = () => {
//   return {
//     type: USER_PROFILE_REQUEST,
//   };
// };

// export const userProfileReceived = (userId, userData) => {
//   return {
//     type: USER_PROFILE_RECEIVED,
//     userData,
//     userId,
//   };
// };

// export const userProfileError = (userId) => {
//   return {
//     type: USER_PROFILE_ERROR,
//     userId,
//   };
// };

// export const userProfileFetch = (userId) => {
//   return (dispatch) => {
//     dispatch(userProfileRequest());
//     return requests
//       .get(`/users/${userId}`, true)
//       .then((response) => dispatch(userProfileReceived(userId, response)))
//       .catch(() => dispatch(userProfileError(userId)));
//   };
// };
