import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from "moment";
import './EditLeaveMan.css';

const DeleteLeave = () => {
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

    let LeaveStart1 = LeaveStart.slice(0, 10);
    let LeaveEnd1 = LeaveEnd.slice(0, 10);

    var start = moment(LeaveStart);
    var end = moment(LeaveEnd);



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
        alert("Leave request deleted");
        navigate('/AllLeave');
    }

    return (
        <div class="container-xl">
            <form onSubmit={handleSubmit}>
                <div class="container-fluid">
                <br /> <br /> 
                    <h1 class="display-6" id= "headLeave">DELETE LEAVE REQUEST</h1>


                    <br />

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">

                            <TableBody>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Leave ID
                                    </TableCell>
                                    <TableCell align="left">{LeaveId}</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Employee ID
                                    </TableCell>
                                    <TableCell align="left">{EmployeeId}</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Employee Level
                                    </TableCell>
                                    <TableCell align="left">{EmplLevel}</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Manager ID
                                    </TableCell>
                                    <TableCell align="left">{ManagerId}</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Leaves in hand
                                    </TableCell>
                                    <TableCell align="left">{LeavesInHand}</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Leave Days
                                    </TableCell>
                                    <TableCell align="left">{leaveDays} Days</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Leave Start
                                    </TableCell>
                                    <TableCell align="left" id="tableStart">{LeaveStart1}</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Leave End
                                    </TableCell>
                                    <TableCell align="left" id="tableStart">{LeaveEnd1}</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Leave Type
                                    </TableCell>
                                    <TableCell align="left">{LeaveType}</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Reason
                                    </TableCell>
                                    <TableCell align="left" id="tableReason">{Reason}</TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* <input type="submit"></input> */}
                    <button type="submit" class="btn btn-danger">DELETE</button>
                    <br /><br /> <br /> <br /> <br /><br /> <br /> <br /> <br />
                    <p>-</p>
                </div>
            </form>
        </div>
    );
}

export default DeleteLeave;