<script setup>
import renderMathInElement from "katex/dist/contrib/auto-render";
import 'katex/dist/katex.min.css';
import { Chart } from 'chart.js/auto';

const renderKaTeX = () => {
    try {
        console.log('Rendering LaTeX');
        // Only target elements that actually contain LaTeX content
        const mathElements = document.querySelectorAll(".latex-formula");
        mathElements.forEach(el => {
            try {
                console.log('Rendering LaTeX element');
                renderMathInElement(el, {
                    throwOnError: false,
                    errorCallback: (msg) => {
                        console.warn('KaTeX rendering error:', msg);
                    },
                    displayMode: true,
                    strict: false
                });
                el.setAttribute('rendered', 't');
            } catch (elementError) {
                console.warn('Error rendering individual element:', elementError);
            }
        });
    } catch (error) {
        console.error('Error in KaTeX rendering:', error);
    }
}

onMounted(async () => {
    await nextTick();
    renderKaTeX();
});

const createParabolaChart = () => {
    const ctx = document.getElementById('parabolaChart');
    if (!ctx) return;

    // Generate x values from -3 to 3
    const xValues = Array.from({length: 61}, (_, i) => (i - 30) / 10);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [
                {
                    label: 'f(x) = x²',
                    data: xValues.map(x => ({x: x, y: x * x})),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: 'f(x) = x² + 3',
                    data: xValues.map(x => ({x: x, y: x * x + 3})),
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: 'f(x) = x² - 3',
                    data: xValues.map(x => ({x: x, y: x * x - 3})),
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.4,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        padding: 10,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        font: {
                            size: 8
                        }
                    }
                },
                y: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        font: {
                            size: 8
                        }
                    }
                }
            }
        }
    });
}

const createParabolaShiftChart = () => {
    const ctx = document.getElementById('parabolaShiftChart');
    if (!ctx) return;

    // Generate x values from -5 to 5
    const xValues = Array.from({length: 101}, (_, i) => (i - 50) / 10);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [
                {
                    label: 'f(x) = x²',
                    data: xValues.map(x => ({x: x, y: x * x})),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: 'f(x) = (x-3)²',
                    data: xValues.map(x => ({x: x, y: Math.pow(x - 3, 2)})),
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: 'f(x) = (x+3)²',
                    data: xValues.map(x => ({x: x, y: Math.pow(x + 3, 2)})),
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.4,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        padding: 10,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        stepSize: 1,
                        font: {
                            size: 8
                        }
                    }
                },
                y: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value === -5 || value === 5 ? value : '';
                        },
                        font: {
                            size: 8
                        }
                    }
                }
            }
        }
    });
}

const createLinearFunctionChart = () => {
    const ctx = document.getElementById('linearFunctionChart');
    if (!ctx) return;

    const xValues = Array.from({length: 101}, (_, i) => (i - 50) / 10);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [
                {
                    label: 'f(x) = x',
                    data: xValues.map(x => ({x: x, y: x})),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.4,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                title: {
                    display: true,
                    text: 'Linear Function',
                    font: {
                        size: 14
                    },
                    padding: {
                        bottom: 10
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        padding: 10,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        stepSize: 1,
                        font: {
                            size: 8
                        }
                    }
                },
                y: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value === -5 || value === 5 ? value : '';
                        },
                        font: {
                            size: 8
                        }
                    }
                }
            }
        }
    });
}

const createAbsoluteValueChart = () => {
    const ctx = document.getElementById('absoluteValueChart');
    if (!ctx) return;

    const xValues = Array.from({length: 101}, (_, i) => (i - 50) / 10);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [
                {
                    label: 'f(x) = |x|',
                    data: xValues.map(x => ({x: x, y: Math.abs(x)})),
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.4,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                title: {
                    display: true,
                    text: 'Absolute Value',
                    font: {
                        size: 14
                    },
                    padding: {
                        bottom: 10
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        padding: 10,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        stepSize: 1,
                        font: {
                            size: 8
                        }
                    }
                },
                y: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value === -5 || value === 5 ? value : '';
                        },
                        font: {
                            size: 8
                        }
                    }
                }
            }
        }
    });
}

const createPowerFunctionsChart = () => {
    const ctx = document.getElementById('powerFunctionsChart');
    if (!ctx) return;

    const xValues = Array.from({length: 101}, (_, i) => (i - 50) / 10);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [
                {
                    label: 'f(x) = x²',
                    data: xValues.map(x => ({x: x, y: Math.pow(x, 2)})),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: 'f(x) = √x',
                    data: xValues.filter(x => x >= 0).map(x => ({x: x, y: Math.sqrt(x)})),
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.4,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                title: {
                    display: true,
                    text: 'Parabola and Square Root',
                    font: {
                        size: 14
                    },
                    padding: {
                        bottom: 10
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        padding: 10,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        stepSize: 1,
                        font: {
                            size: 8
                        }
                    }
                },
                y: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value === -5 || value === 5 ? value : '';
                        },
                        font: {
                            size: 8
                        }
                    }
                }
            }
        }
    });
}

const createExponentialFunctionsChart = () => {
    const ctx = document.getElementById('exponentialFunctionsChart');
    if (!ctx) return;

    const xValues = Array.from({length: 101}, (_, i) => (i - 50) / 10);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [
                {
                    label: 'f(x) = 2ˣ',
                    data: xValues.map(x => ({x: x, y: Math.pow(2, x)})),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: 'f(x) = (1/2)ˣ',
                    data: xValues.map(x => ({x: x, y: Math.pow(1/2, x)})),
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.4,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                title: {
                    display: true,
                    text: 'Exponential Growth and Decay',
                    font: {
                        size: 14
                    },
                    padding: {
                        bottom: 10
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        padding: 10,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        stepSize: 1,
                        font: {
                            size: 8
                        }
                    }
                },
                y: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value === -5 || value === 5 ? value : '';
                        },
                        font: {
                            size: 8
                        }
                    }
                }
            }
        }
    });
}

const createCubicFunctionChart = () => {
    const ctx = document.getElementById('cubicFunctionChart');
    if (!ctx) return;

    const xValues = Array.from({length: 101}, (_, i) => (i - 50) / 10);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [
                {
                    label: 'f(x) = x³',
                    data: xValues.map(x => ({x: x, y: Math.pow(x, 3)})),
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.4,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                title: {
                    display: true,
                    text: 'Cubic Function',
                    font: {
                        size: 14
                    },
                    padding: {
                        bottom: 10
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        padding: 10,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        stepSize: 1,
                        font: {
                            size: 8
                        }
                    }
                },
                y: {
                    type: 'linear',
                    position: 'center',
                    min: -5,
                    max: 5,
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value === -5 || value === 5 ? value : '';
                        },
                        font: {
                            size: 8
                        }
                    }
                }
            }
        }
    });
}

onMounted(() => {
    createParabolaChart();
    createParabolaShiftChart();
    createLinearFunctionChart();
    createAbsoluteValueChart();
    createPowerFunctionsChart();
    createExponentialFunctionsChart();
    createCubicFunctionChart();
});
</script>
<template>
    <h1 class="sat-guide-page-header">Math Cheat Sheet</h1>
    <div class="section-description">
        This page is a collection of all the formulas and concepts you need to know for the SAT Math section.
    </div>

    <h2 class="sat-guide-section-header">Provided Formulas</h2>
    <div class="section-description">
        The following formulas are provided to you in the BlueBook app while you're taking the test. Since they're provided to you, you don't need to memorize the formulas, but you should memorize which formulas are provided, and familiarize yourself with how to use them.
        <div>
            <img src="/images/sat/math-reference-sheet.png" class="w-full h-full object-contain max-w-[800px]" /> 
        </div>
    </div>

    <h2 class="sat-guide-section-header">Algebra</h2>
    <div class="section-description">
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">Linear Equation Forms</h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Slope-Intercept Form
                    </div>
                    <div class="cheat-sheet-concept-content">
                        y = mx + b
                        <div>
                            e.g. y = 2x + 3
                        </div>
                        <div>
                            m = slope
                        </div>
                        <div>
                            b = y-intercept
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Standard Form
                    </div>
                    <div class="cheat-sheet-concept-content">
                        ax + by = c
                        <div>
                            e.g. 2x + 3y = 4
                        </div>
                        <div>
                            a = rate/amount per x
                        </div>
                        <div>
                            b = rate/amount per y
                        </div>
                        <div>
                            c = total amount of x and y
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Point-Slope Form
                    </div>
                    <div class="cheat-sheet-concept-content">
                        y - y₁ = m(x - x₁)
                        <div>
                            e.g. y - 3 = 2(x - 1)
                        </div>
                        <div>
                            m = slope
                        </div>
                        <div>
                            (x₁, y₁) = point on line
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">Concepts</h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Slope
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Steepness/rate of change of line
                        </div>
                        <div>
                            m = <span class="latex-formula">$$\frac{rise}{run}$$</span> = <span class="latex-formula">$$\frac{\Delta y}{\Delta x}$$</span> = <span class="latex-formula">$$\frac{y_2 - y_1}{x_2 - x_1}$$</span>
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Y-Intercept
                    </div>
                    <div class="cheat-sheet-concept-content">
                        Point where the line crosses the y-axis
                        <div>
                            Plug in x = 0
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        X-Intercept
                    </div>
                    <div class="cheat-sheet-concept-content">
                        Point where the line crosses the x-axis
                        <div>
                            Plug in y = 0
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Horizontal Line
                    </div>
                    <div class="cheat-sheet-concept-content">
                        y = constant
                        <div>
                            e.g. y = 3
                        </div>
                        <div>
                            Slope = 0
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Vertical Line
                    </div>
                    <div class="cheat-sheet-concept-content">
                        x = constant
                        <div>
                            e.g. x = 3
                        </div>
                        <div>
                            Slope = undefined
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Parallel Lines
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Same slope, different intercepts
                        </div>
                        <div>
                            Never intersect, always same distance apart
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Perpendicular Lines
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Negative reciprocal slopes
                        </div>
                        <div>
                            <span class="latex-formula">$$m_2 = -\frac{1}{m_1}$$</span>
                        </div>
                        <div>
                            Intersect at right angle (90°)
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Equation/system with no solutions
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Parallel lines
                        </div>
                        <div>
                            Both sides/equations have same slope (x coefficient)
                        </div>
                        <div>
                            Different y-intercepts
                        </div>
                        <div>
                            e.g. y = 2x + 3 and y = 2x + 4
                        </div>
                        <div>
                            or 2x+3 = 2x+4
                        </div>
                        <div>
                            Solving results in false statement
                        </div>
                        <div>
                            e.g. 3 = 5
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Equation/system with infinite solutions
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Both sides/equations represent same line
                        </div>
                        <div>
                            Same slope, same y-intercept
                        </div>
                        <div>
                            e.g. y = 2x + 3 and 2y = 4x + 6
                        </div>
                        <div>
                            or 2x+6 = 2(x+3)
                        </div>
                        <div>
                            Solving results statement that is always true
                        </div>
                        <div>
                            e.g. 3 = 3
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Equation/system with one solution
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Sides/equations have different slopes
                        </div>
                        <div>
                            e.g. y = 2x + 3 and y = 3x + 2
                        </div>
                        <div>
                            or 2x+3 = 3x+2
                        </div>
                        <div>
                            Solving results in x = constant
                        </div>
                        <div>
                            e.g. x = 3
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">Formulas</h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Distance Formula
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Distance between two points
                        </div>
                        <div>
                            <span class="latex-formula">$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$</span>
                        </div>
                        <div>
                            Comes from Pythagorean theorem
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Midpoint Formula
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Midpoint between two points
                        </div>
                        <div>
                            <span class="latex-formula">$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$</span>
                        </div>
                        <div>
                            x = halfway between x₁ and x₂
                        </div>
                        <div>
                            (avg x coordinate)
                        </div>
                        <div class="pt-1">
                            y = halfway between y₁ and y₂
                        </div>
                        <div>
                            (avg y coordinate)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">Advanced Math</h2>
    <div class="section-description">
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">Parabolas/Quadratic Functions</h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Vertex
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            The point where the parabola turns around
                        </div>
                        <div>
                            Either the maximum or minimum point
                        </div>
                        <div>
                            At the vertex, the slope is 0
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        X-Intercepts
                    </div>
                    <div class="cheat-sheet-concept-content">
                        Points where the parabola crosses the x-axis
                        <div>
                            Aka the solutions when the quadratic equation equals 0
                        </div>
                        <div>
                            Can be found by factoring or using the quadratic formula
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Standard Form
                    </div>
                    <div class="cheat-sheet-concept-content">
                        f(x) = ax² + bx + c
                        <div>
                            e.g. y = 2x² + 3x + 4
                        </div>
                        <div>
                            a = coefficient of x²
                        </div>
                        <div>
                            b = coefficient of x
                        </div>
                        <div>
                            c = y-intercept
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Vertex From Standard Form
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            If vertex is at (h,k), then:
                        </div>
                        <span class="latex-formula">$$h = \frac{-b}{2a}$$</span>
                        <div>
                            <span class="latex-formula">$$k = f(h)$$</span>
                        </div>
                        <div>
                            e.g. if <span class="latex-formula">$$y = 2x² + 3x + 4$$</span>, then 
                        </div>
                        <div>
                            <span class="latex-formula">$$h = \frac{-3}{2(2)} = \frac{-3}{4}$$</span>
                        </div>
                        <div>
                            <span class="latex-formula">$$k = 2\left(\frac{-3}{4}\right)^2 + 3\left(\frac{-3}{4}\right) + 4$$</span>
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Standard Form Sum of Solutions
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Sum of solutions = <span class="latex-formula">$$-\frac{b}{a}$$</span>
                        </div>
                        <div>
                            e.g. if <span class="latex-formula">$$y = 2x^2 + 3x + 4$$</span>, then 
                        </div>
                        <div>
                            solutions add up to
                            <span class="latex-formula">$$-\frac{3}{2}$$</span>
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Quadratic Formula
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            <span class="latex-formula">$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$</span>
                        </div>
                        <div>
                            Gives the solutions to a Standard Form quadratic equation
                        </div>
                        <div>
                            Aka the x-intercepts
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Discriminant
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            What's inside the radical in the Quadratic Formula
                        </div>
                        <div>
                            <span class="latex-formula">$$D = b^2 - 4ac$$</span>
                        </div>
                        <div>
                            Tells you how many solutions there are
                        </div>
                        <div>
                            D > 0: 2 solutions
                        </div>
                        <div>
                            D = 0: 1 solution
                        </div>
                        <div>
                            D < 0: no (real) solutions
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Factored Form
                    </div>
                    <div class="cheat-sheet-concept-content">
                        f(x) = a(x - r)(x - s)
                        <div>
                            e.g. y = 2(x - 1)(x - 3)
                        </div>
                        <div>
                            Set each factor equal to 0 for solutions
                        </div>
                        <div>
                            In above example solutions are:
                        </div>
                        <div>
                            x = 1 and x = 3
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Factored Form from Standard Form
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Standard form: ax² + bx + c
                        </div>
                        <div>
                            Find the product of a and c (ac)
                        </div>
                        <div>
                            Find two factors of ac that add up to b
                        </div>
                        <div>
                            We'll call these factors r and s
                        </div>
                        <div>
                            If a = 1, then factored form is (x - r)(x - s)
                        </div>
                        <div>
                            If a > 1, then factor by grouping
                        </div>
                        
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Factor By Grouping
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Find r and s like in previous section
                        </div>
                        <div>
                            Rewrite as ax² + rx + sx + c
                        </div>
                        <div>
                            Factor greatest common factor out of first two terms: Ax(Bx + C)
                        </div>
                        <div>
                            Factor greatest common factor out of last two terms: D(Bx + C)
                        </div>
                        <div>
                            Rewrite as (Ax + D)(Bx + C)
                        </div>
                        <div>
                            Example:
                        </div>
                        <div>
                            <span class="latex-formula">$$2x^2 + 5x + 12$$</span>
                        </div>
                        <div>
                            <span class="latex-formula">$$ac = 2*12 = 24$$</span>
                        </div>
                        <div>
                            <span class="latex-formula">$$(8)(-3) = -24$$</span> and <span class="latex-formula">$$(8)+ (-3) = 5$$</span>
                        </div>
                        <div>
                            <span class="latex-formula">$$2x^2 + 5x + 12 = 2x^2 + 8x - 3x + 12$$</span>
                        </div>
                        <div>
                            <span class="latex-formula">$$= 2x(x + 4) - 3(x + 4)$$</span>
                        </div>
                        <div>
                            <span class="latex-formula">$$= (2x - 3)(x + 4)$$</span>
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Difference of Squares
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            When a perfect square is subtracted from another perfect square, it is easily factored
                        </div>
                        <div>
                            a² - b² = (a + b)(a - b)
                        </div>
                        <div>
                            e.g. x² - 9 = (x + 3)(x - 3)
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Perfect Square Trinomial
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            A perfect square trinomial is a quadratic equation that can be written as a square of a binomial
                        </div>
                        <div>
                            If you notice the pattern:
                        </div>
                        <div>
                            a² + 2ab + b²
                        </div>
                        <div>
                            It can be factored as (a + b)²
                        </div>
                        <div>
                            e.g. 9x² + 24x + 16
                        </div>
                        <div>
                            = (3x)² + 2(3x)(4) + 4²
                        </div>
                        <div>
                            = (3x + 4)²
                        </div>
                        <div>
                            Or the pattern:
                        </div>
                        <div>
                            a² - 2ab + b²
                        </div>
                        <div>
                            Can be factored as (a - b)²
                        </div>
                        <div>
                            e.g. 4x² - 12x + 9
                        </div>
                        <div>
                            = (2x - 3)²
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Vertex Form
                    </div>
                    <div class="cheat-sheet-concept-content">
                        f(x) = a(x - h)² + k
                        <div>
                            e.g. y = 2(x + 1)² + 3
                        </div>
                        <div>
                            (h, k) = vertex
                        </div>
                        <div>
                            a > 0: opens up
                        </div>
                        <div>
                            a < 0: opens down
                        </div>
                        <div>
                            Note the signs before h and k
                        </div>
                        <div>
                            Vertex is (-1, 3) in example above
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Parabola Symmetry
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Parabola is symmetric about a vertical line through the vertex
                        </div>
                        <div>
                            The line is x = h, where h = vertex x-coordinate
                        </div>
                        <div>
                           X-intercepts are equidistant from vertex (and the line of symmetry)
                        </div>
                        <div>
                            e.g. if intercepts are at -5 and 3, then vertex is halfway between (x = -1)
                        </div>
                        <div>
                            Similarly, if any two points have the same y value then the vertex is halfway between them
                        </div>
                        <div>
                            Or if you know the vertex and one x-intercept, you can find the other (will be same distance from vertex)
                        </div>

                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Completing the Square
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Useful when you want to have a perfect square binomial in the equation
                        </div>
                        <div>
                            (Like when converting to vertex form or in circle equations)
                        </div>
                        <div>
                            If we have ax² + bx + c = d, where c and d can represent any constants or additional terms
                        </div>
                        <div>
                            We can rewrite it as a(x² + b/a x) + c = d
                        </div>
                        <div>
                            We can change x² + b/a x to (x + b/2a)², but this would add an extra (b/2a)² to the equation
                        </div>
                        <div>
                            So we subtract (b/2a)² to keep the equation balanced
                        </div>
                        <div>
                            Ending up with a(x + b/2a)² - (b/2a)² + c = d
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">Exponents and Radicals</h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Multiplication Rule
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            xᵃ * xᵇ = x⁽ᵃ⁺ᵇ⁾
                        </div>
                        <div>
                            e.g. x² * x³ = x<sup>2+3</sup> = x<sup>5</sup>
                        </div>
                        <div>
                            Note that this can also be applied in reverse
                        </div>
                        <div>
                            e.g. 2<sup>x+3</sup> = 2<sup>x</sup> * 2<sup>3</sup> = 2<sup>x</sup> * 8
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Negative Exponent Rule
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            x⁻ᵃ = 1/xᵃ
                        </div>
                        <div>
                            e.g. x⁻² = 1/x²
                        </div>
                        <div>
                            Note that this can also be applied in reverse
                        </div>
                        <div>
                            e.g. 3/x⁻² = 3x²
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Division Rule
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            xᵃ / xᵇ = x⁽ᵃ⁻ᵇ⁾
                        </div>
                        <div>
                            e.g. x⁵ / x² = x³
                        </div>
                        <div>
                            This can also be figured out by combining the negative exponent rule and the multiplication rule
                        </div>
                        <div>
                            xᵃ / xᵇ = xᵃ * x⁻ᵇ = x⁽ᵃ⁻ᵇ⁾
                        </div>
                        <div>
                            Note that this can also be applied in reverse
                        </div>
                        <div>
                            e.g. x⁽²ᵃ⁻³ᵇ⁾ = x²ᵃ / x³ᵇ
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Power Rule
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            (xᵃ)ᵇ = xᵃᵇ
                        </div>
                        <div>
                            e.g. (x²)³ = x⁶
                        </div>
                        <div>
                            Note that this can also be applied in reverse
                        </div>
                        <div>
                            e.g. x⁽²ᵃ⁾ = (x²)ᵃ = (xᵃ)²
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Zero Exponent Rule
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            a⁰ = 1, where a is any non-zero number
                        </div>
                        <div>
                            e.g. 2⁰ = 1
                        </div>
                    </div>
                </div>
                
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Fractional Exponents
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Whenever you have a fractional exponent, you can rewrite it as a radical
                        </div>
                        <div class="text-lg">
                            <math xmlns="http://www.w3.org/1998/Math/MathML">
                                <msup>
                                    <mi>x</mi>
                                    <mfrac>
                                    <mi>a</mi>
                                    <mi>b</mi>
                                    </mfrac>
                                </msup>
                                <mo>=</mo>
                                <mroot>
                                    <msup>
                                    <mi>x</mi>
                                    <mi>a</mi>
                                    </msup>
                                    <mi>b</mi>
                                </mroot>
                            </math>
                        </div>
                        <div class="text-lg">
                            <span class="text-sm">e.g. </span>
                            <math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mrow>
                                    <msup>
                                    <mi>x</mi>
                                    <mfrac>
                                        <mn>2</mn>
                                        <mn>3</mn>
                                    </mfrac>
                                    </msup>
                                    <mo>=</mo>
                                    <mroot>
                                    <msup>
                                        <mi>x</mi>
                                        <mn>2</mn>
                                    </msup>
                                    <mn>3</mn>
                                    </mroot>
                                </mrow>
                            </math>
                        </div>
                        <div>
                            If you forget which number goes where, think of a simple example, like
                            <math class="text-lg"
                            xmlns="http://www.w3.org/1998/Math/MathML">
                            <mstyle displaystyle="true" scriptlevel="0">
                                <mrow>
                                    <msup>
                                    <mi>x</mi>
                                    <mfrac>
                                        <mn>1</mn>
                                        <mn>3</mn>
                                    </mfrac>
                                    </msup>
                                    <mo>=</mo>
                                    <mroot>
                                    <mi>x</mi>
                                    <mn>3</mn>
                                    </mroot>
                                </mrow>
                            </mstyle>
                            </math>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">
                Exponential Functions
            </h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        General Format
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            f(x) = a * b^x, where a and b are constants
                        </div>
                        <div>
                            e.g. f(x) = 2 * 3^x
                        </div>
                        <div>
                            The value will increase by a factor of b for every time the exponent increases by 1
                        </div>
                        <div>
                            In the example above, the value will increase by a factor of 3 for every time x increases by 1
                        </div>
                        <div>
                            But in the example f(x) = 2 * 3^(2x), the value will increase by a factor of 3 for every time 2x increases by 1 (or when x increases by 1/2)
                        </div>
                        <div>
                            Or we could think of it as increasing by a factor of 3^2 for every time x increases by 1 (because we could rewrite as 2 * (3^2)^x)
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Exponential Growth vs Decay
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            If the function is <span class="latex-formula">$$f(x) = a * b^x$$</span>:
                        </div>
                        <div>
                            If b > 1, then it's an exponential growth function
                        </div>
                        <div>
                            If 0 < b < 1, (b is a positive fraction less than 1) then it's an exponential decay function
                        </div>
                        <div>
                            Exponential growth functions increase more rapidly towards infinity as x increases
                        </div>
                        <div>
                            Exponential decay functions decrease and approach 0 as x increases
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Applications
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Exponential functions are used to model growth and decay in many real-world situations
                        </div>
                        <div>
                            e.g. population growth or decay, radioactive decay, investment growth, technological growth, etc.
                        </div>
                        <div>
                            If something is increasing or decreasing by a constant factor for every unit of time, it's an exponential function
                        </div>
                        <div>
                            e.g. if a population doubles every 5 years, that's exponential growth
                        </div>
                        <div>
                            If a material loses 6% of its mass every 10 years, that's exponential decay
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Interest Formulas
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            The simple interest formula (when interest is compounded annually) is <span class="latex-formula">$$A = P(1 + r)^t$$</span>
                        </div>
                        <div>
                            A is the final amount
                        </div>
                        <div>
                            P is the principal (initial amount)
                        </div>
                        <div>
                            r is the annual interest rate (e.g. 0.05 for 5%)
                        </div>
                        <div>
                            t is the time in years
                        </div>
                        <div>
                            e.g. if you invest $1,000 at 5% interest for 10 years: 
                        </div>
                        <div>
                            <span class="latex-formula">$$A=1,000(1+0.05)^{10}=\$1628.89$$</span>
                        </div>
                        <div>
                            If interest is compounded more than once per year, then the formula is <span class="latex-formula">$$A = P(1 + r/n)^{nt}$$</span>
                        </div>
                        <div>
                            Where n is the number of times interest is compounded per year
                        </div>
                        <div>
                            e.g. if you invest $1,000 at 5% interest for 10 years, compounded monthly:
                        </div>
                        <div>
                            <span class="latex-formula">$$A=1,000\left(1+\frac{0.05}{12}\right)^{12*10}=\$1647.01$$</span>
                        </div>
                        <div>
                            Normally on the SAT, you'll only need to know the simple formula
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">
                Transformations
            </h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Vertical Shift
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            If you have a function f(x)
                        </div>
                        <div>
                            The function f(x) + c shifts the graph up by c units
                        </div>
                        <div>
                            e.g. if you have f(x) = x², and you want to shift it up by 3 units, you can add 3 to the function to get f(x) = x² + 3
                        </div>
                        <div class="mt-4" style="width: 200px; height: 200px;">
                            <canvas id="parabolaChart"></canvas>
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Horizontal Shift
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            If you have a function f(x)
                        </div>
                        <div>
                            The function f(x - c) shifts the graph to the right by c units
                        </div>
                        <div>
                            e.g. if you have f(x) = x², and you want to shift it to the right by 3 units, you can replace all instances of x with (x-3) to get f(x) = (x - 3)²
                        </div>
                        <div class="mt-4" style="width: 200px; height: 200px;">
                            <canvas id="parabolaShiftChart"></canvas>
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Other Transformations
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            -f(x) reflects the graph over the x-axis (flips it upside down)
                        </div>
                        <div>
                            f(-x) reflects the graph over the y-axis (flips it left to right)
                        </div>
                        <div>
                            c*f(x) stretches the graph vertically by a factor of c (makes it skinnier if c > 1, or fatter if c < 1)
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Graphs of Common Functions
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div class="flex flex-wrap gap-4 justify-start">
                            <div style="width: 200px; height: 200px;">
                                <canvas id="linearFunctionChart"></canvas>
                            </div>
                            <div style="width: 200px; height: 200px;">
                                <canvas id="absoluteValueChart"></canvas>
                            </div>
                            <div style="width: 200px; height: 200px;">
                                <canvas id="powerFunctionsChart"></canvas>
                            </div>
                            <div style="width: 200px; height: 200px;">
                                <canvas id="exponentialFunctionsChart"></canvas>
                            </div>
                            <div style="width: 200px; height: 200px;">
                                <canvas id="cubicFunctionChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h2 class="sat-guide-section-header">Problem-Solving and Data Analysis</h2>
    <div class="section-description">
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">Statistics and Probability</h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Mean
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            aka average
                        </div>
                        <div>
                            Mean = Sum of all values / Number of values
                        </div>
                        <div>
                            e.g. if you have the numbers 1, 2, 3, 4, 5, the mean is (1+2+3+4+5) / 5 = 3
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Median
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            The middle value in a set of numbers when ordered from least to greatest
                        </div>
                        <div>
                            e.g. if you have the numbers 1, 2, 3, 4, 5, the median is 3
                        </div>
                        <div>
                            If there's an even number of values, the median is the average of the two middle values
                        </div>
                        <div>
                            e.g. if you have the numbers 1, 2, 3, 4, 5, 6, the median is (3+4) / 2 = 3.5
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Mode
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            The most frequently occurring value in a set of numbers
                        </div>
                        <div>
                            e.g. if you have the numbers 1, 2, 2, 3, 4, the mode is 2
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Range
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            The difference between the largest and smallest values in a set of numbers
                        </div>
                        <div>
                            e.g. if you have the numbers 1, 2, 3, 4, 5, the range is 5 - 1 = 4
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Standard Deviation
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            A measure of how much the values in a data set vary from the mean
                        </div>
                        <div>
                            In other words, how spread out the data is
                        </div>
                        <div>
                            If all the data points are clustered around the mean, the standard deviation is low
                        </div>
                        <div>
                            If the data points are spread out, the standard deviation is high
                        </div>
                        <div>
                            You won't need to actually calculate the standard deviation on the SAT, but they might test you on the concept
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Margin of Error
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            The margin of error is the amount of error that is allowed in a survey or experiment
                        </div>
                        <div>
                            It's usually expressed as a percentage
                        </div>
                        <div>
                            e.g. if a survey estimates that 35% of people support a certain candidate, and the margin of error is 5%, then the true value is within 5% of the estimated value
                        </div>
                        <div>
                            This means the true value is between 30% and 40%
                        </div>
                    </div>

                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Surveys and Sampling
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Surveys are used to collect data from a sample of a population
                        </div>
                        <div>
                            Conclusions from a survey should only be made about the population that the sample represents
                        </div>
                        <div>
                            e.g. if you survey 20 random athletes at a school and ask how many hours they study per week, you can only draw conclusions about how much athletes at that school study, not the entire student body
                        </div>
                        
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Probability
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Probability is the likelihood of an event occurring
                        </div>
                        <div>
                            Probability = Number of favorable outcomes / Total number of outcomes
                        </div>
                        <div>
                            e.g. a bowl has 3 red marbles and 2 blue marbles. The probability of picking a red marble is 3/5
                        </div>
                        <div>
                            The probability of two events both happening is the product of their probabilities
                        </div>
                        <div>
                            e.g. the probability of rolling a 3 and then rolling a 4 is (1/6) * (1/6) = 1/36
                        </div>
                        <div>
                            The probability of either of two events happening is the sum of their probabilities
                        </div>
                        <div>
                            e.g. the probability of rolling a 3 or rolling a 4 is (1/6) + (1/6) = 1/3
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Conditional Probability
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Conditional probability is the probability of an event occurring given that another event has occurred
                        </div>
                        <div>
                            Take what they say is given, and ignore all possibilities that are inconsistent with that
                        </div>
                        <div>
                            e.g. say white bucket has 3 red marbles and 2 blue marbles, and a black bucket has 2 red marbles and 3 blue marbles. If you're asked the probability of picking a red marble given that you're picking from the white bucket, you can ignore the black bucket.
                        </div>
                        <div>
                            The probability of picking a red marble from the white bucket is 3/5
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">
                Percentages, Ratios, and Proportions
            </h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Percentages
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Percentages are a way to express a fraction as a number out of 100
                        </div>
                        <div>
                            e.g. 25% is the same as 25/100 or 0.25
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Percent "Of"
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            "Percent of" means that you're taking a percentage of a number
                        </div>
                        <div>
                            To find p% of q, multiply q by p/100
                        </div>
                        <div>
                            e.g. 25% of 80 is (25/100) * 80 = 20
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Percent Increase/Decrease
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            If a number q increases by p%, then the new number is q * (1 + p/100)
                        </div>
                        <div>
                            If a number q decreases by p%, then the new number is q * (1 - p/100)
                        </div>
                        <div>
                            e.g. if a shirt costs $20 and it increases by 10%, then the new price is $20 * (1 + 10/100) = $20*1.1 = $22
                        </div>
                        <div>
                            e.g. if a shirt costs $20 and is on sale for 10% off, then the new price is $20 * (1 - 10/100) = $20*0.9 = $18
                        </div>
                        <div>
                            Working the other way, if you are told the initial value and the final value, you can find the percent change by using the formula:
                        </div>
                        <div>
                            Percent Change = (New Value - Old Value) / Old Value
                        </div>
                        <div>
                            e.g. if a shirt costs $20 and increases to $22, the percent increase is (22 - 20) / 20 = 10%
                        </div>
                        <div>
                            NOTE: If something increases by 200%, it is not doubling. 
                        </div>
                        <div>
                            The new value is the initial value plus 200% of the initial value, so really it's tripling.
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Pre-Percentage Amount
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Sometimes you might be told the amount after a percentage has been applied, and you need to find the original amount.
                        </div>
                        <div>
                            The easiest way to intuitively set up this formula is:
                        </div>
                        <div>
                            final amount = original amount * (1 + percentage)
                        </div>
                        <div>
                            e.g. if a shirt costs $22 after a 10% increase, then:
                        </div>
                        <div>
                            $22 = original amount * (1.1)
                        </div>
                        <div>
                            So, ultimately the equation for finding the original amount is:
                        </div>
                        <div>
                            <span class="latex-formula">$$original = \frac{final}{1 + percentage}$$</span>
                        </div>
                        <div>
                            e.g. <span class="latex-formula">$$original = \frac{22}{1.1}$$</span>
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Ratios
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            A ratio is a comparison of two quantities by division
                        </div>
                        <div>
                            e.g. if you have 3 apples and 2 oranges, the ratio of apples to oranges is 3:2 or 3/2
                        </div>
                        <div>
                            If you know two things have the same ratio, you can set up a proportion to find the unknown quantity
                        </div>
                        <div>
                            e.g. if two similar triangles have corresponding sides of 3 and 5 on one triangle, and 6 and x on the other, you can set up the proportion:
                        </div>
                        <div>
                            <span class="latex-formula">$$\frac{3}{5} = \frac{6}{x}$$</span>
                        </div>
                        <div>
                            Cross-multiplying gives:
                        </div>
                        <div>
                            <span class="latex-formula">$$3x = 30$$</span>
                        </div>
                        <div>
                            Then divide both sides by 3 to get:
                        </div>
                        <div>
                            <span class="latex-formula">$$x = 10$$</span>
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Unit Conversion
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Multiply the original quantity by the conversion ratio to get the new quantity
                        </div>
                        <div>
                            e.g. if 1 mile = 5,280 feet, the conversion ratio can be written as <span class="latex-formula">$$\frac{5280\ feet}{1\ mile}$$</span> or <span class="latex-formula">$$\frac{1\ mile}{5280\ feet}$$</span>
                        </div>
                        <div>
                            Since the numerator and denominator represent the same distance, the conversion ratio is equal to 1, so multiplying by it doesn't change the original quantity
                        </div>
                        <div>
                           e.g. if you want to convert 10 miles to feet, you can multiply 10 miles by the conversion ratio:
                        </div>
                        <div>
                            <span class="latex-formula">$$10\ miles * \frac{5280\ feet}{1\ mile} = 52,800\ feet$$</span>
                        </div>
                        <div>
                            You want to set the numerator and denominator so that the correct units cancel out, leaving you with the desired units
                        </div>
                        <div>
                            e.g. in the example above, we want to cancel out miles and end up with feet, so we put miles in the denominator
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Chemical Solutions/Mixed Materials
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Some problems deal with combining two substances, each consisting of mixed elements
                        </div>
                        <div>
                            e.g. combining 1L of saline that is 10% salt with 2L of saline that is 20% salt
                        </div>
                        <div>
                            The ratio might be given as percent by volume, or percent by mass, but the concept is the same
                        </div>
                        <div>
                            It could also be given as a ratio instead of a percent
                        </div>
                        <div>
                            The general formula for this type of problem is:
                        </div>
                        <div>
                            <span class="latex-formula">$$V_1 * P_1 + V_2 * P_2 = (V_1 + V_2) * P_f$$</span>
                        </div>
                        <div>
                            e.g. In the above formula, V1 represents the volume of the first substance, P1 represents the percent of the first substance, Pf represents the percent of the final combined substance, and so forth
                        </div>
                        <div>
                            To demonstrate with the saline example from above, we would plug in the values as follows:
                        </div>
                        <div>
                            <span class="latex-formula">$$1 * 0.1 + 2 * 0.2 = (1 + 2) * P_f$$</span>
                        </div>
                        <div>
                            This yields a final solution of 16% salt
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Mixed Substances/Solutions
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            When you combine two substances (e.g. saline solutions with different concentrations), the final concentration of the substance is a weighted average of the concentrations of the two substances
                        </div>
                        <div>
                            <span class="latex-formula">$$C_f = \frac{C_1V_1 + C_2V_2}{V_1 + V_2}$$</span>
                        </div>
                        <div>
                            C<sub>f</sub> = final concentration
                        </div>
                        <div>
                            C<sub>1</sub> = concentration of the first substance
                        </div>
                        <div>
                            V<sub>1</sub> = volume of the first substance
                        </div>
                        <div>
                            C<sub>2</sub> = concentration of the second substance
                        </div>
                        <div>
                            V<sub>2</sub> = volume of the second substance
                        </div>
                        <div>
                            e.g. if you have 100g of saline that is 10% salt and 200g of saline that is 20% salt, the final concentration is (100*10 + 200*20) / (100 + 200) = 15%
                        </div>
                        <div>
                            The same concept applies when it's percent by mass instead of percent by volume
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Distance, Rate, and Time
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Distance = Rate * Time
                        </div>
                        <div>
                            Easiest way to remember: speed is given in miles per hour: speed  = miles/hour
                        </div>
                        <div>
                            Since speed is the rate, miles is the distance, and hours is the time: r = d/t
                        </div>
                        <div>
                            This can be manipulated to either d = r*t or t = d/r
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h2 class="sat-guide-section-header">Geometry and Trigonometry</h2>
    <div class="section-description">
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">
                Provided Formulas
            </h3>
            <div class="cheat-sheet-subsection-content">
                The SAT provides you with many geometry and trigonometry formulas. Since they're provided, it's not necessary to memorize them. However, it's important to familiarize yourself with which ones are provided, so you know where to find them. We already showed these earlier on the page, so we won't repeat them here.
            </div>
        </div>
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">
                General Angle Rules
            </h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Vertical Angles
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Vertical angles are angles that are opposite each other when two lines intersect
                        </div>
                        <div>
                            Vertical angles are equal in measure
                        </div>
                        <svg width="120" height="120" viewBox="0 0 120 120" class="my-2">
                            <!-- Two intersecting lines -->
                            <line x1="30" y1="10" x2="90" y2="110" stroke="black" stroke-width="2"/>
                            <line x1="30" y1="110" x2="90" y2="10" stroke="black" stroke-width="2"/>
                            
                            <!-- Angle labels -->
                            <text x="60" y="30" font-size="12" text-anchor="middle">60°</text>
                            <text x="60" y="95" font-size="12" text-anchor="middle">60°</text>
                        </svg>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Supplementary and Complementary Angles
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Supplementary angles are two angles that add up to 180 degrees
                        </div>
                        <div>
                            Complementary angles are two angles that add up to 90 degrees
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Linear Pair
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Linear pairs are two angles that are adjacent and together form a straight line
                        </div>
                        <div>
                            Linear pairs are supplementary, meaning they add up to 180 degrees
                        </div>
                        <div>
                            e.g. in the example below, the 60° angle and the 120° angle form a linear pair
                        </div>
                        <svg width="120" height="120" viewBox="0 0 120 120" class="my-2">
                            <!-- Two intersecting lines -->
                            <line x1="30" y1="10" x2="90" y2="110" stroke="black" stroke-width="2"/>
                            <line x1="30" y1="110" x2="90" y2="10" stroke="black" stroke-width="2"/>
                            
                            <!-- Angle labels -->
                            <text x="60" y="30" font-size="12" text-anchor="middle">60°</text>
                            <text x="75" y="60" font-size="12" text-anchor="start">120°</text>
                        </svg>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Parallel Lines With Transversal
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Parallel lines are lines that never intersect
                        </div>
                        <div>
                            A transversal is a line that cuts through two parallel lines, creating 8 angles
                        </div>
                        <div>
                            Unless the transversal is perpendicular to the parallel lines, you'll have 4 acute angles (&lt;90°) and 4 obtuse angles (&gt;90°)
                        </div>
                        <div>
                            All 4 acute angles are congruent (equal in measure), and all 4 obtuse angles are congruent
                        </div>
                        <svg width="200" height="200" viewBox="0 0 200 200" class="my-4">
                            <!-- Parallel lines -->
                            <line x1="40" y1="80" x2="160" y2="80" stroke="black" stroke-width="2"/>
                            <line x1="40" y1="120" x2="160" y2="120" stroke="black" stroke-width="2"/>
                            
                            <!-- Transversal line -->
                            <line x1="60" y1="60" x2="140" y2="140" stroke="black" stroke-width="2"/>
                            
                            <!-- Angle labels -->
                            <text x="55" y="75" font-size="14" text-anchor="middle">a</text>
                            <text x="88" y="75" font-size="14" text-anchor="middle">b</text>
                            <text x="75" y="95" font-size="14" text-anchor="middle">b</text>
                            <text x="100" y="92" font-size="14" text-anchor="middle">a</text>
                            
                            <text x="95" y="115" font-size="14" text-anchor="middle">a</text>
                            <text x="123" y="115" font-size="14" text-anchor="middle">b</text>
                            <text x="115" y="135" font-size="14" text-anchor="middle">b</text>
                            <text x="142" y="133" font-size="14" text-anchor="middle">a</text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cheat-sheet-subsection {
    margin-bottom: 20px;
}
.cheat-sheet-subsection-header {
    @apply text-lg font-bold mb-2;
}
.cheat-sheet-subsection-content {
    @apply flex items-start gap-6 flex-wrap;
}
.cheat-sheet-concept-header {
    @apply text-sm font-semibold mb-1;
}
.cheat-sheet-concept-content {
    @apply text-sm;
}
.latex-formula {
    display: inline-block;
    vertical-align: middle;
    max-height: 16px;
    max-width: 16px;
    visibility: hidden;
    margin: 0;
    padding: 0;
}
.latex-formula[rendered='t'] {
    max-height: none;
    max-width: none;
    visibility: visible;
    margin-top: -8px;
    margin-bottom: -8px;
}

</style>