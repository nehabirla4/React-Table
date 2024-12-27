import React from 'react'

import { Sidebar } from './components/Sidebar'
import { Dashboard } from './components/Dashboard'
import Header from './components/Header'
// import { Login } from './Login'

export const Layout = () => {
console.log("asdasd");
  return (
    <>
    <Header />
    <Sidebar />
    <Dashboard />
    </>
  )
}
