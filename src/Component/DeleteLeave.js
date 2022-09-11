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
                <br/>
                <h2>DELETE LEAVE RECORD</h2>
                <br/><br/>
                
                <dl class="row">
                    <dt class="col-sm-9">Leave ID</dt>
                    <dd class="col-sm-1">{LeaveId}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-9">Employee ID</dt>
                    <dd class="col-sm-1">{EmployeeId}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-9">Employee Level</dt>
                    <dd class="col-sm-1">{EmplLevel}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-9">Manager ID</dt>
                    <dd class="col-sm-1">{ManagerId}</dd>
                </dl>
                <dl class="row">
                    <dt class="col-sm-9">Leaves in hand</dt>
                    <dd class="col-sm-1">{LeavesInHand}</dd>
                </dl>
                <blockquote class="blockquote">
                    <dl class="row">
                        <mark>
                            <p><strong>Leave Start : {LeaveStart1}</strong></p></mark>
                    </dl>
                    <dl class="row"><mark>
                        <p><strong>Leave End : {LeaveEnd1}</strong></p></mark>
                    </dl>
                </blockquote>

                <dl class="row">

                    <dt class="col-sm-9">Leave Type: </dt>
                    <dd class="col-sm-3">{LeaveType}</dd>
                </dl>


                <dl class="row">
                    <dt class="col-sm-9">Reason: </dt>
                    <dd class="col-sm-3">{Reason}</dd>
                </dl>

                {/* <input type="submit"></input> */}
                <button type="submit" class="btn btn-danger">DELETE</button>
                <br />
                {submit &&
                    <label>Leave record deleted</label>
                }
            </form>
        </div>
    );
}

export default DeleteLeave;