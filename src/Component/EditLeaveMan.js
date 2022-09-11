import React, { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AddEmp.css';
import './EditLeaveMan.css';



const EditLeaveMan = (props) => {
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

    // LeaveStart1 = new Date(LeaveStart.getFullYear(), LeaveStart.getMonth(), LeaveStart.getDate());
    let LeaveStart1 = LeaveStart.slice(0, 10);
    let LeaveEnd1 = LeaveEnd.slice(0, 10);

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    /*    const UpdateLeave = (e) => {
           e.preventDefault();
           const data = {
               lid: LeaveId,
               employeeId: EmployeeId,
               emplLevel: EmplLevel,
               managerId: ManagerId,
               leavesInHand: LeavesInHand,
               leaveStart: LeaveStart,
               leaveEnd: LeaveEnd,
               leaveType: LeaveType,
               reason: Reason,
               leaveStatus: "approved"
           };
           const url = 'http://localhost:3000/api/Leavelms/UpdateLeave';
           axios.put(url, data)
           .then((result) => {
               props.history.push('/AllEmp');
           });
   
       }
    */
    /* componentDidMount() {
        // Simple PUT request with a JSON body using fetch
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React PUT Request Example' })
        };
        fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    } */



    const handleSubmitApprove = (/* event */) => {
        // event.preventDefault();
        // alert(inputs.desc);

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lid: LeaveId,
                employeeId: EmployeeId,
                emplLevel: EmplLevel,
                managerId: ManagerId,
                leavesInHand: LeavesInHand,
                leaveStart: LeaveStart,
                leaveEnd: LeaveEnd,
                leaveType: LeaveType,
                reason: Reason,
                leaveStatus: "approved"
            })
        };
        fetch(`http://localhost:12242/api/Leavelms/${LeaveId}`, requestOptions)
            .then(response => response.json())
            .then(setSubmit(1));

        /* const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token'
            },
            body: JSON.stringify({
                lid: inputs.lid,
                employeeId: inputs.employeeId,
                emplLevel: inputs.emplLevel,
                managerId: inputs.managerId,
                leavesInHand: inputs.leavesInHand,
                leaveStart: inputs.leaveStart,
                leaveEnd: inputs.leaveEnd,
                leaveType: inputs.leaveType,
                reason: inputs.reason,
                leaveStatus: inputs.leaveStatus

            })
        };
        fetch(`http://localhost:12242/api/Leavelms/${inputs.lid}`, requestOptions)
            .then(response => response.json())
            .then(setSubmit(1)); */

    }

    const handleSubmitReject = (/* event */) => {
        // event.preventDefault();
        // alert(inputs.desc);

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lid: LeaveId,
                employeeId: EmployeeId,
                emplLevel: EmplLevel,
                managerId: ManagerId,
                leavesInHand: LeavesInHand,
                leaveStart: LeaveStart,
                leaveEnd: LeaveEnd,
                leaveType: LeaveType,
                reason: Reason,
                leaveStatus: "rejected"
            })
        };
        fetch(`http://localhost:12242/api/Leavelms/${LeaveId}`, requestOptions)
            .then(response => response.json())
            .then(setSubmit(1));

    }

    return (
        <div>
            <div class="container-xl">
            <h1>UPDATE</h1>
            <br /><br />
            
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
                <form>




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



                    <button type="submit" onClick={handleSubmitApprove} class="btn btn-success">APPROVE</button>

                    <button type="submit" onClick={handleSubmitReject} class="btn btn-danger">REJECT</button>


                </form>
            
    </div>

        </div>

    );

}



export default EditLeaveMan;