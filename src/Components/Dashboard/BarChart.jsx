import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useInView } from 'react-intersection-observer';

const BarChart = () => {
  const [chartSeries, setChartSeries] = useState([]);
  const { ref, inView } = useInView({
    threshold: 0.65,  // Trigger when 65% of the element is in view
  });

  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      background: 'rgba(45, 45, 45, 0.7)',
      foreColor: '#fff',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1500, // Duration for the bars to animate from y-axis to their goal
        animateGradually: {
          enabled: false,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 1500, // Animation duration for dynamic updates
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,  // Set the bars to be horizontal
        barHeight: '55%',
        startingShape: 'flat',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels on bars
    },
    xaxis: {
      axisBorder: {
        show: false,  // Hide the x-axis border
      },
      axisTicks: {
        show: false,  // Hide the x-axis ticks
      },
      labels: {
        show: false,  // Hide the x-axis labels
      },
    },
    yaxis: {
      categories: ['Active', 'Bounced', 'Unsubscribed', 'Unconfirmed', 'Deleted'], // Y-axis categories
      axisBorder: {
        show: false,  // Hide the y-axis border
      },
      axisTicks: {
        show: false,  // Hide the y-axis ticks
      },
      labels: {
        style: {
          colors: ['#fff'], // Set the color of the y-axis labels to white
          fontSize: '14px',
        },
      },
    },
    grid: {
      show: false,  // Hide the grid lines
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: ['rgba(2, 127, 202)'], // Gradient end color
        inverseColors: false,
        opacityFrom: 0.3,
        opacityTo: 0.3,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0.99,
            color: 'rgba(80, 205, 255)',
            opacity: 1
          },
          {
            offset: 100.99,
            color: 'rgba(2, 127, 202)',
            opacity: 1
          }
        ]
      }
    },
    tooltip: {
      theme: 'dark', // Setting the tooltip theme to dark
      style: {
        fontSize: '12px',
        fontFamily: undefined,
        background: 'black', // Background color for tooltip
        color: 'white', // Text color for tooltip
      },
      x: {
        formatter: function (val) {
          return val + " leads";
        },
      },
    },
  };

  useEffect(() => {
    if (inView) {
      // Set chart data when the chart is in view to trigger the animation
      setChartSeries([
        {
          name: 'Leads',
          data: [2156, 1500, 1000, 750, 500],
        },
      ]);
    } else {
      // Reset chart data when the chart goes out of view, so animation can play again
      setChartSeries([]);
    }
  }, [inView]);

  return (
    <div ref={ref} id="chart">
      <ReactApexChart
        options={barChartOptions}
        series={chartSeries}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChart;
