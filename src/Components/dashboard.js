import React, { useEffect } from "react";
//import { getUser, removeUserSession } from "./context/common";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import Login from "./Login";
import {logout,checkAuthenticated} from "../actions/auth";
import { connect } from 'react-redux';
import { Link, Navigate } from "react-router-dom";
import './services/Services.css';
import Location from "./location";
import Appointments from "./viewAppointments";



function Dashboard({logout,isAuthenticated}){
    const token = localStorage.getItem('access');
    const token1 = localStorage.getItem('username');
    //const user =getUser();
    function Logout(){
       logout();
    }

    
     
        if(!token){
            return <Navigate to="/login"/>;
           }

     
    

    return (<> 
        <div className="container   pt-10">
        
        <h1 align="center" font-color="white">WELCOME TO USER DASHBOARD {token1}</h1>
        < div>
       <ul id="top-nav">
                  <li>
                    < Link className="active-1" to ="/Gel">Gel</Link>
                  </li>
                  <li>
                  < Link className="active" to ="/skintherapy">Skin Therapy</Link>
                  </li>
                  <li>
                  < Link className="active" to ="/hands&feet">Hands and Feet</Link>
                  </li>
                  <li>
                  < Link className="active"to ="/massages">Massages</Link> 
                  </li>
                  <li>
                  < Link className="active"to ="/cart">Cart</Link>
                  </li>
                 
              </ul>
       </div>

        
  <div className="row d-flex justify-content-between align-items-center">
    <div className="  col-md-2 ">
        <h1></h1>
        <button onClick={Logout }>logout</button>
    </div>
    <div className="col-md-6">
        <h1>appointmens</h1>
            <Appointments/>
    </div>
    <div className="col-md-2">.col-6<br/><Location/></div>
  </div>
</div>
        </>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ logout })(Dashboard);