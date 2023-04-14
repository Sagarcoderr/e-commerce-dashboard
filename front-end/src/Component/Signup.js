import React,{useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";



function SignIn()
{
    const[name,setName]=useState("");
    const[password,setPassw]=useState("");
    const[email,setEmail]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth)
        {
            navigate("/");
        }
    })
  async function Collectinf()
    {
       // console.log(name,email,password);
        
        let result= await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
               'Content-Type':'application/json'
            },
        });
       result=await result.json();
        localStorage.setItem("user",JSON.stringify(result));
       
        
            navigate("/");
        
    }

     return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />

            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Email" />
            <input className="inputBox" type="Password" value={password} onChange={(e)=>setPassw(e.target.value)} placeholder="Enter Password" />
            <button className="buttonapp" type="button" onClick={Collectinf}>Sign Up</button>

        </div>
     );
}

export default SignIn;