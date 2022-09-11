import React, { useState } from "react";

const DeleteLeave = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});

    const LeaveId = localStorage.getItem('LID');
    const EmployeeId = localStorage.getItem('EID');
    const EmplLevel = localStorage.getItem('ELEVEL');
    const ManagerId = localStorage.getItem('MID');
    const LeavesInHand = localStorage.getItem('LIH');
    const LeaveStart = localStorage.getItem('LS');
    const LeaveEnd = localStorage.getItem('LE');
    const LeaveType = localStorage.getItem('LT');
    const Reason = localStorage.getItem('RE');
    const LeaveStatus = localStorage.getItem('LSTATUS');

    let LeaveStart1 = LeaveStart.slice(0, 10);
    let LeaveEnd1 = LeaveEnd.slice(0, 10);

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.desc);

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('http://localhost:12242/api/Leavelms/' + LeaveId, requestOptions)
            .then(response => response.json())
            .then(setSubmit(1));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Leave ID = {LeaveId}</h2>

                <h2>Employee ID = {EmployeeId}</h2>

                <h2>Level = {EmplLevel}</h2>

                <h2>Manager Id: {ManagerId}</h2>

                <h2>Leaves In Hand: {LeavesInHand}</h2>


                <h2>Leave Start: {LeaveStart1}</h2><br />


                <h2>Leave End: {LeaveEnd1}</h2><br />
                {/* <label >leaveType</label><br/>
               <input type="text" id="leaveType" onChange={handleChange}></input><br/> */}

                <h2>Leave Type: {LeaveType}</h2>

                <h2>Reason : {Reason}</h2>
                <input type="submit"></input><br />
                {submit &&
                    <label>Response Submitted</label>
                }
            </form>
        </div>
    );
}

export default DeleteLeave;