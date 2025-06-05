import React, { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    Legend,
} from 'recharts';

const Chart = () => {
    const [chart1Data, setChart1Data] = useState([
        { name: 'January', TotalUsers: 4200, TotalSales: 2600, amt: 3100 },
        { name: 'February', TotalUsers: 3500, TotalSales: 1800, amt: 2800 },
        { name: 'March', TotalUsers: 1800, TotalSales: 10200, amt: 2900 },
        { name: 'April', TotalUsers: 3000, TotalSales: 4200, amt: 2100 },
        { name: 'May', TotalUsers: 2200, TotalSales: 5300, amt: 2700 },
        { name: 'June', TotalUsers: 2700, TotalSales: 4100, amt: 3200 },
        { name: 'July', TotalUsers: 1800, TotalSales: 10200, amt: 2900 },
        { name: 'August', TotalUsers: 3100, TotalSales: 3900, amt: 2900 },
        { name: 'September', TotalUsers: 4200, TotalSales: 2600, amt: 3100 },
        { name: 'October', TotalUsers: 1800, TotalSales: 10200, amt: 1050 },
        { name: 'November', TotalUsers: 2000, TotalSales: 3300, amt: 2600 },
        { name: 'December', TotalUsers: 9000, TotalSales: 10200, amt: 10200 }
    ]);



    return (
        <div className="card my-4 shadow-md sm:rounded-lg bg-white text-black ">
            <div className="flex items-center gap-5 px-5 py-5">
                <h2 className="text-[18px] font-[600]">Total Users & Total Sales</h2>
            </div>

            <div className="flex items-center gap-5 px-5 py-2">
                {/* Total Users */}
                <span className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-green-600 inline-block cursor-pointer"></span>
                    <span>Total Users</span>
                </span>

                {/* Total Sales */}
                <span className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-blue-600 inline-block cursor-pointer"></span>
                    <span>Total Sales</span>
                </span>
            </div>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={chart1Data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke='none' />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="TotalSales"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                        strokeWidth={3}
                    />
                    <Line
                        type="monotone"
                        dataKey="TotalUsers"
                        stroke="#82ca9d"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;


