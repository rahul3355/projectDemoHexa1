import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import AllLeave from './Component/AllLeave';
import AddEmp from './Component/AddEmp';
import ManagerView from './Component/ManagerView';
import EditLeaveMan from './Component/EditLeaveMan';
import { Route } from 'react-router-dom';
import { Component } from "react";
import DeleteLeave from './Component/DeleteLeave';
import AllEmployees from './Component/AllEmployees';
import Dashboard from './Component/dashboard';
import EmailLeave from './Component/EmailLeave';



function App() {

  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <ManagerView />
      <AllLeave />
      <AddEmp />
      <DeleteLeave />
      <EditLeaveMan />
      <AllEmployees />
      <Dashboard/>
      <EmailLeave/>
      
      

    </div>
  );



}

export default App;