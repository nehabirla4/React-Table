import React, { useState } from 'react';
import { InputText } from './InputText';


export const Form = () => {
// const[fromval,setVal]=useState({
//     name:'',
//     email:'',
//     dob:'',
//     date:'',
//     gender:'',
// })
// const Onchange =(e)=>{
//     const{name,value}=e.target;
//   setVal({
//     ...fromval,
//     [name]:value,
//   })

// }
// function submit(){
//     console("the form",fromval);
// }
  return (
    <>
    <div>form</div>
    {/* <form onSubmit={submit}>
        <label>Name:</label>
        <InputText type="name" value={val.name} name="name" placeholder="Enter your name" onChange={Onchange}/>
        <label>Email</label>
        <InputText type="mail" value={val.email} name="email" placeholder='Enter your Email' onChange={Onchange}/>
        <label>DOB</label>
        <input type="radio" value={val.dob} name="dob" onChange={onchange}/>
        <input type="radio" value={val.dob} name="dob" onChange={onchange} />
    </form> */}
    </>
  )
}
