import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cards from "../cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './Services.css';
//import CartContext from "../context/cartContext";
import {useCart} from 'react-use-cart';
const PRODUCTS_URL = '/services/all/';


let quantity = 0;
function Waxing() {

const {addItem} = useCart();


  return (

    <>

      <div className="container fluid  pt-8">
      
        <h1 align="center" font-color="white">WAXING SERVICES</h1>
        < div>
       <ul id="top-nav">
                  <li>
                    < Link className="active" to ="/Gel">Gel</Link>
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
        <div className="row">

          {cards.map((curlElem) => {
            const { category, name, imageURL, max_recipients, description, duration, location_requirements, price } = curlElem;
            const addToCart = () =>{
              addItem(curlElem);
            }
            if (category === "Waxing") {
              return (

                <div className="col-md-3 mb-2">
                  <div className="card">
                    <img src={` ./images/${imageURL}`} className="card-img-top" alt="thumbnail" />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{description}</p>
                      <p className="card-text">{location_requirements}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">R {price}</li>
                      <li className="list-group-item">Maximun Recipients: {max_recipients}</li>
                      <li className="list-group-item">Duration: {duration}</li>
                    </ul>
                    <div className="card-body">
                      
                        <button onClick={() => addToCart(curlElem)} className="Tbtn">+ Add to cart </button>
                    </div>
                  </div>

                </div>)
            }
            return (console.log("no items in waxing category"))
          })}
        </div>
      </div>
    </>
  )
}
export default Waxing;