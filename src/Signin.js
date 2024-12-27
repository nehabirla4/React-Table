import React, { useState } from "react";
import { InputText } from "./InputText";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Signin = () => {
  const navigate = useNavigate();
  const [fromValue, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [checkPass, setCheck] = useState(false);
  function HandleOnChange(e) {
    const { name, value } = e.target;
    setValue({
      ...fromValue,
      [name]: value,
    });
    console.log(fromValue);
    console.log("check");
    // debugger;
    // if (fromValue.confirm && fromValue.password == fromValue.confirm) {
    //   console.log("iside iod");
    //   setCheck(true);
    //   console.log("checkPass", checkPass);
    // }
  }
  function SubmitForm(e) {
    e.preventDefault();
    console.log("Submit Form");
    console.log(fromValue);
    navigate("/layout");
  }
  return (
    <>
      <div className="bg-slate-800" id="sign-in">
        <h1 className="text-center text-slate-50 p-5">Sign-In</h1>
        <div className="flex justify-center align-center">
          <div className="bg-slate-800 p-5 rounded-lg border-2 border-slate-50">
            <form onSubmit={SubmitForm}>
              <label>
                Name:
                <InputText
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={fromValue.name}
                  onChange={HandleOnChange}
                />
              </label>
              <br></br>
              <label>
                Email
                <InputText
                  type="mail"
                  name="email"
                  placeholder="Enter your email"
                  value={fromValue.email}
                  onChange={HandleOnChange}
                />
              </label>
              <br></br>
              <label>
                Password:
                <InputText
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={fromValue.password}
                  onChange={HandleOnChange}
                />
              </label>
              <br></br>
              <label>
                Confirm Password:
                <InputText
                  type="password"
                  name="confirm"
                  placeholder="Confirm password"
                  value={fromValue.confirm}
                  onChange={HandleOnChange}
                />
              </label>
              <br></br>
              <div className="mt-4">
                {/* <button className="border-2 bg-slate-50 rounded-lg px-2 py-1"><Link to='/layout'>Sign In</Link></button></div> */}
                <button
                  className="border-2 bg-slate-50 rounded-lg px-2 py-1"  >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
