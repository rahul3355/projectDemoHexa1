import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AllEmp.css';



const AllEmp = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);



    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:12242/api/Leavelms")
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
            
                <br/>
                <table class="table table-striped table-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Leave ID</th>
                            <th scope="col">Employee ID</th>
                            <th scope="col">Level</th>
                            <th scope="col">Manager ID</th>
                            <th scope="col">Leaves in hand</th>
                            <th scope="col">Leave Start</th>
                            <th scope="col">Leave End</th>
                            <th scope="col">Leave Type</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Leave Status</th>
                        </tr>
                    </thead>

                    {items.map(item => (

                        <tr>
                            <th scope="row">
                                {item.lid}
                            </th>
                            <td>
                                {item.employeeId}
                            </td>
                            <td>

                                {item.emplLevel}
                            </td>
                            <td>
                                {item.managerId}
                            </td>
                            <td>
                                {item.leavesInHand}
                            </td>
                            <td>
                                {item.leaveStart}
                            </td>
                            <td>
                                {item.leaveEnd}
                            </td>
                            <td>
                                {item.leaveType}
                            </td>
                            <td>
                                {item.reason}
                            </td>
                            <td>
                                {item.leaveStatus}
                            </td>
                        </tr>

                    ))}

                </table>
                <Link to="/AddEmp">
                <button>Add a leave</button>
                </Link>
            </div>
        );
    }
};



export default AllEmp;