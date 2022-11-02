import {Link} from "react-router-dom";
//import {FaBars,FaTimes} from "react-icons/fa";
import {Component} from "react";
import "./HeaderStyles.css";
//import logoimg from "/images/logo.PNG"
const token =localStorage.getItem('access');
class Header extends Component{
 

 state={clicked :false};
  handleclick=()=>{
  
  this.setState({clicked:!this.state.clicked})
 }
    render(){
    return (
        
          <>
          <nav >
          <img src="/images/logo.PNG" className="logo" alt="logog"></img>
                  <h1> JEANS BEAUTY</h1>
              
              <ul id="navbar" className={this.state.clicked ? "#navbar active" :"#navbar"}>
                  <li>
                    < Link className="active-1" to ="/">Home</Link>
                  </li>
                  <li>
                  < Link className="active" to ="/register">Register</Link>
                  </li>
                  <li>
                  < Link className="active" to ="/services">Services</Link>
                  </li>
                  <li>
                  < Link className="active"to ={token? '#': "/login"}>Login</Link> 
                  </li>
                  <li>
                   < Link className="active"to ="/dashboard">Dashboard</Link>
                  </li>
                 
              </ul>
             < div id="mobile" onClick={this.handleclick}>
              <i className={this.state.clicked? "fas fa-times":"fas fa-bars"} >
                  
              </i>
              </div>
          </nav>

          
         </>
        )
  }}
  export default Header;