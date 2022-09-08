import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import About from "./Component/About";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import AllEmp from "./Component/AllEmp";
import AddEmp from "./Component/AddEmp";
import ManagerView from "./Component/ManagerView";
import EditLeaveMan from "./Component/EditLeaveMan";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";




 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="AllEmp" element={<AllEmp/>}/>
          <Route path="AddEmp" element={<AddEmp/>}/>
          <Route path="ManagerView" element={<ManagerView/>}/>
          <Route path="EditLeaveMan" element={<EditLeaveMan/>}/>
          
       
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

