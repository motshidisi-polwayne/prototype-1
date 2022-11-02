import React ,{useState,useEffect,useRef}from "react";
import "./FormStyles.css";
import {Link} from "react-router-dom";
import {faTimes,faCheck,faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import Header from "./Components/Header";
import axios from './Axios';

const USER_REGEX=/^[a-zA-Z]{3,25}$/;
const PASSWORD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,25}$/;
const PHONE_NUMBER_REGEX=/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{2}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const REGISTER_URL='/auth/users/';

 function Register(){
    const userRef=useRef();
    const errRef=useRef();
    const [username,setUsername]=useState('');
    const [validName, setValidName]=useState(false);
    const [userFocus,setUserFocus]=useState(false);

    const [phone_number,setPhoneNumber]=useState('');
    const [validPhoneNumber, setValidPhoneNumber]=useState(false);
    const [PhoneNumberFocus,setPhoneNumberFocus]=useState(false);

    const [password,setPassword]=useState('');
    const [validPassword, setValidPassword]=useState(false);
    const [PasswordFocus,setPasswordFocus]=useState(false);

    const [re_password,setRe_password]=useState('');
    const [validRe_password, setValidRe_password]=useState(false);
    const [Re_passwordFocus,setRe_passwordFocus]=useState(false);

    const [errMsg,setErrMsg]=useState('');
    const [approved,setApproved]=useState(false);

    const [formData,setData]=useState(
        {email:"",date_of_birth:"",gender:""}
    )
    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        const result = USER_REGEX.test(username);
        console.log(result);
        console.log(username);
        setValidName(result);
    },[username])

    useEffect(()=>{
        const result = PASSWORD_REGEX.test(password);
        console.log(result);
        console.log( password);
        setValidPassword(result);
        const match = password === re_password;
        setValidRe_password(match);
        },[password,re_password])
    
    useEffect(()=>{
            const result = PHONE_NUMBER_REGEX.test(phone_number);
            console.log(result);
            console.log(phone_number);
            setValidPhoneNumber(result);
        },[phone_number])
    
    useEffect(()=>{
            setErrMsg('');
        },[phone_number,username,password,re_password])    
    
        
    
    function handleDataChange(event) {
        const newData={...formData}
        newData[event.target.id] = event.target.value
        setData(newData) 
        console.log(newData)


     }
    async function submitHandler (event) {
        event.preventDefault();
        try {
            const response = await axios.post(REGISTER_URL,JSON.stringify({username,
                password,re_password,phone_number,email: formData.email,
                date_of_birth: formData.date_of_birth,
                gender: formData.gender,}),
                {
                    headers:{'Content-Type':'application/json'},
                    
                }
                );
                
                console.log(response.accessToken);
                console.log("data posted " + response);
                console.log(response.data);
                setApproved(true)
        } catch (error) {
            
            if (!error?.response){
                setErrMsg('no server response');
            }
            else if(error.response?.status===409){
                setErrMsg('username taken');

            }
            else{
                setErrMsg('registration failed');
            }
            errRef.current.focus();
        } 
     }
    return (
        
        <>
        <div className="containers">
         {approved ?( <section>
            <h1>sSuccessfuly Registered!</h1>
            <p>you have successfuly registered.<br/>
            the next step is to verify your email by going to your email inbox<br/>
            and clicking on the sent link </p>
            <p> < Link className="active"to ="/login">Login</Link></p>
        </section>):(
        <section>
        
            <p ref={errRef} className={errMsg? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>

            <h1>Register</h1>

                <form >
                       
                    
                        <label htmlFor="email">Email:</label>
                         <input
                    type="email"
                    placeholder="Email"
                    onChange={(event)=>handleDataChange(event)}
                    id="email"
                    value={formData.email}
                    required
                    />
                     <label htmlFor="username">Names:
                        <span className={validName ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validName || !username? "hide":"invalid"}>
                        <FontAwesomeIcon icon={faTimes}/>
                        </span>
                    
                    </label> 
                    <input
                    type="text"
                    placeholder="User Name"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(event)=>setUsername(event.target.value)}
                    id="username"
                    required
                    aria-invalid={validName ? "true":"false"}
                    aria-describedby="uidnote"
                    onFocus={()=>setUserFocus(true)}
                    onBlur={()=>setUserFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && username && !validName ? "instructions"
                    : "offscreen"} >
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        User name must contain:<br/>
                        4 to 25 chracters.<br/>
                        and must only contain letters.
                    
                    </p>
                      <label htmlFor="phone_number">
                            Cell Number :
                            <span className={validPhoneNumber ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validPhoneNumber || !phone_number? "hide":"invalid"}>
                        <FontAwesomeIcon icon={faTimes}/>
                        </span>
                         </label> 
                     <input
                    type="text"
                    placeholder="Cell Number"
                    onChange={(event)=>setPhoneNumber(event.target.value)}
                    id="phone_number"
                    autoComplete="off"
                    required
                    aria-invalid={validPhoneNumber ? "false":"true"}
                    aria-describedby="pnidnote"
                    onFocus={()=>setPhoneNumberFocus(true)}
                    onBlur={()=>setPhoneNumberFocus(false)}
                    />
                    <p id="pnidnote" className={PhoneNumberFocus && phone_number && !validPhoneNumber ? "instructions"
                    : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        Phone Number must contain:<br/>
                        10 chracters.<br/>
                        +27 extension recommended.<br/>
                        followed by 9 digits.
                    
                    </p>
                     <label htmlFor="date_of_birth">Date of Birth :</label> 
                    <input
                    type="date"
                    placeholder="Date of Birth"
                    onChange={(event)=>handleDataChange(event)}
                    id="date_of_birth"
                    value={formData.date_of_birth}
                    required
                    />

                   
                   <label htmlFor="gender">Gender:</label> 
                   <select 
                    
                    onChange={(event)=>handleDataChange(event)}
                    id="gender"
                    value={formData.gender} required>
                        <option >-select gender-</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    
                    
                    
                    <label htmlFor="password">
                        Password:
                        <span className={validPassword ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validPassword || !password? "hide":"invalid"}>
                        <FontAwesomeIcon icon={faTimes}/>
                        </span>
                    </label>   
                    <input
                    type="password"
                    placeholder="new Password"
                    autoComplete="off"
                    onChange={(event)=>setPassword(event.target.value)}
                    id="password"
                   // value={setPassword.password}
                    required
                    aria-invalid={validPassword ? "false":"true"}
                    aria-describedby="pwdnote"
                    onFocus={()=>setPasswordFocus(true)}
                    onBlur={()=>setPasswordFocus(false)}
                    />
                    <p id="pwdnote" className={PasswordFocus && password && !validPassword ? "instructions"
                    : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        password must contain:<br/>
                        8 to 25 characters.<br/>
                        uppercase and lowercase letters.<br/>
                        a number and special character.
                    
                    </p>
                   

                   
                        <label htmlFor="re_password">
                            Confirm Password :
                            <span className={validRe_password ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validRe_password || !re_password? "hide":"invalid"}>
                        <FontAwesomeIcon icon={faTimes}/>
                        </span>
                        </label> 
                    <input
                    type="password"
                    placeholder="repeat new Password"
                    autoComplete="off"
                    onChange={(event)=>setRe_password(event.target.value)}
                    id="re_password"
                    //value={setRe_password.re_password}
                    required
                    aria-invalid={validRe_password ? "false":"true"}
                    aria-describedby="confirmnote"
                    onFocus={()=>setRe_passwordFocus(true)}
                    onBlur={()=>setRe_passwordFocus(false)}
                    />
                    <p id="confirmnote" className={Re_passwordFocus && re_password && !validRe_password ? "instructions"
                    : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        password must match first input field<br/>
                    </p>
                   
                    <button className="Tbtn" onClick={(event)=> submitHandler(event) } disabled={!validName || !validPassword||!validPhoneNumber||!validRe_password ? true:false}>register</button>
                    
                    <div>
                   <p>already a user? < Link className="active"to ="/login">Login</Link> </p> 
                    </div>
                    
                    
                </form>
             
        </section>)}
        </div>
        </>
    )
 }
 export default Register;