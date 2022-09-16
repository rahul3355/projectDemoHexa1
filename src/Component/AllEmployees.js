import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AllEmp.css';
import { useNavigate } from "react-router-dom";
import Record from './lesgo.json';
//import download from 'images/download.jpg';





const AllEmployees = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState("ASC");
    const [searchTerm, setsearchTerm] = useState("");
    const navigate = useNavigate();



    const setEid = (employeeId, empLevel, managerId) => {
        console.log(employeeId);


        localStorage.setItem("EID1", employeeId);
        localStorage.setItem("ELEVEL1", empLevel);
        localStorage.setItem("MID1", managerId);
    }



    const sorting = (col) => {
        if (order == "ASC") {
            const sorted = [...items].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
            setItems(sorted);
            setOrder("DSC");
        }
        if (order == "DSC") {
            const sorted = [...items].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
            setItems(sorted);
            setOrder("ASC");
        }
    }

    const sortingInt = (col) => {
        if (order == "ASC") {
            const sorted = [...items].sort((a, b) =>
                a[col] > b[col] ? 1 : -1);
            setItems(sorted);
            setOrder("DSC");
        }
        if (order == "DSC") {
            const sorted = [...items].sort((a, b) =>
                a[col] < b[col] ? 1 : -1);
            setItems(sorted);
            setOrder("ASC");
        }
    }



    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:12242/api/Employeelms/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])







    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <div class="container-xl">
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
                    <br/>
                    <h6 id="info1">CEO INFORMATION</h6>
                    
                    
                    <table class="table table-dark">
                        <thead>
                            <tr>

                                <th scope="col" >Employee ID</th>
                                <th scope="col" >Photo</th>
                                <th scope="col">Name</th>
                                <th scope="col" >Level</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                

                            </tr>
                        </thead>

                        {Record.map(item => (

                            <tr>

                                <th scope="row">
                                    {item.employeeId}
                                </th>
                                <td>

                                    <img src={item.icon} alt="ted" />
                                </td>
                                <td>

                                    {item.name}
                                </td>
                                <td>
                                    CEO
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.phone}
                                </td>
                                

                            </tr>

                        ))}

                    </table>
                    <br />
                    <h6 id="info2">EMPLOYEE INFORMATION</h6>
                    <input
                        type="text" placeholder="Search.." className="form-control"
                        style={{width: "40%" }}
                        onChange={(e) => {
                            setsearchTerm(e.target.value);
                        }}
                    />
                    
                    
                    <br/>

                    <table class="table table-dark">
                        <thead>
                            <tr>

                                <th scope="col" onClick={() => sortingInt("employeeId")} >Employee ID</th>
                                <th scope="col" >Photo</th>
                                <th scope="col" onClick={() => sorting("name")}>Name</th>
                                {/* <th scope="col" onClick={() => sortingInt("Level")} >Level</th> */}
                                <th scope="col" onClick={() => sorting("email")}>Email</th>
                                <th scope="col" onClick={() => sorting("phone")}>Phone</th>
                                <th scope="col" onClick={() => sortingInt("managerId")}>Manager ID</th>

                            </tr>
                        </thead>

                        {items.filter((val) => {
                            if (searchTerm === "") {
                                return val;
                            } else if (
                                val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                // val.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.employeeId.toString().includes(searchTerm.toString()) ||
                                val.empLevel.toString().includes(searchTerm.toString()) ||
                                val.managerId.toString().includes(searchTerm.toString())

                            ) {
                                return val;
                            }
                        }).map(item => (

                            <tr>

                                <th scope="row">
                                    {item.employeeId}
                                </th>
                                <td>

                                    <img src={item.icon} alt="ted" />
                                </td>
                                <td>

                                    {item.name}
                                </td>
                                {/* <td>
                                    {item.empLevel}
                                </td> */}
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.phone}
                                </td>
                                <td>

                                    {item.managerId}


                                </td>



                                <td>
                                    <Link to="/AddEmp/">
                                        <button type="button" onClick={() => setEid(item.employeeId, item.empLevel, item.managerId)} class="btn btn-outline-success btn-sm">Apply Leave</button>
                                    </Link>
                                </td>

                            </tr>

                        ))}

                    </table></div>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <p>-</p>

            </div>
        );
    }
};



export default AllEmployees;