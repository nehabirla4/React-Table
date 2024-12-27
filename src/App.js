import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Login } from './Login';
import { PrivateRoute } from './PrivateRoute';

import {  Form, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout';
import { Signin } from './Signin';
import {Table} from './Table';
import { Forms } from './Forms';
import { Xyx } from './Xyx';

import Scr from './components/Scr';
function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Login/>} />
       
       <Route path="/sign-in" element={<Signin/>} />
       <Route exact element={<PrivateRoute />}>
       <Route path="/layout" element={<Layout/>} />
       </Route>
       <Route path="/table" element={<Table/>} />
       <Route path="/forms" element={<Forms />} />
       <Route path="/AddUpdate" element={<Xyx/>} />
    </Routes>
       
   </>
  );
}

export default App;
