import React ,{useState,useEffect,useRef,useContext}from "react";
import "./FormStyles.css";
import {Link,useLocation,useNavigate, redirect, Navigate} from "react-router-dom";
import axios from './Axios';
import AuthContext from "./context/Authentication";
import { setUserSession } from "./context/common";
import { login } from "../actions/auth";
import{connect} from 'react-redux';
import Cart2 from "./cart/Cart2";
import Dashboard from "./dashboard";
//const PASSWORD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,25}$/;
const LOGIN_URL='/auth/jwt/create/';


 function Login({login,isAuthenticated}){
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";
    const userRef=useRef();
    const errRef=useRef();

   
const {setAuth}=useContext(AuthContext);
    const [password,setPassword]=useState('');

    const [email,setEmail]=useState('');

    const [errMsg,setErrMsg]=useState('');
    const [approved,setApproved]=useState(false);

    
    useEffect(()=>{
        userRef.current.focus();
    },[]);
    
    useEffect(()=>{
            setErrMsg('');
        },[email,password]) ; 
    
        
    
    function submitHandler (event) {
        event.preventDefault();
        login(email,password);

      
               
        
     }
     if(isAuthenticated){
      return <Navigate to="/dashboard"/>;
     }
     
    return (
        
        <>
        <div className="containers">
         {approved ?( <section>
            <h1>sSuccessfuly Registered Admin!</h1>
            <p>you have successfuly registered.<br/>
            the next step is to verify your email by going to your email inbox<br/>
            and clicking on the sent link </p>
            <p> < Link className="active"to ="/login">Login</Link></p>
            <p> < Link className="active"to ="/cart">Login</Link></p>
        </section>):(
        <section>
        
            <p ref={errRef} className={errMsg? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>

            <h1>Login</h1>

                <form >
                       
                    
                        <label htmlFor="email">Email:</label>
                         <input
                    type="email"
                    placeholder="Email"
                    ref={userRef}
                    onChange={(event)=>setEmail(event.target.value)}
                    id="email"
                    value={email}
                    required
                    />
                  
                    <label htmlFor="password">
                        Password:
                    </label>   
                    <input
                    type="password"
                    placeholder="new Password"
                    autoComplete="off"
                    onChange={(event)=>setPassword(event.target.value)}
                    id="password"
                   // value={setPassword.password}
                    required
                    
                    />
                   
                   
                    <button className="Tbtn" onClick={(event)=> submitHandler(event) }>Login</button>
                    
                    <div>
                   <p>Are you a new user? < Link className="active"to ="/register">Register</Link> </p> 
                    </div>
                    
                    
                </form>
             
        </section>)}
        </div>
        </>
    )
 };

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps,  { login })(Login);
