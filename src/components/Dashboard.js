import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table } from '../Table';
export const Dashboard = () => {
  const notify = () => {
    toast.success("Login Successfully !", {
      position: "top-center",
      autoClose:200
    });
  };
  useEffect(()=>notify)
  return (
    <>
    
    <div class="dashboard bg-slate-100 border-t-[4px] border-violet-500 p-3">
     <h3 className='text-left'>Dashboard</h3> 
     <div className='py-5'>
      <Table />
      </div>
    {/* <button onClick={notify}>Notify!</button> */}
    <ToastContainer />
    </div>
    </>
  )
}
