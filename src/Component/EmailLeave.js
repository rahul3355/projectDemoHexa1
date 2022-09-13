import { React, useState, useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
import moment from "moment";

const EmailLeave = () => {


    const LeaveId = localStorage.getItem('eeLID');
    const EmployeeId = localStorage.getItem('eeEID');
    const LeaveStart = localStorage.getItem('eeLS');
    const LeaveEnd = localStorage.getItem('eeLE');
    const LeaveType = localStorage.getItem('eeLT');
    const LeaveStatus = localStorage.getItem('eeLSTATUS');

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

      //const leaveDays1 = calcBusinessDays(LeaveStart, LeaveEnd);

    const emailString = "Employee ID: " + EmployeeId.toString() + ". Your leave request for " + leaveDays.toString() + " days is " + LeaveStatus.toString() + ". Leave Start: " + LeaveStart1.toString() + ", Leave End: " +LeaveEnd1.toString();



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_widp5ks', 'template_dpqqfg8', form.current, 'EtFdLDjKuyRslx7ve')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Email is sent");
    };
    return (
        <div>
            <div class="container-lg">

                <div class="jumbotron jumbotron-fluid">
                    <div class="container-xl">
                        <h1 class="display-4">Email leave status</h1>


                        <br />

                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
                        <form ref={form} onSubmit={sendEmail}>




                            <dl class="row">
                                <dt class="col-sm-9">Leave ID</dt>
                                <dd class="col-sm-1">{LeaveId}</dd>
                            </dl>
                            <dl class="row">
                                <dt class="col-sm-9">Employee ID</dt>
                                <dd class="col-sm-1">{EmployeeId}</dd>
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

                            <input name="message" size="100" value={emailString} />






                            <button type="submit" class="btn btn-success">Email</button>





                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmailLeave