// import { db } from '../firbaseConfig';
import { useState } from 'react';

// import { addDoc, collection } from 'firebase/firestore';

function AddProduct() {
    
    const [productInfo , setProductInfo] = useState([]);
    const [image , setImage] = useState('');
    //const adminCollectionRef = collection(db, "contactdata")

    const handleChange = (e) => {
        setProductInfo({...productInfo , [e.target.name] : e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // addDoc(adminCollectionRef,{
        //     name: name,
        //     discription: discription,
        //     price: price,
        // })
        console.log(productInfo);
    }
    const handleImage = (e) => {
       if (e.target.files[0]){
       setImage(e.target.files[0]);
       
        }
    };
    console.log(image);
    return ( 
    <>
         <div className="card">
 
  <div className="card-body">
    <h5 className="card-title">AddProduct</h5>
    <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Product Name</label>
    <input type="text" className="form-control" name="ProductName" id="exampleInputemail" aria-describedby="emailHelp" 
      onChange={handleChange}/>
    
     </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Discription</label>
    <input type="text" className="form-control" name="Discription" id="exampleInputPassword1" 
        onChange={handleChange} />
  </div>
 
  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Category</label>
  <select className="form-control" name='Category' onChange={handleChange}>
  <option>Fashion</option>
  <option>Electronic</option>
  <option>Watch</option>
  
</select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Price</label>
    <input type="number" className="form-control" name='Price' id="exampleInputPassword1" 
     onChange={handleChange} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlFile1">Images Upload</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" 
    onchange={handleImage} />
  </div>
  
  <button  type="submit" className="btn btn-primary">Submit</button>
</form>

  </div>
</div>
    </> 
);
};

export default AddProduct;