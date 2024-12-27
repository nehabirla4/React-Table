import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { InputText } from "./InputText";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // usenqv
  const navigate = useNavigate();
  const [fromValue, setname] = useState({
    name: "",
    email: "",
    password: "",
  });

  const[isLogin,setLogin]=useState('false');


  function onhandle(e) {
    const { name, value } = e.target;
    setname({
      ...fromValue,
      [name]: value,
    }); 
    // console.log(fromValue);
  }
  const submits = (e) => {
    console.log({ e });
    // e.preventDefault();
    console.log("from submit", fromValue);
    localStorage.setItem('data',JSON.stringify(fromValue));
    setLogin('true');
    console.log(isLogin);
    // console.log(JSON.parse(localStorage.getItem('data')).name);
   let user=JSON.parse(localStorage.getItem("data"));
   console.log(user.name);
  //  if(user.name){
    navigate("/layout")
  // }
    // fun();
  };

  function fun(){
    let s=JSON.parse(localStorage.getItem('data'));  
  }

 function islog(){
  if(isLogin){
    return true;
  }
  return false;
 } 

  return (
    <>
    <div className="bg-slate-50 login">
      <button className="float-right rounded-lg bg-slate-800 text-white py-2 px-3 m-2 hover:bg-slate-600" >Sign-up</button>
      <h2 class="text-center pt-5">Login Page</h2>
      <div class="input-box" className="flex justify-center mt-3">
        <div className="py-5 px-24 rounded-lg bg-slate-800 ">
        <form onSubmit={submits}>
          <label>Name:</label>
          <InputText
            type="text"
            name="name"
            value={fromValue.name}
            onChange={onhandle}
            placeholder="enter name"
          />
          <label>Email:</label>
          <InputText className="border-2"
            type="email"
            name="email"
            value={fromValue.email}
            onChange={onhandle}
            placeholder="enter email"
          />
          <label>Password:</label>
          <InputText
            type="password"
            name="password"
            value={fromValue.password}
            onChange={onhandle}
            placeholder="enter password"
          />
          {/* <button type="submit"  class="btn btn-primary mt-5"  onClick={() => navigate("/layout")}> */}
          <button type="submit"  class="btn btn-primary mt-5" >Submit</button>
            
        </form>
        </div>
      </div>
      </div>
    </>
  );
};
