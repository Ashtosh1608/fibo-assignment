// Filename - App.js

import React from "react";
import "./Graph.css"
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";

export const Graph = () => {
    // Sample data
    const data = [
        { name: "28/4", students: 92 },
        { name: "30/4", students: 100 },
        { name: "02/5", students: 98 },
        { name: "05/5", students: 90 },
        { name: "11/5", students: 84 },
        { name: "15/5", students: 82 },
        { name: "15/5", students: 80 },
        { name: "15/5", students: 80 },
    ];

    return (
        <>
            <div className="gr-all">
                <BarChart className="g-barchart"  width={350} height={200} data={data}>
                    <Bar className="g-barchart" dataKey="students" fill="blue" />
                    {/* <CartesianGrid stroke="#ccc" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>
            </div>
        </>
    );
};


