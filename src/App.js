import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import AllEmp from './Component/AllEmp';
import AddEmp from './Component/AddEmp';
import ManagerView from './Component/ManagerView';
import EditLeaveMan from './Component/EditLeaveMan';



function App() {

  return (
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
      <ManagerView/>
      <AllEmp/>
      <AddEmp/>
      <EditLeaveMan/>
    </div>
    );
      
    
  
}

export default App;