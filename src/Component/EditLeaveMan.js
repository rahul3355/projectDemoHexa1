import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AddEmp.css';
import './EditLeaveMan.css';
import moment from "moment";
import Button from '@mui/material/Button';
/* import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { borderLeftColor } from "@mui/system"; */
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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

/*     const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper
       
    }));
 */






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
            <br />
            <div class="container-lg">
            
                <div class="jumbotron jumbotron-fluid">
                
                    <div class="container-fluid">

                        <h1 class="display-6" id="head1">REVIEW LEAVE REQUEST</h1>


                       

                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
                        <form>



                           <Typography>
                               

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
                                <br/><br/>

                                <Button type="submit" onClick={handleSubmitApprove} class="btn btn-success">APPROVE</Button>

                                <Button type="submit" onClick={handleSubmitReject} class="btn btn-danger">REJECT</Button>

                            </Typography>
                        </form>

                    </div>
                </div>
            </div>

        </div>

    );

}



export default EditLeaveMan;