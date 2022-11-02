import { useContext } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./styles.css";
import { Provider } from "react-redux";
import Register from "./Components/Register";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Waxing from "./Components/services/Waxing";
import Categories from "./Components/Categories";
import Gel from "./Components/services/Gel";
import Massages from "./Components/services/Massages";
import SkinTherapy from "./Components/services/SkinTherapy";
import HandsAndFeet from "./Components/services/Hands&Feet";
import AuthContext from "./Components/context/Authentication";
import Cart2 from "./Components/cart/Cart2";
import Dashboard from "./Components/dashboard";
import store from "./store";

function App() {
 
  
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
    
     <Header/>
      <Routes>
      <Route  path="/" element={<Home/>} exact/>
    
      <Route  path="/login" element={<Login/>} />
      <Route  path="/services" element={<Categories/>} />
      <Route  path="/register" element={<Register/>} />
      <Route  path="/waxing" element={<Waxing/>} />
      <Route  path="/gel" element={<Gel/>} />
      <Route  path="/massages" element={<Massages/>} />
      <Route  path="/skintherapy" element={<SkinTherapy/>} />
      <Route  path="/hands&feet" element={<HandsAndFeet/>} />
      <Route  path="/cart" element={<Cart2/>} />
      <Route  path="/dashboard" element={<Dashboard/>} />
    </Routes>
     <Footer/>
    
    </div>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
