import { useContext, useState, useReducer, useEffect } from "react";

import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from "react-use-cart";
import 'bootstrap';
import axios from "../Axios";
import { Link ,useLocation,Navigate} from "react-router-dom";
import './cart.css';
import AuthContext from "../context/Authentication";
import{connect} from 'react-redux';
const BOOKING_URL='/appointment/request/';


 function Cart2(isAuthenticated) {

    const {
        isEmpty,
        items,
        cartTotal,
        itemTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

   

    const cartDuration = items.reduce((durations, item) => durations + item.quantity * item.duration, 0);
    const {auth}=useContext(AuthContext);

   
    const[time,setTime]=useState('');
    const[date,setDate]=useState('');



    const user=auth.email;
   const a= date + " "+ time;
   var b=moment(a);
   var c =b.add(cartDuration,'minutes');


  

   const token = localStorage.getItem('access');
        

    const bookingList=
        
        items.map((item, index) => {
          const name=item.name;
          const service_id=item.id;
          const recipients=item.quantity;
          const price=item.itemTotal;
         
          const booking={service_id,name,recipients,itemTotal}
          return(booking)
          
          })

          function post(){

          }
          
console.log(bookingList);

       
       const [errMsg,setErrMsg]=useState('');


    useEffect(()=>{
            setErrMsg('');
        },[]) ; 
   async function makeAppointmentHandler() {
    
  
    try {
        const response = await axios.post(BOOKING_URL,JSON.stringify({  "booking":items,"start_date":date,"start_time":time,
       "end_time":b.format("h:mm"), "total_price": cartTotal}),
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
    if(!token){
      return <Navigate to="/login"/>;
     }

   
    return (
        <>
        <div className="container py-10 justify-content-between">
          <div className="row  ">
            <div className="col">
             
      
                  <div className="row     --bs-gutter-y-1">
      
                    <div className="col-lg-9">
                      <h5 className="mb-3"><Link className="active" to ="/services"><i
                            className="fas fa-long-arrow-alt-left me-2"></i>ADD MORE SERVICES</Link></h5>
                      <hr/>
      
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have {items.length}items in your cart</p>
                        </div>
                       
                      </div>
                      {items.map((item, index) => {
                     
                      return (<>
                      <div className="card mb-1">
                     
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center ">
                              <div>
                                <img
                                src={` ./images/${item.imageURL}`}
                                  className="img-fluid  rounded-start w-100 imh" alt="thumbnail"/>
                              </div>
                              <div className="mr-1 justify-content-between">
                                <h5>{item.name}</h5>
                                <p className="small mb-0">R {item.price }</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-evenly">
                              <div className=" mr-2">
                                <h5 className=" mr-2">{item.quantity} recipients</h5>
                              </div>
                              <div className=" mr-2">
                                <h5 >R{item.price * item.quantity}</h5>
                              </div>
                                  <div className="d-flex align-items-center justify-content-between">
                                      <button onClick={() => {updateItemQuantity(item.id,item.quantity-1)
                                      }} >-</button>
                  
                                      <button onClick={() => {updateItemQuantity(item.id,item.quantity+1)}} >+</button>
                                  </div>
                              <button onClick={() => removeItem(item.id)} style={{color: "blue"}}><i className="fas fa-trash-alt ml-1"></i></button>
                            </div>
                     
                          </div>
                        </div>
                      </div>
                     
      
                      </>
                      )

                  })}
                   {
                      !isEmpty && (
                          <>
                        
                        <div>
                          <button
                          onClick={emptyCart}
                          
                        >
                          Empty Cart
                        </button>
                        
                          </div>
                          </>
                      )
                  }<br></br>
                    </div> 
                    <div className="col-md-3 px-1 pt-8">
      
                    
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h5 className="mb-0">ADDRESS</h5>
                           
                          </div>
      
                          <p className="small mb-1">instructions and travel rates</p>
                          
      
                          <form className="mt-1">
                            
      
                            <div className="form-outline form-white mb-1">
                            <label  htmlFor="date">Date </label><br/>
                              <input type="date"  onChange={(event)=>setDate(event.target.value)}
                                      id="date"
                                      value={date}
                                      required
                                 />
                              
                            </div>
      
                            
                                <div className="form-outline form-white mb-1">
                                <label htmlFor="time">Time</label><br/>
                                  <input type="time" 
                                      onChange={(event)=>setTime(event.target.value)}
                                      id="time"
                                      value={time}
                                      required/>
                                  
                                  </div>
                              
                              
      
                          </form>
      
                          <hr className="my-2"/>
      
                          <div>
                            <p className="mb-2">Subtotal:R {cartTotal}</p>
                            
                          </div>
      
      
                          <div>
                            <p className="mb-2">Total: R {cartTotal}</p>
                            <p className="mb-2">Total duration:{cartDuration} minutes</p>
                           
                          </div>
      
                          <button  className="btn btn-info btn-block btn-lg" onClick={makeAppointmentHandler}>
                            
                            
                              <span>Make Appointment <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                            
                          </button>
      
                        </div>
                      </div>
      
                   
      
                </div>
             
          </div>
        </div>
      </>
    )
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default Cart2;