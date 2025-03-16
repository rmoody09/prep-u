<template>
    <h1 class="sat-guide-page-header">Graphing Circles</h1>
    <div class="section-description">
        Circles are fundamental geometric shapes that appear frequently on the SAT. While problems dealing with their area, circumference, arc lengths, etc. fall under the domain of Geometry, some questions will ask you about equations for graphing circles. This page will help you master the concepts and techniques needed to solve circle graphing problems.
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Starting Simple: Circle centered at the origin
        </h2>
        <div class="sat-guide-section-content">
            <p>
                When a circle is centered at the origin (0, 0), the equation for graphing the circle is:
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mn>2</mn></msup>
                    <mo>+</mo>
                    <msup><mi>y</mi><mn>2</mn></msup>
                    <mo>=</mo>
                    <msup><mi>r</mi><mn>2</mn></msup>
                </math>
            </p>
            <p>
                In this equation, r represents the radius of the circle. For example, a circle with center (0, 0) and radius 5 has the equation:
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mn>2</mn></msup>
                    <mo>+</mo>
                    <msup><mi>y</mi><mn>2</mn></msup>
                    <mo>=</mo>
                    <msup><mn>5</mn><mn>2</mn></msup>
                </math>
            </p>
            <p>
                Or <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>25</mn></math>
            </p>
            <p>
                To visualize this, let's take a look at the graph of the circle:
            </p>
            <div class="chart-container" style="width: 200px;">
                <canvas ref="circleChart"></canvas>
            </div>
            <p>
                We can graph a circle of any size centered at the origin by changing the right side of the equation. 
            </p>
            <p>
                For example:
            </p>
            <ul>
                <li>
                    <math>
                        <msup><mi>x</mi><mn>2</mn></msup>
                        <mo>+</mo>
                        <msup><mi>y</mi><mn>2</mn></msup>
                        <mo>=</mo>
                        <mn>16</mn>
                    </math>
                    <ul>
                        <li>
                            A circle with radius <math><msqrt><mn>16</mn></msqrt></math>, or 4
                        </li>
                    </ul>
                </li>
                <li>
                    <math>
                        <msup><mi>x</mi><mn>2</mn></msup>
                        <mo>+</mo>
                        <msup><mi>y</mi><mn>2</mn></msup>
                        <mo>=</mo>
                        <mn>64</mn>
                    </math>
                    <ul>
                        <li>
                            A circle with radius <math><msqrt><mn>64</mn></msqrt></math>, or 8
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Standard Form of a Circle Equation
        </h2>
        <div class="sat-guide-section-content">
            <p>
                We've seen how we can make the circle any size we want by changing the right side of the equation to change the radius. But how do we move it, so it's not centered at the origin?
            </p>
            <p>
                If we apply what we learned in the "Transformations" section, this is fairly simple.
            </p>
            <p>
                <ul>
                    <li>
                        To move the circle to the right by <math><mi>h</mi></math> units, we replace <math><mi>x</mi></math> with <math><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><mo>)</mo></math>.
                    </li>
                    <li>
                        To move the circle up by <math><mi>k</mi></math> units, we replace <math><mi>y</mi></math> with <math><mo>(</mo><mi>y</mi><mo>-</mo><mi>k</mi><mo>)</mo></math>.
                    </li>
                </ul>
            </p>
            <p>
                As a result, our general equation for a circle becomes:
            </p>
            <p>
                <math>
                    <msup>
                        <mrow>
                            <mo>(</mo>
                            <mi>x</mi>
                            <mo>-</mo>
                            <mi>h</mi>
                            <mo>)</mo>
                        </mrow>
                        <mn>2</mn>
                    </msup>
                    <mo>+</mo>
                    <msup>
                        <mrow>
                            <mo>(</mo>
                            <mi>y</mi>
                            <mo>-</mo>
                            <mi>k</mi>
                            <mo>)</mo>
                        </mrow>
                        <mn>2</mn>
                    </msup>
                    <mo>=</mo>
                    <msup>
                        <mi>r</mi>
                        <mn>2</mn>
                    </msup>
                </math>
            </p>
            <p>
                This equation can now represent a circle of any size, centered at any point in the coordinate plane.
            </p>
            <ul>
                <li>(h, k) gives us the coordinates of the center of the circle</li>
                <li>r is the radius of the circle</li>
            </ul>
            <p>
                There are a couple of important things to note about this equation to avoid common mistakes:
            </p>
            <ul>
                <li>
                    The signs of <math><mi>h</mi></math> and <math><mi>k</mi></math> are opposite of what you might expect.
                    <ul>
                        <li>
                            To move the circle to the right (positive x direction), we <span class="font-bold">subtract</span> <math><mi>h</mi></math> from <math><mi>x</mi></math>, not add it.
                        </li>
                        <li>
                            To move the circle up (positive y direction), we <span class="font-bold">subtract</span> <math><mi>k</mi></math> from <math><mi>y</mi></math>
                        </li>
                    </ul>
                </li>
                <li>
                    The right side of the equation is the radius <span class="font-bold">squared</span>, not the radius itself.
                    <ul>
                        <li>
                            To get the radius, we need to take the square root of the right side of the equation.
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                Let's look at a few examples:
            </p>
            <p>
                <ul>
                    <li>
                        <math>
                            <msup>
                                <mrow>
                                    <mo>(</mo>
                                    <mi>x</mi>
                                    <mo>-</mo>
                                    <mn>3</mn>
                                    <mo>)</mo>
                                </mrow>
                                <mn>2</mn>
                            </msup>
                            <mo>+</mo>
                            <msup>
                                <mrow>
                                    <mo>(</mo>
                                    <mi>y</mi>
                                    <mo>-</mo>
                                    <mn>4</mn>
                                    <mo>)</mo>
                                </mrow>
                                <mn>2</mn>
                            </msup>
                            <mo>=</mo>
                            <mn>25</mn>
                        </math>
                        <ul>
                            <li>
                                This is a circle with center (3, 4) and radius 5 (since 5² = 25).
                            </li>
                        </ul>
                    </li>
                    <li>
                        <math>
                            <msup>
                                <mrow>
                                    <mo>(</mo>
                                    <mi>x</mi>
                                    <mo>+</mo>
                                    <mn>2</mn>
                                    <mo>)</mo>
                                </mrow>
                                <mn>2</mn>
                            </msup>
                            <mo>+</mo>
                            <msup>
                                <mrow>
                                    <mo>(</mo>
                                    <mi>y</mi>
                                    <mo>-</mo>
                                    <mn>6</mn>
                                    <mo>)</mo>
                                </mrow>
                                <mn>2</mn>
                            </msup>
                            <mo>=</mo>
                            <mn>9</mn>
                        </math>
                        <ul>
                            <li>
                                This is a circle with center (-2, 6) and radius 3 (since 3² = 9).
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            General Form of a Circle
        </h2>
        <div class="sat-guide-section-content">
            <p>
                The standard form above tells us everything we need to know about the circle: its center and radius. But equations for graphing circles aren't always served to us in such a convenient form. Another common form is called <span class="font-bold">general form</span>.
            </p>
            <p>
                The general form of the equation of a circle is:
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mn>2</mn></msup>
                    <mo>+</mo>
                    <msup><mi>y</mi><mn>2</mn></msup>
                    <mo>+</mo>
                    <mi>D</mi><mi>x</mi>
                    <mo>+</mo>
                    <mi>E</mi><mi>y</mi>
                    <mo>+</mo>
                    <mi>F</mi>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>
            </p>
            <p>
                In the equation above, D, E, and F are constants, so they could represent any number.
            </p>
            <p>
                A couple examples of general form equations are:
            </p>
            <p>
                <ul>
                    <li>
                        <math>
                            <msup><mi>x</mi><mn>2</mn></msup>
                            <mo>+</mo>
                            <msup><mi>y</mi><mn>2</mn></msup>
                            <mo>+</mo>
                            <mn>6</mn><mi>x</mi>
                            <mo>-</mo>
                            <mn>8</mn><mi>y</mi>
                            <mo>+</mo>
                            <mn>9</mn>
                            <mo>=</mo>
                            <mn>0</mn>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup><mi>x</mi><mn>2</mn></msup>
                            <mo>+</mo>
                            <msup><mi>y</mi><mn>2</mn></msup>
                            <mo>+</mo>
                            <mn>10</mn><mi>x</mi>
                            <mo>-</mo>
                            <mn>4</mn><mi>y</mi>
                            <mo>+</mo>
                            <mn>13</mn>
                            <mo>=</mo>
                            <mn>0</mn>
                        </math>
                    </li>
                </ul>
            </p>
            <p>
                To convert from general form to standard form:
            </p>
            <ol>
                <li>Group the x terms and y terms together</li>
                <li>Complete the square for both the x and y terms</li>
                <li>Rearrange to match the standard form</li>
            </ol>
            <p>
                For example, let's convert x² + y² + 6x - 8y + 9 = 0 to standard form:
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mn>2</mn></msup>
                    <mo>+</mo>
                    <mn>6</mn><mi>x</mi>
                    <mo>+</mo>
                    <msup><mi>y</mi><mn>2</mn></msup>
                    <mo>-</mo>
                    <mn>8</mn><mi>y</mi>
                    <mo>+</mo>
                    <mn>9</mn>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>
            </p>
            <p>
                Complete the square for x terms:
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mn>2</mn></msup>
                    <mo>+</mo>
                    <mn>6</mn><mi>x</mi>
                    <mo>+</mo>
                    <mn>9</mn>
                    <mo>-</mo>
                    <mn>9</mn>
                    <mo>+</mo>
                    <msup><mi>y</mi><mn>2</mn></msup>
                    <mo>-</mo>
                    <mn>8</mn><mi>y</mi>
                    <mo>+</mo>
                    <mn>9</mn>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>
            </p>
            <p>
                <math>
                    <msup>
                        <mrow>
                            <mo>(</mo>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>3</mn>
                            <mo>)</mo>
                        </mrow>
                        <mn>2</mn>
                    </msup>
                    <mo>-</mo>
                    <mn>9</mn>
                    <mo>+</mo>
                    <msup><mi>y</mi><mn>2</mn></msup>
                    <mo>-</mo>
                    <mn>8</mn><mi>y</mi>
                    <mo>+</mo>
                    <mn>9</mn>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>
            </p>
            <p>
                Complete the square for y terms:
            </p>
            <p>
                <math>
                    <msup>
                        <mrow>
                            <mo>(</mo>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>3</mn>
                            <mo>)</mo>
                        </mrow>
                        <mn>2</mn>
                    </msup>
                    <mo>+</mo>
                    <msup>
                        <mrow>
                            <mo>(</mo>
                            <mi>y</mi>
                            <mo>-</mo>
                            <mn>4</mn>
                            <mo>)</mo>
                        </mrow>
                        <mn>2</mn>
                    </msup>
                    <mo>-</mo>
                    <mn>9</mn>
                    <mo>+</mo>
                    <mn>16</mn>
                    <mo>+</mo>
                    <mn>9</mn>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>
            </p>
            <p>
                <math>
                    <msup>
                        <mrow>
                            <mo>(</mo>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>3</mn>
                            <mo>)</mo>
                        </mrow>
                        <mn>2</mn>
                    </msup>
                    <mo>+</mo>
                    <msup>
                        <mrow>
                            <mo>(</mo>
                            <mi>y</mi>
                            <mo>-</mo>
                            <mn>4</mn>
                            <mo>)</mo>
                        </mrow>
                        <mn>2</mn>
                    </msup>
                    <mo>=</mo>
                    <mn>16</mn>
                </math>
            </p>
            <p>
                This is a circle with center (-3, 4) and radius 4.
            </p>
        </div>
    </div>
    
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Finding Key Information from a Circle Equation
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Given the equation of a circle, you can identify:
            </p>
            <ul>
                <li>
                    <strong>Center:</strong> If the equation is in standard form (x - h)² + (y - k)² = r², the center is at (h, k).
                </li>
                <li>
                    <strong>Radius:</strong> If the equation is in standard form (x - h)² + (y - k)² = r², the radius is r.
                </li>
            </ul>
            <p>
                Let's practice with an example:
            </p>
            <p>
                Given the equation (x + 5)² + (y - 2)² = 36, find the center and radius.
            </p>
            <p>
                Rewriting as (x - (-5))² + (y - 2)² = 36:
            </p>
            <ul>
                <li>Center: (-5, 2)</li>
                <li>Radius: 6 (since 6² = 36)</li>
            </ul>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Graphing Circles
        </h2>
        <div class="sat-guide-section-content">
            <p>
                To graph a circle:
            </p>
            <ol>
                <li>Identify the center (h, k) and radius r from the equation</li>
                <li>Plot the center point</li>
                <li>From the center, measure r units in all directions to draw the circle</li>
            </ol>
            <p>
                For example, to graph (x - 3)² + (y + 2)² = 16:
            </p>
            <ul>
                <li>The center is at (3, -2)</li>
                <li>The radius is 4 (since 4² = 16)</li>
                <li>Plot the center at (3, -2) and draw a circle with radius 4 around it</li>
            </ul>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Common SAT Questions About Circles
        </h2>
        <div class="sat-guide-section-content">
            <p>
                On the SAT, you might be asked to:
            </p>
            <ul>
                <li>Find the equation of a circle given its center and radius</li>
                <li>Find the center and radius of a circle from its equation</li>
                <li>Convert between standard and general forms</li>
                <li>Find points of intersection between a circle and a line</li>
                <li>Determine if a point lies inside, on, or outside a circle</li>
            </ul>
            <p>
                To determine if a point (p, q) lies on a circle with equation (x - h)² + (y - k)² = r²:
            </p>
            <ul>
                <li>Substitute x = p and y = q into the equation</li>
                <li>If (p - h)² + (q - k)² = r², the point lies on the circle</li>
                <li>If (p - h)² + (q - k)² < r², the point lies inside the circle</li>
                <li>If (p - h)² + (q - k)² > r², the point lies outside the circle</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const circleChart = ref(null);
let chartInstance = null;

// Function to generate points on a circle with equation (x-h)^2 + (y-k)^2 = r^2
function generateCirclePoints(h, k, r, numPoints = 100) {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const x = h + r * Math.cos(angle);
        const y = k + r * Math.sin(angle);
        points.push({ x, y });
    }
    return points;
}

// Function to create or update the chart
function createCircleChart(centerX = 0, centerY = 0, radius = 5, xRange = [-6, 6], yRange = [-6, 6]) {
    if (chartInstance) {
        chartInstance.destroy();
    }

    const ctx = circleChart.value.getContext('2d');
    const circlePoints = generateCirclePoints(centerX, centerY, radius);
    
    // Create a dataset for the radius line
    const radiusLinePoints = [
        { x: centerX, y: centerY },
        { x: centerX + 3.54, y: centerY + 3.54 } // Point on the circle (approximately)
    ];

    chartInstance = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: `x² + y² = 25`,
                    data: circlePoints,
                    borderColor: '#3366CC',
                    backgroundColor: 'rgba(51, 102, 204, 0.1)',
                    pointRadius: 0,
                    showLine: true,
                    fill: false,
                    tension: 0
                },
                {
                    label: `r = 5`,
                    data: radiusLinePoints,
                    borderColor: '#FF6600',
                    borderWidth: 1.5,
                    borderDash: [5, 3], // Creates a dashed line
                    pointRadius: [3, 0], // Show a point at the center, but not at the end
                    pointBackgroundColor: '#FF6600',
                    showLine: true,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            scales: {
                x: {
                    type: 'linear',
                    position: 'center',
                    min: xRange[0],
                    max: xRange[1],
                    grid: {
                        color: (context) => {
                            if (context.tick.value === 0) {
                                return '#000000'; // Black for y-axis (x=0)
                            }
                            return '#ddd'; // Light gray for other gridlines
                        },
                        lineWidth: (context) => {
                            if (context.tick.value === 0) {
                                return 2; // Slightly thicker for axes
                            }
                            return 1;
                        }
                    },
                    ticks: {
                        stepSize: 1,
                        autoSkip: false,
                        font: {
                            size: 8
                        }
                    }
                },
                y: {
                    type: 'linear',
                    position: 'center',
                    min: yRange[0],
                    max: yRange[1],
                    grid: {
                        color: (context) => {
                            if (context.tick.value === 0) {
                                return '#000000'; // Black for x-axis (y=0)
                            }
                            return '#ddd'; // Light gray for other gridlines
                        },
                        lineWidth: (context) => {
                            if (context.tick.value === 0) {
                                return 2; // Slightly thicker for axes
                            }
                            return 1;
                        }
                    },
                    ticks: {
                        stepSize: 1,
                        autoSkip: false,
                        font: {
                            size: 8
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'center',
                    labels: {
                        boxWidth: 10,
                        padding: 5,
                        font: {
                            size: 8
                        }
                    }
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
}

onMounted(() => {
    // Create a circle with equation x^2 + y^2 = 25 (center at origin, radius 5)
    createCircleChart(0, 0, 5);
});
</script>

<style scoped>
.chart-container {
    text-align: left;
}
</style>
