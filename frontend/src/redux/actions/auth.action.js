import * as loginRequest from "../../services/login.request"
const AuthActionType = {
//   LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
//   LOGOUT_FAIL: "LOGOUT_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};


const LoginAuthAction = (loginState, history, setErrorHandler) => 
{
  return async (dispatch) => 
  {
    try 
    {
        const res = await loginRequest.postLogin(loginState)
        dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: res });
        history.push("/tableUser");
    } catch (error) 
    {
      if (error.response) 
      {
        dispatch({
          type: AuthActionType.LOGIN_FAIL,
          payload: error.response.data.message,
        });
      }
      setErrorHandler({ hasError: true, message: error.response });
    }
  };
};

// const LogOutAuthAction = (history) => 
// {
//   return async (dispatch) => 
//   {
//     try 
//     {
//       const res = await axios.get("/logout");
//       const { data } = res;
//       dispatch({
//         type: AuthActionType.LOGOUT_SUCCESS,
//         payload: data.message,
//       });
//       history.push("/");
//     } catch (error) {
//       if (error.response) {
//         dispatch({
//           type: AuthActionType.LOGOUT_FAIL,
//           payload: error.response.data.message,
//         });
//       }
//     }
//   };
// };

export {
  AuthActionType,
//   LogOutAuthAction,
  LoginAuthAction,
};