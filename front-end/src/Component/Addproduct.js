import react, { useState } from 'react'

function Addproduct() {
 const[name,setName]=useState('');
 const[price,setPrice]=useState('');
  const[category,setCategory]=useState('');
  const[company,setCompany]=useState('');
  const[error,setError]=useState(false);

  async function addproduct()
  {


    if(!name || !price || !category || !company)
    {
        setError(true);
        return false;
    }

    console.log(name,price,category,company);
    const userID=JSON.parse(localStorage.getItem("user"))._id;
    console.warn(userID);
   
   let result= await fetch("http://localhost:5000/add-product",{
    method:"post",
    body:JSON.stringify({name,price,category,company,userID}),
    headers:{
      "content-type":"application/json"
    },
   });

   result=await result.json();
   console.log(result);
  }

    return (
        <div className='Addp'>
            <input type='text' placeholder='Enter name of Product' className='inputBox' onChange={(e)=>setName(e.target.value)} value={name} />
             {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type='text' placeholder='Enter the price of product' className='inputBox' onChange={(e)=>setPrice(e.target.value)} value={price} />
             {error && !price && <span className='invalid-input'>Enter valid Price</span>}
            <input type='text' placeholder='Enter the category of product' className='inputBox' onChange={(e)=>setCategory(e.target.value)} value={category} />
            {error && !category && <span className='invalid-input'>Enter valid category</span>}
            <input type='text' placeholder='Enter the Company of Product' className='inputBox' onChange={(e)=>setCompany(e.target.value)} value={company} />
            {error && !company && <span className='invalid-input'>Enter valid company</span>}
            <button type='submit' className='buttonapp' onClick={addproduct}>Add product</button>
        </div>
    )
}

export default Addproduct;