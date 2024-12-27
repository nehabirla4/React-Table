import React, { useEffect, useState, useRef } from "react";
import { InputText } from "./InputText";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const Xyx = () => {
  let updatedDataList = JSON.parse(localStorage.getItem("localList")) || [];
  const navigate = useNavigate();
  const locatiom = useLocation();
  // console.log({ locatiom });
  const initialdata = {
    id: "",
    name: "",
    email: "",
    address: "",
    dob: "",
    dates: "",
    gender: "",
    image: "",
     age: "",
    // isdob: false,
    dobval: "",
  };
  const [fromval, setVal] = useState(initialdata);
  const [selectedValue, setSelectedValue] = useState("");
  const [tableData, setTableData] = useState(updatedDataList);
  const [editData, setEditData] = useState(false);
  const [editIndex,setEditIndex]=useState();
  
  let data=null;

  useEffect(() => {
   if(data){
    console.log("data",data);
    console.log("inside useEffect")
    let edit=updatedDataList.find((x)=>x.id==data)
    let Index=updatedDataList.findIndex((x)=>x.id==data)
    setEditIndex(Index);
    console.log("edit",edit);
    console.log("Edit Index",editIndex);
    setVal({
       id:edit.id,
       name:edit.name,
       email: edit.email,
       address:edit.address,
       dob: edit.dob,
       age:edit.age,
       dates: edit.dates,
       gender: edit.gender,
       dobval:edit.dobval,
    })
    setEditData(true);
    handleEdit(edit);
   }
  },[data]);
 
  
  const handleEdit = (info) => {
    console.log(info.dob,"Is indo")
    setSelectedValue(info.dob ? "dob" : "age");
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const Onchange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("val", value);
    setVal({
      ...fromval,
      [name]: value,
    });

    // if (value == "dob") {
    //   console.log("if");
    //   setVal({
    //     ...fromval,
    //     isdob: true,
    //     // isdob: fromval.isdob,
    //   });
    //   // setIsShow(true)
    //   //  fromval.isdob=true;
    // } else {
    //   console.log("else");
    //   // setIsShow(false)
    //   setVal({
    //     ...fromval,
    //     isdob: false,
    //     //  isdob: fromval.isdob,
    //     [name]: value,
    //   });
    // }
  };
  
   

  function uidfun() {
    let guid = uuid();
    let ans = String(guid);
    return ans;
  }
  // console.log("form id", fromval.id);

  function submit(e) {
    e.preventDefault();
    // let updatedDataList;
    // console.log("DataList", dataList);

    // let updatedDataList;

    // if (fromval.id) {
    //   updatedDataList = dataList.map((item) =>
    //     item.id === fromval.id ? fromval : item
    //   );
    // } else {
    //   const newItem = { ...fromval, id: uidfun() };
    //   updatedDataList = [...dataList, newItem];
    // }

    //  localStorage.setItem("localList", JSON.stringify(dataList));

    // const formData = editData ? fromval : { ...fromval, id: uidfun() };

    // if (editData) {
    //   updatedDataList = tableData.map((item) =>
    //     item.id === formData.id ? formData : item
    //   );
    // } else {
    //   updatedDataList = [...tableData, formData];
    // }
     
    setTableData(updatedDataList);
      if(editData){
         updatedDataList[editIndex]={...fromval};
      }
      else{
        updatedDataList = [...updatedDataList, { ...fromval, id: uidfun() }];
      }

    localStorage.setItem("localList", JSON.stringify(updatedDataList));
     navigate("/layout");

    //  }
    //setSelectedValue('');
    setVal(initialdata);
    setEditIndex();
    setEditData(false);
  }


  if(locatiom.state){
    console.log("location",locatiom.state)
    data=locatiom.state.id;
    console.log(data);
  }

  return (
    <>
    <div>
      <div className="bg-white rounded-lg xyxForm px-3">
        <div className="bg-slate-700 rounded-xl my-16 mx-36 ps-3 pb-4 border-purple-800 border-5 shadow-lg">
        <h1 className="text-center">Form</h1>
        <form onSubmit={submit}>
          <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
            <div class="col">
              <label className="text-slate-300">Name:</label>
              <InputText
                className="w-50 border-purple-800 border-2 rounded-3xl"
                type="text"
                name="name"
                value={fromval.name}
                onChange={Onchange}
                placeholder="Enter your name"
                
              />
            </div>
            <div class="col">
              <label className="text-slate-300">Email:</label>
              <InputText
                className="w-50 border-purple-800 border-2 rounded-3xl"
                type="mail"
                value={fromval.email}
                name="email"
                placeholder="Enter your Email"
                onChange={Onchange}
              />
            </div>
            <div class="col">
              <label className="text-slate-300">Address:</label>
              <InputText
             className="w-50 border-purple-800 border-2 rounded-3xl"
                type="text"
                value={fromval.address}
                name="address"
                placeholder="Enter Address"
                onChange={Onchange}
              />
            </div>
          </div>
          <div class="row mt-5">
            <div class="col">
              <span className="font-bold text-slate-300">DOB Choice:</span>
              <br></br>
              <div className="flex">
                <label className="text-slate-300">DOB</label>
                <InputText
                  className="mt-3 w-50 border-purple-800 border-2 rounded-3xl"
                  type="radio"
                  value={"dob"}
                  name="dob"
                  checked={selectedValue === "dob"}
                  onChange={handleRadioChange}
                  // onChange={Onchange}
                />
                <div class="relative">
            <input type="text" id="outlined_success" aria-describedby="outlined_success_help" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-purple-800 appearance-none dark:text-white dark:border-purple-800 dark:focus:border-purple-800 focus:outline-none focus:ring-0 focus:border-purple-800 peer" placeholder=" " />
            <label for="outlined_success" class="absolute text-sm text-purple-800 dark:text-purple-800 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Outlined success</label>
           </div>
                <label className="text-slate-300">Age</label>
                <InputText
                  className="mt-3 w-50 border-purple-800 border-2 rounded-3xl"
                  type="radio"
                  value={"age"}
                  name="dob"
                  checked={selectedValue === "age"}
                  onChange={handleRadioChange}
                />
                <div>
                  {selectedValue === "dob" && (
                    <InputText
                   
                      type="date"
                      className="mt-3 w-40 border-purple-800 border-2 rounded-3xl"
                      value={fromval.dobval}
                      name="dobval"
                      onChange={Onchange}
                    />
                  )}
                  {selectedValue === "age" && (
                    <InputText
                      type="number"
                      className="mt-3 w-50 border-purple-800 border-2 rounded-3xl"
                      value={fromval.age}
                      name="age"
                      onChange={Onchange}
                    />
                  )}
                </div>
              </div>
            </div>
            <div class="col">
              <label className="text-slate-300 mt-3">Date</label>
              <InputText
                className="w-50 border-purple-800 border-2 rounded-3xl"
                type="date"
                value={fromval.dates}
                name="dates"
                onChange={Onchange}
              />
            </div>
            <div class="col">
              <label className="text-slate-300 mt-3">Upload Image</label>
              <InputText
                className="w-50 border-purple-800 border-2 rounded-3xl"
                type="File"
                value={fromval.image}
                name="image"
                onChange={Onchange}
              />
            </div>
          </div>
          <div class="row ">
            <div class="col">
              <label className="text-slate-300 mt-3">Gender</label>
              <select
                id="gender"
                name="gender"
                value={fromval.gender}
                onChange={Onchange}
              >
                <option></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-purple-800 px-5 py-2 rounded-xl text-white mt-5 text"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};
