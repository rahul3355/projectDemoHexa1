import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AddEmp.css';
import './EditLeaveMan.css';
import moment from "moment";



const EditLeaveMan = (props) => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();


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

    var start = moment(LeaveStart);
    var end = moment(LeaveEnd);
    var difff = end.diff(start, "days")
    console.log(difff)
    

    const getBusinessDatesCount = (startDate, endDate) => {
        let count = 0;
        let curDate = +startDate;
        while (curDate <= +endDate) {
          const dayOfWeek = new Date(curDate).getDay();
          const isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0);
          if (!isWeekend) {
            count++;
          }
          curDate = curDate + 24 * 60 * 60 * 1000
        }
        return count;
      }
    
    var diff2 = getBusinessDatesCount(start, end)
    console.log(diff2)
    const leaveDays = diff2;

    
    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }






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

        alert("The leave request has been approved.");
        navigate('/AllLeave');

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

        alert("The leave request has been rejected.");

        navigate('/AllLeave');

    }

    return (
        <div>
            <div class="container-lg">
                
                <div class="jumbotron jumbotron-fluid">
                    <div class="container-xl">
                        <h1 class="display-4">Review Leave Request</h1>
                    

                <br />

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
                    <dl class="row">
                        <dt class="col-sm-9" id="leaveDays">Leave Days</dt>
                        <dd class="col-sm-2" id="leaveDays1">{leaveDays} Days</dd>
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
                </div>

        </div>

    );

}



export default EditLeaveMan;