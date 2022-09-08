import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AddEmp.css';



const AddEmp = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});



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
                employeeId: inputs.employeeId,
                emplLevel: inputs.emplLevel,
                managerId: inputs.managerId,
                leavesInHand: inputs.leavesInHand,
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

    }


    return (
        <div class="container" id="leaveForm">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
            <form onSubmit={handleSubmit}>


                <br />
                <label>Employee ID</label><br />
                <input type="number" id="employeeId" onChange={handleChange}></input><br></br>
                <label >Level</label><br />
                <input type="number" id="emplLevel" onChange={handleChange}></input><br />
                <label>Manager Id</label><br />
                <input type="number" id="managerId" onChange={handleChange}></input><br></br>
                <label>Leaves In Hand</label><br />
                <input type="number" id="leavesInHand" onChange={handleChange}></input><br></br><br />
                <label >Leave Start</label><br />
                <input type="date" id="leaveStart" onChange={handleChange}></input><br /><br />
                <label>Leave End</label><br />
                <input type="date" id="leaveEnd" onChange={handleChange}></input><br></br><br />
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

                <button type="submit" class="btn btn-dark">Submit</button>

            </form>
        </div>
    );
}



export default AddEmp;