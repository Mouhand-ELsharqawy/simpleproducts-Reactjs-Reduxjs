import "./form.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../Redux/productSlice";
const AddProduct = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [weight,setWeight] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();

        const data ={
            name:name,
            price:price,
            weight:weight,
        }
        
        dispatch(createProduct(data));

        history.push("/");
    }
    return ( 
       
        <div className="container">
            <form method="post" onSubmit={handleSubmit} >
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Product Name</label>
                <input 
                type="text" 
                className="form-control" 
                name="name" 
                required
                value={name}
                onChange={ (e) => setName(e.target.value) } />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Product Price</label>
                <input 
                type="text" 
                className="form-control" 
                name="name" 
                required
                value={price}
                onChange={ (e) => setPrice(e.target.value) } />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Product Weight</label>
                <input 
                type="text"
                 className="form-control" 
                 name="weight" 
                 required
                 value={weight}
                 onChange={(e)=>setWeight(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary"> Submit </button>
            </form>
        </div>
    
     );
}
 
export default AddProduct;