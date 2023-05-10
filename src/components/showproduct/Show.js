
import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";
import { Link, useParams } from "react-router-dom";
// import { useAddtoCartMutation } from '../../redux/store';
import "./Show.css";

function Show() {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  // const [AddtoCart] = useAddtoCartMutation();


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error));
}, [id]);

  console.log(id , "pro");
  // const handleCart = async (key) => {
  //   const response = await AddtoCart(key)
  //   console.log(response, "Ans");
  // }

  return (
    <><center>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
      <div className="container" >
        <div className="col-xs-12 col-md-6 bootstrap snippets bootdeys">

          <div className="product-content product-wrap clearfix" style={{width:"500", height:"500"}}>
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                  <img src="https://www.bootdey.com/image/194x228/87CEFA" alt="194x228" className="img-responsive" />
                  
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                  <h5 className="name">
                    <a href="#">
                      Product Name Title Here
                    </a>
                  </h5>
                  <p className="price-container">
                    <span>$99</span>
                  </p>
                  <span className="tag1"></span>
                </div>
                 <div className="description">
                  <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
                </div>
                <div className="product-info smart-form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <a href="" className="btn btn-success">Add to cart</a>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
       
      
      </div>
      </center>
    </>
  );
}

export default Show;