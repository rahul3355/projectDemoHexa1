import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AllEmp.css';



const AllEmployees = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const setEid = (employeeId, empLevel, managerId) => {
        console.log(employeeId);
        localStorage.setItem("EID1", employeeId);
        localStorage.setItem("ELEVEL1", empLevel);
        localStorage.setItem("MID1", managerId);
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
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>

                <br />
                <table class="table table-dark">
                    <thead>
                        <tr>

                            <th scope="col">Employee ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Level</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Manager ID</th>

                        </tr>
                    </thead>

                    {items.map(item => (

                        <tr>

                            <th scope="row">
                                {item.employeeId}
                            </th>
                            <td>

                                {item.name}
                            </td>
                            <td>
                                {item.empLevel}
                            </td>
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

                </table>

            </div>
        );
    }
};



export default AllEmployees;