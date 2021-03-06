import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import { faPhone,faPortrait} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../img/l3s.png"
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { LoginAuthAction } from "../../redux/actions/auth.action";

import "../css/core.css";
import "../css/input.css";
import "../css/pages/login.page.css";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
// function index()



function Login(props) 
{
    const { login } = props;
  
    const [errorHandler, setErrorHandler] = useState({
      hasError: false,
      message: "",
    });
  
    const [loginState, setLoginState] = useState({});
    const history = useHistory();
    return(

        <header errorHandler={errorHandler} className="body bodyLogin">
        
            <div className="contactBar">
                <Link href="tel:+33972883959" id="contactBar-link" className="contactBar-phone">
                <FontAwesomeIcon icon={faPhone} />
                    +33 (0)9 72 88 39 59
                </Link>

                <Link  href="mailto:contact@l-3s.com" id="contactBar-link" className="contactBar-mail">
                <FontAwesomeIcon icon={faPortrait} />
                    contact@l-3s.com
                </Link>
            </div>
            <div className="headBar">
                    <a href="https://web.l-3s.com/" className="headBar-logo">
                        <img src={logo} alt="L3S" className="headBar-logo-img"/>
                    </a>
            </div>

            <div className="content">
                <div className="img">

                </div>

                <div className="formLogin">
                    <form onSubmit={(event) => 
                    {
                        event.preventDefault();
                        login(loginState, history, setErrorHandler);
                    }}>
                        <h3 className="formLogin-title">Connexion ?? Pleiade</h3>

                        <div className="formLogin-block ">
                            <input 
                                className="formLogin-block-input" 
                                type="email" 
                                name="email" 
                                placeholder="Enter email" 
                                // onChange={this.handleChange}
                                onChange={(event) => 
                                {
                                    const email = event.target.value;
                                    setLoginState({ ...loginState, ...{ email } });
                                }}
                            />
                        </div>

                        <div className="formLogin-block ">
                            <input 
                                className="formLogin-block-input" 
                                type="password" 
                                name="password" 
                                placeholder="Enter password" 
                                /* onChange={this.handleChange}*/
                                onChange={(event) => 
                                {
                                    const password = event.target.value;
                                    setLoginState({ ...loginState, ...{ password } });
                                }}
                            />
                        </div>

                        <div className="formLogin-button">
                            <Button size="sm" color="danger" className="formLogin-submit-content" type="submit">Login</Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="licenceBar">
                <div className="licenceBar-body"></div>
            </div>
        </header>
    );
}    


const mapStateToProps = (state) => {
    return {
      user: state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (loginState, history, setErrorHandler) => {
        dispatch(LoginAuthAction(loginState, history, setErrorHandler));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
