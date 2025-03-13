<template>
    <h1 class="sat-guide-page-header">Exponential Functions</h1>
    <div class="section-description">
        Exponential functions are functions that increase or decrease by a constant factor as the independent variable increases. This is different from linear functions, which increase or decrease by a constant amount as the independent variable increases. In other words, exponential functions are being multiplied or divided by the same constant factor for each unit increase in the independent variable, whereas linear functions are being added or subtracted by the same constant amount for each unit increase in the independent variable. You can recognize an exponential function by the fact that the independent variable is found in an exponent.
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            General Form of an Exponential Function
        </h2>
        <div class="sat-guide-section-content">
            <p>
                The general form of an exponential function typically looks like this:
            </p>
            <p>
                <math>
                    <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo>
                    <mo>=</mo>
                    <mi>a</mi><mo>·</mo><msup><mi>b</mi><mrow><mi>c</mi><mi>x</mi></mrow></msup>
                </math>
            </p>
            <p>
                In theory, the function could be shifted vertically or horizontally, so the format could potentially be more like:
            </p>
            <p>
                <math>
                    <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo>
                    <mo>=</mo>
                    <mi>a</mi><mo>·</mo><msup><mi>b</mi><mrow><mi>c</mi><mo>(</mo><mi>x</mi><mo>-</mo><mi>h</mi><mo>)</mo></mrow></msup><mo>+</mo><mi>k</mi>
                </math>
            </p>
            <p>
                This function would represent the result of taking the first function and shifting it <span class="italic font-bold">h</span> units to the right and <span class="italic font-bold">k</span> units up. Exponential functions with this additional complexity are rare on the SAT, so we will focus mostly on the first format. 
            </p>
            <p>
                The value of "c" is often 1, so much of the time the function will just be:
            </p>
            <p>
                <math>
                    <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo>
                    <mo>=</mo>
                    <mi>a</mi><mo>·</mo><msup><mi>b</mi><mi>x</mi></msup>
                </math>
            </p>
            
            
        </div>
        <div class="sat-guide-subsection">
            <h3 class="sat-guide-subsection-header">
                The independent variable is often <i>t</i> for time, instead of <i>x</i>
            </h3>
            <div class="sat-guide-subsection-content">
                The independent variable is often time because many exponential functions model how something grows or decays over time.
                <p>
                    So, often the function will be more like:
                </p>
                <p>
                    <math>
                        <mi>f</mi><mo>(</mo><mi>t</mi><mo>)</mo>
                        <mo>=</mo>
                        <mi>a</mi><mo>·</mo><msup><mi>b</mi><mrow><mi>c</mi><mi>t</mi></mrow></msup>
                    </math>
                </p>
                <p>
                    Since the variable is <span class="font-bold italic">t</span> more often than not, we'll use <span class="font-bold italic">t</span> in our equations and examples going forward.
                </p>
            </div>
        </div>
        <div class="sat-guide-subsection">
            <h3 class="sat-guide-subsection-header">
                <span class="italic">a</span> = initial value
            </h3>
            <div class="sat-guide-subsection-content">
                The value of <span class="font-bold italic">a</span> is the initial value of the function. It is the value of the function when <span class="italic">t</span> = 0.
                <p>
                    This makes sense because <span class="italic">t</span> anything raised to the power of 0 is 1, so <math><msup><mi>b</mi><mi>t</mi></msup></math> = 1 when <span class="italic">t</span> = 0.
                </p>
                <p>
                    This means that <math><mi>f</mi><mo>(</mo><mn>0</mn><mo>)</mo><mo>=</mo><mi>a</mi><mo>·</mo><mn>1</mn></math>, or just <math><mi>f</mi><mo>(</mo><mn>0</mn><mo>)</mo><mo>=</mo><mi>a</mi></math>.
                </p>
                <p>
                    Let's use a more concrete example to demonstrate this:
                </p>
                <p>
                    <math>
                        <mi>f</mi><mo>(</mo><mi>t</mi><mo>)</mo>
                        <mo>=</mo>
                        <mn>150</mn><mo>·</mo><msup><mi>3</mi><mi>t</mi></msup>
                    </math>
                </p>
                <p>
                    <math>
                        <mi>f</mi><mo>(</mo><mn>0</mn><mo>)</mo>
                        <mo>=</mo>
                        <mn>150</mn><mo>·</mo><msup><mi>3</mi><mn>0</mn></msup>
                        <mo>=</mo>
                        <mn>150</mn><mo>·</mo><mn>1</mn>
                        <mo>=</mo>
                        <mn>150</mn>
                    </math>
                </p>
                <p>
                    In this function, our <span class="font-bold italic">a</span> value is 150. When time is equal to 0 (our starting time), the value of the function ends up being 150. Hence, <span class="font-bold italic">a</span> represents the initial value of the function.
                </p>
                
            </div>
        </div>
        <div class="sat-guide-subsection">
            <h3 class="sat-guide-subsection-header">
                <span class="italic">b</span> = growth/decay factor
            </h3>
            <div class="sat-guide-subsection-content">
                The value of <span class="font-bold italic">b</span> is the growth or decay factor of the function. The value of the function gets multiplied by <span class="font-bold italic">b</span> every time the exponent increases by 1.
                <div class="sat-guide-subsection-concept">
                    <h4 class="sat-guide-subsection-concept-header">
                        If <span class="font-bold italic">b</span> > 1, it's exponential growth
                    </h4>
                    <div class="sat-guide-subsection-concept-content">
                        If <span class="font-bold italic">b</span> is greater than 1, the function is growing exponentially. This makes sense because as the exponent increases, you continue to multiply <span class="font-bold italic">b</span> by itself more times. Whenever you multiply a number greater than 1 by itself, the number gets larger.
                    </div>
                </div>
                <div class="sat-guide-subsection-concept">
                    <h4 class="sat-guide-subsection-concept-header">
                        If 0 < <span class="font-bold italic">b</span> < 1, it's exponential decay
                    </h4>
                    <div class="sat-guide-subsection-concept-content">
                        If <span class="font-bold italic">b</span> is a positive fraction (or decimal) that is less than 1, the function is decaying exponentially. This makes sense because every time you multiple a fraction by itself, the number gets smaller.
                    </div>
                </div>
                <div class="sat-guide-subsection-concept">
                    <h4 class="sat-guide-subsection-concept-header">
                        When <span class="italic">c</span> = 1
                    </h4>
                    <div class="sat-guide-subsection-concept-content">
                        In the simpler form of exponential functions, where <math><mi>f</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mi>a</mi><mo>·</mo><msup><mi>b</mi><mi>t</mi></msup></math> (there is no constant being multiplied by <span class="italic">t</span> in the exponent), the value of the function gets multiplied by <span class="font-bold italic">b</span> for each unit increase in <span class="italic">t</span>.
                        <p>
                            For example, if <math><mi>f</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>10</mn><mo>·</mo><msup><mi>2</mi><mi>t</mi></msup></math>, since <span class="font-bold italic">b</span> = 2, the value of the function gets multiplied by 2 every time <span class="font-bold italic">t</span> increases by 1, as is demonstrated below:
                        </p>
                        <p>
                            <ul>
                                <li>
                                    <math>
                                        <mi>f</mi><mo>(</mo><mn>0</mn><mo>)</mo>
                                        <mo>=</mo>
                                        <mn>10</mn><mo>·</mo><msup><mi>2</mi><mn>0</mn></msup>
                                        <mo>=</mo>
                                        <mn>10</mn>
                                    </math>
                                </li>
                                <li>
                                    <math>
                                        <mi>f</mi><mo>(</mo><mn>1</mn><mo>)</mo>
                                        <mo>=</mo>
                                        <mn>10</mn><mo>·</mo><msup><mi>2</mi><mn>1</mn></msup>
                                        <mo>=</mo>
                                        <mn>20</mn>
                                    </math>
                                </li>
                                <li>
                                    <math>
                                        <mi>f</mi><mo>(</mo><mn>2</mn><mo>)</mo>
                                        <mo>=</mo>
                                        <mn>10</mn><mo>·</mo><msup><mi>2</mi><mn>2</mn></msup>
                                        <mo>=</mo>
                                        <mn>40</mn>
                                    </math>
                                </li>
                                <li>
                                    <math>
                                        <mi>f</mi><mo>(</mo><mn>3</mn><mo>)</mo>
                                        <mo>=</mo>
                                        <mn>10</mn><mo>·</mo><msup><mi>2</mi><mn>3</mn></msup>
                                        <mo>=</mo>
                                        <mn>80</mn>
                                    </math>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div class="sat-guide-subsection-concept">
                    <h4 class="sat-guide-subsection-concept-header">
                        When <span class="italic">c</span> is not 1
                    </h4>
                    <div class="sat-guide-subsection-concept-content">
                        In more complex exponential functions, when the variable in the exponent has a coefficient, the function is <math><mi>f</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mi>a</mi><mo>·</mo><msup><mi>b</mi><mrow><mi>c</mi><mi>t</mi></mrow></msup></math>, there are a couple ways we can interpret what is happening:
                        <p>
                            <ol>
                                <li>
                                    Whenever <span class="italic">t</span> increases by 1, the value of the function gets multiplied by <math><msup><mi>b</mi><mi>c</mi></msup></math>
                                    <ul>
                                        <li>
                                            This is because using the product rule of exponents we can rewrite the function as <math><mi>f</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mi>a</mi><mo>·</mo><msup><mrow><mo>(</mo><msup><mi>b</mi><mi>c</mi></msup><mo>)</mo></mrow><mi>t</mi></msup></math>, which means that <math><msup><mi>b</mi><mi>c</mi></msup></math> is just taking the place of <span class="font-bold italic">b</span> in the simpler form of the function.
                                        </li>
                                        <li>
                                            For example, if <math><mi>f</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>10</mn><mo>·</mo><msup><mi>2</mi><mrow><mn>2</mn><mi>t</mi></mrow></msup></math>
                                            <ul>
                                                <li>
                                                    Since <math><msup><mi>b</mi><mi>c</mi></msup></math> = <math><msup><mi>2</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn></math>, the value of the function gets multiplied by 4 every time <span class="italic">t</span> increases by 1.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Or, if <math><mi>f</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>10</mn><mo>·</mo><msup><mi>4</mi><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>t</mi></mrow></msup></math>
                                            <ul>
                                                <li>
                                                    Since <math><msup><mi>b</mi><mi>c</mi></msup></math> = <math><msup><mi>4</mi><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo>=</mo><msqrt><mi>4</mi></msqrt><mo>=</mo><mn>2</mn></math>, the value of the function gets multiplied by 2 every time <span class="italic">t</span> increases by 1.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Every time <span class="italic">t</span> increases by <math><mfrac><mn>1</mn><mi>c</mi></mfrac></math>, the value of the function gets multiplied by <span class="italic">b</span>.
                                    
                                    <ul>
                                        <li>
                                            Or, in other words, whenever <math><mi>c</mi><mo>·</mo><mi>t</mi></math> (the entire exponent) increases by 1, the value of the function gets multiplied by <span class="italic">b</span>
                                        </li>
                                        <li>
                                            For example, if <math><mi>f</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mn>10</mn><mo>·</mo><msup><mi>2</mi><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>t</mi></mrow></msup></math>
                                            <ul>
                                                
                                                <li>
                                                    <math><mfrac><mn>1</mn><mrow><mo>(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>)</mo></mrow></mfrac><mo>=</mo><mn>3</mn></math>, so every time <span class="italic">t</span> increases by 3, the value of the function gets multiplied by 2.
                                                </li>
                                                <li>
                                                    <math><mi>f</mi><mo>(</mo><mn>0</mn><mo>)</mo><mo>=</mo><mn>10</mn><mo>·</mo><msup><mi>2</mi><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>·</mo><mn>0</mn></mrow></msup><mo>=</mo><mn>10</mn><mo>·</mo><msup><mi>2</mi><mn>0</mn></msup><mo>=</mo><mn>10</mn><mo>·</mo><mn>1</mn><mo>=</mo><mn>10</mn></math>
                                                </li>
                                                <li>
                                                    <math><mi>f</mi><mo>(</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>10</mn><mo>·</mo><msup><mi>2</mi><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>·</mo><mn>3</mn></mrow></msup><mo>=</mo><mn>10</mn><mo>·</mo><msup><mi>2</mi><mn>1</mn></msup><mo>=</mo><mn>10</mn><mo>·</mo><mn>2</mn><mo>=</mo><mn>20</mn></math>
                                                </li>
                                                <li>
                                                    <math><mi>f</mi><mo>(</mo><mn>6</mn><mo>)</mo><mo>=</mo><mn>10</mn><mo>·</mo><msup><mi>2</mi><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>·</mo><mn>6</mn></mrow></msup><mo>=</mo><mn>10</mn><mo>·</mo><msup><mi>2</mi><mn>2</mn></msup><mo>=</mo><mn>10</mn><mo>·</mo><mn>4</mn><mo>=</mo><mn>40</mn></math>
                                                </li>
                                                <li>
                                                    We can see from the examples above that every time <span class="italic">t</span> increases by 3, the value of the function gets multiplied by 2.
                                                </li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Graphing Exponential Functions
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Graphing exponential functions is a bit different than graphing linear functions.
            </p>
            <p>
                Let's look at an example:
            </p>
            
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Exponential Percentage Increase/Decrease Problems
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Exponential percentage increase/decrease problems are a common application of exponential functions. They are often used in the context of interest rates, population growth, and other real-world scenarios. For example, and investment that grows by 10% each year is an exponential growth problem, and a population that decreases by 3% each year is an exponential decay problem.
            </p>
            <p>
                The typical form of these functions is:
            </p>
            <p>
                <math>
                    <mi>A</mi><mo>=</mo><mi>P</mi><mo>·</mo><msup><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo>)</mo></mrow><mi>t</mi></msup>
                </math>
            </p>
            <p>
                <ul>
                    <li>
                        <span class="italic">A</span> can stand for "aggregate" or "amount", and represents the total amount after a certain amount of time
                    </li>
                    <li>
                        <span class="italic">P</span> stands for "principal", and represents the initial amount before any growth or decay.
                    </li>
                    <li>
                        <span class="italic">r</span> is the percentage rate of growth or decay, expressed as a decimal.
                        <ul>
                            <li>
                                For example, a 10% annual increase would be represented as <span class="italic">r</span> = 0.1
                            </li>
                            <li>
                                A 10% annual decrease would be represented as <span class="italic">r</span> = -0.1.
                            </li>
                        </ul>
                    </li>
                        
                </ul>
            </p>
            <p>
                Note that this is matches up to the general form of exponential functions we explored above: <math><mi>f</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mi>a</mi><mo>·</mo><msup><mi>b</mi><mi>t</mi></msup></math>
            </p>
            <p>
                <ul>
                    <li>
                        <span class="font-bold">A</span> is the same as <span class="italic">f(t)</span>
                    </li>
                    <li>
                        <span class="font-bold">P</span> is the same as <span class="italic">a</span>
                    </li>
                    <li>
                        <span class="font-bold">(1 + r)</span> is the same as <span class="italic">b</span>
                        <ul>
                            <li>
                                For example, if we have a growth rate of 10% per year:
                                <ul>
                                    <li>
                                        <span class="italic">r</span> = 0.1
                                    </li>
                                    <li>
                                        <span class="font-bold">(1 + r)</span> = 1.1
                                    </li>
                                    <li>
                                        Thus, <span class="italic">b</span>, our growth/decay factor, is 1.1, meaning the value gets multiplied by 1.1 every year.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p>
                Let's look at a couple of examples:
            </p>
            <p>
                <ul>
                    <li>
                        You invest $500 in a savings account that earns 5% interest per year
                        <ul>
                            <li>
                                The total amount in the account over time can be modeled by the function:
                                <math>
                                    <mi>A</mi><mo>=</mo><mn>500</mn><mo>·</mo><msup><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mn>0.05</mn><mo>)</mo></mrow><mi>t</mi></msup>
                                </math>
                            </li>
                            <li>
                                Which you can simplify to:
                                <math>
                                    <mi>A</mi><mo>=</mo><mn>500</mn><mo>·</mo><msup><mrow><mo>(</mo><mn>1.05</mn><mo>)</mo></mrow><mi>t</mi></msup>
                                </math>
                            </li>
                            <li>
                                So, for example, after 15 years, the amount in the account would be:
                                <math>
                                    <mi>A</mi><mo>=</mo><mn>500</mn><mo>·</mo><msup><mrow><mo>(</mo><mn>1.05</mn><mo>)</mo></mrow><mn>15</mn></msup><mo>=</mo><mn>$1,039.47</mn>
                                </math>
                            </li>
                        </ul>
                    </li>
                    <li>
                        A population of 2,000 buffalos decreases by 2% per year
                        <ul>
                            <li>
                                The population of buffalos over time can be modeled by the function:
                                <math>
                                    <mi>P</mi><mo>=</mo><mn>2000</mn><mo>·</mo><msup><mrow><mo>(</mo><mn>1</mn><mo>-</mo><mn>0.02</mn><mo>)</mo></mrow><mi>t</mi></msup>
                                </math>
                                <ul>
                                    <li>
                                        In this case we changed our dependent variable to <span class="italic">P</span> for "population"
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Which you can simplify to:
                                <math>
                                    <mi>P</mi><mo>=</mo><mn>2000</mn><mo>·</mo><msup><mrow><mo>(</mo><mn>0.98</mn><mo>)</mo></mrow><mi>t</mi></msup>
                                </math>
                            </li>
                            <li>
                                So, for example, after 10 years, the population of buffalos would be:
                                <math>
                                    <mi>P</mi><mo>=</mo><mn>2000</mn><mo>·</mo><msup><mrow><mo>(</mo><mn>0.98</mn><mo>)</mo></mrow><mn>10</mn></msup><mo>=</mo><mn>1,623</mn>
                                </math>
                            </li>
                            
                        </ul>
                    </li>
                </ul>
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Different Compounding Periods
                </h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        In the examples above, we assumed that the interest was compounded annually. In other words, the percentage increase or decrease was applied once per year. In some scenarios, particularly in the realm of finance, interest may be compounded more frequently. For example, it is common for credit card companies to compound interest monthly, or for banks to compound interest daily.
                    </p>
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            What does it mean when interest is compounded multiple times per year?
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            Let's use an example to illustrate this.
                            <p>
                                Suppose you take out a loan with an interest rate of 12% per year, compounded monthly. 
                                <ul>
                                    <li>
                                        Since it is compounded monthly, this means that it is compounded 12 times per year. 
                                    </li>
                                    <li>
                                        So, instead of the 12% growth being applied once per year, one twelfth of the interest rate (in this case, 1%) is applied each month.
                                    </li>
                                    <li>
                                        This actually results in the total amount growing by a little more than 12% each year, so the 12% annual interest rate can be a bit misleading.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Formula for compounding multiple times per year
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            <p>
                                The formula for compound interest is:
                            </p>
                            <p>
                                <math>
                                    <mi>A</mi><mo>=</mo><mi>P</mi><mo>·</mo><msup><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mfrac><mi>r</mi><mi>n</mi></mfrac><mo>)</mo></mrow><mrow><mi>n</mi><mi>t</mi></mrow></msup>
                                </math>
                            </p>
                            <p>
                                <ul>
                                    <li>
                                        In this formula we have a new constant, <span class="italic">n</span>, which represents the number of times the interest is compounded per year.
                                        <ul>
                                            <li>
                                                For example, if the interest is compounded monthly, <span class="italic">n</span> = 12.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        The formula is very similar to our simple percent increase/decrease formula, with just a couple of changes:
                                        <ul>
                                            <li>
                                                Instead of <span class="italic">(1 + r)</span>, we use <span class="italic">(1 + r/n)</span>.
                                                <ul>
                                                    <li>
                                                        For example, if we have an annual interest rate of 12%, and we are compounding monthly, we would use <span class="italic">(1 + 0.12/12)</span> = 1.01 in our formula.
                                                    </li>
                                                    <li>
                                                        Note that if <span class="italic">n</span> = 1, which would be the case if the interest is compounded annually, this formula simplifies to our simple percent increase/decrease formula.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Instead of the exponent being merely <span class="italic">t</span>, it is now <span class="italic">nt</span>.
                                                <ul>
                                                    <li>
                                                        For example, if we are compounding monthly, and we want to find the amount after 6 months, we would use <span class="italic">nt</span> = 12·(0.5) = 6.
                                                        <ul>
                                                            <li>
                                                                The 0.5 comes from the fact that 6 months is equal to 0.5 years.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Unlikely to come up on the SAT
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            <p>
                                Problems that require you to use the compound interest formula don't tend to show up on the SAT, but it doesn't hurt to be prepared!
                            </p>
                            <p>
                                However, you might encounter problems with exponential functions that have similar characteristics to compound interest problems, so this knowledge might still be useful!
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template> 