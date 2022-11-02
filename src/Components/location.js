import { useContext, useState, useReducer, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "./Axios";



const LOCATION_URL= '/appointment/location/';


 function Location(isAuthenticated) {

   
   
    const[street,setStreet]=useState('');
    const[surburb,setSuburb]=useState('');
    const[city,setCity]=useState('');
    const[zip_code,setZipCode]=useState('');


 
   const token = localStorage.getItem('access');

       
       const [errMsg,setErrMsg]=useState('');


    useEffect(()=>{
            setErrMsg('');
        },[]) ; 
   async function setLocation() {
    
  
    try {
        const response = await axios.post(LOCATION_URL,JSON.stringify({street,surburb,city,zip_code}),
            {
                headers:{
                  'Content-Type':'application/json',
                  Authorization: `Bearer ${token}`,
                
              },
                
            }
            );
            
          
            
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
        
    }
    
        
    }
   
    return (
        <>
        <div className="container ">
          <div className="row  ">
        
             
      
                    <div className="col ">
      
                    
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h5 className="mb-0">ADDRESS</h5>
                           
                          </div>
      
                          <form className="mt-1">
                            <div className="form-outline form-white mb-1">
                            <label htmlFor="city">City</label><br/>
                              <input type="text" id="city" 
                                placeholder="enter city / town" 
                                onChange={(event)=>setCity(event.target.value)}
                                required
                                />
                                
                              
                            </div>
      
                            <div className="form-outline form-white">
                                <label  htmlFor="typeText">Suburb</label><br/>
                                  <input type="text" id="typeText" 
                                    placeholder="enter saburb or complex"  
                                    onChange={(event)=>setSuburb(event.target.value)}
                                required/>
                              </div>
      
                            
                            <div className="form-outline form-white">
                                <label  htmlFor="typeText">Street</label><br/>
                                  <input type="text" id="typeText" 
                                    placeholder="enter street"  
                                    onChange={(event)=>setStreet(event.target.value)}
                                required/>
                              </div>

                                <div className="form-outline form-white">
                                <label  htmlFor="typeText">Zipcode</label><br/>
                                  <input type="text" id="typeText" 
                                    placeholder="enter Zipcode" 
                                    onChange={(event)=>setZipCode(event.target.value)}
                                    required />
                                </div>
      
                          </form>
      
                          
      
                          <button  className="btn btn-info btn-block btn-lg" onClick={setLocation}>
                            
                            
                              <span>Set Location <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                            
                          </button>
      
                        </div>
                      </div>
      
                   
      
                </div>
             
         

      </>
    )
}

export default Location;