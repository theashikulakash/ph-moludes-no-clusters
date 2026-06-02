import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const resultData = [
  {
    "id": 101,
    "name": "Ashikul Akash",
    "physics": 85,
    "chemistry": 92,
    "math": 98
  },
  {
    "id": 102,
    "name": "Tanvir Rahman",
    "physics": 78,
    "chemistry": 81,
    "math": 85
  },
  {
    "id": 103,
    "name": "Sajid Islam",
    "physics": 92,
    "chemistry": 88,
    "math": 94
  },
  {
    "id": 104,
    "name": "Mehedi Hasan",
    "physics": 65,
    "chemistry": 70,
    "math": 72
  },
  {
    "id": 105,
    "name": "Naimur Rahman",
    "physics": 88,
    "chemistry": 85,
    "math": 90
  },
  {
    "id": 106,
    "name": "Rakibul Islam",
    "physics": 74,
    "chemistry": 79,
    "math": 82
  },
  {
    "id": 107,
    "name": "Ariful Haque",
    "physics": 95,
    "chemistry": 91,
    "math": 99
  },
  {
    "id": 108,
    "name": "Fahim Ahmed",
    "physics": 82,
    "chemistry": 84,
    "math": 88
  },
  {
    "id": 109,
    "name": "Jubayer Hossain",
    "physics": 71,
    "chemistry": 75,
    "math": 78
  },
  {
    "id": 110,
    "name": "Sakib Al Hasan",
    "physics": 89,
    "chemistry": 87,
    "math": 91
  }
]


const ResultChart = () => {
    return (
        <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={resultData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="physics" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="math" stroke="#ffc658" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResultChart;