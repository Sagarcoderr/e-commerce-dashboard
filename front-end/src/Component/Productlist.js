import react,{ useEffect, useState } from 'react';
import {Link} from "react-router-dom";


function ProductList()
{
   const[products ,setProducts]=useState([]);

   useEffect(()=>{
       getproductList();
   },[])

   const getproductList= async ()=>{
       let result= await fetch('http://localhost:5000/products')

       result= await result.json();

       setProducts(result);
        
   }

  const deleteProduct= async (id)=>{
     let result=await fetch(`http://localhost:5000/product/${id}`,{
        method:"Delete"
     });
     result=await result.json();
     console.log(id);
     if(result)
     {
      getproductList();
     }
  }

  const handleclick=async (event)=>{
    let key=event.target.value;
    console.log(key);
    if(key)
    {
        let result=await fetch(`http://localhost:5000/search/${key}`);

        result=await result.json();

        if(result)
        {
          setProducts(result);  
        }
    }else{
        getproductList();
    }
  }
    return(
        <div className='products-list'>
            <input type="text" placeholder='search...' className='search-product-box' 
            onChange={handleclick}/>
             <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>company</li>
                <li>category</li>
                <li>price</li>
                <li>operation</li>
             </ul>
             {
                products.map((item,index)=>

                    <ul calssName="ulm"key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.company}</li>
                    <li>{item.category}</li>
                    <li>{item.price}</li>
                    <li><button onClick={()=>deleteProduct(item._id)}>delete</button>
                    <Link to={"/update/"+item._id}>Update</Link>
                    </li>
                    
                 </ul>
                  
                )
             }
        </div>
    )
}

export default ProductList;