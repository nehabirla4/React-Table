import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
let selectedList = [];
export const Table = () => {
  const [singlecheck, setSingleCheck] = useState([]);
  const navigate = useNavigate();
  let page = 1;
  let pageSize = 5;
  let paginatedData= [];
  let totalPages = 0;
  let isFilter=false;
  let filterArr =[];


  // const [selectedArr,setselectedArr]=useState([])
  const tabledata = JSON.parse(localStorage.getItem("localList"));
  const [totalpages,setTotalPages]=useState([]);
  const [tableData, settableData] = useState([]);
  useEffect(() => {
    debugger;
    const storeData = JSON.parse(localStorage.getItem("localList"));
    settableData(storeData);
    updatePaginatedData();
  }, []);

  let selectAll = false;
  let select = false;

  const handleDelete = (id) => {
    // console.log("id", id);
    const updatedData = tableData.filter((item) => item.id !== id);
    let filterarr = [];
    selectedList = selectedList.filter((item) => item.id !== id);
    // setselectedArr(filterarr);
    console.log(filterarr);
    settableData(updatedData);
    // console.log("Selected List", selectedList);
    localStorage.setItem("localList", JSON.stringify(updatedData));
  };

  function SelectAll(e) {
    if (e.target.checked) {
      console.log("if");
      selectAll = true;
      selectedList = [{ ...tableData }];
      selectedList = tableData;
    } else {
       console.log("else");
      selectAll = false;
      selectedList = [];
    }
    setSingleCheck(selectedList);
  }

  console.log("singlecheck------------>>>", singlecheck);
  //Push pop
  function Singleselect(e, info) {
    console.log("e-->>>", e);
    // console.log("info-->>>", info.id);
    if (e.target.checked) {
      console.log("e.target.checked-->>>", e.target.checked);
      selectedList = [...selectedList, { ...info }];

    } else {
      selectedList = selectedList.filter((x) => x.id !== info.id);
    }
    console.log("selectedList", selectedList);
    setSingleCheck(selectedList);
  };

  function updatePaginatedData() {
    console.log("inside function");
    console.log("page size",pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex +pageSize;
    // if(isFilter){
    //   filterArr=tableData;
    //   console.log("inside if")
    //   paginatedData=filterArr.slice(startIndex,endIndex);
    //   page=1;
    //   totalPages=Math.ceil(filterArr.length/pageSize);
    //   setTotalPages(totalPages);
    //    getPageNumbers();
    // }
    // else{
    paginatedData =tableData.slice(startIndex, endIndex);
    totalPages=Math.ceil(tableData.length/pageSize);
    setTotalPages(totalPages);
    // }
    console.log(totalPages)
    console.log("Filter",isFilter);
    console.log("the paginated",paginatedData);
  };
  
  function setPage(page) {
   page = page;
   updatePaginatedData() ;
};
 
function getPageNumbers() {
  console.log(totalpages);
    let arr= new Array(totalPages);
    console.log("total pages",totalPages)
    console.log("Arr",arr);
  };

  const selectAllChecked = () => {
    console.log("inside select all checked")
    if (tableData?.length > 0 && tableData.length == selectedList?.length) {
      // setSelectAll(true);
      return true;
    } else {
      // setSelectAll(false);
      return false;
    }
  };

  // console.log("OUtside", selectAll);
  const handleEdit = (info) => {

    let id = info.id;
    navigate("/AddUpdate", { state: { id: id } });
  };
  function goToForm() {
    navigate("/AddUpdate");
  }

  function singleCheck(info) {
    console.log({ selectedList });
    let ans;
    ans = selectedList.filter((x) => x.id == info.id).length;
    console.log({ans});
    return ans;
    // let ans = selectedList.filter((x) => x.id == info.id).length > 0;
    // console.log("amns", ans);
    // if (ans) {
    //   setSingleCheck(true);
    //   return true;
    // }
    // // return ans
    // else {
    //   setSingleCheck(false);
    //   return false;
    // }
  }
  function tabledatas(){
    return tableData;
  }

  // var isChecked = (item) =>
  //   singlecheck.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <>
      <div>
        <button
          className="px-5 py-2 rounded-lg mb-2 bg-violet-800 text-white float-right"
          onClick={(e) => goToForm()}
        >
          Add
        </button>
        <table class="table table-dark table-striped-columns">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  value={selectAll}
                  onChange={SelectAll}
                  checked={selectAllChecked()}
                  // checked={selectall}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Date</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            { tableData?.map((info) => {
              return (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => Singleselect(e, info)}
                      checked={singleCheck(info)}
                    />
                  </td>
                  <td>{info?.name}</td>
                  <td>{info?.email}</td>
                  <td>{info?.dobval || info.age}</td>
                  <td>{info?.dates}</td>
                  <td>{info?.gender}</td>
                  <td>
                    <button
                      className="rounded-xl bg-red-500 px-2 py-1"
                      onClick={(e) => handleDelete(info.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="rounded-xl bg-yellow-500 px-2 py-1 ms-2"
                      onClick={(e) => handleEdit(info)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
  
  <div class="d-flex">
    <nav>
        <ul class="pagination">
          <li class="page-item" >
               <a class="page-link">Previous</a>
          </li>
          <li class="page-item" >
             <a class="page-link">{getPageNumbers()}</a>
          </li>
          <li  class="page-item">
          <a class="page-link">Next</a>
          </li>
        </ul>
    </nav>

  </div>
 

      </div>
    </>
  );
};
