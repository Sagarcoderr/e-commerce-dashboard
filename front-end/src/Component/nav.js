import React from "react";

import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Nav()
{
   const auth=localStorage.getItem("user");
   const navigate=useNavigate();

         function logout(){

          localStorage.clear();
          navigate("/signup");
   }
    return(
        <div>
            
            <img  
            alt="logo"
            className="logo"
            src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg"
            />
            {
            auth?
            <ul className="nav-bar">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/">Product List</Link></li>
                <li><Link to="/update/:id">Update Product</Link></li>
                
                <li ><Link to="/add">Add Product</Link></li>
                <li><Link  to="/signup" onClick={logout}>logout</Link></li>
                <li className="namp">{JSON.parse(auth).name}</li> 
            </ul>
            :
            <>
            <ul className="nav-bar nav-left">
                   <li><Link to="/signup">Sign Up</Link></li> 
                    <li><Link to='/login'>login</Link></li>
                    </ul>
                    </>
           }
        </div>
    )
}

export default Nav;