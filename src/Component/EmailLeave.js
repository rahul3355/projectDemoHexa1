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
    const leaveDays = difff + 1;

    function calcBusinessDays(dDate1, dDate2) { // input given as Date objects
        var iWeeks, iDateDiff, iAdjust = 0;
        if (dDate2 < dDate1) return -1; // error code if dates transposed
        var iWeekday1 = dDate1.getDay(); // day of week
        var iWeekday2 = dDate2.getDay();
        iWeekday1 = (iWeekday1 == 0) ? 7 : iWeekday1; // change Sunday from 0 to 7
        iWeekday2 = (iWeekday2 == 0) ? 7 : iWeekday2;
        if ((iWeekday1 > 5) && (iWeekday2 > 5)) iAdjust = 1; // adjustment if both days on weekend
        iWeekday1 = (iWeekday1 > 5) ? 5 : iWeekday1; // only count weekdays
        iWeekday2 = (iWeekday2 > 5) ? 5 : iWeekday2;
      
        // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
        iWeeks = Math.floor((dDate2.getTime() - dDate1.getTime()) / 604800000)
      
        if (iWeekday1 < iWeekday2) { //Equal to makes it reduce 5 days
          iDateDiff = (iWeeks * 5) + (iWeekday2 - iWeekday1)
        } else {
          iDateDiff = ((iWeeks + 1) * 5) - (iWeekday1 - iWeekday2)
        }
      
        iDateDiff -= iAdjust // take into account both days on weekend
      
        return (iDateDiff + 1); // add 1 because dates are inclusive
      }

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