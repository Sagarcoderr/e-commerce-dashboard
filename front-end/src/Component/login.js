import react, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassw] = useState('');
    const navigate=useNavigate();

    useEffect(()=>{
    const auth=localStorage.getItem("user");
    if(auth)
    {
        navigate('/');
    }
    },[]);

 async function handleclick()
{
    console.log(email,password);

    let result= await fetch("http://localhost:5000/login",{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        },
    });
    result=await result.json();
    console.log(result);
    if(result.name)
    {
     localStorage.setItem("user",JSON.stringify(result));
     navigate('/');
    }else{
        alert("enter correct details");
    }
}
    return (
        <div className='login'>
            <h2>Login Here</h2>
            <input className='inputBox' type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value )} value={email} />
            <input className='inputBox' type='text' placeholder='Enter Password'
           onChange={(e)=>setPassw(e.target.value)} value={password} />
            <button onClick={handleclick} className="buttonapp" type="button">Login</button>
        </div>
    )
}

export default Login;
