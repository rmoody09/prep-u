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
                Since general form doesn't directly give us much useful information, we will often want to convert it to standard form in order to find the center and radius of the circle.
            </p>
            <p>
                To convert from general form to standard form, we will need to use a method called <span class="font-bold">completing the square</span>.
            </p>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Converting from General Form to Standard Form
                </h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Let's use the equation below as an example, and walk step by step through the process of converting it to standard form:
                    </p>
                    <p>
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
                    </p>
                    
                        
                </div>
            </div>
            <ol>
                <li>
                    <div class='ol-item-title'>
                        Group the x terms and y terms together
                    </div>
                    <p>
                        First, we want to get the x terms next to each other, and the y terms next to each other. And we might as well bring the constant term to the other side of the equation while we're at it.
                    </p>
                    <p>
                        In doing so, we get:
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
                            <mo>=</mo>
                            <mo>-</mo>
                            <mn>9</mn>
                        </math>
                    </p>
                </li>
                <li>
                    <div class='ol-item-title'>
                        Complete the square for the x terms
                    </div>
                    <p>
                        Ultimately, we want to make the x terms look like something like (x - h)², so we want to find a binomial that, when squared, gives us x² + 6x.
                    </p>
                    <p>
                        So, we want to find a binomial (x + c) such that when we square it, we end up with x² + 6x as part of the result. There will be some additional constant term, but we'll deal with that later.
                    </p>
                    <p>
                        The constant that accomplishes this is always half the coefficient of x, which in this case is 3. So, we want to replace the x² + 6x term with (x + 3)².
                    </p>
                    <p>
                         But, these two expressions are not equal
                    </p>
                    <p>
                        (x + 3)² = x² + 6x + 9, so our new expression is actually 9 greater than the original one.
                    </p>
                    <p>
                        In order to keep the equation balanced, we can either subtract 9 from the left side, or add 9 to the right side. We'll do the latter because it will result in fewer steps overall.
                    </p>
                    <p>
                        So, we get:
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
                            <msup><mi>y</mi><mn>2</mn></msup>
                            <mo>-</mo>
                            <mn>8</mn><mi>y</mi>
                            <mo>=</mo>
                            <mo>-</mo>
                            <mn>9</mn>
                            <mo>+</mo>
                            <mn>9</mn>
                        </math>
                    </p>
                    

                </li>
                <li>
                    <div class='ol-item-title'>
                        Complete the square for the y terms
                    </div>
                    <p>
                        Now we'll want to complete the square for the y terms as well.
                    </p>
                    <p>
                        Using half the coefficient of y, we get the expression (y - 4)².
                    </p>
                    <p>
                        When we FOIL this out, we get y² - 8y + 16, meaning that we have to add 16 to the right side of the equation to keep it balanced.
                    </p>
                    <p>
                        So, we get:
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
                            <mo>-</mo>
                            <mn>9</mn>
                            <mo>+</mo>
                            <mn>9</mn>
                            <mo>+</mo>
                            <mn>16</mn>
                        </math>
                    </p>
                    <p>
                        Now we just carry out the simple addition on the right side of the equation to get:
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
                </li>
            </ol>
            <p>
                And we're done! Now that we have it in standard form, we can easily see that the center is (-3, 4) and the radius is 4.
            </p>
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
.ol-item-title {
    font-weight: bold;
    margin-bottom: 2px;
}

/* Make ordered list numbers bold - simpler approach */
ol li::marker {
    font-weight: bold;
}
</style>
