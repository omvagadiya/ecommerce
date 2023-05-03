import React, { useState, useEffect } from 'react';
import Header from "../header/Header";
import './Women.css';
import { useAddtoCartMutation } from '../../redux/store';


function Women() {
     const [women, setWomen] = useState([]);
     const [AddtoCart] = useAddtoCartMutation();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(response => response.json())
        .then(data => setWomen(data))
        .catch(error => console.error(error));
    }, []);

    const handleCart = async(key)=>{
        const response = await AddtoCart(key);
        console.log(response , "Ans");
    }
    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    {women.map(women => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={women.id}>
                            <div className="card product_item "style={{ width: "100%", height: "90%" }}>
                                <div className="body">
                                    <div className="cp_img" >
                                        <img src={women.image} alt={women.title} className="img-fluid" style={{ width: "250px", height: "160px" }} />
                                        
                                        <div className="hover">
                                        
                                        <div style={{float:"left"}}><button className="btn btn-outline-dark btn-sm waves-effect" onClick={()=>handleCart(women)}><b>Add cart</b></button></div>
                                        <div style={{float:"right"}}> <button className="btn btn-outline-dark btn-sm waves-effect"><i className="zmdi zmdi-shopping-cart"><b>Buy Now</b></i></button></div>  
                                        </div>
                                        
                                    </div>
                                    <div className="product_details">

                                        <ul className="product_price list-unstyled">
                                            <li className="old_price">${(women.price * 1.2).toFixed(2)}</li>
                                            <li className="new_price">${women.price.toFixed(2)}</li>
                                        </ul>
                                        <ul >
                                            <li ><p style={{fontFamily:"revert", fontSize:"12px",width: "150px"}}><strong> TITLE :<br></br></strong>{women.title} </p></li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          
        </>
    );
                    
}
export default Women;
