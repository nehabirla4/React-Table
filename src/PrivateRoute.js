import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoute = () => {
    const userid=JSON.parse(localStorage.getItem("data"));

     console.log("user",userid['name']);
  return (
    <>
       {/* { userid  ? <Outlet/>:<Navigate to="/" />}; */}
       {userid.name && userid.email && userid.password ? <Outlet/>:<Navigate to="/" />};
       {/* {userid ? <Navigate to="/layout" />:<Navigate to="/" />}; */}
        
       </>
  )
}
