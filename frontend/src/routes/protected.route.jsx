import React, {useState, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie'
import * as LoginRequest from "../services/login.request"
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, auth , ...rest}) =>
{
    // let [isAuth, setIsAuth] = useState(false)


    //     let token = Cookies.get("token")
    //     if(token)
    //     {
    //         LoginRequest.userAuth().then((result) => 
    //         {
    //             console.log(`resultat : ${result}`)
    //             setIsAuth(result)
    //             console.log(`isAuth : ${isAuth}`)
    //         })
    //     }

    console.log(auth.isLoggedIn)
    
    return (
        <Route {...rest} render={ props =>
            !auth.isLoggedIn ? (
                <Redirect to={{pathname:"/login", state: {from: props.location }}}/>
                ) : (
                <Component {...props} />
                )
        }/>
    );
    
}

const mapStateToProps = (state) => {
    return {
      auth: state.authState,
    };
  };

export default connect(mapStateToProps)(ProtectedRoute);