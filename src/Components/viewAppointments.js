import { useContext, useState, useReducer, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap';
import axios from "./Axios";



const BOOKINGS_URL = '/booking/account/<int:user_id>/bookings/';


function Appointments() {

    const token = localStorage.getItem('access');
    const[data,setData]=useState([])
    const [errMsg, setErrMsg] = useState('');


    useEffect(() => {
        setErrMsg('');
    }, []);
    async function appointments (){
        if (localStorage.getItem('access')) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access')}`,
                    'Accept': 'application/json'
                }
            }; 
    
            try {
                const response = await axios.get(BOOKINGS_URL, config);
                setData(response.data);
                console.log(response.data);
        
                
            } catch (err) {
                console.log(err);
                
            }
        }
        } 
        useEffect(() => {
            appointments();
        }, []);

    return (

        <>
            <div >
                <div >
                {data.map((item)=>{
                    <>
                    <div className="col">
                    First in DOM, no order applied
                    </div>
                    <div className="col ">
                    Second in DOM, with a larger order
                    </div>
                    <div className="col ">
                    Third in DOM, with an order of 1
                    </div>
                    <div className="col ">
                    Third in DOM, with an order of 1
                    </div>
                    </>
                })}
                </div>
            </div>
        </>
           
     )
};

            export default Appointments;