import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./extracss.css";
import {Link} from 'react-router-dom';

function Categories(){
    return ( 
      <>
      <div className="container my-0 py-8" >
      <div className="row">
      <div className="col-lg-6 p-0">
      <div className="categories__item categories__large__item set-bg"  style={{  
  backgroundImage: "url(" + "https://img.freepik.com/free-photo/top-view-arrangement-with-beauty-bag-copy-space_23-2148301851.jpg?w=2000" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
      <div className="categories__text">
      <h1>JEAN'S BEAUTY AND WELLNESS</h1>
      <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
      edolore magna aliquapendisse ultrices gravida.</p>
      
      </div>
      </div>
      </div>
      <div className="col-lg-6">
      <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 p-0">
      <div className="categories__item set-bg" data-setbg="img/categories/category-2.jpg" style={{  
  backgroundImage: "url(" + "https://img.freepik.com/free-photo/woman-getting-legs-waxed-spa_53876-13496.jpg?w=2000" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
      <div className="categories__text">
      <h4>WAXING</h4>
      <p>24 items</p>
      < Link className="active" to ="/waxing">VIEW SERVICES</Link> 
      
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 p-0">
      <div className="categories__item set-bg" data-setbg="img/categories/category-2.jpg" style={{  
  backgroundImage: "url(" + "https://image.shutterstock.com/mosaic_250/838657/2002998191/stock-photo-transparent-gel-drop-on-green-background-liquid-gel-cosmetic-stain-texture-beauty-serum-drop-2002998191.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
      <div className="categories__text">
      <h4>GEL</h4>
      <p>7 items</p>
      < Link className="active" to ="/gel">VIEW SERVICES</Link> 
      
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 p-0">
      <div className="categories__item set-bg" data-setbg="img/categories/category-3.jpg" style={{  
  backgroundImage: "url(" + "https://thumbs.dreamstime.com/b/aromatherapy-spa-beauty-treatment-wellness-background-massage-pebbles-orchid-flowers-towels-cosmetic-products-burning-142951032.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
      <div className="categories__text">
      <h4>MASSAGES</h4>
      <p>5 items</p>
      < Link className="active" to ="/massages">VIEW SERVICES</Link> 
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 p-0">
      <div className="categories__item set-bg" data-setbg="img/categories/category-4.jpg" style={{  
  backgroundImage: "url(" + "https://thumbs.dreamstime.com/b/natural-skincare-concept-woman-apply-white-cream-her-hands-background-jar-cosmetic-salt-spa-scrub-rose-flowers-copy-137906768.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
      <div className="categories__text">
      <h4>SKIN THERAPY</h4>
      <p>10 items</p>
      < Link className="active" to ="/skintherapy">VIEW SERVICES</Link> 
      </div>
      </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 p-0">
      <div className="categories__item set-bg" data-setbg="img/categories/category-5.jpg" style={{  
  backgroundImage: "url(" + "https://img.grouponcdn.com/deal/29VjVKKMpj5YpYtLWZMvv6dqa2SB/29-2048x1229/v1/c870x524.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
      <div className="categories__text">
      <h4>HANDS & FEET </h4>
      <p>5 items</p>
      < Link className="active" to ="/hands&feet">VIEW SERVICES</Link> 
      
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </>
    )
  }
  export default Categories;