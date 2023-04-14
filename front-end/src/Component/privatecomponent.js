import React from "react";

import { Navigate,Outlet } from "react-router-dom";

function privatecomp()
{
    const auth=localStorage.getItem("user");
    return auth?<Outlet />:<Navigate to="/signup" />
    
}
export default privatecomp;