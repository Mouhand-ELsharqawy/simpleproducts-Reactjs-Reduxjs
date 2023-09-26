import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { deleteProduct, getProducts } from "../Redux/productSlice";
const Products = () => {
  
  const { isLoading,products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(()=>{
    // window.location.reload(false);
    dispatch(getProducts());
  },[])
    return ( 
        
<div className="bf-container bf-p-t-2 bf-p-b-2">
	<h1>All Products { products.length } </h1>
	<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Weight</th>
      <th scope="col"> Operation </th>
    </tr>
  </thead>
  <tbody>
    { isLoading && <div> loading.... </div> }

    { products && products.map((product)=>(
      <tr key={product.id} >
        <th scope="row" > # </th>
        <td> { product.name } </td>
        <td> { product.price } </td>
        <td> { product.weight } </td>
        <td>
        <button type="button" className="btn btn-danger" onClick={()=>dispatch(deleteProduct(product.id))}> 
        Delete </button>
        </td>
        </tr>
    ))}
  </tbody>
</table>
	

</div> 
        
     );
}
 
export default Products;