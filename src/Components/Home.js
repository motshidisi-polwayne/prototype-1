import React,{Component, useContext} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
   
  
        
            return(
           
            <>
            <div className="container my-0 py-8" >
            <div className="row">
            <div className="col-lg-6 p-0">
            <div className="categories__item categories__large__item set-bg"  style={{  
        backgroundImage: "url(" + "https://img.freepik.com/free-photo/top-view-arrangement-with-beauty-bag-copy-space_23-2148301850.jpg?w=2000" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
            <div className="categories__text">
            <h1>WELCOME TO JEAN'S BEAUTY AND WELLNESS</h1>
            <p>brief description of the business and function of the website</p>
            
            </div>
            </div>
            </div>
            
            
            <div className="col-lg-6 p-0">
            <div className="categories__item categories__large__item set-bg" data-setbg="img/categories/category-2.jpg" style={{  
        backgroundImage: "url(" + "https://img.freepik.com/free-photo/top-view-arrangement-with-beauty-bag-copy-space_23-2148301859.jpg?w=2000" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
            <div className="categories__text">
            <h4>WHAT DO WE OFFER ?</h4>
            <p><ul id="top-nav">
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
              </ul>
              </p>
           
            
          
            </div>
            </div>
            </div>
            </div>
            </div>
            </>
          
        )
        
        
};

