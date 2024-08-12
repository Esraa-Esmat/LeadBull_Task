import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useInView } from 'react-intersection-observer';

const LineChart = () => {
    const [chartSeries, setChartSeries] = useState([]);
    const { ref, inView } = useInView({
        threshold: 0.5, // Start animation when 65% of the chart is visible
    });

    const chartOptions = {
        chart: {
            type: 'line',
            height: 350,
            background: 'rgba(45, 45, 45, 0.7)', // Semi-transparent dark gray background
            foreColor: '#fff', // White text color
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800, // Speed of the animation
                animateGradually: {
                    enabled: true,
                    delay: 150, // Delay between each point's animation
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350,
                },
            },
        },
        stroke: {
            curve: 'smooth', // Smooth curve for the line chart
        },
        xaxis: {
            categories: ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28'], // X-axis categories
        },
        tooltip: {
            theme: 'dark', // Use the 'dark' theme to set background as black and text as white
            style: {
                fontSize: '12px', // You can adjust the font size as needed
                fontFamily: undefined,
                color: '#fff', // Ensures text color is white
            },
            onDatasetHover: {
                highlightDataSeries: true,
            },
            marker: {
                show: true,
            },
            x: {
                show: true,
            },
        },
    };

    useEffect(() => {
        if (inView) {
            // Set chart data when the chart is in view to trigger the animation
            setChartSeries([
                {
                    name: 'New Sales',
                    data: [65, 59, 80, 81, 56, 55, 30, 72, 89, 92], // Data points for the line chart
                },
            ]);
        } else {
            // Reset chart data with zeros when the chart leaves the view, so animation can play again smoothly
            setChartSeries([
                {
                    name: 'New Sales',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
            ]);
        }
    }, [inView]);

    return (
        <div ref={ref} id="chart">
            <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="line"
                height={350}
            />
        </div>
    );
};

export default LineChart;
