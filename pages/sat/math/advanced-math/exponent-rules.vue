<template>
    <h1 class="sat-guide-page-header">Exponent Rules</h1>
    <div class="section-description">
        Exponents are a way of expressing repeated multiplication. For example, 2³ means 2 × 2 × 2 = 8. Understanding the rules that govern exponents is crucial for simplifying expressions and solving equations on the SAT. These rules provide shortcuts for working with expressions that contain exponents.
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Product Rule
        </h2>
        <div class="sat-guide-section-content">
            <p>
                When multiplying expressions with the same base, add the exponents.
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mi>a</mi></msup><mo>·</mo><msup><mi>x</mi><mi>b</mi></msup><mo>=</mo><msup><mi>x</mi><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></msup>
                </math>
            </p>
            <p>
                Let's look at a few examples:
            </p>
            <p>
                <ul>
                    <li>
                        <math>
                            <msup><mi>2</mi><mn>3</mn></msup><mo>·</mo><msup><mi>2</mi><mn>4</mn></msup><mo>=</mo><msup><mi>2</mi><mrow><mn>3</mn><mo>+</mo><mn>4</mn></mrow></msup><mo>=</mo><msup><mi>2</mi><mn>7</mn></msup><mo>=</mo><mn>128</mn>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup><mi>x</mi><mn>5</mn></msup><mo>·</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mrow><mn>5</mn><mo>+</mo><mn>2</mn></mrow></msup><mo>=</mo><msup><mi>x</mi><mn>7</mn></msup>
                        </math>
                    </li>
                </ul>
            </p>
            <p>
                Note that the reverse is also true: if the exponent is the sum of two numbers (or constants or variables), we can rewrite the expression as a product of two powers.
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></msup><mo>=</mo><msup><mi>x</mi><mi>a</mi></msup><mo>·</mo><msup><mi>x</mi><mi>b</mi></msup>
                </math>
            </p>
            <p>
                Even for students who know the product rule, they often have more trouble applying it in this way.
            </p>
            <p>
                Let's look at an example:
            </p>
            <p>
                <math>
                    <msup>
                        <mn>2</mn>
                        <mrow>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>2</mn>
                        </mrow>
                    </msup>
                    <mo>=</mo>
                    <msup>
                        <mn>2</mn>
                        <mi>x</mi>
                    </msup>
                    <mo>·</mo>
                    <msup>
                        <mn>2</mn>
                        <mn>2</mn>
                    </msup>
                    <mo>=</mo>
                    <msup>
                        <mn>2</mn>
                        <mi>x</mi>
                    </msup>
                    <mo>·</mo>
                    <mn>4</mn>
                </math>
            </p>
            <p>
                The same concept applies if we are adding more than two things in the exponent:
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mo>+</mo><mi>c</mi></mrow></msup><mo>=</mo><msup><mi>x</mi><mi>a</mi></msup><mo>·</mo><msup><mi>x</mi><mi>b</mi></msup><mo>·</mo><msup><mi>x</mi><mi>c</mi></msup>
                </math>
            </p>
            
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Quotient Rule
        </h2>
        <div class="sat-guide-section-content">
            <p>
                When dividing expressions with the same base, subtract the exponents.
            </p>
            <p>
                <math>
                    <mfrac>
                        <msup><mi>x</mi><mi>a</mi></msup>
                        <msup><mi>x</mi><mi>b</mi></msup>
                    </mfrac>
                    <mo>=</mo>
                    <msup><mi>x</mi><mrow><mi>a</mi><mo>-</mo><mi>b</mi></mrow></msup>
                </math>
            </p>
            <p>
                Let's look at a few examples:
            </p>
            <p>
                <ul>
                    <li>
                        <math>
                            <mfrac>
                                <msup><mi>3</mi><mn>5</mn></msup>
                                <msup><mi>3</mi><mn>2</mn></msup>
                            </mfrac>
                            <mo>=</mo>
                            <msup><mi>3</mi><mrow><mn>5</mn><mo>-</mo><mn>2</mn></mrow></msup>
                            <mo>=</mo>
                            <msup><mi>3</mi><mn>3</mn></msup>
                            <mo>=</mo>
                            <mn>27</mn>
                        </math>
                    </li>
                    <li>
                        <math>
                            <mfrac>
                                <msup><mi>y</mi><mn>8</mn></msup>
                                <msup><mi>y</mi><mn>3</mn></msup>
                            </mfrac>
                            <mo>=</mo>
                            <msup><mi>y</mi><mrow><mn>8</mn><mo>-</mo><mn>3</mn></mrow></msup>
                            <mo>=</mo>
                            <msup><mi>y</mi><mn>5</mn></msup>
                        </math>
                    </li>
                    <li>
                        <math>
                            <mfrac>
                                <msup><mn>2</mn><mi>x</mi></msup>
                                <msup><mn>2</mn><mn>3</mn></msup>
                            </mfrac>
                            <mo>=</mo>
                            <msup><mn>2</mn><mrow><mi>x</mi><mo>-</mo><mn>3</mn></mrow></msup>
                        </math>
                    </li>
                </ul>
            </p>
            <p>
                Again, the same concept applies in reverse: if the exponent is the difference of two numbers (or constants or variables), we can rewrite the expression as a quotient of two powers.
            </p>
            <p>
                <math displaystyle="true">
                    <mrow>
                        <msup><mi>x</mi><mrow><mi>a</mi><mo>-</mo><mi>b</mi></mrow></msup>
                        <mo>=</mo>
                        <mfrac>
                            <msup><mi>x</mi><mi>a</mi></msup>
                            <msup><mi>x</mi><mi>b</mi></msup>
                        </mfrac>
                    </mrow>
                </math>
            </p>
            <p>
                So, for example:
            </p>
            <p>
                <math>
                    <msup><mn>3</mn><mrow><mi>x</mi><mo>-</mo><mn>2</mn></mrow></msup><mo>=</mo><mfrac><msup><mn>3</mn><mi>x</mi></msup><msup><mn>3</mn><mn>2</mn></msup></mfrac>
                    <mo>=</mo>
                    <mfrac>
                        <msup><mn>3</mn><mi>x</mi></msup>
                        <mn>9</mn>
                    </mfrac>
                </math>
            </p>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Power Rule
        </h2>
        <div class="sat-guide-section-content">
            <p>
                When raising an exponential expression to another power, multiply the exponents.
            </p>
            <p>
                <math>
                    <msup>
                        <mrow>
                            <mo>(</mo>
                            <msup><mi>x</mi><mi>a</mi></msup>
                            <mo>)</mo>
                        </mrow>
                        <mi>b</mi>
                    </msup>
                    <mo>=</mo>
                    <msup><mi>x</mi><mrow><mi>a</mi><mo>·</mo><mi>b</mi></mrow></msup>
                </math>
            </p>
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
                                    <msup><mi>2</mi><mn>3</mn></msup>
                                    <mo>)</mo>
                                </mrow>
                                <mn>2</mn>
                            </msup>
                            <mo>=</mo>
                            <msup><mi>2</mi><mrow><mn>3</mn><mo>·</mo><mn>2</mn></mrow></msup>
                            <mo>=</mo>
                            <msup><mi>2</mi><mn>6</mn></msup>
                            <mo>=</mo>
                            <mn>64</mn>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup>
                                <mrow>
                                    <mo>(</mo>
                                    <msup><mi>x</mi><mn>4</mn></msup>
                                    <mo>)</mo>
                                </mrow>
                                <mn>3</mn>
                            </msup>
                            <mo>=</mo>
                            <msup><mi>x</mi><mrow><mn>4</mn><mo>·</mo><mn>3</mn></mrow></msup>
                            <mo>=</mo>
                            <msup><mi>x</mi><mn>12</mn></msup>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup>
                                <mrow>
                                    <mo>(</mo>
                                    <msup><mn>2</mn><mi>x</mi></msup>
                                    <mo>)</mo>
                                </mrow>
                                <mn>3</mn>
                            </msup>
                            <mo>=</mo>
                            <msup><mn>2</mn><mrow><mi>x</mi><mo>·</mo><mn>3</mn></mrow></msup>
                            <mo>=</mo>
                            <msup><mn>2</mn><mrow><mn>3</mn><mi>x</mi></mrow></msup>
                        </math>
                    </li>
                </ul>
            </p>
            <p>
                And, again, the same concept applies in reverse: if the exponent is the product of two numbers (or constants or variables), we can rewrite the expression as a power of a power.
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mrow><mi>a</mi><mo>·</mo><mi>b</mi></mrow></msup><mo>=</mo><msup><mrow><mo>(</mo><msup><mi>x</mi><mi>a</mi></msup><mo>)</mo></mrow><mi>b</mi></msup>
                </math>
            </p>
            <p>
                And, because of the commutative property of multiplication (<math><mi>a</mi><mo>·</mo><mi>b</mi><mo>=</mo><mi>b</mi><mo>·</mo><mi>a</mi></math>), it doesn't matter which exponent we raise first.
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mrow><mi>a</mi><mo>·</mo><mi>b</mi></mrow></msup><mo>=</mo><msup><mrow><mo>(</mo><msup><mi>x</mi><mi>a</mi></msup><mo>)</mo></mrow><mi>b</mi></msup>
                    <mo>=</mo><msup><mrow><mo>(</mo><msup><mi>x</mi><mi>b</mi></msup><mo>)</mo></mrow><mi>a</mi></msup>
                </math>
            </p>
            <p>
                Let's look at some more examples:
            </p>
            
            <p>
                <ul>
                    <li>
                        <math>
                            <msup><mn>2</mn><mrow><mi>x</mi><mo>·</mo><mn>3</mn></mrow></msup>
                            <mo>=</mo>
                            <msup><mn>2</mn><mrow><mn>3</mn><mo>·</mo><mi>x</mi></mrow></msup>
                            <mo>=</mo>
                            <msup><mrow><mo>(</mo><msup><mn>2</mn><mn>3</mn></msup><mo>)</mo></mrow><mi>x</mi></msup>
                            <mo>=</mo>
                            <msup><mn>8</mn><mi>x</mi></msup>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup><mn>27</mn><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>·</mo><mi>x</mi></mrow></msup>
                            <mo>=</mo>
                            <msup><mrow><mo>(</mo><msup><mn>27</mn><mfrac><mn>1</mn><mn>3</mn></mfrac></msup><mo>)</mo></mrow><mi>x</mi></msup>
                            <mo>=</mo>
                            <msup><mrow><mo>(</mo><mroot><mn>27</mn><mn>3</mn></mroot><mo>)</mo></mrow><mi>x</mi></msup>
                            <mo>=</mo>
                            <msup><mn>3</mn><mi>x</mi></msup>
                        </math>
                        <ul>
                            <li>
                                This example shows how we can rewrite (27^x)^(1/3) as (27^(1/3))^x using the power rule. Since 27^(1/3) = ∛27 = 3, we get 3^x as our final answer.
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Power of a Product Rule
        </h2>
        <div class="sat-guide-section-content">
            <p>
                When raising a product to a power, distribute the exponent to each factor.
            </p>
            <p>
                <math>
                    <msup>
                        <mrow>
                            <mo>(</mo>
                            <mi>x</mi>
                            <mo>·</mo>
                            <mi>y</mi>
                            <mo>)</mo>
                        </mrow>
                        <mi>a</mi>
                    </msup>
                    <mo>=</mo>
                    <msup><mi>x</mi><mi>a</mi></msup>
                    <mo>·</mo>
                    <msup><mi>y</mi><mi>a</mi></msup>
                </math>
            </p>
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
                                    <mn>2</mn>
                                    <mo>·</mo>
                                    <mn>3</mn>
                                    <mo>)</mo>
                                </mrow>
                                <mn>4</mn>
                            </msup>
                            <mo>=</mo>
                            <msup><mn>2</mn><mn>4</mn></msup>
                            <mo>·</mo>
                            <msup><mn>3</mn><mn>4</mn></msup>
                            <mo>=</mo>
                            <mn>16</mn>
                            <mo>·</mo>
                            <mn>81</mn>
                            <mo>=</mo>
                            <mn>1296</mn>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup>
                                <mrow>
                                    <mo>(</mo>
                                    <mi>x</mi>
                                    <mo>·</mo>
                                    <mi>y</mi>
                                    <mo>)</mo>
                                </mrow>
                                <mn>3</mn>
                            </msup>
                            <mo>=</mo>
                            <msup><mi>x</mi><mn>3</mn></msup>
                            <mo>·</mo>
                            <msup><mi>y</mi><mn>3</mn></msup>
                        </math>
                    </li>
                </ul>
            </p>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Power of a Quotient Rule
        </h2>
        <div class="sat-guide-section-content">
            <p>
                When raising a quotient to a power, distribute the exponent to both the numerator and denominator.
            </p>
            <p>
                <math>
                    <msup>
                        <mrow>
                            <mo>(</mo>
                            <mfrac>
                                <mi>x</mi>
                                <mi>y</mi>
                            </mfrac>
                            <mo>)</mo>
                        </mrow>
                        <mi>a</mi>
                    </msup>
                    <mo>=</mo>
                    <mfrac>
                        <msup><mi>x</mi><mi>a</mi></msup>
                        <msup><mi>y</mi><mi>a</mi></msup>
                    </mfrac>
                </math>
            </p>
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
                                    <mfrac>
                                        <mn>2</mn>
                                        <mn>3</mn>
                                    </mfrac>
                                    <mo>)</mo>
                                </mrow>
                                <mn>3</mn>
                            </msup>
                            <mo>=</mo>
                            <mfrac>
                                <msup><mn>2</mn><mn>3</mn></msup>
                                <msup><mn>3</mn><mn>3</mn></msup>
                            </mfrac>
                            <mo>=</mo>
                            <mfrac>
                                <mn>8</mn>
                                <mn>27</mn>
                            </mfrac>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup>
                                <mrow>
                                    <mo>(</mo>
                                    <mfrac>
                                        <mi>x</mi>
                                        <mi>y</mi>
                                    </mfrac>
                                    <mo>)</mo>
                                </mrow>
                                <mn>4</mn>
                            </msup>
                            <mo>=</mo>
                            <mfrac>
                                <msup><mi>x</mi><mn>4</mn></msup>
                                <msup><mi>y</mi><mn>4</mn></msup>
                            </mfrac>
                        </math>
                    </li>
                </ul>
            </p>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Don't Distribute the Exponent for Additive Expressions
        </h2>
        <div class="sat-guide-section-content">
            <p>
                When you have an expression like <math><mi>a</mi><mo>+</mo><mi>b</mi></math>, you cannot distribute the exponent to each term.
            </p>
            <p>
                <math>
                    <msup><mrow><mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo></mrow><mi>c</mi></msup><mo>≠</mo><msup><mi>a</mi><mi>c</mi></msup><mo>+</mo><msup><mi>b</mi><mi>c</mi></msup>
                </math>
            </p>
            <p>
                For example, take the expression <math><msup><mrow><mo>(</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup></math>.
            </p>
            <p>
                The proper way to simplify this expression is to first add the terms inside the parentheses, then raise the result to the power:
            </p>
            <p>
                <math>
                    <msup><mrow><mo>(</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mn>5</mn><mn>2</mn></msup><mo>=</mo><mn>25</mn>
                </math>
            </p>
            <p>
                If we were to distribute the exponent, we would get a different result, which is incorrect:
            </p>
            <p>
                <math>
                    <msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><msup><mn>3</mn><mn>2</mn></msup><mo>=</mo><mn>4</mn><mo>+</mo><mn>9</mn><mo>=</mo><mn>13</mn>
                </math>
            </p>
            <p>
                Since 25 ≠ 13, we can see that <math><msup><mrow><mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo></mrow><mi>c</mi></msup><mo>≠</mo><msup><mi>a</mi><mi>c</mi></msup><mo>+</mo><msup><mi>b</mi><mi>c</mi></msup></math>
            </p>
            <p>
                Rules that apply to addition generally also apply to subtraction, so the same rule applies to expressions like <math><mi>a</mi><mo>-</mo><mi>b</mi></math>:
            </p>
            <p>
                <math>
                    <msup><mrow><mo>(</mo><mi>a</mi><mo>-</mo><mi>b</mi><mo>)</mo></mrow><mi>c</mi></msup><mo>≠</mo><msup><mi>a</mi><mi>c</mi></msup><mo>-</mo><msup><mi>b</mi><mi>c</mi></msup>
                </math>
            </p>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Zero Exponent Rule
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Any non-zero number raised to the power of 0 equals 1.
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mn>0</mn></msup><mo>=</mo><mn>1</mn>
                </math>
                (where x ≠ 0)
            </p>
            <p>
                Let's look at a few examples:
            </p>
            <p>
                <ul>
                    <li>
                        <math>
                            <msup><mn>7</mn><mn>0</mn></msup><mo>=</mo><mn>1</mn>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup><mn>1</mn><mn>0</mn></msup><mo>=</mo><mn>1</mn>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup><mrow><mo>(</mo><mo>-</mo><mn>3</mn><mo>)</mo></mrow><mn>0</mn></msup><mo>=</mo><mn>1</mn>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup><mn>0</mn><mn>0</mn></msup><mo>=</mo><mi>undefined</mi>
                        </math>
                        <ul>
                            <li>
                                Or some times it is defined as 1, depending on the context.
                            </li>
                            <li>
                                Don't worry about this edge case on the SAT.
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Negative Exponent Rule
        </h2>
        <div class="sat-guide-section-content">
            <p>
                When you see a negative exponent, make the exponent positive and move the base and its exponent to the opposite side of the fraction.
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mrow><mo>-</mo><mi>a</mi></mrow></msup><mo>=</mo><mfrac><mn>1</mn><msup><mi>x</mi><mi>a</mi></msup></mfrac>
                </math>
            </p>
            <p>
                <math>
                    <mfrac><mn>1</mn><msup><mi>x</mi><mrow><mo>-</mo><mi>a</mi></mrow></msup></mfrac><mo>=</mo><msup><mi>x</mi><mrow><mi>a</mi></mrow></msup>
                </math>
            </p>
            <p>
                Let's look at a few examples:
            </p>
            <p>
                <ul>
                    <li>
                        <math>
                            <msup><mn>2</mn><mrow><mo>-</mo><mn>3</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup><mi>x</mi><mrow><mo>-</mo><mn>4</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>4</mn></msup></mfrac>
                        </math>
                    </li>
                    <li>
                        <math>
                            <mn>2</mn><msup><mi>x</mi><mrow><mo>-</mo><mn>3</mn></mrow></msup><mo>=</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup></mfrac>
                        </math>
                    </li>
                    <li>
                        <math>
                            <mfrac>
                                <mn>5</mn>
                                <mrow><mn>3</mn><msup><mi>x</mi><mrow><mo>-</mo><mn>2</mn></mrow></msup></mrow>
                            </mfrac>
                            <mo>=</mo>
                            <mfrac>
                                <mrow><mn>5</mn><msup><mi>x</mi><mn>2</mn></msup></mrow>
                                <mn>3</mn>
                            </mfrac>
                        </math>
                    </li>
                </ul>
            </p>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    What You Can't Do
                </h3>
                <p>
                    It's important to note that if the exponential expression is being added or subtracted in the numberator or denominator, you cannot just move the exponent to the other side of the fraction.
                </p>
                <p>
                    For example:
                </p>

                <p>
                    <math>
                        <mfrac>
                            <mrow><mn>2</mn><mo>+</mo><msup><mi>x</mi><mrow><mo>-</mo><mn>3</mn></mrow></msup></mrow>
                            <mn>5</mn>
                        </mfrac>
                        <mo>≠</mo>
                        <mfrac><mn>2</mn><mrow><mn>5</mn><msup><mi>x</mi><mn>3</mn></msup></mrow></mfrac>
                    </math>
                    and
                    <math>
                        <mfrac>
                            <mrow><mn>2</mn><mo>+</mo><msup><mi>x</mi><mrow><mo>-</mo><mn>3</mn></mrow></msup></mrow>
                            <mn>5</mn>
                        </mfrac>
                        <mo>≠</mo>
                        <mfrac>
                            <mn>2</mn>
                            <mrow><mn>5</mn><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup></mrow>
                        </mfrac>
                    </math>
                </p>
                <p>
                    The correct way to simplify this expression would be:
                </p>
                <p>
                    <math>
                        <mfrac>
                            <mrow><mn>2</mn><mo>+</mo><msup><mi>x</mi><mrow><mo>-</mo><mn>3</mn></mrow></msup></mrow>
                            <mn>5</mn>
                        </mfrac>
                        <mo>=</mo>
                        <mfrac><mn>2</mn><mn>5</mn></mfrac>
                        <mo>+</mo>
                        <mfrac><msup><mi>x</mi><mrow><mo>-</mo><mn>3</mn></mrow></msup><mn>5</mn></mfrac>
                        <mo>=</mo>
                        <mfrac><mn>2</mn><mn>5</mn></mfrac>
                        <mo>+</mo>
                        <mfrac><mn>1</mn><mrow><mn>5</mn><msup><mi>x</mi><mn>3</mn></msup></mrow></mfrac>
                    </math>
                </p>
            </div>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Fractional Exponents = Radicals
        </h2>
        <div class="sat-guide-section-content">
            <p>
                A fractional exponent can be rewritten as a radical expression. The denominator of the fraction represents the root of the radical, and the numerator represents the power that the base is raised to.
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mfrac><mi>a</mi><mi>b</mi></mfrac></msup><mo>=</mo><mroot><msup><mi>x</mi><mi>a</mi></msup><mi>b</mi></mroot>
                </math>
            </p>
            <p>
                Instead of having the exponent inside the radical like above, we can also rewrite it so that the entire radical is raised to the power of the numerator instead:
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mfrac><mi>a</mi><mi>b</mi></mfrac></msup><mo>=</mo><msup><mrow><mo>(</mo><mroot><mi>x</mi><mi>b</mi></mroot><mo>)</mo></mrow><mi>a</mi></msup>
                </math>
            </p>
            <p>
                To see why we can rewrite it either way, let's apply the power rule. 
            </p>
            <p>
                Using the power rule, we can rewrite the expression as:
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mfrac><mi>a</mi><mi>b</mi></mfrac></msup><mo>=</mo><msup><mrow><mo>(</mo><msup><mi>x</mi><mfrac><mn>1</mn><mi>b</mi></mfrac></msup><mo>)</mo></mrow><mi>a</mi></msup><mo>=</mo><msup><mrow><mo>(</mo><mroot><mi>x</mi><mi>b</mi></mroot><mo>)</mo></mrow><mi>a</mi></msup>

                </math>
            </p>
            <p>
                Or, we can also rewrite it as:
            </p>
            <p>
                <math>
                    <msup><mi>x</mi><mfrac><mi>a</mi><mi>b</mi></mfrac></msup><mo>=</mo><msup><mrow><mo>(</mo><msup><mi>x</mi><mi>a</mi></msup><mo>)</mo></mrow><mfrac><mn>1</mn><mi>b</mi></mfrac></msup><mo>=</mo><mroot><msup><mi>x</mi><mi>a</mi></msup><mi>b</mi></mroot>

                </math>
            </p>
            <p>
                Let's look at a few examples:
            </p>
            <p>
                <ul>
                    <li>
                        <math>
                            <msup><mn>8</mn><mfrac><mn>2</mn><mn>3</mn></mfrac></msup><mo>=</mo><msup><mrow><mo>(</mo><mroot><mn>8</mn><mn>3</mn></mroot><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo>=</mo><mn>4</mn>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup><mn>16</mn><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><mo>=</mo><msqrt><mn>16</mn></msqrt><mo>=</mo><mn>4</mn>
                        </math>
                    </li>
                    <li>
                        <math>
                            <msup><mrow><mo>(</mo><msup><mn>27</mn><mi>x</mi></msup><mo>)</mo></mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></msup>
                            <mo>=</mo>
                            <msup><mrow><mo>(</mo><msup><mn>27</mn><mfrac><mn>1</mn><mn>3</mn></mfrac></msup><mo>)</mo></mrow><mi>x</mi></msup>
                            <mo>=</mo>
                            <msup><mrow><mo>(</mo><mroot><mn>27</mn><mn>3</mn></mroot><mo>)</mo></mrow><mi>x</mi></msup>
                            <mo>=</mo>
                            <msup><mn>3</mn><mi>x</mi></msup>
                        </math>
                        <ul>
                            <li>
                                This example uses a combination of the power rule and the fractional exponent rule to simplify the expression.
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
        </div>
    </div>
</template>

<script setup>
// No charts or complex functionality needed for initial version
</script>

<style scoped>
/* You can add any specific styling here if needed */
</style>
