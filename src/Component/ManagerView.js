import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EditLeaveMan from "./EditLeaveMan";
import './ManagerView.css';

const ManagerView = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(true)
    const [mid, setMid] = useState(3);
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});
    const [searchTerm, setsearchTerm] = useState("");


    function getData(val) {
        console.warn(val.target.value)
        if (val == null || val.toString() === ""){
            setPrint(false)
        }
        else{
        setData(val.target.value)
        setMid(val.target.value)

        setPrint(false)
    }
    }



    function setManagerId() {
        setMid(mid)
    }

    const setLid = (lid, employeeId, emplLevel, managerId, leavesInHand, leaveStart, leaveEnd, leaveType, reason, leaveStatus) => {
        console.log(lid)
        localStorage.setItem("LID", lid);
        localStorage.setItem("EID", employeeId);
        localStorage.setItem("ELEVEL", emplLevel);
        localStorage.setItem("MID", managerId);
        localStorage.setItem("LIH", leavesInHand);
        localStorage.setItem("LS", leaveStart);
        localStorage.setItem("LE", leaveEnd);
        localStorage.setItem("LT", leaveType);
        localStorage.setItem("RE", reason);
        localStorage.setItem("LSTATUS", leaveStatus);
    }



    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        //const mid1 = mid;
        //const baseUrl = 'http://localhost:12242/api/Leavelms/managerid/${mid}'
        
        fetch(`http://localhost:12242/api/Leavelms/managerid/${mid}/leaveStatus?status=pending`)
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
        }
        
    , [mid])







    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>


                <br /><br />


                {/* <input type="text" id="managerID1" onChange={handleChange}></input><br />
            <button type="submit" class="btn btn-dark">Fetch</button> */}

                <div class="container-lg">

                    <label class="col-6 col-sm-2"><b>Enter Manager ID</b></label>
                    <input class="col-6 col-sm-1" type="text" onChange={getData} /> <br />
                    <button class="col-6 col-sm-3 btn-warning" onClick={() => setPrint(true)} >Fetch Leave Applications</button>

                </div>
                <input hidden={true}
                    type="text" placeholder="Search.." className="form-control"
                    style={{marginTop: 50, marginBottom: 50, width: "40%"}}
                    onChange={(e) =>{
                        setsearchTerm(e.target.value);
                        setMid(e.target.value);
                    }}
                />  

                <br /><br />
                <div class="container-xl">

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
                            <th scope="col" colspan="2">Action</th>
                        </tr>
                    </thead>

                    {
                        print ?



                            items.map(item => (




                                <tr>
                                    <th scope="row">

                                        {/* <EditLeaveMan text = {item.lid}/> */}
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
                                        <Link to="/EditLeaveMan/">
                                            <button type="button" onClick={() => setLid(item.lid, item.employeeId, item.emplLevel, item.managerId, item.leavesInHand, item.leaveStart, item.leaveEnd, item.leaveType, item.reason, item.leaveStatus,)} class="btn btn-outline-warning btn-sm">Review</button>
                                        </Link>


                                    </td>

                                    <td>
                                        <Link to="/DeleteLeave/">
                                            <button type="button" onClick={() => setLid(item.lid, item.employeeId, item.emplLevel, item.managerId, item.leavesInHand, item.leaveStart, item.leaveEnd, item.leaveType, item.reason, item.leaveStatus,)}/*  onClick={handleSubmitDelete(item.lid)} */ class="btn btn-danger btn-sm">Delete</button>
                                        </Link>
                                    </td>
                                </tr>

                            )) : null}

                </table>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <p>-</p>
            </div>
        );

    };
}

export default ManagerView;