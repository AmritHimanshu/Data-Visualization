import React from 'react';
import { Bar } from "react-chartjs-2";

function BarChart({ chartData, pestle, topic, sector }) {
    return (
        <div className='chart-container'>
            <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: `Intensity-Region w.r.t ${pestle}, ${topic} & ${sector}`
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    )
}

export default BarChart