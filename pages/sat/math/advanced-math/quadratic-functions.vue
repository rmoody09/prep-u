<template>
    <h1 class="sat-guide-page-header">Quadratic Functions/Parabolas</h1>
    <div class="section-description">
        Quadratic functions are equations where the independent variable (usually x) is squared. A typical example of a quadratic equation is 
        <math>
            <mi>y</mi>
            <mo>=</mo>
            <msup><mi>x</mi><mn>2</mn></msup>
            <mo>+</mo>
            <mi>b</mi>
            <mi>x</mi>
            <mo>+</mo>
            <mi>c</mi>
        </math>
        , although the exact form can differ. The graph of a quadratic function is a parabola, which is a U-shaped curve that opens either up or down. One important thing to note is that x should be the only variable squared - if you see an x<sup>2</sup> and a y<sup>2</sup> in the same equation, you're looking at an equation for a circle, not a parabola.
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Parabolas
        </h2>
        <div class="sat-guide-section-content">
            <div class="section-description">
                As mentioned above, a parabola is a U-shaped curve that opens either up or down. The simplest parabola would be the graph of 
                <math>
                    <mi>y</mi>
                    <mo>=</mo>
                    <msup><mi>x</mi><mn>2</mn></msup>
                </math>
                , which is shown below:
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
                    The direction of a parabola (whether it looks like a U or an upside-down U) is determined by the sign of the coefficient of the x<sup>2</sup> term. If the coefficient is positive, the parabola opens upward (like a U). If the coefficient is negative, the parabola opens downward (like an upside-down U). In the graph of y=x<sup>2</sup> above, the coefficient of the x<sup>2</sup> term is 1, so the parabola opens upward. The graph of 
                    <math>
                        <mi>y</mi>
                        <mo>=</mo>
                        <mo>-</mo>
                        <msup><mi>x</mi><mn>2</mn></msup>
                    </math>
                    is shown below.
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
                    The vertex of a parabola is the point where the curve changes direction. At this point, the slope of the line is zero. For U-shaped parabolas that open upward, like 
                    <math>
                        <mi>y</mi>
                        <mo>=</mo>
                        <msup><mi>x</mi><mn>2</mn></msup>
                    </math>
                    , this is the minimum point. The slope is decreasing on the left side of the vertex, increasing on the right side, and zero right at the vertex. For inverted U-shaped parabolas that open downward, like 
                    <math>
                        <mi>y</mi>
                        <mo>=</mo>
                        <mo>-</mo>
                        <msup><mi>x</mi><mn>2</mn></msup>
                    </math>
                    , this is the maximum point.
                    
                </div>
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    X-intercepts
                </h3>
                <div class="sat-guide-subsection-content">
                    The x-intercepts of a parabola are the points where the parabola crosses the x-axis. For any point on the x-axis, the y-coordinate is 0, so to find the x-intercepts, we set y=0 and solve for x. For example, to find the x-intercepts of 
                    <math>
                        <mi>y</mi>
                        <mo>=</mo>
                        <msup><mi>x</mi><mn>2</mn></msup>
                        <mo>+</mo>
                        <mn>2</mn>
                        <mi>x</mi>
                        <mo>+</mo>
                        <mn>1</mn>
                    </math>
                    , we set y=0 and solve for x:
                    <div>
                        <math>
                            <mi>0</mi>
                            <mo>=</mo>
                            <msup><mi>x</mi><mn>2</mn></msup>
                            <mo>+</mo>
                            <mn>2</mn>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>1</mn>
                        </math>
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
                A quadratic equation can be expressed in different formats, but the most common is the standard form. The standard form of a quadratic equation is 
                <math>
                    <mi>y</mi>
                    <mo>=</mo>
                    <mi>a</mi>
                    <msup><mi>x</mi><mn>2</mn></msup>
                    <mo>+</mo>
                    <mi>b</mi>
                    <mi>x</mi>
                    <mo>+</mo>
                    <mi>c</mi>
                </math>
                , where a, b, and c are constants. An example of a quadratic equation in standard form is 
                <math>
                    <mi>y</mi>
                    <mo>=</mo>
                    <msup><mi>x</mi><mn>2</mn></msup>
                    <mo>+</mo>
                    <mn>2</mn>
                    <mi>x</mi>
                    <mo>+</mo>
                    <mn>1</mn>
                </math>
                . When a quadratic is expressed in a different form, you can always manipulate it into standard form. From standard form, we can apply various rules and formulas to find important information about the parabola.
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Vertex from Standard Form
                </h3>
                <div class="sat-guide-subsection-content">
                    When a quadratic equation is in standard form (
                    <math>
                        <mi>y</mi>
                        <mo>=</mo>
                        <mi>a</mi>
                        <msup><mi>x</mi><mn>2</mn></msup>
                        <mo>+</mo>
                        <mi>b</mi>
                        <mi>x</mi>
                        <mo>+</mo>
                        <mi>c</mi>
                    </math>
                    ), we can find the x-coordinate of the vertex using the formula below:
                    <div>
                        <math>
                            <mi>x</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow><mo>-</mo><mi>b</mi></mrow>
                                <mrow><mn>2</mn><mi>a</mi></mrow>
                            </mfrac>
                        </math>
                    </div>
                    <div>
                        Once we have the x-coordinate, we can find the y-coordinate by plugging the x-coordinate back into the original equation.
                    </div>
                    <div class="pt-4">
                        For example, take the quadradict equation below:
                        <div>
                            <math>
                                <mi>y</mi>
                                <mo>=</mo>
                                <mn>3</mn>
                                <msup><mi>x</mi><mn>2</mn></msup>
                                <mo>+</mo>
                                <mn>12</mn>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>8</mn>
                            </math>
                        </div>
                        <div>
                            In terms of standard form, our "a" is 3, our "b" is 12, and our "c" is 8. So, to get the x-coordinate of the vertex, we plug in the values for a and b into the formula 
                            <math>
                                <mi>x</mi>
                                <mo>=</mo>
                                <mfrac>
                                    <mrow><mo>-</mo><mi>b</mi></mrow>
                                    <mrow><mn>2</mn><mi>a</mi></mrow>
                                </mfrac>
                            </math>
                            , like this:
                            <div>
                                <math>
                                    <mi>x</mi>
                                    <mo>=</mo>
                                    <mfrac>
                                        <mrow><mo>-</mo><mn>(12)</mn></mrow>
                                        <mrow><mn>2</mn><mo>·</mo><mn>(3)</mn></mrow>
                                    </mfrac>
                                    <mo>=</mo>
                                    <mfrac>
                                        <mrow><mo>-</mo><mn>12</mn></mrow>
                                        <mrow><mn>6</mn></mrow>
                                    </mfrac>
                                    <mo>=</mo>
                                    <mo>-</mo>
                                    <mn>2</mn>
                                </math>
                            </div>
                            <div>
                                So, the x-coordinate of the vertex is -2.
                            </div>
                        </div>
                    </div>
                    <div class="pt-4">
                        Then, to find the y-coordinate, we plug -2 in for x in the original equation:
                        <div>
                            <math>
                                <mi>y</mi>
                            <mo>=</mo>
                          <mn>3</mn>
                                <msup>
                        <mrow>
                          <mo>(</mo>
                          <mo>-</mo>
                          <mn>2</mn>
                          <mo>)</mo>
                        </mrow>
                          <mn>2</mn>
                        </msup>
                        <mo>+</mo>
                                <mn>12</mn>
                                <mo>(</mo>
                                <mo>-</mo>
                                <mn>2</mn>
                                <mo>)</mo>
                                <mo>+</mo>
                                <mn>8</mn>
                            </math>
                        </div>
                        <div>
                            <math>
                                <mi>y</mi>
                                <mo>=</mo>
                                <mn>3</mn>
                                <mo>·</mo>
                                <mn>4</mn>
                                <mo>-</mo>
                                <mn>24</mn>
                                <mo>+</mo>
                                <mn>8</mn>
                            </math>
                        </div>
                        <div>
                            <math>
                                <mi>y</mi>
                                <mo>=</mo>
                                <mn>12</mn>
                                <mo>-</mo>
                                <mn>24</mn>
                                <mo>+</mo>
                                <mn>8</mn>
                                <mo>=</mo>
                                <mo>-</mo>
                                <mn>4</mn>
                            </math>
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
                        Factoring a quadratic means you are maniuplating the equation so that you end up with two expressions that are multiplied together. For example, the quadratic equation <math>
                            <mi>y</mi>
                            <mo>=</mo>
                            <msup><mi>x</mi><mn>2</mn></msup>
                            <mo>+</mo>
                            <mn>7</mn>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>12</mn>
                        </math> can be factored into <math>
                            <mi>y</mi>
                            <mo>=</mo>
                            <mo>(</mo>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>3</mn>
                            <mo>)</mo>
                            <mo>(</mo>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>4</mn>
                            <mo>)</mo>
                        </math>. You'll notice that if you multiply the two expressions together (using the FOIL method), you get back the original quadratic equation.
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <div class="sat-guide-subsection-concept-header">
                            Factoring when "a" is 1
                        </div>
                        <div>
                            When the coefficient of the x<sup>2</sup> term is 1 (aka "a" is 1 in standard form), factoring is relatively simple. We just need to find two numbers that multiply together to get the constant term (c) and add up to the coefficient of the x term (b). For example, take the equation below:
                            <div>
                                <math>
                                    <mi>y</mi>
                                    <mo>=</mo>
                                    <msup><mi>x</mi><mn>2</mn></msup>
                                    <mo>+</mo>
                                    <mn>7</mn>
                                    <mi>x</mi>
                                    <mo>+</mo>
                                    <mn>12</mn>
                                </math>
                            </div>
                            <div>
                                We need to find two numbers that multiply to 12 and add up to 7. These numbers are 3 and 4, so we can factor the quadratic as:
                                <div>
                                    <math>
                                        <mi>y</mi>
                                        <mo>=</mo>
                                        <mo>(</mo>
                                        <mi>x</mi>
                                        <mo>+</mo>
                                        <mn>3</mn>
                                        <mo>)</mo>
                                        <mo>(</mo>
                                        <mi>x</mi>
                                        <mo>+</mo>
                                        <mn>4</mn>
                                        <mo>)</mo>
                                    </math>
                                </div>
                                <div>
                                    Let's do one more example:
                                </div>
                                <div>
                                    <math>
                                        <mi>y</mi>
                                        <mo>=</mo>
                                        <msup><mi>x</mi><mn>2</mn></msup>
                                        <mo>+</mo>
                                        <mn>2</mn>
                                        <mi>x</mi>
                                        <mo>+</mo>
                                        <mn>15</mn>
                                    </math>
                                </div>
                                <div>
                                    Here, we need to find two numbers that multiply to 15 and add up to 2. These numbers are 5 and -3, so we can factor the quadratic as:
                                </div>
                                <div>
                                    <math>
                                        <mi>y</mi>
                                        <mo>=</mo>
                                        <mo>(</mo>
                                        <mi>x</mi>
                                        <mo>+</mo>
                                        <mn>5</mn>
                                        <mo>)</mo>
                                        <mo>(</mo>
                                        <mi>x</mi>
                                        <mo>-</mo>
                                        <mn>3</mn>
                                        <mo>)</mo>
                                    </math>
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
                            <math>
                                <mi>y</mi>
                                <mo>=</mo>
                                <mn>4</mn>
                                <msup><mi>x</mi><mn>2</mn></msup>
                                <mo>+</mo>
                                <mn>11</mn>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>6</mn>
                            </math>
                        </div>
                        <div>
                            Here, we need to find two numbers that multiply to 24 and add up to 11. These numbers are 3 and 8 (since 3 * 8 = 24 and 3 + 8 = 11).
                        </div>
                        <div>
                            Once we've found the two numbers, we use them to split the "x" term into the sum of two terms, like this:
                        </div>
                        <div>
                            <math>
                                <mi>y</mi>
                                <mo>=</mo>
                                <mn>4</mn>
                                <msup><mi>x</mi><mn>2</mn></msup>
                                <mo>+</mo>
                                <mn>8</mn>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>3</mn>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>6</mn>
                            </math>
                        </div>
                        <div>
                            Next, we factor out the greatest common factor from the first two terms and the last two terms. Since 4x<sup>2</sup> and 8x have a common factor of 4x, we can factor out 4x from the first two terms. And 3x and 6 have a common factor of 3, so we can factor out 3 from the last two terms:
                        </div>
                        <div>
                            <math>
                                <mi>y</mi>
                                <mo>=</mo>
                                <mn>4</mn>
                                <mi>x</mi>
                                <mo>(</mo>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>2</mn>
                                <mo>)</mo>
                                <mo>+</mo>
                                <mn>3</mn>
                                <mo>(</mo>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>2</mn>
                                <mo>)</mo>
                            </math>
                        </div>
                        <div>
                            It should always work out so that the two terms in parentheses are the same. In this case, both terms in parentheses are (x+2), so we can factor out (x+2) from the entire expression, giving us the final factored form:
                        </div>
                        <div>
                            <math>
                                <mi>y</mi>
                                <mo>=</mo>
                                <mo>(</mo>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>2</mn>
                                <mo>)</mo>
                                <mo>(</mo>
                                <mn>4</mn>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>3</mn>
                                <mo>)</mo>
                            </math>
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
                        <math>
                            <mi>x</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow><mo>-</mo><mi>b</mi><mo>±</mo><msqrt><mi>b</mi><mo>²</mo><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow>
                                <mrow><mn>2</mn><mi>a</mi></mrow>
                            </mfrac>
                        </math>
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
                        <math>
                            <mi>x</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow><mo>-</mo><mi>(10)</mi><mo>±</mo><msqrt><mi>(10)</mi><mo>²</mo><mo>-</mo><mn>4</mn><mi>(5)</mi><mi>(-8)</mi></msqrt></mrow>
                                <mrow><mn>2</mn><mi>(5)</mi></mrow>
                            </mfrac>
                        </math>
                    </div>
                    <div>
                        <math>
                            <mi>x</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow><mo>-</mo><mi>10</mi><mo>±</mo><msqrt><mi>100</mi><mo>+</mo><mn>160</mn></msqrt></mrow>
                                <mrow><mn>10</mn></mrow>
                            </mfrac>
                        </math>
                    </div>
                    <div>
                        <math>
                            <mi>x</mi>
                            <mo>=</mo>
                            <mfrac>
                                <mrow><mo>-</mo><mi>10</mi><mo>±</mo><msqrt><mi>260</mi></msqrt></mrow>
                                <mrow><mn>10</mn></mrow>
                            </mfrac>
                        </math>
                    </div>
                    <div>
                        <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>x</mi>
                            <mo>=</mo>
                            <mrow>
                            <mn>-1</mn>
                            <mo>±</mo>
                            <mfrac>
                                <msqrt>
                                <mn>260</mn>
                                </msqrt>
                                <mn>10</mn>
                            </mfrac>
                            </mrow>
                        </mrow>
                        </math>
                    </div>
                    <div>
                        This gives us two solutions:
                    </div>
                    <div>
                        <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>x</mi>
                            <mo>=</mo>
                            <mrow>
                            <mn>-1</mn>
                            <mo>+</mo>
                            <mfrac>
                                <msqrt>
                                <mn>260</mn>
                                </msqrt>
                                <mn>10</mn>
                            </mfrac>
                            </mrow>
                        </mrow>
                        </math>
                    </div>
                    <div>
                        <math xmlns="http://www.w3.org/1998/Math/MathML">
                        <mrow>
                            <mi>x</mi>
                            <mo>=</mo>
                            <mrow>
                            <mn>-1</mn>
                            <mo>-</mo>
                            <mfrac>
                                <msqrt>
                                <mn>260</mn>
                                </msqrt>
                                <mn>10</mn>
                            </mfrac>
                            </mrow>
                        </mrow>
                        </math>
                    </div>
                    <div>
                        Which we could also represent as decimal approximations:
                    </div>
                    <div>
                        x = 1.28 and x = -3.28
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Vertex Form
        </h2>
        <div class="sat-guide-section-content">
            <div class="section-description">
                Vertex form is a different format that can be used to represent a quadratic function. While less commonly used than standard form, it can be useful for finding the vertex of a quadratic function. A quadratic function in vertex form is given look like this:
                <div>
                    <math>
                        <mi>y</mi>
                        <mo>=</mo>
                        <mi>a</mi>
                        <mo>(</mo>
                        <mi>x</mi>
                        <mo>-</mo>
                        <mi>h</mi>
                        <mo>)</mo>
                        <mo>²</mo>
                        <mo>+</mo>
                        <mi>k</mi>
                    </math>
                </div>
                <div>
                    In this format, (h, k) is the vertex of the parabola. Similarly to standard form, the sign of a tells you whether the parabola opens up or down. If a is positive, the parabola opens up, and if a is negative, the parabola opens down. It's important to note that the default form is <b>x - h</b>, not h + x, meaning the x-coordinate of the vertex has the opposite sign of what you see in the parentheses.
                </div>
                <div>
                    For example, if we have the following quadratic function:
                </div>
                <div>
                    <math>
                        <mi>y</mi>
                        <mo>=</mo>
                        <mo>2</mo>
                        <mo>(</mo>
                        <mi>x</mi>
                        <mo>+</mo>
                        <mn>2</mn>
                        <mo>)</mo>
                        <mo>²</mo>
                        <mo>+</mo>
                        <mn>3</mn>
                    </math>
                </div>
                <div>
                    The x-coordinate of the vertex is -2, and the y-coordinate is 3.
                </div>
                <div>
                    It's important to be familiar with the vertex form of a quadratic function. Occasionally on the SAT, a question will have a quadratic function that is already in vertex form, and ask you about its vertex. Of course, you could always convert it to standard form, then find the x-coordinate of the vertex using 
                    <math>
                        <mfrac>
                            <mrow><mo>-</mo><mi>b</mi></mrow>
                            <mrow><mn>2</mn><mi>a</mi></mrow>
                        </mfrac>
                    </math>
                    , then plug that back into the equation to find the y-coordinate. But this would take way more time than just recognizing that it's already in vertex form, so the vertex is simply (h, k).
                </div>
            </div>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Single Variable Quadratic Equations
        </h2>
        <div class="sat-guide-section-content">
            <div class="section-description">
                A single variable quadratic equation is a quadratic equation that has only one variable. Rather than being expressed as a function of x, like y = x<sup>2</sup> + 4x + 3, or f(x) = x<sup>2</sup> + 4x + 3, it is simply expressed as an equation where the only variable is x. 
                <div>
                    For example, below are a few examples of single variable quadratic equations:
                </div>
                <div>
                    <math>
                        <mi>2x</mi>
                        <mo>²</mo>
                        <mo>-</mo>
                        <mn>4</mn>
                        <mi>x</mi>
                        <mo>+</mo>
                        <mn>3</mn>
                        <mo>=</mo>
                        <mi>5x</mi>
                        <mo>²</mo>
                        <mo>+</mo>
                        <mn>6</mn>
                        <mi>x</mi>
                        <mo>+</mo>
                        <mn>8</mn>
                    </math>
                </div>
                <div>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                      <mrow>
                        <mrow>
                          <mo>(</mo>
                          <mi>x</mi>
                          <mo>+</mo>
                          <mn>3</mn>
                          <mo>)</mo>
                        </mrow>
                        <mrow>
                          <mo>(</mo>
                          <mi>x</mi>
                          <mo>-</mo>
                          <mn>2</mn>
                          <mo>)</mo>
                        </mrow>
                        <mo>=</mo>
                        <mrow>
                          <mo>(</mo>
                          <mi>x</mi>
                          <mo>+</mo>
                          <mn>1</mn>
                          <mo>)</mo>
                        </mrow>
                        <mrow>
                          <mo>(</mo>
                          <mi>x</mi>
                          <mo>-</mo>
                          <mn>4</mn>
                          <mo>)</mo>
                        </mrow>
                      </mrow>
                    </math>
                </div>
                <div>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                      <mrow>
                        <mn>3</mn>
                        <mrow>
                          <mo>(</mo>
                          <mi>x</mi>
                          <mo>-</mo>
                          <mn>2</mn>
                          <mo>)</mo>
                        </mrow>
                        <msup>
                          <mrow></mrow>
                          <mn>2</mn>
                        </msup>
                        <mo>+</mo>
                        <mn>5</mn>
                        <mo>=</mo>
                        <mn>4</mn>
                        <msup>
                          <mi>x</mi>
                          <mn>2</mn>
                        </msup>
                        <mo>-</mo>
                        <mn>20</mn>
                        <mi>x</mi>
                        <mo>+</mo>
                        <mn>29</mn>
                      </mrow>
                    </math>
                </div>
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Solving Single Variable Quadratic Equations
                </h3>
                <div class="sat-guide-subsection-content">
                    Solving a single variable quadratic equation consists of three main steps:
                    <ol>
                        <li>
                            Isolate the quadratic expression on one side of the equation, so that it is equal to 0.
                        </li>
                        <li>
                            Get the expression into standard form (ax<sup>2</sup> + bx + c).
                        </li>
                        <li>
                            Solve for x by either factoring or using the quadratic formula.
                        </li>
                    </ol>
                    <div>
                        Let's look at an example:
                    </div>
                    <div>
                        <math>
                        <mrow>
                            <mrow>
                            <mo>(</mo>
                            <mn>2</mn>
                            <mi>x</mi>
                            <mo>-</mo>
                            <mn>3</mn>
                            <mo>)</mo>
                            </mrow>
                            <mrow>
                            <mo>(</mo>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>5</mn>
                            <mo>)</mo>
                            </mrow>
                            <mo>=</mo>
                            <mrow>
                            <mo>(</mo>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>5</mn>
                            <mo>)</mo>
                            </mrow>
                            <mrow>
                            <mo>(</mo>
                            <mi>x</mi>
                            <mo>-</mo>
                            <mn>1</mn>
                            <mo>)</mo>
                            </mrow>
                        </mrow>
                        </math>
                    </div>
                    <div>
                        First, we'll get all terms on one side of the equation, so that it is equal to 0.
                    </div>
                    <div>
                        <math>
                            <mrow>
                            <mo>(</mo>
                            <mn>2</mn>
                            <mi>x</mi>
                            <mo>-</mo>
                            <mn>3</mn>
                            <mo>)</mo>
                            <mo>(</mo>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>5</mn>
                            <mo>)</mo>
                            <mo>-</mo>
                            <mrow>
                                <mo>(</mo>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>5</mn>
                                <mo>)</mo>
                                <mo>(</mo>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>1</mn>
                                <mo>)</mo>
                            </mrow>
                            <mo>=</mo>
                            <mn>0</mn>
                        </mrow>
                        </math>
                    </div>
                    <div>
                        Next, we'll need to multiply out the left side of the equation, then combine like terms to get it into standard form:
                    </div>
                    <div>
                        <math>
                            <mrow>
                                <mo>(</mo>
                                <mn>2</mn>
                                <mi>x</mi>
                                <mo>²</mo>
                                <mo>+</mo>
                                <mn>10</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>3</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>15</mn>
                                <mo>)</mo>
                                <mo>-</mo>
                                <mo>(</mo>
                                <mi>x</mi>
                                <mo>²</mo>
                                <mo>-</mo>
                                <mn>1</mn>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>5</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>5</mn>
                                <mo>)</mo>
                                <mo>=</mo>
                                <mn>0</mn>
                            </mrow>
                        </math>
                    </div>
                    <div>
                        Next, combine like terms:
                    </div>
                    <div>
                        <math>
                            <mrow>
                                <mi>x</mi>
                                <mo>²</mo>
                                <mo>+</mo>
                                <mn>3</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>10</mn>
                                <mo>=</mo>
                                <mn>0</mn>
                            </mrow>
                        </math>
                    </div>
                    <div>
                        Since this equation happens to be factorable, we can use factoring to solve it rather than using the quadratic formula. 
                    </div>
                    <div>
                        It factors into:
                    </div>
                    <div>
                        <math>
                            <mrow>
                                <mo>(</mo>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>5</mn>
                                <mo>)</mo>
                                <mo>(</mo>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>2</mn>
                                <mo>)</mo>
                                <mo>=</mo>
                                <mn>0</mn>
                            </mrow>
                        </math>
                    </div>
                    <div>
                        Now, using the Zero Product Property (if two numbers multiply to 0, one of them must be 0), we know that either <math>
                            <mi>x</mi>
                            <mo>+</mo>
                            <mn>5</mn>
                            <mo>=</mo>
                            <mn>0</mn>
                        </math> or <math>
                            <mi>x</mi>
                            <mo>-</mo>
                            <mn>2</mn>
                            <mo>=</mo>
                            <mn>0</mn>
                        </math>
                    </div>
                    <div>
                        Solving each equation, we get:
                    </div>
                    <div>
                        <math>
                            <mrow>
                                <mi>x</mi>
                                <mo>=</mo>
                                <mn>2</mn>
                            </mrow>
                        </math>
                    </div>  
                    <div>
                        <math>
                            <mrow>
                                <mi>x</mi>
                                <mo>=</mo>
                                <mn>-5</mn>
                            </mrow>
                        </math>
                    </div> 
                </div>
                 
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Systems of Quadratic Equations/Functions
        </h2>
        <div class="sat-guide-section-content">
            <div class="section-description">
                A system of quadratic equations is a set of two equations or functions that are solved simultaneously. The solutions to the system are the values of the variables that make both equations true. Or, since each equation/function can be represented as a graph, we can think of the solutions as the points where the graphs intersect.
            </div>
            <div>
                For example, let's say we have the following system of quadratic equations, and we're asked to solve for the values of x and y that make both equations true:
            </div>
            <div>
                <math>
                    <mi>y</mi>                    
                    <mo>=</mo>
                    <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                    </msup>
                    <mo>+</mo>
                    <mn>4</mn>
                    <mi>x</mi>
                    <mo>-</mo>
                    <mn>5</mn>
                </math>
            </div>
            <div>
                <math>
                    <mi>y</mi>
                    <mo>=</mo>
                    <mn>2</mn>
                    <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                    </msup>
                    <mo>+</mo>
                    <mn>7</mn>
                    <mi>x</mi>
                    <mo>-</mo>
                    <mn>15</mn>
                </math>
            </div>
            <div>
                This would essentially be the same as if we were given the two following functions, and asked to find the points of intersection:
            </div>
            <div>
                <math>
                    <mi>f</mi>
                    <mo>(</mo>
                    <mi>x</mi>
                    <mo>)</mo>
                    <mo>=</mo>
                    <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                    </msup>
                    <mo>+</mo>
                    <mn>4</mn>
                    <mi>x</mi>
                    <mo>-</mo>
                    <mn>5</mn>
                </math>
            </div>
            <div>
                <math>
                    <mi>g</mi>
                    <mo>(</mo>
                    <mi>x</mi>
                    <mo>)</mo>
                    <mo>=</mo>
                    <mn>2</mn>
                    <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                    </msup>
                    <mo>+</mo>
                    <mn>7</mn>
                    <mi>x</mi>
                    <mo>-</mo>
                    <mn>15</mn>
                </math>
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Solving Systems of Quadratic Equations
                </h3>
                <div class="sat-guide-subsection-content">
                    To solve a system of quadratic equations, we first need to combine the two equations into a single equation. We can do this either by using substitution or elimination. Since the system of equations above already has both equations expressing y in terms of x (y is isolated on one side of the equation), we can use either method easily. Let's start by using substitution.
                    <div class="sat-guide-subsection-concept">
                        <div class="sat-guide-subsection-concept-header">
                            Substitution Method
                        </div>
                        <div>
                            To use substitution, you first need to isolate y in one of the equations. Once you've done that, you can substitute the expression for y into the other equation. In our system of equations above, y is already isolated, so we can substitute the expression for y from the first equation into the second equation:
                        </div>
                        <div>
                            <math>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>4</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>5</mn>
                                <mo>=</mo>
                                <mn>2</mn>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>7</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>15</mn>
                            </math>
                        </div>
                        <div>
                            Now we have a single equation with a single variable, so we can solve it the rest of the way by using the same methods outlined above in the section on solving single variable quadratic equations. We'll start by getting all terms on one side of the equation, so that it is equal to 0:
                        </div>
                        <div>
                            <math>
                                <mn>2</mn>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>7</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>15</mn>
                                <mo>-</mo>
                                <mo>(</mo>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>4</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>5</mn>
                                <mo>)</mo>
                                <mo>=</mo>
                                <mn>0</mn>
                            </math>
                        </div>
                        <div>
                            Next, combine like terms:
                        </div>
                        <div>
                            <math>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>3</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>10</mn>
                                <mo>=</mo>
                                <mn>0</mn>
                            </math>
                        </div>
                        <div>
                            Now, we can solve for x by factoring:
                        </div>
                        <div>
                            <math>
                                <mo>(</mo>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>5</mn>
                                <mo>)</mo>
                                <mo>(</mo>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>2</mn>
                                <mo>)</mo>
                                <mo>=</mo>
                                <mn>0</mn>
                            </math>
                        </div>
                        <div>
                            Using the Zero Product Property, we can conclude that the solutions are <math>
                                <mi>x</mi>
                                <mo>=</mo>
                                <mn>-5</mn>
                            </math> and <math>
                                <mi>x</mi>
                                <mo>=</mo>
                                <mn>2</mn>
                            </math>
                        </div>
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <div class="sat-guide-subsection-concept-header">
                            Elimination Method
                        </div>
                        <div>
                           Let's use a different example to illustrate the elimination method. Let's say we have the following system of equations:
                        </div>
                        <div>
                            <math>
                                <mi>y</mi>
                                <mo>=</mo>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>4</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>5</mn>
                            </math>
                        </div>
                        <div>
                            <math>
                                <mn>2</mn>
                                <mi>y</mi>
                                <mo>=</mo>
                                <mn>4</mn>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>14</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>30</mn>
                            </math>
                        </div>
                        <div>
                            With the elimination method, we want to add or subtract one equation from the other so that one of the variables is eliminated. With quadratic equations, we generally want to eliminate the dependent variable (y), so that we're left with an equation that has only x's.
                        </div>
                        <div>
                            Since one equation has a y, and one has a 2y, we can't just subtract one from the other to eliminate the y's. Instead, we can multiply one of the equations by a constant so that y terms have the same coefficient. Let's multiply the first equation by 2, which now gives us the two equations:
                        </div>
                        <div>
                            <math>
                                <mn>2</mn>
                                <mi>y</mi>
                                <mo>=</mo>
                                <mn>2</mn>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>8</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>10</mn>
                            </math>
                        </div>
                        <div>
                            <math>
                                <mn>2</mn>
                                <mi>y</mi>
                                <mo>=</mo>
                                <mn>4</mn>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>14</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>30</mn>
                            </math>
                        </div>
                        <div>
                            Now, we can subtract the second equation from the first equation. By this, we mean that we'll subtract the left side of the second equation from the left side of the first equation, and the right side of the second equation from the right side of the first equation:
                        </div>
                        <div>
                            <math>
                                <mn>2</mn>
                                <mi>y</mi>
                                <mo>-</mo>
                                <mn>2</mn>
                                <mi>y</mi>
                                <mo>=</mo>
                                <mn>2</mn>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>8</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>10</mn>
                                <mo>-</mo>
                                <mo>(</mo>
                                <mn>4</mn>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>14</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>30</mn>
                                <mo>)</mo>
                                
                            </math>
                        </div>
                        <div>
                            Now, combine like terms:
                        </div>
                        <div>
                            <math>
                                <mn>0</mn>
                                <mo>=</mo>
                                <mo>-</mo>
                                <mn>2</mn>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>-</mo>
                                <mn>6</mn>
                                <mi>x</mi>
                                <mo>+</mo>
                                <mn>20</mn>
                            </math>
                        </div>
                        <div>
                            We can simplify this equation by dividing both sides by -2:
                        </div>
                        <div>
                            <math>
                                <mn>0</mn>
                                <mo>=</mo>
                                <msup>
                                    <mi>x</mi>
                                    <mn>2</mn>
                                </msup>
                                <mo>+</mo>
                                <mn>3</mn>
                                <mi>x</mi>
                                <mo>-</mo>
                                <mn>10</mn>
                            </math>
                        </div>
                        <div>
                            Which actually leaves us with the same equation as in our substitution example. So it will give us the same solutions, <math>
                                <mi>x</mi>
                                <mo>=</mo>
                                <mn>-5</mn>
                            </math> and <math>
                                <mi>x</mi>
                                <mo>=</mo>
                                <mn>2</mn>
                            </math>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Linear-Quadratic Systems
                </h3>
                <div class="sat-guide-subsection-content">
                    Sometimes on the SAT, you may encounter a system of equations that contains one linear equation and one quadratic equation. Let's say we have the following system of equations:
                </div>
                <div>
                    <math>
                        <mi>y</mi>
                        <mo>=</mo>
                        <msup>
                            <mi>x</mi>
                            <mn>2</mn>
                        </msup>
                        <mo>+</mo>  
                        <mn>4</mn>
                        <mi>x</mi>
                        <mo>-</mo>
                        <mn>5</mn>
                    </math>
                </div>
                <div>
                    <math>
                        <mi>y</mi>
                        <mo>=</mo>
                        <mi>x</mi>
                        <mo>+</mo>
                        <mn>5</mn>
                    </math>
                </div>
                <div>
                    Ultimately, our approach will be essentially the same as it was when we had two quadratic equations. We can use either substitution or elimination to combine the equations into a single equation with a single variable. This resulting equation will be a quadratic equation, so we can solve it by either factoring or using the quadratic formula.
                </div>
                <div>
                    By using elimination, we can subtract the second equation from the first equation to eliminate the y term:
                </div>
                <div>
                    <math>
                        <mn>0</mn>
                        <mo>=</mo>  
                        <msup>
                            <mi>x</mi>
                            <mn>2</mn>
                        </msup>
                        <mo>+</mo>
                        <mn>4</mn>
                        <mi>x</mi>
                        <mo>-</mo>
                        <mn>5</mn>
                        <mo>-</mo>
                        <mo>(</mo>
                        <mi>x</mi>
                        <mo>+</mo>
                        <mn>5</mn>
                        <mo>)</mo>
                        
                    </math>
                </div>
                <div>
                    Now, combine like terms:
                </div>
                <div>
                    <math>
                        <mn>0</mn>
                        <mo>=</mo>
                        <msup>
                            <mi>x</mi>
                            <mn>2</mn>
                        </msup>
                        <mo>+</mo>
                        <mn>3</mn>
                        <mi>x</mi>
                        <mo>-</mo>
                        <mn>10</mn>
                    </math>
                </div>
                <div>
                    Again, we end up with the same quadratic equation as in our previous examples, so the solutions are <math>
                        <mi>x</mi>
                        <mo>=</mo>
                        <mn>-5</mn>
                    </math> and <math>
                        <mi>x</mi>
                        <mo>=</mo>
                        <mn>2</mn>
                    </math>
                </div>
                <div>
                    To think about this graphically, we have one function that is represented by a parabola, and one function that is represented by a line. The fact that we have two solutions means that the line intersects the parabola at two points. The x-coordinates of these points are the solutions to the system of equations. We could find the y-coordinates by plugging the x-coordinates back into either equation. Let's use the simpler equation, <math>
                        <mi>y</mi>
                        <mo>=</mo>
                        <mi>x</mi>
                        <mo>+</mo>
                        <mn>5</mn>
                    </math>, or in function notation, <math>
                        <mi>f</mi>
                        <mo>(</mo>
                        <mi>x</mi>
                        <mo>)</mo>
                        <mo>=</mo>
                        <mi>x</mi>
                        <mo>+</mo>
                        <mn>5</mn>
                    </math>.
                </div>
                <div>
                    Plugging in <math>
                        <mi>x</mi>
                        <mo>=</mo>
                        <mn>-5</mn>
                    </math> gives us <math>
                        <mi>f</mi>
                        <mo>(</mo>
                        <mi>-5</mi>
                        <mo>)</mo>
                        <mo>=</mo>
                        <mn>-5</mn>
                        <mo>+</mo>
                        <mn>5</mn>
                        <mo>=</mo>
                        <mn>0</mn>
                    </math>
                </div>
                <div>
                    Plugging in <math>
                        <mi>x</mi>
                        <mo>=</mo>
                        <mn>2</mn>
                    </math> gives us <math>
                        <mi>f</mi>
                        <mo>(</mo>
                        <mi>2</mi>
                        <mo>)</mo>
                        <mo>=</mo>
                        <mn>2</mn>
                        <mo>+</mo>
                        <mn>5</mn>
                        <mo>=</mo>
                        <mn>7</mn>
                    </math>
                    
                </div>
                <div>
                    So, the two exact coordinate points of intersection are <math>
                        <mo>(</mo>
                        <mn>-5</mn>
                        <mo>,</mo>
                        <mn>0</mn>
                        <mo>)</mo>
                    </math> and <math>
                        <mo>(</mo>
                        <mn>2</mn>
                        <mo>,</mo>
                        <mn>7</mn>
                        <mo>)</mo>
                    </math>
                </div>
                <div>
                    Let's look at what the graph of these two functions actually looks like:
                </div>
                <div>
                    <canvas style="height: 150px; width: 200px;" ref="linearQuadraticSystemChart"></canvas>
                </div>
            </div>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Number of Solutions
        </h2>
        <div class="sat-guide-subsection-content">
            We saw earlier how parabolas can have two, one, or no x-intercepts. The solutions to a quadratic equation can be thought of as the x-intercepts of the parabola, so it's also the case that a quadratic equation can have two, one, or no solutions. The number of solutions to a quadratic equation is ultimately determined by its discriminant.
        </div>
        <div class="sat-guide-subsection">
            <h3 class="sat-guide-subsection-header">
                The Discriminant
            </h3>
            <div class="sat-guide-subsection-content">
                The discriminant of a quadratic equation is the part of the quadratic formula under the square root.
                <div>
                    Remember, the quadratic formula is:
                </div>
                <div>
                    <math>
                        <mi>x</mi>
                        <mo>=</mo>
                        <mfrac>
                            <mrow><mo>-</mo><mi>b</mi><mo>±</mo><msqrt><mi>b</mi><mo>²</mo><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow>
                            <mrow><mn>2</mn><mi>a</mi></mrow>
                        </mfrac>
                    </math>
                </div>
                <div>
                    So the discriminant (the part under the square root) is: 
                </div>
                <div>
                    <math>
                        <mi>b</mi>
                        <mo>²</mo>
                        <mo>-</mo>
                        <mn>4</mn>
                        <mi>a</mi>
                        <mi>c</mi>
                    </math>
                </div>
                
            </div>
        </div>
        <div class="sat-guide-subsection">
            <h3 class="sat-guide-subsection-header">
                Zero Solutions (Discriminant < 0)
            </h3>
            <div class="sat-guide-subsection-content">
                We know that we can't take the square root of a negative number. Since the discriminant is inside the square root, it cannot be negative, or else the equation we end up with no (real) solutions. We say "real" because in theory there are complex solutions that involve imaginary numbers, but we don't need to worry about that for the SAT. So for the purposes of the SAT, a quadratic equation has no solutions if its discriminant is negative.
            </div>
            <div class="sat-guide-subsection-content">
                Let's look at an example:
            </div>
            <div>
                <math>
                    <mi>x</mi>
                    <mo>²</mo>
                    <mo>-</mo>
                    <mn>4</mn>
                    <mi>x</mi>
                    <mo>+</mo>
                    <mn>5</mn>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>
            </div>
            <div>
                Linking this back to standard form (<math>
                    <mi>a</mi>
                    <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                    </msup>
                    <mo>+</mo>
                    <mi>b</mi>
                    <mi>x</mi>
                    <mo>+</mo>
                    <mi>c</mi>
                </math>), we have <math><mi>a</mi><mo>=</mo><mn>1</mn></math>, <math><mi>b</mi><mo>=</mo><mn>-4</mn></math>, and <math><mi>c</mi><mo>=</mo><mn>5</mn></math>.
            </div>
            <div>
                Plugging these values into the discriminant, we get:
            </div>
            <div>
                <math>
                    <msup>
                        <mi>(-4)</mi>
                        <mn>2</mn>
                    </msup>
                    <mo>-</mo>
                    <mn>4</mn>
                    <mn>(1)</mn>
                    <mn>(5)</mn>
                </math>
            </div>
            <div>
                Simplifying this, we get:
            </div>
            <div>
                <math>
                    <mn>16</mn>
                    <mo>-</mo>
                    <mn>20</mn>
                    <mo>=</mo>
                    <mn>-4</mn>
                </math>
            </div>
            <div>
                Since the discriminant is negative, we know that this quadratic equation has no solutions.
            </div>
            <div>
                Accordingly, if we graph it we see that the parabola does not intersect the x-axis at all.
            </div>
            <div>
                <canvas style="height: 150px; width: 200px;" ref="noXInterceptsChart2"></canvas>
            </div>
        </div>
        <div class="sat-guide-subsection">
            <h3 class="sat-guide-subsection-header">
                One Solution (Discriminant = 0)
            </h3>
            <div class="sat-guide-subsection-content">
                If the discriminant is zero, then the quadratic equation has exactly one solution. If we refer back to the quadratic formula, this makes sense, because if the discriminant is zero, our two solutions would be:
                <div>
                    <math>
                        <mi>x</mi>
                        <mo>=</mo>
                        <mfrac>
                            <mrow><mo>-</mo><mi>b</mi><mo>+</mo><msqrt><mn>0</mn></msqrt></mrow>
                            <mrow><mn>2</mn><mi>a</mi></mrow>
                        </mfrac>
                    </math> and 
                    <math>
                        <mi>x</mi>
                        <mo>=</mo>
                        <mfrac>
                            <mrow><mo>-</mo><mi>b</mi><mo>-</mo><msqrt><mn>0</mn></msqrt></mrow>
                            <mrow><mn>2</mn><mi>a</mi></mrow>
                        </mfrac>
                    </math>
                </div>
                <div>
                    Both of these solutions end up being the same number, since adding or subtracting zero doesn't change an expression. So, the one solution is:
                </div>
                <div>
                    <math>
                        <mi>x</mi>
                        <mo>=</mo>
                        <mfrac>
                            <mrow><mo>-</mo><mi>b</mi></mrow>
                            <mrow><mn>2</mn><mi>a</mi></mrow>
                        </mfrac>
                    </math>
                </div>
                <div>
                    You might recall that is is the same formula we use to find the x-coordinate of the vertex of a parabola. This makes sense, because when there is only one solution, that means the parabola only intersects the x-axis at one point, which is the vertex.
                </div>
                <div>
                    Let's look at an example:
                </div>
                <div>
                    <math>
                        <mi>x</mi>
                        <mo>²</mo>
                        <mo>-</mo>
                        <mn>4</mn>
                        <mi>x</mi>
                        <mo>+</mo>
                        <mn>4</mn>
                        <mo>=</mo>
                        <mn>0</mn>
                    </math>
                </div>
                <div>
                    Linking this back to standard form (<math>
                        
                    </math>), we have <math><mi>a</mi><mo>=</mo><mn>1</mn></math>, <math><mi>b</mi><mo>=</mo><mn>-4</mn></math>, and <math><mi>c</mi><mo>=</mo><mn>4</mn></math>.
                </div>
                <div>
                    Plugging these values into the discriminant, we get:
                </div>
                <div>
                    <math>
                        <msup>
                            <mi>(-4)</mi>
                            <mn>2</mn>
                        </msup>
                        <mo>-</mo>
                        <mn>4</mn>
                        <mn>(1)</mn>
                        <mn>(4)</mn>
                    </math>
                </div>
                <div>
                    Simplifying this, we get:
                </div>
                <div>
                    <math>
                        <mn>16</mn>
                        <mo>-</mo>
                        <mn>16</mn>
                        <mo>=</mo>
                        <mn>0</mn>
                    </math>
                </div>
                <div>
                    Since the discriminant is zero, we know that this quadratic equation has exactly one solution.
                </div>
                <div>
                    When a quadratic equation has exactly one solution, it can be factored as a binomial squared. For example, the example above can be factored as <math>
                        <mo>(</mo>
                        <mi>x</mi>
                        <mo>-</mo>
                        <mn>2</mn>
                        <mo>)</mo>
                        <mo>²</mo>
                        <mo>=</mo>
                        <mn>0</mn>
                    </math>
                </div>
                <div>
                    Hence, there is only one solution, <math><mi>x</mi><mo>=</mo><mn>2</mn></math>.
                </div>
                <div>
                    Now let's take a look at the graph of this quadratic equation:
                </div>
                <div>
                    <canvas style="height: 150px; width: 200px;" ref="oneOffsetXInterceptChart"></canvas>
                </div>
                <div>
                    As you can see, the parabola just glances off the x-axis at one point, which is the vertex.
                </div>
            </div>
        </div>
        <div class="sat-guide-subsection">
            <h3 class="sat-guide-subsection-header">
                Two Solutions (Discriminant > 0)
            </h3>
            <div class="sat-guide-subsection-content">
                If the discriminant is positive, then the quadratic equation has two solutions. This means that the parabola intersects the x-axis at two points.
            </div>
            <div>
                Again, this makes sense when we look at the quadratic formula. If the discriminant is positive, when we take its square root we get a positive number. This means that the "plus or minus" part of the quadratic formula will give us two different numbers.
            </div>
            <div>
                Let's look at an example:
            </div>
            <div>
                <math>
                    <mi>x</mi>
                    <mo>²</mo>
                    <mo>-</mo>
                    <mn>4</mn>
                    <mi>x</mi>
                    <mo>+</mo>
                    <mn>2</mn>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>
            </div>
            <div>
                Here, the discriminant is:
            </div>
            <div>
                <math>
                    <msup>
                        <mi>(-4)</mi>
                        <mn>2</mn>
                    </msup>
                    <mo>-</mo>
                    <mn>4</mn>
                    <mn>(1)</mn>
                    <mn>(2)</mn>
                </math>
            </div>
            <div>
                Simplifying this, we get:
            </div>
            <div>
                <math>
                    <mn>16</mn>
                    <mo>-</mo>
                    <mn>8</mn>
                    <mo>=</mo>
                    <mn>8</mn>
                </math>
            </div>
            <div>
                Since the discriminant is positive, we know that this quadratic equation has two solutions.
            </div>
            <div>
                Here is what the graph of this quadratic equation looks like:
            </div>
            <div>
                <canvas style="height: 150px; width: 200px;" ref="twoSolutionsChart"></canvas>
            </div>
            <div>
                As you can see, the parabola intersects the x-axis at two points.
            </div>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Parabola Symmetry
        </h2>
        <div class="sat-guide-section-content">
            All parabolas are symmetric. If you draw a vertical line through the vertex of the parabola, the parabola is symmetric on both sides of that line.
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Axis of Symmetry
                </h3>
                <div class="sat-guide-subsection-content">
                    The vertical line through the vertex of the parabola is called the axis of symmetry. It is shown in the graph below.
                    <div>
                        <canvas style="height: 150px; width: 200px;" ref="axisOfSymmetryChart"></canvas>
                    </div>
                </div>
                
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Why is this important?
                </h3>
                <div class="sat-guide-subsection-content">
                    When we are given certain points on a parabola, knowledge of its symmetry can sometimes help us infer the coordinates of other points on the parabola. Often on the SAT, we are given two points with the same y-coordinate (like the two x-intercepts). Because a parabola is symmetric, the two x-intercepts are equidistant from the axis of symmetry, and therefore the x-coordinate of the vertex will fall halfway between them. Or, in other words, the x-coordinate of the vertex is the average of the x-coordinates of the two x-intercepts.
                    <div>
                        Looking at the graph above, we can see that the two x-intercepts are -1 and 3. The average of these two numbers (aka half way between them) is 1. We can calculate this by adding the two x-coordinates and dividing by 2:
                        <div>
                            <math>
                                <mfrac>
                                    <mrow>
                                        <mn>-1</mn>
                                        <mo>+</mo>
                                        <mn>3</mn>
                                    </mrow>
                                    <mn>2</mn>
                                </mfrac>
                                <mo>=</mo>
                                <mn>1</mn>
                            </math>
                        </div>
                        <div>
                            Therefore, the x-coordinate of the vertex is 1.
                        </div>
                        <div>
                            Without needing to know the actual equation of the parabola, we were able to find the x-coordinate of the vertex just by knowing the two x-intercepts. 
                        </div>
                        <div>
                            But since we do have the equation for this parabola, we can double check our answer by using the equation from earlier for getting the x-coordinate of the vertex from standard form:
                            <math>
                                <mi>x</mi>
                                <mo>=</mo>
                                <mfrac>
                                    <mrow>
                                        <mo>-</mo>
                                        <mi>b</mi>
                                    </mrow>
                                    <mrow>
                                        <mn>2</mn>
                                        <mi>a</mi>
                                    </mrow>
                                </mfrac>
                            </math>
                        </div>
                        <div>
                            <math>
                                <mi>x</mi>
                                <mo>=</mo>
                                <mfrac>
                                    <mrow>
                                        <mo>-</mo>
                                        <mo>(</mo>
                                        <mn>-2</mn>
                                        <mo>)</mo>
                                    </mrow>
                                    <mrow>
                                        <mn>2</mn>
                                        <mn>(1)</mn>
                                    </mrow>
                                </mfrac>
                                <mo>=</mo>
                                <mn>1</mn>
                            </math>
                        </div>
                        <div>
                            We get the same answer both ways, demonstrating the validity of both approaches.
                        </div>
                        <div>
                            Note that this approach isn't only limited to when we know the two x-intercepts. If we know any two points on the parabola with the same y-coordinate, we can infer that the x-coordinate of the vertex must fall halfway between them.
                        </div>
                        <div>
                            For example, let's look at the graph below.
                        </div>
                        <div>
                            <canvas style="height: 150px; width: 200px;" ref="vertexFromTwoPointsChart"></canvas>
                        </div>
                        <div>
                            If we were told that f(-1) = f(3), this means that the y-coordinate when x = -1 is the same as the y-coordinate when x = 3. This is depicted by the red dots in the graph above. Since the parabola is symmetric, the x-coordinate of the vertex must fall halfway between -1 and 3.
                        </div>
                        <div>
                            Taking the average of -1 and 3, we again get:
                            <math>
                                <mfrac>
                                    <mrow>
                                        <mn>-1</mn>
                                        <mo>+</mo>
                                        <mn>3</mn>
                                    </mrow>
                                    <mn>2</mn>
                                </mfrac>
                                <mo>=</mo>
                                <mn>1</mn>
                            </math>
                        </div>
                        <div>
                            Therefore, just by knowing that f(-1) = f(3), we were able to infer that the x-coordinate of the vertex is 1, without knowing anything else about the parabola or its equation.
                        </div>
                        <div>
                            One other way we could apply this principle of symmetry, although this comes up less often on the SAT, is if we know the x-coordinate of the vertex and one other point on the parabola. From this, we can infer that there is another point on the parabola that has the same y-coordinate as the given point, and has an x-coordinate that is the same distance from the axis of symmetry as the given point.
                        </div>
                        <div>
                            For example, using the same graph above, if we were told that f(-1) = 2, and that the vertex was at (1, -2) (or even just knowing that the vertex x-coordinate is 1), we can infer that there is also a point on the parabola at (3, 2). This is because 3 and -1 are equidistant from the axis of symmetry, which is x = 1.
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
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
        this.createLinearQuadraticSystemChart()
        this.createNoXInterceptsChart2()
        this.createOneOffsetXInterceptChart()
        this.createTwoSolutionsChart()
        this.createAxisOfSymmetryChart()
        this.createVertexFromTwoPointsChart()
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
                                drawTicks: false,
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
                                drawTicks: false,
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
                                drawTicks: false,
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
                                drawTicks: false,
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
                                drawTicks: false,
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
                                drawTicks: false,
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
                                drawTicks: false,
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
                                drawTicks: false,
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
        createLinearQuadraticSystemChart() {
            // Generate points for both functions
            const quadraticPoints = []
            const linearPoints = []
            
            // Generate more points for smoother curves
            for (let x = -6; x <= 3; x += 0.1) {
                quadraticPoints.push({
                    x: x,
                    y: x * x + 4 * x - 5  // y = x² + 4x - 5
                })
                
                linearPoints.push({
                    x: x,
                    y: x + 5  // y = x + 5
                })
            }

            const ctx = this.$refs.linearQuadraticSystemChart
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'y = x² + 4x - 5',
                            data: quadraticPoints,
                            showLine: true,
                            borderColor: '#2196F3',
                            backgroundColor: '#2196F3',
                            pointRadius: 0,
                        },
                        {
                            label: 'y = x + 5',
                            data: linearPoints,
                            showLine: true,
                            borderColor: '#4CAF50',
                            backgroundColor: '#4CAF50',
                            pointRadius: 0,
                        },
                        {
                            label: 'Intersection Points',
                            data: [
                                { 
                                    x: -5, 
                                    y: 0,
                                    pointStyle: 'circle',
                                    pointBackgroundColor: '#F44336'
                                },
                                { 
                                    x: 2, 
                                    y: 7,
                                    pointStyle: 'circle',
                                    pointBackgroundColor: '#F44336'
                                }
                            ],
                            showLine: false,
                            borderColor: '#F44336',
                            backgroundColor: '#F44336',
                            pointRadius: 4,
                        }
                    ]
                },
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                },
                                stepSize: 1,
                                callback: function(value) {
                                    if (Number.isInteger(value)) {
                                        return value;
                                    }
                                }
                            },
                            min: -6,
                            max: 3
                        },
                        y: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                }
                            },
                            min: -10,
                            max: 10
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true,
                            callbacks: {
                                label: function(context) {
                                    const point = context.raw;
                                    if (point.x === -5 && point.y === 0) {
                                        return '(-5, 0)';
                                    } else if (point.x === 2 && point.y === 7) {
                                        return '(2, 7)';
                                    }
                                    return '';
                                }
                            }
                        }
                    }
                }
            })
        },
        createNoXInterceptsChart2() {
            // Generate points for y = x² - 4x + 5
            const points = []
            for (let x = -1; x <= 5; x += 0.1) {
                points.push({
                    x: x,
                    y: x * x - 4 * x + 5
                })
            }

            const ctx = this.$refs.noXInterceptsChart2
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'y = x² - 4x + 5',
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
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                },
                                stepSize: 1
                            },
                            min: -1,
                            max: 5
                        },
                        y: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                }
                            },
                            min: -2,
                            max: 4
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
        createOneOffsetXInterceptChart() {
            // Generate points for y = x² - 4x + 4
            const points = []
            for (let x = -1; x <= 5; x += 0.1) {
                points.push({
                    x: x,
                    y: x * x - 4 * x + 4
                })
            }

            const ctx = this.$refs.oneOffsetXInterceptChart
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'y = x² - 4x + 4',
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
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                },
                                stepSize: 1
                            },
                            min: -1,
                            max: 5
                        },
                        y: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                },
                                stepSize: 1,
                               
                            },
                            min: -1,
                            max: 4
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
        createTwoSolutionsChart() {
            // Generate points for y = x² - 4x + 2
            const points = []
            for (let x = -1; x <= 5; x += 0.1) {
                points.push({
                    x: x,
                    y: Math.pow(x, 2) - 4 * x + 2
                })
            }

            const ctx = this.$refs.twoSolutionsChart
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'y = x² - 4x + 2',
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
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                },
                                stepSize: 1,
                                callback: function(value) {
                                    if (Number.isInteger(value)) {
                                        return value;
                                    }
                                }
                            },
                            min: -1,
                            max: 5
                        },
                        y: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent'
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                },
                                stepSize: 1
                            },
                            min: -3,
                            max: 3
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
        createAxisOfSymmetryChart() {
            // Generate points for y = x² - 2x - 3
            const points = []
            for (let x = -2; x <= 4; x += 0.1) {
                points.push({
                    x: x,
                    y: Math.pow(x, 2) - 2 * x - 3
                })
            }

            // Create points for the vertical dashed line at x = 1 (axis of symmetry)
            const symmetryLine = []
            for (let y = -5; y <= 5; y += 0.1) {
                symmetryLine.push({
                    x: 1,
                    y: y
                })
            }

            const ctx = this.$refs.axisOfSymmetryChart
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'y = x² - 2x - 3',
                        data: points,
                        showLine: true,
                        borderColor: '#2196F3',
                        backgroundColor: '#2196F3',
                        pointRadius: 0,
                    },
                    {
                        data: symmetryLine,
                        showLine: true,
                        borderColor: '#FF5722',
                        backgroundColor: '#FF5722',
                        pointRadius: 0,
                        borderDash: [5, 5],
                        display: false
                    },
                    {
                        label: 'X-intercepts',
                        data: [
                            { x: -1, y: 0 },
                            { x: 3, y: 0 }
                        ],
                        showLine: false,
                        borderColor: '#F44336',
                        backgroundColor: '#F44336',
                        pointRadius: 4,
                    },
                    {
                        label: 'Vertex',
                        data: [
                            { x: 1, y: -4 }
                        ],
                        showLine: false,
                        borderColor: '#4CAF50',
                        backgroundColor: '#4CAF50',
                        pointRadius: 4,
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
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent',
                                z: 1
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                },
                                stepSize: 1,
                                autoSkip: false,
                            },
                            min: -2,
                            max: 4
                        },
                        y: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent',
                                z: 1
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                },
                                stepSize: 1,
                                autoSkip: false,
                            },
                            min: -5,
                            max: 2
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            labels: {
                                filter: function(legendItem, data) {
                                    return legendItem.text === 'y = x² - 2x - 3';
                                }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    if (context.datasetIndex === 2) { // X-intercepts dataset
                                        return `(${context.parsed.x}, ${context.parsed.y})`;
                                    }
                                    if (context.datasetIndex === 3) { // Vertex dataset
                                        return `Vertex: (${context.parsed.x}, ${context.parsed.y})`;
                                    }
                                    return '';
                                }
                            }
                        }
                    }
                }
            })
        },
        createVertexFromTwoPointsChart() {
            // Generate points for y = x² - 2x - 1
            const points = []
            for (let x = -2; x <= 4; x += 0.1) {
                points.push({
                    x: x,
                    y: Math.pow(x, 2) - 2 * x - 1
                })
            }

            // Create points for the vertical dashed line at x = 1 (axis of symmetry)
            const symmetryLine = []
            for (let y = -3; y <= 3; y += 0.1) {
                symmetryLine.push({
                    x: 1,
                    y: y
                })
            }

            const ctx = this.$refs.vertexFromTwoPointsChart
            new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'y = x² - 2x - 1',
                        data: points,
                        showLine: true,
                        borderColor: '#2196F3',
                        backgroundColor: '#2196F3',
                        pointRadius: 0,
                    },
                    {
                        data: symmetryLine,
                        showLine: true,
                        borderColor: '#FF5722',
                        backgroundColor: '#FF5722',
                        pointRadius: 0,
                        borderDash: [5, 5],
                        display: false
                    },
                    {
                        label: 'Points where y = 2',
                        data: [
                            { x: -1, y: 2 },
                            { x: 3, y: 2 }
                        ],
                        showLine: false,
                        borderColor: '#F44336',
                        backgroundColor: '#F44336',
                        pointRadius: 4,
                    },
                    {
                        label: 'Vertex',
                        data: [
                            { x: 1, y: -2 }
                        ],
                        showLine: false,
                        borderColor: '#4CAF50',
                        backgroundColor: '#4CAF50',
                        pointRadius: 4,
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
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent',
                                z: 1
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                },
                                stepSize: 1,
                                autoSkip: false,
                            },
                            min: -2,
                            max: 4
                        },
                        y: {
                            grid: {
                                display: true,
                                drawOnChartArea: true,
                                drawTicks: false,
                                color: (context) => context.tick.value === 0 ? '#000' : 'transparent',
                                z: 1
                            },
                            border: {
                                display: false
                            },
                            title: {
                                display: false
                            },
                            ticks: {
                                display: true,
                                font: {
                                    size: 8
                                },
                                stepSize: 1,
                                autoSkip: false,
                            },
                            min: -3,
                            max: 3
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            labels: {
                                filter: function(legendItem, data) {
                                    return legendItem.text === 'y = x² - 2x - 1';
                                }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    if (context.datasetIndex === 2) { // Points dataset
                                        return `(${context.parsed.x}, ${context.parsed.y})`;
                                    }
                                    if (context.datasetIndex === 3) { // Vertex dataset
                                        return `Vertex: (${context.parsed.x}, ${context.parsed.y})`;
                                    }
                                    return '';
                                }
                            }
                        }
                    }
                }
            })
        }
    }
}
</script> 