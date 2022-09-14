import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AllEmp.css';






const AllLeave = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState("ASC");

    const setELid = (lid, employeeId, leaveStart, leaveEnd, leaveType, leaveStatus) => {
        console.log(lid)
        localStorage.setItem("eeLID", lid);
        localStorage.setItem("eeEID", employeeId);
        localStorage.setItem("eeLS", leaveStart);
        localStorage.setItem("eeLE", leaveEnd);
        localStorage.setItem("eeLT", leaveType);
        localStorage.setItem("eeLSTATUS", leaveStatus);
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
                <div class="container-xl">
                <br />
                <table class="table table-striped table-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col" onClick={() => sortingInt("lid")}>Leave ID</th>
                            <th scope="col" onClick={() => sortingInt("employeeId")}>Employee ID</th>
                            <th scope="col" onClick={() => sortingInt("emplLevel")}>Level</th>
                            <th scope="col" onClick={() => sortingInt("managerid")}>Manager ID</th>
                            <th scope="col" onClick={() => sortingInt("leavesInHand")}>Leaves in hand</th>
                            <th scope="col">Leave Start</th>
                            <th scope="col">Leave End</th>
                            <th scope="col" onClick={() => sorting("leaveType")}>Leave Type</th>
                            <th scope="col" onClick={() => sorting("reason")}>Reason</th>
                            <th scope="col" onClick={() => sorting("leaveStatus")}>Leave Status</th>
                            <th scope="col">Email</th>
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

                                {item.leaveStart.slice(0, 10)}
                            </td>
                            <td>
                                {item.leaveEnd.slice(0, 10)}
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
                            <td>
                                <Link to="/EmailLeave/">
                                    <button type="button" onClick={() => setELid(item.lid, item.employeeId, item.leaveStart, item.leaveEnd, item.leaveType, item.leaveStatus)}/*  onClick={handleSubmitDelete(item.lid)} */ class="btn btn-dark btn-sm">Email Status</button>
                                </Link>
                            </td>


                        </tr>

                    ))}

                </table>
                </div>
              
                <br /><br />
            </div>
        );
    }
};



export default AllLeave;