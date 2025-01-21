<script setup>
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        PointElement,
        LinearScale,
        CategoryScale
    } from 'chart.js'
    import { Line } from 'vue-chartjs'

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

    const x_3_data = {
        labels: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        datasets: [
            {
                label: 'x = 3',
                data: [
                    { x: 3, y: -5 },
                    { x: 3, y: -4 },
                    { x: 3, y: -3 },
                    { x: 3, y: -2 },
                    { x: 3, y: -1 },
                    { x: 3, y: 0 },
                    { x: 3, y: 1 },
                    { x: 3, y: 2 },
                    { x: 3, y: 3 },
                    { x: 3, y: 4 },
                    { x: 3, y: 5 }
                ],
                borderColor: '#22C55E',
                tension: 0,
                pointRadius: 0
            }
        ]
    }

    const y_3_data = {
        labels: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        datasets: [
            {
                label: 'y = 3',
                data: [
                    { x: -5, y: 3 },
                    { x: -4, y: 3 },
                    { x: -3, y: 3 },
                    { x: -2, y: 3 },
                    { x: -1, y: 3 },
                    { x: 0, y: 3 },
                    { x: 1, y: 3 },
                    { x: 2, y: 3 },
                    { x: 3, y: 3 },
                    { x: 4, y: 3 },
                    { x: 5, y: 3 }
                ],
                borderColor: '#22C55E',
                tension: 0,
                pointRadius: 0
            }
        ]
    }

    const default_chart_options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'center',
                min: -5,
                max: 5,
                ticks: {
                    stepSize: 1
                },
                grid: {
                    color: '#666',
                    offset: false,
                    drawOnChartArea: false,
                    drawTicks: true
                },
                border: {
                    display: true,
                    color: '#000'
                }
            },
            y: {
                type: 'linear',
                position: 'center',
                min: -5,
                max: 5,
                ticks: {
                    stepSize: 1,
                    autoSkip: false
                },
                grid: {
                    color: '#666',
                    offset: false,
                    drawOnChartArea: false,
                    drawTicks: true
                },
                border: {
                    display: true,
                    color: '#000'
                }
            }
        },
        maintainAspectRatio: true,
        aspectRatio: 1
    }
</script>

<template>
    <h1 class='sat-guide-page-header'>
        Graphing Single Variable Linear Equations
    </h1>
    <div class="section-description">
        Single variable linear equations are the simplest type of linear equation. They are equations that have only one variable (like x + 5 = 3), and no exponents. When they are graphed, they will always be either a straight line that is perfectly horizontal or perfectly vertical, depending on whether the variable is the independent variable (x) or the dependent variable (y).
    </div> 

    <h2 class="sat-guide-section-header">
        Isolate the Variable
    </h2>
    <div class="section-description">
        Before graphing a single variable linear equation, you need to isolate the variable on one side of the equation. This means getting the variable by itself on one side of the equation, with no other variables or numbers on that same side, like we worked on in the previous section.
    </div>

    <h2 class="sat-guide-section-header">
        When the only variable is x (or the independent variable)
    </h2>
    <div class="section-description">
        If the only variable in the equation is x, then once you isolate x, you'll have an equation of the form x = c, where c stands for any constant (for example, x=3, x=10, x=1/2, etc). The graph of these equations will just be a vertical line crossing the x-axis where x is equal to c (for example, the line x=3 is a vertical line crossing the x-axis at x=3). The slope of these lines is undefined, because the x value never changes (since the slope is defined as the change in y over the change in x, and the change in x will always be 0, the slope will always be undefined because you can't divide by 0).
        <div class="flex justify-start pt-4">
            <div class="aspect-square w-full max-w-[300px]">
                <Line :data="x_3_data" :options="default_chart_options" />
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">
        When the only variable is y (or the dependent variable)
    </h2>
    <div class="section-description">
        If the only variable in the equation is y, then once you isolate y, you'll have an equation of the form y = c, where c stands for any constant (for example, y=3, y=10, y=1/2, etc). The graph of these equations will just be a horizontal line crossing the y-axis at where y is equal to c (for example, the line y=3 is a horizontal line crossing the y-axis at y=3). The slope of these lines is 0, because for any change in x, y doesn't change (since the slope is defined as the change in y over the change in x, and the change in y will always be 0, the slope will always be 0).
        <div class="flex justify-start pt-4">
            <div class="aspect-square w-full max-w-[300px]">
                <Line :data="y_3_data" :options="default_chart_options" />
            </div>
        </div>
    </div>

    
</template>