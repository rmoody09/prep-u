<template>
    <h1 class="sat-guide-page-header">Quadratic Functions/Parabolas</h1>
    <div class="section-description">
        Quadratic functions are equations where the independent variable (usually x) is squared. A typical example of a quadratic equation is <span v-html="'<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi></math>'"></span>, although the exact form can differ. The graph of a quadratic function is a parabola, which is a U-shaped curve that opens either up or down. One important thing to note is that x should be the only variable squared - if you see an x<sup>2</sup> and a y<sup>2</sup> in the same equation, you're looking at an equation for a circle, not a parabola.
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Parabolas
        </h2>
        <div class="sat-guide-section-content">
            <div class="section-description">
                As mentioned above, a parabola is a U-shaped curve that opens either up or down. The simplest parabola would be the graph of <span v-html="'<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></math>'"></span>, which is shown below:
                <div>
                    <canvas style="height: 150px; width: 150px;" ref="quadraticChart"></canvas>
                </div>
                <div>
                    By changing the equation, we can change the shape of the parabola, making it wider, narrower, shifted up, down, left, right, or flipped upside down (or any combination of these).
                </div>
                <div>
                    There are a few important features of a parabola that will often be relevant to the SAT:
                    <ul>
                        <li>Which direction the parabola opens</li>
                        <li>The vertex</li>
                        <li>The x-intercepts</li>
                        
                    </ul>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Direction
                </h3>
                <div class="sat-guide-subsection-content">
                    The direction of a parabola (whether it looks like a U or an upside-down U) is determined by the sign of the coefficient of the x<sup>2</sup> term. If the coefficient is positive, the parabola opens upward (like a U). If the coefficient is negative, the parabola opens downward (like an upside-down U). In the graph of y=x<sup>2</sup> above, the coefficient of the x<sup>2</sup> term is 1, so the parabola opens upward. The graph of y=-x<sup>2</sup> is shown below. In that case, the coefficient of the x<sup>2</sup> term is -1, so the parabola opens downward.
                    <div>
                        <canvas style="height: 150px; width: 150px;" ref="downwardParabolaChart"></canvas>
                    </div>
                </div>
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Vertex
                </h3>
                <div class="sat-guide-subsection-content">
                    The vertex of a parabola is the point where the curve changes direction. At this point, the slope of the line is zero. For U-shaped parabolas that open upward, like <span v-html="'<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></math>'"></span>, this is the minimum point. The slope is decreasing on the left side of the vertex, increasing on the right side, and zero right at the vertex. For inverted U-shaped parabolas that open downward, like <span v-html="'<math><mi>y</mi><mo>=</mo><mo>-</mo><msup><mi>x</mi><mn>2</mn></msup></math>'"></span>, this is the maximum point. The slope is increasing on the left side of the vertex, decreasing on the right side, and zero right at the vertex.
                    
                </div>
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    X-intercepts
                </h3>
                <div class="sat-guide-subsection-content">
                    The x-intercepts of a parabola are the points where the parabola crosses the x-axis. For any point on the x-axis, the y-coordinate is 0, so to find the x-intercepts, we set y=0 and solve for x. For example, to find the x-intercepts of <span v-html="'<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>'"></span>, we set y=0 and solve for x:
                    <div>
                        <span v-html="'<math><mi>0</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>'"></span>
                    </div>
                    <div>
                        By solving for x in the above equation, we would find the x values where the parabola crosses the x-axis. We'll get more into how to actually solve for x below.
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <div class="sat-guide-subsection-concept-header">
                            Number of x-intercepts
                        </div>
                        <div class="sat-guide-subsection-concept-content">
                            There can be 0, 1, or 2 x-intercepts. In the examples below, the graph of y=x<sup>2</sup> has just 1 x-intercept, because it just glances off the x axis at its vertex. The graph of y = x<sup>2</sup> - 1 has 2 x-intercepts, because it crosses the x axis twice. The graph of y = x<sup>2</sup> + 1 has no x-intercepts, because it never crosses the x axis.
                            <div style="display: flex; flex-wrap: wrap; gap: 16px;">
                                <canvas style="height: 150px; width: 150px;" ref="oneXInterceptChart"></canvas>
                                <canvas style="height: 150px; width: 150px;" ref="twoXInterceptsChart"></canvas>
                                <canvas style="height: 150px; width: 150px;" ref="noXInterceptsChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Standard Form
        </h2>
        <div class="sat-guide-section-content">
            <div class="section-description">
                A quadratic equation can be expressed in different formats, but the most common is the standard form. The standard form of a quadratic equation is <span v-html="'<math><mi>y</mi><mo>=</mo><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi></math>'"></span>, where a, b, and c are constants. An example of a quadratic equation in standard form is <span v-html="'<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>'"></span>. When a quadratic is expressed in a different form, you can always manipulate it into standard form. From standard form, we can apply various rules and formulas to find important information about the parabola.
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Vertex from Standard Form
                </h3>
                <div class="sat-guide-subsection-content">
                    When a quadratic equation is in standard form (<span v-html="'<math><mi>y</mi><mo>=</mo><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi></math>'"></span>), we can find the x-coordinate of the vertex using the formula below:
                    <div>
                        <span v-html="'<math><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>b</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math>'"></span>
                    </div>
                    <div>
                        Once we have the x-coordinate, we can find the y-coordinate by plugging the x-coordinate back into the original equation.
                    </div>
                    <div class="pt-4">
                        For example, take the quadradict equation below:
                        <div>
                            <span v-html="'<math><mi>y</mi><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>12</mn><mi>x</mi><mo>+</mo><mn>8</mn></math>'"></span>
                        </div>
                        <div>
                            In terms of standard form, our "a" is 3, our "b" is 12, and our "c" is 8. So, to get the x-coordinate of the vertex, we plug in the values for a and b into the formula <span v-html="'<math><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>b</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math>'"></span>, like this:
                            <div>
                                <span v-html="'<math><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mn>(12)</mn></mrow><mrow><mn>2</mn><mo>·</mo><mn>(3)</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>-</mo><mn>12</mn></mrow><mrow><mn>6</mn></mrow></mfrac><mo>=</mo><mo>-</mo><mn>2</mn></math>'"></span>
                            </div>
                            <div>
                                So, the x-coordinate of the vertex is -2.
                            </div>
                        </div>
                    </div>
                    <div class="pt-4">
                        Then, to find the y-coordinate, we plug -2 in for x in the original equation:
                        <div>
                            <span v-html="'<math><mi>y</mi><mo>=</mo><mn>3</mn><msup><mrow><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>12</mn><mo>(</mo><mo>-</mo><mn>2</mn><mo>)</mo><mo>+</mo><mn>8</mn></math>'"></span>
                        </div>
                        <div>
                            <span v-html="'<math><mi>y</mi><mo>=</mo><mn>3</mn><mo>·</mo><mn>4</mn><mo>-</mo><mn>24</mn><mo>+</mo><mn>8</mn></math>'"></span>
                        </div>
                        <div>
                            <span v-html="'<math><mi>y</mi><mo>=</mo><mn>12</mn><mo>-</mo><mn>24</mn><mo>+</mo><mn>8</mn><mo>=</mo><mo>-</mo><mn>4</mn></math>'"></span>
                        </div>
                    </div>  
                    <div>
                        So, the y-coordinate of the vertex is -4. Therefore, the vertex of the parabola is (-2, -4).
                    </div>
                </div>
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Finding the x-intercepts
                </h3>
                <div class="sat-guide-subsection-content">
                    In any function, not just quadratics, the x-intercepts occur wherever y=0. This is because, as can be easily seen by looking at the x and y axis, any point on the x-axis has a y-coordinate of 0. So, to find the x-intercepts of a quadratic equation, we set y=0 and solve for x. There are two main ways to do this: factoring and using the quadratic formula. When possible, factoring is usually faster and easier, so it's always a good idea to try that first. But not all quadratics can be factored, so in those cases we can use the quadratic formula.

                </div>
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Factoring
                </h3>
                <div class="sat-guide-subsection-content">
                    <div class="pb-4">
                        Factoring a quadratic means you are maniuplating the equation so that you end up with two expressions that are multiplied together. For example, the quadratic equation <span v-html="'<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>12</mn></math>'"></span> can be factored into <span v-html="'<math><mi>y</mi><mo>=</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>4</mn><mo>)</mo></math>'"></span>. You'll notice that if you multiply the two expressions together (using the FOIL method), you get back the original quadratic equation.
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <div class="sat-guide-subsection-concept-header">
                            Factoring when "a" is 1
                        </div>
                        <div>
                            When the coefficient of the x<sup>2</sup> term is 1 (aka "a" is 1 in standard form), factoring is relatively simple. We just need to find two numbers that multiply together to get the constant term (c) and add up to the coefficient of the x term (b). For example, take the equation below:
                            <div>
                                <span v-html="'<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>12</mn></math>'"></span>
                            </div>
                            <div>
                                We need to find two numbers that multiply to 12 and add up to 7. These numbers are 3 and 4, so we can factor the quadratic as:
                                <div>
                                    <span v-html="'<math><mi>y</mi><mo>=</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>4</mn><mo>)</mo></math>'"></span>
                                </div>
                                <div>
                                    Let's do one more example:
                                </div>
                                <div>
                                    <span v-html="'<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>15</mn></math>'"></span>
                                </div>
                                <div>
                                    Here, we need to find two numbers that multiply to 15 and add up to 2. These numbers are 5 and -3, so we can factor the quadratic as:
                                </div>
                                <div>
                                    <span v-html="'<math><mi>y</mi><mo>=</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>5</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo></math>'"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <div class="sat-guide-subsection-concept-header">
                            When a > 1: Factor by grouping
                        </div>
                        <div>
                            When the coefficient of the x<sup>2</sup> term is greater than 1, factoring is a bit more complicated. We need to find two numbers that multiply to the product of a and c, and add up to b. For example, take the equation below:
                        </div>
                        <div>
                            For example, take the equation below:
                        </div>
                        <div>
                            <span v-html="'<math><mi>y</mi><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>11</mn><mi>x</mi><mo>+</mo><mn>6</mn></math>'"></span>
                        </div>
                        <div>
                            Here, we need to find two numbers that multiply to 24 and add up to 11. These numbers are 3 and 8 (since 3 * 8 = 24 and 3 + 8 = 11).
                        </div>
                        <div>
                            Once we've found the two numbers, we use them to split the "x" term into the sum of two terms, like this:
                        </div>
                        <div>
                            <span v-html="'<math><mi>y</mi><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>6</mn></math>'"></span>
                        </div>
                        <div>
                            Next, we factor out the greatest common factor from the first two terms and the last two terms. Since 4x<sup>2</sup> and 8x have a common factor of 4x, we can factor out 4x from the first two terms. And 3x and 6 have a common factor of 3, so we can factor out 3 from the last two terms:
                        </div>
                        <div>
                            <span v-html="'<math><mi>y</mi><mo>=</mo><mn>4</mn><mi>x</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo><mo>+</mo><mn>3</mn><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></math>'"></span>
                        </div>
                        <div>
                            It should always work out so that the two terms in parentheses are the same. In this case, both terms in parentheses are (x+2), so we can factor out (x+2) from the entire expression, giving us the final factored form:
                        </div>
                        <div>
                            <span v-html="'<math><mi>y</mi><mo>=</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo><mo>(</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></math>'"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Quadratic Formula
                </h3>
                <div class="sat-guide-subsection-content">
                    The quadratic formula is a formula that can be used to find x-intercepts of a quadratic function, or the solutions to a quadratic equation or system of equations. The quadratic formula is shown below:
                    <div>
                        <span v-html="'<math><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>b</mi><mo>±</mo><msqrt><mi>b</mi><mo>²</mo><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math>'"></span>
                    </div>
                    <div>
                        Before applying the formula, however, we need to make sure the quadratic equation is in standard form, and set equal to 0. So it needs to look something like this:
                    </div>
                    <div>
                        ax<sup>2</sup> + bx + c = 0
                    </div>
                    <div>
                        For example, say we started with the function below:
                    </div>
                    <div>
                        f(x) = 5(x-2)(x+4) + 8
                    </div>
                    <div>
                        In order to use the quadratic formula, we first need to get this into standard form. To do this, we can FOIL the expression in the parentheses, like this:
                    </div>
                    <div>
                        f(x) = 5(x<sup>2</sup> + 2x - 8) + 32
                    </div>
                    <div>
                        Next, we can distribute the 5 to the terms in the parentheses:
                    </div>
                    <div>
                        f(x) = 5x<sup>2</sup> + 10x - 40 + 32
                    </div>
                    <div>
                        Now, we can combine like terms:
                    </div>
                    <div>
                        f(x) = 5x<sup>2</sup> + 10x - 8
                    </div>
                    <div>
                        Now, if we're looking for the x-intercepts, these occur when y=0. So we set the equation equal to 0:
                    </div>
                    <div>
                        0 = 5x<sup>2</sup> + 10x - 8
                    </div>
                    <div>
                        Now that we have the equation in standard form and set equal to 0, we can apply the quadratic formula. First, we identify the values of a, b, and c. In this case:
                    </div>
                    <div>
                        a = 5, b = 10, c = -8
                    </div>
                    <div>
                        Now, we can plug these values into the quadratic formula:
                    </div>
                    <div>
                        <span v-html="'<math><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>(10)</mi><mo>±</mo><msqrt><mi>(10)</mi><mo>²</mo><mo>-</mo><mn>4</mn><mi>(5)</mi><mi>(-8)</mi></msqrt></mrow><mrow><mn>2</mn><mi>(5)</mi></mrow></mfrac></math>'"></span>
                    </div>
                    <div>
                        <span v-html="'<math><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>(10)</mi><mo>±</mo><msqrt><mi>100</mi><mo>+</mo><mn>160</mn></msqrt></mrow><mrow><mn>10</mn></mrow></mfrac></math>'"></span>
                    </div>
                    <div>
                        
                    </div>
                    

                </div>
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">
        
    </h2>
    
</template>

<script>
import Chart from 'chart.js/auto'

export default {
    mounted() {
        this.createParabolaChart(this.$refs.quadraticChart)
        this.createParabolaChart(this.$refs.oneXInterceptChart)
        this.createDownwardParabolaChart()
        this.createTwoXInterceptsChart()
        this.createNoXInterceptsChart()
    },
    methods: {
        createParabolaChart(ctx) {
            // Generate points for y = x^2
            const points = []
            for (let x = -3; x <= 3; x += 0.1) {
                points.push({
                    x: x,
                    y: x * x
                })
            }

            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'y = x²',
                        data: points,
                        showLine: true,
                        borderColor: '#2196F3',
                        backgroundColor: '#2196F3',
                        pointRadius: 0,
                    }]
                },
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: false
                            },
                            min: -3,
                            max: 3
                        },
                        y: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: false
                            },
                            min: -2,
                            max: 5
                        }
                    },
                    plugins: {
                        legend: {
                            display: true
                        }
                    }
                }
            })
        },
        createDownwardParabolaChart() {
            // Generate points for y = -x^2
            const points = []
            for (let x = -3; x <= 3; x += 0.1) {
                points.push({
                    x: x,
                    y: -x * x
                })
            }

            const ctx = this.$refs.downwardParabolaChart
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'y = -x²',
                        data: points,
                        showLine: true,
                        borderColor: '#2196F3',
                        backgroundColor: '#2196F3',
                        pointRadius: 0,
                    }]
                },
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: false
                            },
                            min: -3,
                            max: 3
                        },
                        y: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: false
                            },
                            min: -5,
                            max: 2  // Adjusted to mirror the first chart's y-range
                        }
                    },
                    plugins: {
                        legend: {
                            display: true
                        }
                    }
                }
            })
        },
        createTwoXInterceptsChart() {
            // Generate points for y = x^2 - 1
            const points = []
            for (let x = -3; x <= 3; x += 0.1) {
                points.push({
                    x: x,
                    y: x * x - 1
                })
            }

            const ctx = this.$refs.twoXInterceptsChart
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'y = x² - 1',
                        data: points,
                        showLine: true,
                        borderColor: '#2196F3',
                        backgroundColor: '#2196F3',
                        pointRadius: 0,
                    }]
                },
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: false
                            },
                            min: -3,
                            max: 3
                        },
                        y: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: false
                            },
                            min: -2,
                            max: 5
                        }
                    },
                    plugins: {
                        legend: {
                            display: true
                        }
                    }
                }
            })
        },
        createNoXInterceptsChart() {
            // Generate points for y = x^2 + 1
            const points = []
            for (let x = -3; x <= 3; x += 0.1) {
                points.push({
                    x: x,
                    y: x * x + 1
                })
            }

            const ctx = this.$refs.noXInterceptsChart
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'y = x² + 1',
                        data: points,
                        showLine: true,
                        borderColor: '#2196F3',
                        backgroundColor: '#2196F3',
                        pointRadius: 0,
                    }]
                },
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: false
                            },
                            min: -3,
                            max: 3
                        },
                        y: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: false
                            },
                            min: -2,
                            max: 5
                        }
                    },
                    plugins: {
                        legend: {
                            display: true
                        }
                    }
                }
            })
        }
    }
}
</script> 