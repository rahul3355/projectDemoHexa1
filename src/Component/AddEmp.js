import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import './AddEmp.css';
import moment from "moment";



const AddEmp = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const EmployeeId1 = localStorage.getItem('EID1');
    const EmplLevel1 = localStorage.getItem('ELEVEL1');
    const ManagerId1 = localStorage.getItem('MID1');

    const validateInputs = (leaveStart, leaveEnd) => {
        var date1 = new Date(leaveStart);
        var date2 = new Date(leaveEnd);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        var start = moment(date1);
        var end = moment(date2);
        var difff = end.diff(start, "days")
        console.log(difff)
        //best to use .getTime() to compare dates
        /* var date_create = moment().format("DD-MM-YYYY hh:mm:ss")
        console.warn(date_create)
        console.warn(date2) */
        //
        if (date1.getTime() > date2.getTime()) {

            alert("Leave start date should be before leave end date");
            document.getElementById('leaveEnd').value = "";

        }
        
    }





    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.desc);



        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                employeeId: EmployeeId1,
                emplLevel: EmplLevel1,
                managerId: ManagerId1,
                leavesInHand: 18,
                leaveStart: inputs.leaveStart,
                leaveEnd: inputs.leaveEnd,
                leaveType: inputs.leaveType,
                reason: inputs.reason,
                leaveStatus: "pending",
            })
        };
        fetch('http://localhost:12242/api/Leavelms/', requestOptions)
            .then(response => response.json())
            .then(data => setSubmit(data.id));

        alert("The leave request has been sent to manager.");
        navigate('/AllLeave');

    }


    return (
        <div class="container" id="leaveForm">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
            <form onSubmit={handleSubmit}>


                <br />
                <label>Employee ID</label><br />
                <input type="number" id="employeeId" onChange={handleChange} value={EmployeeId1} disabled={true}></input><br></br>
                <label >Level</label><br />
                <input type="number" id="emplLevel" onChange={handleChange} value={EmplLevel1} disabled={true}></input><br />
                <label>Manager Id</label><br />
                <input type="number" id="managerId" onChange={handleChange} value={ManagerId1} disabled={true}></input><br></br>
               {/*  <label>Leaves In Hand</label><br />
                <input type="number" id="leavesInHand" onChange={handleChange} min="0" max="30" required></input><br></br><br /> */}
                <label >Leave Start</label><br />
                <input type="date" id="leaveStart" onChange={handleChange} min="2022-09-12" required></input><br /><br />
                <label>Leave End</label><br />
                <input type="date" id="leaveEnd" onChange={handleChange} required></input><br></br><br />
                {/* <input type="text" id="difference"></input> */}
                {/* <label >leaveType</label><br/>
                <input type="text" id="leaveType" onChange={handleChange}></input><br/> */}
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref" id="leabe">Leave Type</label>
                <select class="custom-select my-1 mr-sm-2" type="text" id="leaveType" onChange={handleChange}>
                    <option selected>Choose...</option>
                    <option value="vacation">Vacation</option>
                    <option value="medical">Medical</option>
                    <option value="maternity">Maternity</option>
                    <option value="paternity">Paternity</option>
                    <option value="paid">Paid</option>
                    <option value="personal">Personal</option>
                </select>
                <br />
                <label>Reason</label><br />
                <input type="text" id="reason" onChange={handleChange}></input><br />
                {/* <label >leaveStatus</label><br/>
                <input type="text" id="leaveStatus" onChange={handleChange}></input><br/>
                <br/><br/> */}
                <br />

                {/* <input type="submit"></input><br />
                {submit &&
                    <label>Response Submitted</label>
                } */}

                {/* <input type="submit" onClick="myFunction()" />
                <script>
                    function myFunction() {
                        window.location.href = "http://localhost:3000/AllEmp"}
                </script> */}

                <button type="submit" onClick={validateInputs(inputs.leaveStart, inputs.leaveEnd)} class="btn btn-dark">Submit</button>

            </form>
        </div>
    );
}



export default AddEmp;