import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import "./Header.css"

function Header(){
  const [clicked,setclicked]=useState(false);
    function fun(){
      console.log("My fun",clicked)
      setclicked(true);
    }
    return(
        <>
        <nav class="navbar bg-body-tertiary">
      <div class="container-fluid header">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    {/* <div className='rounded-full bg-slate-900 text-white p-2'>NB </div> */}
   
    <Dropdown.Menu>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
        </Dropdown.Menu>
    <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
       NB
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>


   </div>
   </nav>
       </>
    );
}
export default Header;    