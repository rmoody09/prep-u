<template>  
    <h1 class='sat-guide-page-header'>
        Algebra Overview
    </h1>
    <div class="section-description">
        One of the 4 math domains categorized by College Board is "Algebra". While in reality the term algebra covers a much wider range of concepts, when College Board refers to their "Algebra" domain they are talking about linear relationships. This covers relationships that can be represented by a straight line on a graph. This might be a horizontal line, a vertical line, or most frequently, a line with a slope. If any of the variables have exponents, then the relationship is not linear.

        <div class="mt-4">Below, we'll summarize a few of the most important concepts in linear relationships. In the coming sections, we'll cover the various types of problems that you might encounter in the Algebra domain, and the skills and concepts you'll need to tackle them.</div>
    </div>

    <h2 class="sat-guide-section-header">
        Slope of a Line
    </h2>
    <div class="section-description">
        One of the most important concepts in linear relationships is the slope of a line. The slope is often described as the "rise over run" of a line. In other words, it is the change in y divided by the change in x over an interval on the line. For linear relationships, the slope never changes - it is the same for every point on the line. Another way of thinking about the slope is how steep the line is. The steeper the line, the higher the (absolute value of the) slope. If the line goes up as it goes left to right, the slope is positive. If the line goes down as it goes left to right, the slope is negative. If the line is horizontal, the slope is 0, and if the line is vertical, the slope is undefined.
        
        <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
                <div class="text-center mb-2 font-bold">Slope = 8</div>
                <Line :data="steepPositiveData" :options="chartOptions" />
            </div>
            <div>
                <div class="text-center mb-2 font-bold">Slope = 0.25</div>
                <Line :data="shallowPositiveData" :options="chartOptions" />
            </div>
            <div>
                <div class="text-center mb-2 font-bold">Slope = -8</div>
                <Line :data="steepNegativeData" :options="chartOptions" />
            </div>
            <div>
                <div class="text-center mb-2 font-bold">Slope = -0.25</div>
                <Line :data="shallowNegativeData" :options="chartOptions" />
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">
        Y-Intercept
    </h2>
    <div class="section-description">
        Another important concept in linear relationships is the y-intercept. The y-intercept is the point where the line crosses the y-axis. Because the y-axis is a vertical line at x=0, this is can also be thought of as the point on the line where x is equal to 0. So we can always find the y-intercept by plugging in the value 0 in for x in the equation. For example, the line y = 3x + 2 has a y-intercept of 2, because when x is 0, y is 2.

        <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
                <div class="text-center mb-2 font-bold">y = 3x + 2</div>
                <Line :data="yInterceptData" :options="yInterceptChartOptions" />
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">
        X-Intercept
    </h2>
    <div class="section-description">
        The x-intercept is the point where the line crosses the x-axis. Because the x-axis is a horizontal line at y=0, this is can also be thought of as the point on the line where y is equal to 0. So we can always find the x-intercept by plugging in the value 0 in for y in the equation. For example, the line y = 4x + 4 has an x-intercept of -1, because when y is 0, x is -1.

        <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
                <div class="text-center mb-2 font-bold">y = 4x + 4</div>
                <Line :data="xInterceptData" :options="yInterceptChartOptions" />
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">
        Linear Inequalities
    </h2>
    <div class="section-description">
        Linear inequalities are similar to linear equations, but instead of an equals sign, they have an inequality sign. For example, 2x + 2 > 12 is a linear inequality. The solution to this inequality is all the values of x that make the inequality true - in the previous example, the solution is x > 5. While linear equations are depicted graphically as simple straight lines, linear inequalities are depicted graphically as a straight line with a shaded region on one side of the line. For example, the inequality y > 3x + 2 is depicted as a shaded region above the line y = 3x + 2.

        <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
                <div class="text-center mb-2 font-bold">y > 3x + 2</div>
                <Line :data="inequalityData" :options="yInterceptChartOptions" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const generateChartData = (slope) => {
  const xValues = Array.from({length: 17}, (_, i) => i - 8)
  const yValues = xValues.map(x => slope * x)
  
  return {
    labels: xValues,
    datasets: [
      {
        label: `y = ${slope}x`,
        data: yValues,
        borderColor: '#2563eb',
        backgroundColor: '#2563eb',
        pointRadius: 0,
        tension: 0
      }
    ]
  }
}

const generateYInterceptData = (slope, yIntercept) => {
    const xValues = Array.from({length: 11}, (_, i) => i - 5)
    const yValues = xValues.map(x => slope * x + yIntercept)

    return {
        labels: xValues,
        datasets: [
            {
                data: yValues,
                borderColor: '#2563eb',
                backgroundColor: '#2563eb',
                pointRadius: 0,
                tension: 0
            },
            {
                data: [{x: 0, y: yIntercept}],
                borderColor: '#2563eb',
                backgroundColor: '#2563eb',
                pointRadius: 6,
                showLine: false
            }
        ]
    }
}

const generateXInterceptData = (slope, yIntercept) => {
    const xValues = Array.from({length: 11}, (_, i) => i - 5)
    const yValues = xValues.map(x => slope * x + yIntercept)

    return {
        labels: xValues,
        datasets: [
            {
                data: yValues,
                borderColor: '#2563eb',
                backgroundColor: '#2563eb',
                pointRadius: 0,
                tension: 0
            },
            {
                data: [{x: -1, y: 0}],
                borderColor: '#2563eb',
                backgroundColor: '#2563eb',
                pointRadius: 6,
                showLine: false
            }
        ]
    }
}

const generateInequalityData = (slope, yIntercept) => {
    const xValues = Array.from({length: 11}, (_, i) => i - 5)
    const yValues = xValues.map(x => slope * x + yIntercept)

    return {
        labels: xValues,
        datasets: [
            {
                label: `y > ${slope}x + ${yIntercept}`,
                data: yValues,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                pointRadius: 0,
                tension: 0,
                fill: 'end',
                borderWidth: 2
            }
        ]
    }
}

const chartOptions = {
  responsive: true,
  aspectRatio: 1,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      min: -8,
      max: 8,
      ticks: {
        stepSize: 2,
      },
      position: 'center',
      border: {
        display: true
      }
    },
    y: {
      grid: {
        display: false
      },
      min: -8,
      max: 8,
      ticks: {
        stepSize: 2
      },
      position: 'center',
      border: {
        display: true
      }
    }
  }
}

const yInterceptChartOptions = {
  ...chartOptions,
  scales: {
    x: {
      ...chartOptions.scales.x,
      min: -5,
      max: 5,
      ticks: {
        stepSize: 1,
        autoSkip: false
      }
    },
    y: {
      ...chartOptions.scales.y,
      min: -5,
      max: 5,
      ticks: {
        stepSize: 1,
        autoSkip: false
      }
    }
  },
  plugins: {
    ...chartOptions.plugins,
    filler: {
      propagate: true
    }
  }
}

const steepPositiveData = generateChartData(8)
const shallowPositiveData = generateChartData(0.25)
const steepNegativeData = generateChartData(-8)
const shallowNegativeData = generateChartData(-0.25)

const yInterceptData = generateYInterceptData(3, 2)
const xInterceptData = generateXInterceptData(4, 4)
const inequalityData = generateInequalityData(3, 2)
</script>