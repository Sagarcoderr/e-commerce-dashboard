import react, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
function UpdateList()
{

    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[company,setCompany]=useState('');
    const param=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
      getproductdetail();
    },[])

    const getproductdetail= async ()=>{
     console.log(param);

     let result= await fetch(`http://localhost:5000/product/${param.id}`);

     result=await result.json();
     console.log(result);
     setName(result.name);
     setCategory(result.category);
     setPrice(result.price);
     setCompany(result.company); 
    }

   async function updateproduct()
    {
      let result=fetch(`http://localhost:5000/product/${param.id}`,{
        method:"put",
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'content-type':"application/json"
        }
    
      });

       navigate('/');
      
    }
    return(
        <div className='Addp'>
        <input type='text' placeholder='Enter name of Product' className='inputBox' onChange={(e)=>setName(e.target.value)} value={name} />
         
        <input type='text' placeholder='Enter the price of product' className='inputBox' onChange={(e)=>setPrice(e.target.value)} value={price} />
        
        <input type='text' placeholder='Enter the category of product' className='inputBox' onChange={(e)=>setCategory(e.target.value)} value={category} />
        
        <input type='text' placeholder='Enter the Company of Product' className='inputBox' onChange={(e)=>setCompany(e.target.value)} value={company} />

        <button type='submit' className='buttonapp' onClick={updateproduct}>Updateproduct</button>
    </div>
    )
}

export default UpdateList;