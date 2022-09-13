import { VictoryPie } from "victory-pie";
import { React, useEffect } from "react";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  Line } from 'recharts';
import { BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { AreaChart, Area, ComposedChart, Scatter } from 'recharts';


var leaveData = [{}];
var allData = [{}];
//const LeaveLabels = ["vacation", "Maternal", "Vacation", "Medical", "personal", "medical", "paid", "paternity", "maternity"];

/* const myData = [
    { x: "PHP", y: 900 },
    { x: "Python", y: 400 },
    { x: "Javascript", y: 300 },
    { x: "Shart", y: 700 },
    { x: "Jipt", y: 150 }
]; */

const Dashboard = () => {

    useEffect(() => {
        const sSubject = [];
        const sMarks = [];
        const getStudentdata = async () => {
            const reqData = await fetch("http://localhost:12242/api/Leavelms");
            const resData = await reqData.json();
            for (let i = 0; i < resData.length; i++) {
                sSubject.push(resData[i].leaveType);
                //sMarks.push(parseInt(resData[i].managerId));
            }

            allData = reqData;

            console.log(resData);
            console.log(sSubject);
            console.log(sMarks);

            var res = Array.from(new Set(sSubject)).map(a =>
                ({ x: a, y: sSubject.filter(f => f === a).length }));

            console.log(res);
            leaveData = res;
            console.log(leaveData);
            /* setLeaveType1(res.leaveType2);
            console.log(LeaveType1); */



        }

        getStudentdata();
    }, [])




    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <br/>
                <h1>Leave Analytics</h1>
                <br/>
                <table>

                </table>
                <div>
                    <ComposedChart
                        width={1200}
                        height={400}
                        data={leaveData}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="x" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="y" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="y" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="y" stroke="#ff7300" />
                        <Scatter dataKey="y" fill="red" />
                    </ComposedChart>
                </div>
                <div>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="y"
                            isAnimationActive={true}
                            data={leaveData}
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                    <BarChart
                        width={1000}
                        height={500}
                        data={leaveData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 80,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis
                            dataKey="x"
                            scale="point"
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="y" fill="#8884d8" background={{ fill: "#eee" }} />
                    </BarChart>
                </div>
            </div>

            <div>
                <AreaChart
                    width={500}
                    height={400}
                    data={leaveData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="x" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="y" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="y" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
            <div style={{ height: 620 }}>
                <VictoryPie
                    data={leaveData}
                    colorScale={["blue", "yellow", "red", " purple", "grey", "gold", "pink", "cyan", "magenta"]}
                    radius={100}
                />

            </div>
            {/* <div className="container-fluid mb-3">
                <h3 className="mt-3">Welcome to Piechart </h3>
                <Chart
                    type="pie"
                    width={1349}
                    height={550}

                    series={["vacation", "Maternal", "Vacation", "Medical", "personal", "medical", "paid", "paternity", "maternity"]}

                    options={{
                        title: {
                            text: "Student PieChart"
                        },
                        noData: { text: "Empty Data" },
                        // colors:["#f90000","#f0f"],
                        labels:LeaveLabels

                    }}
                >
                </Chart>
            </div> */}
        </div>

    );
};

export default Dashboard;