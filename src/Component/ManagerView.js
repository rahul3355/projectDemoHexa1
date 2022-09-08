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
    const [print, setPrint] = useState(false)
    const [mid, setMid] = useState(3);

    function getData(val) {
        console.warn(val.target.value)
        setData(val.target.value)
        setMid(val.target.value)
        setPrint(false)
    }

    function setManagerId() {
        setMid(mid)
    }



    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        //const mid1 = mid;
        //const baseUrl = 'http://localhost:12242/api/Leavelms/managerid/${mid}'
        fetch(`http://localhost:12242/api/Leavelms/managerid/${mid}`)
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
    }, [mid])



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

                <div class="container-sm">

                    <label class="col-6 col-sm-2"><b>Enter Manager ID</b></label>
                    <input class="col-6 col-sm-1" type="text" onChange={getData} /> <br />
                    <button class="col-6 col-sm-3 btn-warning" onClick={() => setPrint(true)} >Fetch Leave Applications</button>

                </div>

                <br /><br />

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
                            <th scope="col">Action</th>
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
                                    <td>
                                        <Link to="/EditLeaveMan" text={item.lid}>
                                            <button type="button" class="btn btn-outline-warning btn-sm">Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                                                        
                            )) : null}

                </table>
            </div>
        );

    };
}

export default ManagerView;