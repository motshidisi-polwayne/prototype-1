import React,{useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import cards from "../cards";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap';
import './Services.css';
import axios from "../Axios";
const PRODUCTS_URL='/services/all/';



function Gel(){
  
  const token = localStorage.getItem('access');
  const[data,setData]=useState([])
  const [errMsg, setErrMsg] = useState('');


  useEffect(() => {
      setErrMsg('');
  }, []);

   async function getProducts (){
        
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }; 
    
            try {
                const response = await axios.get(PRODUCTS_URL, config);
                setData(response.data);
                console.log(response.data);
        
                
            } catch (err) {
                console.log(err);
                
            }
        };
      useEffect(() => {
        getProducts ();
      }, []);
    return(
<>

<div className="container fluid  pt-8">

      <h1 align="center" >GEL SERVICES</h1>
      < div>
       <ul id="top-nav">
                  <li>
                    < Link className="active-1" to ="/waxing">Waxing</Link>
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

        {data.map((item)=>{
        item.recipients=1;
        if(item.category_id==="Gel"){ return(
          

          <div className="col-md-3 mb-4">
        <div className="card" key={item.service_id}>
            <img src={item.image1 } className="card-img-top" alt="thumbnail"/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">{item.location_requirements}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">R {item.price}</li>
              <li className="list-group-item">Maximun Recipients: {item.max_recipients}</li>
              <li className="list-group-item">Duration: {item.duration}</li>
            </ul>
            <div className="card-body">
            
             <button  className="w-100">+ Add to cart </button>
           
            </div>
      </div>
      </div>)}
      return (console.log("no items in Massages category"))
    })}
      </div>
    </div>
</>
    )
}
export default Gel;