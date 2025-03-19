<template>
    <h1 class="sat-guide-page-header">Higher-Order Polynomials</h1>
    <div class="section-description">
        While quadratic functions (polynomials of degree 2) are the most common type of polynomial on the SAT, you may occasionally encounter higher-order polynomials. You aren't going to need to know sophisticated techniques for solving higher-order polynomials, like the equivalent of the quadratic formula, but it's important to understand some basic concepts about how they behave, and how to tackle problems involving them that do appear on the test.
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            What is the Degree of a Polynomial?
        </h2>
        <div class="sat-guide-section-content">
            <p>
                The degree of a polynomial is the highest power of the variable in the polynomial. For example:
            </p>
            <ul>
                <li>
                    <math>
                        <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>5</mn>
                    </math>
                    is a polynomial of degree 1 (also called a linear function).
                </li>
                <li>
                    <math>
                        <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>3</mn>
                    </math>
                    is a polynomial of degree 2 (also called a quadratic function).
                </li>
                <li>
                    <math>
                        <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>-</mo><mn>5</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>8</mn>
                    </math>
                    is a polynomial of degree 3 (also called a cubic function).
                </li>
                <li>
                    <math>
                        <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>8</mn><mo>)</mo>
                    </math>
                    is a polynomial of degree 3
                    <ul>
                        <li>
                            If you multiplied this out, the highest term would be <math><msup><mi>x</mi><mn>3</mn></msup></math>
                        </li>
                    </ul>
                </li>
                <li>
                    <math>
                        <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>(</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>7</mn><mo>)</mo>
                    </math>
                    is a polynomial of degree 4
                    <ul>
                        <li>
                            If you multiplied this out, the highest term would be <math><msup><mi>x</mi><mn>4</mn></msup></math>
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                Since we have already address linear and quadratic functions in detail, on this page we'll focus on polynomials of degree 3 and higher.
            </p>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Higher-Order Polynomials vs. Quadratics
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Quadratic functions (degree 2) have several well-known properties that make them easier to work with:
            </p>
            <ul>
                <li>Their graphs are parabolas, which have a single vertex (maximum or minimum point)</li>
                <li>They can have at most 2 real roots (x-intercepts)</li>
                <li>There are simple formulas for finding their roots (the quadratic formula)</li>
                <li>They are symmetric about their axis of symmetry</li>
            </ul>
            <p>
                Higher-order polynomials differ from quadratics in several key ways:
            </p>
            <ol class="ol-bold-numbers">
                <li>
                    <div class="font-bold">Number of Turning Points</div>
                    <p>
                        A polynomial of degree n can have at most (n-1) turning points (places where the graph changes from increasing to decreasing or vice versa). For example:
                    </p>
                    <ul>
                        <li>Quadratics (degree 2) have at most 1 turning point</li>
                        <li>Cubics (degree 3) have at most 2 turning points</li>
                        <li>Quartics (degree 4) have at most 3 turning points</li>
                    </ul>
                </li>
                <li>
                    <div class="font-bold">Number of Roots</div>
                    <p>
                        A polynomial of degree n can have at most n real roots (x-intercepts). For example:
                    </p>
                    <ul>
                        <li>Quadratics (degree 2) have at most 2 real roots</li>
                        <li>Cubics (degree 3) have at most 3 real roots</li>
                        <li>Quartics (degree 4) have at most 4 real roots</li>
                    </ul>
                </li>
                <li>
                    <div class="font-bold">End Behavior</div>
                    <p>
                        The end behavior describes what happens to the values of f(x) as x approaches positive or negative infinity.
                    </p>
                    <ul>
                        <li>For even-degree polynomials with a positive leading coefficient, both ends of the graph point upward</li>
                        <li>For even-degree polynomials with a negative leading coefficient, both ends point downward</li>
                        <li>For odd-degree polynomials with a positive leading coefficient, the left end points downward and the right end points upward</li>
                        <li>For odd-degree polynomials with a negative leading coefficient, the left end points upward and the right end points downward</li>
                    </ul>
                </li>
            </ol>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Higher-Order Polynomials on the SAT
        </h2>
        <div class="sat-guide-section-content">
            <p>
                The good news is that higher-order polynomials appear infrequently on the SAT. When they do appear, they are typically presented in factored form or can be easily factored. The SAT generally won't expect you to solve complex higher-order polynomial equations.
            </p>
            <p>
                Here's what you might need to know about higher-order polynomials for the SAT:
            </p>
            <ul>
                <li>
                    How to factor some easily factorable higher-order polynomials
                </li>
                <li>
                    How to find x-intercepts when a polynomial is given in factored form
                </li>
                <li>
                    How to match a factored polynomial to its graph
                </li>
                <li>
                    How to determine the end behavior of a polynomial
                </li>
            </ul>
            <p>
                You're unlikely to be asked to:
            </p>
            <ul>
                <li>Find all the roots of a higher-order polynomial in standard form</li>
                <li>Factor a complex higher-order polynomial</li>
                <li>Use advanced methods like synthetic division</li>
            </ul>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Factoring Higher-Order Polynomials
        </h2>
        <div class="sat-guide-section-content">
            <p>
                When you encounter higher-order polynomials on the SAT, they're often given in a form that allows for relatively straightforward factoring. One common approach is to look for common factors that can be pulled out from all terms.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Factoring Out Common Terms
                </h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        The first step when factoring any polynomial should be to check if there's a common factor in all terms. If there is, factor it out first.
                    </p>
                    <p>
                        For example, consider the polynomial:
                    </p>
                    <p>
                        <math>
                            <mi>P</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mn>12</mn><msup><mi>x</mi><mn>3</mn></msup><mo>-</mo><mn>40</mn><msup><mi>x</mi><mn>2</mn></msup>
                        </math>
                    </p>
                    <p>
                        Looking at each term:
                    </p>
                    <ul>
                        <li>First term: <math><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup></math></li>
                        <li>Second term: <math><mn>12</mn><msup><mi>x</mi><mn>3</mn></msup></math></li>
                        <li>Third term: <math><mn>-40</mn><msup><mi>x</mi><mn>2</mn></msup></math></li>
                    </ul>
                    <p>
                        We can see that <math><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup></math> is a common factor:
                    </p>
                    <ul>
                        <li><math><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>·</mo><msup><mi>x</mi><mn>2</mn></msup></math></li>
                        <li><math><mn>12</mn><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>·</mo><mn>3</mn><mi>x</mi></math></li>
                        <li><math><mn>-40</mn><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>·</mo><mo>(</mo><mn>-10</mn><mo>)</mo></math></li>
                    </ul>
                    <p>
                        So we can factor the polynomial as:
                    </p>
                    <p>
                        <math>
                            <mi>P</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>10</mn><mo>)</mo>
                        </math>
                    </p>
                    <p>
                        Notice that the degree of the polynomial is still 4 (the highest power of x), but we've simplified it by factoring out the common term.
                    </p>
                    <p>
                        We could factor this further by factoring the quadratic expression inside the parentheses:
                    </p>
                    <p>
                        <math>
                            <mi>P</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>(</mo><mi>x</mi><mo>+</mo><mn>5</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo>
                        </math>
                    </p>
                    <p>
                        After factoring, we can now easily identify that this polynomial has roots at x = 0 (with multiplicity 2), x = -5, and x = 2.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Factoring Higher-Degree Terms
                </h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Sometimes you might encounter polynomials where you can factor out a higher-degree term. For example:
                    </p>
                    <p>
                        <math>
                            <mi>Q</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>5</mn></msup><mo>-</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup>
                        </math>
                    </p>
                    <p>
                        Here, we can factor out <math><msup><mi>x</mi><mn>3</mn></msup></math>:
                    </p>
                    <p>
                        <math>
                            <mi>Q</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo>
                        </math>
                    </p>
                    <p>
                        This tells us that Q(x) has roots at x = 0 (with multiplicity 3), x = -2, and x = 2.
                    </p>
                    <p>
                        The SAT may present polynomials in either factored form or standard form. If they're in standard form, look for common factors first, then try to factor any remaining quadratic expressions using the techniques you've already learned.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Polynomials with Non-Factorable Quadratics
                </h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Sometimes, after factoring out common terms, you might be left with a quadratic expression that cannot be easily factored. In such cases, you can use the quadratic formula to find the roots.
                    </p>
                    <p>
                        Consider this example:
                    </p>
                    <p>
                        <math>
                            <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>16</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>x</mi>
                        </math>
                    </p>
                    <p>
                        First, let's check if we can factor out a common term:
                    </p>
                    <p>
                        Looking at each term:
                    </p>
                    <ul>
                        <li>First term: <math><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup></math></li>
                        <li>Second term: <math><mn>16</mn><msup><mi>x</mi><mn>2</mn></msup></math></li>
                        <li>Third term: <math><mn>8</mn><mi>x</mi></math></li>
                    </ul>
                    <p>
                        We can see that <math><mn>4</mn><mi>x</mi></math> is a common factor:
                    </p>
                    <p>
                        <math>
                            <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>4</mn><mi>x</mi><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo>
                        </math>
                    </p>
                    <p>
                        Now we have a cubic polynomial factored as a common term multiplied by a quadratic expression. We immediately see that x = 0 is a root of the original polynomial (from the factor 4x).
                    </p>
                    <p>
                        The quadratic expression <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn></math> cannot be factored using rational coefficients. Let's verify this by checking if it has rational roots.
                    </p>
                    <p>
                        Using the quadratic formula for <math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>=</mo><mn>0</mn></math>:
                    </p>
                    <p>
                        <math>
                            <mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>b</mi><mo>±</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></mrow></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>-</mo><mn>4</mn><mo>±</mo><msqrt><mrow><mn>16</mn><mo>-</mo><mn>4</mn><mo>·</mo><mn>1</mn><mo>·</mo><mn>2</mn></mrow></msqrt></mrow><mrow><mn>2</mn><mo>·</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>-</mo><mn>4</mn><mo>±</mo><msqrt><mn>8</mn></msqrt></mrow><mrow><mn>2</mn></mrow></mfrac>
                        </math>
                    </p>
                    <p>
                        <math>
                            <mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mn>4</mn><mo>±</mo><mn>2</mn><msqrt><mn>2</mn></msqrt></mrow><mrow><mn>2</mn></mrow></mfrac><mo>=</mo><mo>-</mo><mn>2</mn><mo>±</mo><msqrt><mn>2</mn></msqrt>
                        </math>
                    </p>
                    <p>
                        So the roots of the quadratic factor are <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>2</mn><mo>+</mo><msqrt><mn>2</mn></msqrt></math> and <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>2</mn><mo>-</mo><msqrt><mn>2</mn></msqrt></math>, which are irrational numbers (approximately -0.586 and -3.414).
                    </p>
                    <p>
                        Therefore, the polynomial f(x) has three real roots:
                    </p>
                    <ul>
                        <li><math><mi>x</mi><mo>=</mo><mn>0</mn></math> (from the factor 4x)</li>
                        <li><math><mi>x</mi><mo>=</mo><mo>-</mo><mn>2</mn><mo>+</mo><msqrt><mn>2</mn></msqrt></math> (approximately -0.586)</li>
                        <li><math><mi>x</mi><mo>=</mo><mo>-</mo><mn>2</mn><mo>-</mo><msqrt><mn>2</mn></msqrt></math> (approximately -3.414)</li>
                    </ul>
                    <p>
                        This example demonstrates how a higher-order polynomial can be partially factored by identifying common terms, and then the quadratic formula can be used to find the remaining roots if the remaining quadratic cannot be factored easily.
                    </p>
                   
                </div>
            </div>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Understanding Polynomial Graphs from Factored Form
        </h2>
        <div class="sat-guide-section-content">
            <p>
                One of the most important skills for working with higher-order polynomials on the SAT is being able to connect a factored polynomial with its graph. The factored form gives us clear information about the roots and behavior of the polynomial near those roots.
            </p>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Factors and Roots/Intercepts
                </h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        If a polynomial is written in factored form, you can easily identify its roots. 
                    </p>
                    <p>
                        Factored form just means that the whole function is written as a product of two or more expressions.
                    </p>
                    <p>
                        Due to the Zero Product Property, if any one of these expressions equals zero, the whole function equals zero. 
                    </p>
                    <p>
                        Thus, any value of x that makes any one of these expressions equal to zero is a root of the function.
                    </p>
                    <p>
                        For example, if we have the polynomial:
                    </p>
                    <p>
                        <math>
                            <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><mi>x</mi><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo>
                        </math>
                    </p>
                    <p>
                        The roots of this polynomial are x = 0, x = 2, x = -1, and x = 3, because each of these values makes one of the factors equal to zero.
                    </p>
                </div>
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Even vs. Odd Multiplicity
                </h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        The behavior of a polynomial graph at each root (x-intercept) depends on whether the multiplicity of the root is even or odd.
                    </p>
                    <p>
                        The multiplicity of a root is the power that the corresponding factor is raised to.
                    </p>
                    <ul>
                        <li>
                            <div class="font-bold">Odd Multiplicity</div>
                            <ul>
                                <li>
                                    If a factor has an odd power, the graph passes through the x-axis at that root. The graph crosses from one side of the x-axis to the other.
                                </li>
                                <li>
                                    For example, in the function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow><mn>3</mn></msup><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></math>:
                                    <ul>
                                        <li>
                                            We have odd roots at:
                                            <ul>
                                                <li>
                                                    x = -1 with multiplicity 3
                                                </li>
                                                <li>
                                                    x = 4 with multiplicity 1
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Thus, at -1 and 4, the graph crosses the x-axis.
                                        </li>
                                        <li>
                                            We an even root at x = 2 with multiplicity 2 (we'll talk about even roots next)
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold">Even Multiplicity</div>
                            <ul>
                                <li>
                                    If a factor has an even power, the graph touches the x-axis at that root but doesn't cross it. The graph "bounces" off the x-axis and stays on the same side.
                                </li>
                                <li>
                                    For example, in the function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mn>4</mn></msup></math>:
                                    <ul>
                                        <li>
                                            We have even roots at:
                                            <ul>
                                                <li>
                                                    x = 2 with multiplicity 2
                                                </li>
                                                <li>
                                                    x = 4 with multiplicity 4
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Thus, at 2 and 4, the graph touches the x-axis and turns around, so that it doesn't cross the x-axis.
                                        </li>
                                        <li>
                                            We have an odd root at x = -1, so the graph crosses the x-axis here.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </li>
                    </ul>
                    <p>
                        Let's look at an example to illustrate this:
                    </p>
                    <p>
                        Consider the polynomial:
                        <math>
                            <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo><msup><mrow><mo>(</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>3</mn></msup>
                        </math>
                    </p>
                    <p>
                        This polynomial has three distinct roots:
                    </p>
                    <ul>
                        <li>x = -1 (multiplicity 1, odd)</li>
                        <li>x = 0.5 (multiplicity 2, even)</li>
                        <li>x = 2 (multiplicity 3, odd)</li>
                    </ul>
                    <p>
                        The graph of this polynomial would look something like this:
                    </p>
                    <div class="chart-container" style="padding-top: 20px;">
                        <canvas ref="polynomialChart" width="250" height="250" style="width: 250px; height: 250px;"></canvas>
                    </div>
                    <p style="margin-top: 20px;">
                        Notice how the graph behaves differently at each root:
                    </p>
                    <ul>
                        <li>At x = -1, the graph crosses through the x-axis (odd multiplicity)</li>
                        <li>At x = 0.5, the graph touches the x-axis but doesn't cross it (even multiplicity)</li>
                        <li>At x = 2, the graph crosses through the x-axis (odd multiplicity)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const polynomialChart = ref(null);

// Function to calculate polynomial value: f(x) = (x+1)(2x-1)²(x-2)³
function polynomialFunction(x) {
    return (x + 1) * Math.pow(2 * x - 1, 2) * Math.pow(x - 2, 3);
}

// Function to create the polynomial chart
function createPolynomialChart() {
    if (!polynomialChart.value) return;

    // Generate data points
    const data = [];
    for (let x = -2; x <= 3; x += 0.05) {
        const y = polynomialFunction(x);
        // Limit extreme values for better visualization
        if (y > 40) continue; 
        if (y < -35) continue;
        data.push({ x, y });
    }

    // Create chart
    new Chart(polynomialChart.value, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'f(x) = (x+1)(2x-1)²(x-2)³',
                data: data,
                showLine: true,
                borderColor: 'blue',
                backgroundColor: 'transparent',
                pointRadius: 0,
                tension: 0.4
            },
            // Add points to highlight the roots
            {
                label: 'Roots',
                data: [
                    { x: -1, y: 0 },  // Odd multiplicity
                    { x: 0.5, y: 0 }, // Even multiplicity
                    { x: 2, y: 0 }    // Odd multiplicity
                ],
                showLine: false,
                pointRadius: 5,
                pointBackgroundColor: 'red',
                pointBorderColor: 'red'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    min: -2,
                    max: 3,
                    border: {
                        display: false,
                    },
                    ticks: {
                        stepSize: 1,
                        autoSkip: false,
                        drawTicks: false
                    },
                    grid: {
                        stepSize: 1,
                        autoSkip: false,
                        color: (context) => context.tick.value === 0 ? '#000' : '#ddd',
                        lineWidth: (context) => context.tick.value === 0 ? 2 : 1,
                    }
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    min: -40,
                    max: 10, 
                    border: {
                        display: false
                    },
                    ticks: {
                        stepSize: 10,
                        autoSkip: false,
                        drawTicks: false
                    },
                    grid: {
                        stepSize: 10,
                        color: (context) => context.tick.value === 0 ? '#000' : '#ddd',
                        lineWidth: (context) => context.tick.value === 0 ? 2 : 1,
                        autoSkip: false,
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const point = context.dataset.data[context.dataIndex];
                            if (context.dataset.label === 'Roots') {
                                if (point.x === -1) {
                                    return 'x = -1 (odd multiplicity, crosses x-axis)';
                                } else if (point.x === 0.5) {
                                    return 'x = 0.5 (even multiplicity, touches x-axis)';
                                } else {
                                    return 'x = 2 (odd multiplicity, crosses x-axis)';
                                }
                            }
                            return `(${point.x.toFixed(2)}, ${point.y.toFixed(2)})`;
                        }
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    });
}

onMounted(() => {
    createPolynomialChart();
});
</script>

<style scoped>
.chart-container {
    
}

/* Style for ordered list numbers to make them bold */
ol li::marker {
    font-weight: bold;
}

/* Add styles for the math layout */
math {
    font-size: 1.1em;
}
</style>

