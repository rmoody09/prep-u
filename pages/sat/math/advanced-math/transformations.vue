<template>
    <h1 class="sat-guide-page-header">Function Transformations</h1>
    <div class="section-description">
        All functions can be depicted as a graph. When we transform functions, we are altering the function in order to manipulate the graph in a specific way. The most common transformations are translations (shifting the graph up, down, left, or right), but reflections and stretches are also common.
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Horizontal Translations
        </h2>
        <div class="sat-guide-section-content">
            <p>
                A horizontal translation is a transformation that shifts the graph of a function to the left or right.
            </p>
            <p>
                In order to shift a graph to the right by <span class="italic">h</span> units, we simply replace every instance of the independent variable (usually <span class="italic">x</span>) with <span class="italic">(x - h)</span>.
            </p>
            <p>
                It's important to note that, while counterintuitive, a shift in the positive direction (to the right) results in us subtracting <span class="italic">h</span> from <span class="italic">x</span>. On the other hand, a shift to the left (a negative shift) would result in us adding <span class="italic">h</span> to <span class="italic">x</span>.
            </p>
            <p>
                Let's look at a few examples:
            </p>
            <p>
                <ul>
                    <li>
                        <math>
                            <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>5</mn>
                        </math>
                        <ul>
                            <li>
                                If <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> represents the graph of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> shifted 5 units to the right, then <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>-</mo><mn>5</mn><mo>)</mo></math>.
                            </li>
                            <li>
                                <math>
                                    <mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><mo>(</mo><mi>x</mi><mo>-</mo><mn>5</mn><mo>)</mo><mo>+</mo><mn>5</mn>
                                </math>
                            </li>
                            <li>
                                This simplifies to: <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>10</mn></math>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <math>
                            <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>7x</mn><mo>+</mo><mn>12</mn>
                        </math>
                        <ul>
                            <li>
                                If <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> represents the graph of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> shifted 2 units to the right, then <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></math>.
                                
                            </li>
                            <li>
                                <math>
                                    <mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>7</mn><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo><mo>+</mo><mn>12</mn>
                                </math>
                            </li>
                            <li>
                                This simplifies to: <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <math>
                            <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mn>2</mn><mi>x</mi></mrow><mn>2</mn></msup><mo>-</mo><mn>7x</mn><mo>+</mo><mn>10</mn>
                        </math>
                        <ul>
                            <li>
                                If <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> represents the graph of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> shifted 3 units to the left, then <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></math>.
                            </li>
                            <li>
                                <math>
                                    <mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mn>7</mn><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo><mo>+</mo><mn>10</mn>
                                </math>
                            </li>
                            <li>
                                This simplifies to: <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>7</mn></math>
                            </li>
                        </ul>
                    </li>
                </ul>
                
            </p>
        </div>
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Vertical Translations
        </h2>
        <div class="sat-guide-section-content">
            <p>
                A vertical translation is a transformation that shifts the graph of a function up or down.
            </p>
            <p>
                If we want to shift a graph up by <span class="italic">k</span> units, there are two approaches we can take:
            </p>
            <p>
                <ol class="ol-bold-numbers">
                    <li>
                        <div class='font-bold'>
                            Replace every instance of the dependent variable (usually <span class="italic">y</span>) with <span class="italic">(y - k)</span>.
                        </div>
                        <ul>
                            <li>
                                Example: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>5</mn></math>
                                <ul>
                                    <li>
                                        If we want to shift this graph up by 3 units, we would replace <span class="italic">y</span> with <span class="italic">(y - 3)</span>.
                                        <ul>
                                            <li>
                                                Note that when we shift <span class="font-bold">up</span>, we are <span class="font-bold">subtracting</span> a constant.
                                            </li>
                                            <li>
                                                This gives us: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>(</mo><mi>y</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>5</mn></math>
                                            </li>
                                            <li>
                                                Which simplifies to: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>11</mn></math>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Or if we want to shift this graph down by 4 units, we would replace <span class="italic">y</span> with <span class="italic">(y + 4)</span>.
                                        <ul>
                                            <li>
                                                Note that when we shift <span class="font-bold">down</span>, we are <span class="font-bold">adding</span> a constant.
                                            </li>
                                            <li>
                                                This gives us: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>(</mo><mi>y</mi><mo>+</mo><mn>4</mn><mo>)</mo><mo>=</mo><mn>5</mn></math>
                                            </li>
                                            <li>
                                                Which simplifies to: <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>-3</mn></math>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class='font-bold'>
                            Add <span class="italic">k</span> to the entire function.
                        </div>
                        <ul>
                            <li>
                                Example: <math><mi>y</mi><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>4</mn></math>
                                <ul>
                                    <li>
                                        If we want to shift this graph up by 3 units, we would add 3 to the entire function.
                                        <ul>
                                            <li>
                                                This gives us: <math><mi>y</mi><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>4</mn><mo>+</mo><mn>3</mn></math>
                                            </li>
                                            <li>
                                                Which simplifies to: <math><mi>y</mi><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>7</mn></math>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Or if we want to shift this graph down by 2 units, we would subtract 2 from the entire function.
                                        <ul>
                                            <li>
                                                This gives us: <math><mi>y</mi><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>4</mn><mo>-</mo><mn>2</mn></math>
                                            </li>
                                            <li>
                                                Which simplifies to: <math><mi>y</mi><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li>
                                Note that this approach requires the dependent variable (y) to be isolated on one side of the equation before we can add the constant to the other side.
                            </li>
                            
                        </ul>
                    </li>
                </ol>
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Advantages and Disadvantages of Approach 1 (replacing y with y - k)
                </h3>
                <div class="sat-guide-subsection-content">
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Advantages
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            <ul class="ml-4">
                                <li>
                                    This is very similar to the horizontal translation process, so it allows us to have consistency in our approach.
                                </li>
                                <li>
                                    It's especially useful when the dependent variable is not already isolated on one side of the equation.
                                    <ul>
                                        <li>
                                            For example, if we have the equation <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>5</mn></math> and we want to shift it up by 3 units
                                            <ul>
                                                <li>
                                                    We simply replace <span class="italic">y</span> with <math><mo>(</mo><mi>y</mi><mo>-</mo><mn>3</mn><mo>)</mo></math>, giving us <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>(</mo><mi>y</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>5</mn></math>.
                                                </li>
                                                <li>
                                                    If we were to use the other approach, we would first need to solve for <span class="italic">y</span> in terms of x before being able to form a new equation to represent the shift.
                                                </li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Disadvantages
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            <ul class="ml-4">
                                <li>
                                    Like our horizontal shift process, it's a bit counterintuitive because we are subtracting a constant when we have a positive shift, and adding a constant when we have a negative shift.
                                </li>
                                <li>
                                    It is also slightly more cumbersome if the dependent variable is already isolated on one side of the equation.
                                    <ul>
                                        <li>
                                            For example, if we have the equation <math><mi>y</mi><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>4</mn></math> and we want to shift it up by 3 units, we would start with:
                                            <ul>
                                                <li>
                                                    <math><mo>(</mo><mi>y</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>4</mn></math>
                                                </li>
                                                <li>
                                                    The to get the equation into slope-intercept form, we would need to add 3 to both sides of the equation, yielding <math><mi>y</mi><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><mn>7</mn></math>.
                                                </li>
                                                <li>
                                                    This is an extra step compared with just adding 3 to the right side of the equation to begin with.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Advantages and Disadvantages of Approach 2 (adding k to the entire function)
                </h3>
                <div class="sat-guide-subsection-content">
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Advantages
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            <ul class="ml-4">
                                <li>
                                    Some find this approach more intuitive, because a positive shift corresponds to adding a positive constant.
                                </li>
                                <li>
                                    It's a little faster when the dependent variable is already isolated on one side of the equation.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Disadvantages
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            <ul class="ml-4">
                                <li>
                                    It's less consistent with our horizontal shift process, so it can be trickier to remember two different processes for vertical shifts and horizontal shifts.
                                </li>
                                <li>
                                    It's also more cumbersome if the dependent variable is not already isolated on one side of the equation, since you first need to isolate it before adding/subtracting the constant.
                                    <ul>
                                        <li>
                                            For example, if we have the equation <math><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>5</mn></math> and we want to shift it up by 3 units, it would take us a couple of steps to first isolate <span class="italic">y</span>:
                                            <ul>
                                                <li>
                                                    <math><mn>2</mn><mi>y</mi><mo>=</mo><mo>-</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>5</mn></math>
                                                </li>
                                                <li>
                                                    <math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac></math>
                                                </li>
                                                <li>
                                                    Then, after isolating <span class="italic">y</span>, we would need to add 3 to the right side to shift it up by 3 units, and in this case also find a common denominator to combine the constants:
                                                    <ul>
                                                        <li>
                                                            <math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo>+</mo><mn>3</mn></math>
                                                        </li>
                                                        <li>
                                                            <math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>6</mn><mn>2</mn></mfrac></math>
                                                        </li>
                                                        <li>
                                                            <math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mfrac><mn>11</mn><mn>2</mn></mfrac></math>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Stretches and Compressions
        </h2>
        <div class="sat-guide-section-content">
            <p>
                A stretch or compression is a transformation that alters the shape of a graph by either making it taller, shorter, wider, or narrower. There are four different types of stretches and compressions:
                <ul>
                    <li>
                        Vertical stretch
                    </li>
                    <li>
                        Vertical compression
                    </li>
                    <li>
                        Horizontal stretch
                    </li>
                    <li>
                        Horizontal compression
                    </li>
                </ul>
            </p>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Vertical Stretches and Compressions
                </h3>
                <div class="sat-guide-subsection-content">
                    <div>
                        A vertical stretch is a transformation that essentially makes the graph taller. More specifically, for any given x-value, the corresponding y-value gets multiplied by a constant factor, pushing it further away from the x-axis. So, any positive y-value will become greater (more positive), and any negative y-value will become less (more negative).
                    </div>
                    <div>
                        A vertical compression is the opposite of a vertical stretch. Instead of making the graph taller, it makes the graph shorter. Again, for any given x-value, the corresponding y-value gets multiplied by a constant factor, but in this case the result pulls it closer to the x-axis. So, any positive y-value will become smaller (less positive), and any negative y-value will become greater (less negative).
                    </div>
                    <div>
                        To perform a vertical stretch or compression, we simply multiply the entire function by a constant factor. So, a vertical stretch or compression of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> by a factor of <math><mi>a</mi></math> is represented as <math><mi>a</mi><mo>·</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math>.
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Stretch vs Compression is decided by the value of <span class="italic">a</span>
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            <ul>
                                <li>
                                    If <math><mi>a</mi></math> is greater than 1, the graph is stretched by a factor of <math><mi>a</mi></math>.
                                </li>
                                <li>
                                    If <math><mi>a</mi></math> is between 0 and 1, the graph is compressed by a factor of <math><mi>a</mi></math>.
                                </li>
                            </ul>

                            <div>
                                Let's take the function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>2</mn></math> as an example:
                                <ul>
                                    <li>
                                        To stretch this graph vertically by a factor of 3, we would multiply the entire function by 3:
                                        <ul>
                                            <li>
                                                <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></math>
                                            </li>
                                            <li>
                                                This simplifies to: <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>6</mn></math>
                                            </li>
                                            <li>
                                                This makes the graph 3 times "taller". In other words, for any given x-value, the y-value is 3 times further away from the x-axis.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        To compress this graph vertically by a factor of <math><mn>2</mn></math> (make it <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> as tall), we would multiply the entire function by <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>:
                                        <ul>
                                            <li>
                                                <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></math>
                                            </li>
                                            <li>
                                                This simplifies to: <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>x</mi><mo>-</mo><mn>1</mn></math>
                                            </li>
                                            <li>
                                                This makes the graph half as tall. In other words, for any given x-value, the y-value is half as far away from the x-axis.
                                            </li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Visualizing Vertical Stretches and Compressions
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            To see what vertical stretches and compressions look like, let's take a look at the graphs of the functions used in the examples above:
                            <div>
                                <div class="chart-container">
                                    <h3><math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>2</mn></math></h3>
                                    <canvas ref="chart1Ref" width="150" height="150"></canvas>
                                </div>
                                
                                <div class="chart-container">
                                    <h3><math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><mo>·</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math></h3>
                                    <canvas ref="chart2Ref" width="150" height="150"></canvas>
                                </div>
                                
                                <div class="chart-container">
                                    <h3><math><mi>h</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>·</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math></h3>
                                    <canvas ref="chart3Ref" width="150" height="150"></canvas>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Compared with our original function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math>, the graph of <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is stretched vertically by a factor of 3, and the graph of <math><mi>h</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is compressed vertically by a factor of <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>. For each value of x, the y-value of <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is 3 times as far from the x-axis as the original y-value, and the y-value of <math><mi>h</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is half as far from the x-axis as the original y-value.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Slopes of vertically stretched and compressed graphs
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            <p>
                                When we stretch a graph vertically, for any given x-value, the slope of the graph gets steeper. When we compress a graph vertically, for any given x-value, the slope of the graph gets less steep. You can see this depicted in the graphs above.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Horizontal Stretches and Compressions
                </h3>
                <div class="sat-guide-subsection-content">
                    <div>
                        Whereas a vertical stretch makes a graph taller, a horizontal stretch makes a graph wider. More specifically, for any given y-value, the corresponding x-value gets multiplied by a constant factor, pushing it further away from the y-axis. So, any positive x-value will become greater (more positive), and any negative x-value will become less (more negative).
                    </div>
                    <div>
                        A horizontal compression is the opposite of a horizontal stretch. Instead of making the graph wider, it makes the graph narrower. Again, for any given y-value, the corresponding x-value gets multiplied by a constant factor, but in this case the result pulls it closer to the y-axis. So, any positive x-value will become smaller (less positive), and any negative x-value will become greater (less negative).
                    </div>
                    <div>
                        To perform a horizontal stretch or compression, we replace each instance of the independent variable (usually <span class="italic">x</span>) with <math><mo>(</mo><mi>b</mi><mo>·</mo><mi>x</mi><mo>)</mo></math>. So, a horizontal stretch or compression of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> by a factor of <math><mi>b</mi></math> is represented as <math><mi>f</mi><mo>(</mo><mi>b</mi><mo>·</mo><mi>x</mi><mo>)</mo></math>.
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Stretch is inversely related to the value of <span class="italic">b</span>
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            <ul>
                                <li>
                                    If <math><mi>b</mi></math> is greater than 1, the graph is compressed by a factor of <math><mi>b</mi></math>.
                                </li>
                                <li>
                                    If <math><mi>b</mi></math> is between 0 and 1, the graph is stretched by a factor of <math><mfrac><mn>1</mn><mi>b</mi></mfrac></math>.
                                </li>
                            </ul>
                            <div>
                                Let's take the function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>2</mn></math> as an example:
                                <ul>
                                    <li>
                                        To stretch this graph horizontally by a factor of <math><mn>2</mn></math> (make it twice as wide), we would replace <span class="italic">x</span> with <math><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>·</mo><mi>x</mi><mo>)</mo></math>:
                                        <ul>
                                            <li>
                                                <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>f</mi><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>·</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>·</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>·</mo><mi>x</mi><mo>)</mo><mo>-</mo><mn>2</mn></math>
                                            </li>
                                            <li>
                                                This simplifies to: <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>x</mi><mo>-</mo><mn>2</mn></math>
                                            </li>
                                            <li>
                                                This makes the graph twice as wide. In other words, for any given y-value, the x-value is twice as far away from the y-axis.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        To compress this graph horizontally by a factor of <math><mn>2</mn></math> (make it <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> as wide), we would replace <span class="italic">x</span> with <math><mo>(</mo><mn>2</mn><mo>·</mo><mi>x</mi><mo>)</mo></math>:
                                        <ul>
                                            <li>
                                                <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>f</mi><mo>(</mo><mn>2</mn><mo>·</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mn>2</mn><mo>·</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mo>(</mo><mn>2</mn><mo>·</mo><mi>x</mi><mo>)</mo><mo>-</mo><mn>2</mn></math>
                                            </li>
                                            <li>
                                                This simplifies to: <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>2</mn></math>
                                            </li>
                                            <li>
                                                This makes the graph half as wide. In other words, for any given y-value, the x-value is half as far away from the y-axis.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Visualizing Horizontal Stretches and Compressions
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            To see what horizontal stretches and compressions look like, let's take a look at the graphs of the functions used in the examples above:
                            <div>
                                <div class="chart-container">
                                    <h3><math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>2</mn></math></h3>
                                    <canvas ref="horizontalChart1Ref" width="150" height="150"></canvas>
                                </div>
                                
                                <div class="chart-container">
                                    <h3><math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mn>0.5</mn><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mn>0.5</mn><mi>x</mi><mo>-</mo><mn>2</mn></math></h3>
                                    <canvas ref="horizontalChart2Ref" width="150" height="150"></canvas>
                                </div>
                                
                                <div class="chart-container">
                                    <h3><math><mi>h</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mn>2</mn><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>2</mn></math></h3>
                                    <canvas ref="horizontalChart3Ref" width="150" height="150"></canvas>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Compared with our original function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math>, the graph of <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is compressed horizontally by a factor of 2, and the graph of <math><mi>h</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is stretched horizontally by a factor of 2. For each value of x, the y-value of <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is half as far from the y-axis as the original y-value, and the y-value of <math><mi>h</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> is twice as far from the y-axis as the original y-value.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="sat-guide-subsection-concept">
                        <h4 class="sat-guide-subsection-concept-header">
                            Slopes of horizontally stretched and compressed graphs
                        </h4>
                        <div class="sat-guide-subsection-concept-content">
                            <p>
                                When we stretch a graph horizontally, for any given y-value, the slope of the graph gets less steep. When we compress a graph horizontally, for any given y-value, the slope of the graph gets steeper. You can see this depicted in the graphs above.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Reflections
        </h2>
        <div class="sat-guide-section-content">
            <div>
                A reflection is a transformation that flips a graph over a line, called the line of reflection. You can think of it as the mirror image of the graph, reflected over the line of reflection. In theory, you can reflect a graph over any line, but the most common lines of reflection are the x-axis and the y-axis.
            </div>
            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Reflections over the x-axis
                </h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        To reflect a graph over the x-axis, we simply multiply the entire function by <math><mo>-</mo><mn>1</mn></math>.
                    </p>
                    <p>
                        Let's take the function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>2</mn></math> as an example:
                    </p>
                    <p>
                        To reflect this graph over the x-axis, we would multiply the entire function by <math><mo>-</mo><mn>1</mn></math>:
                    </p>
                    <p>
                        <math><mo>(</mo><mo>-</mo><mn>1</mn><mo>)</mo><mo>·</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>(</mo><mo>-</mo><mn>1</mn><mo>)</mo><mo>·</mo><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></math>
                    </p>
                    <p>
                        This simplifies to:
                    </p>
                    <p>
                        <math><mo>-</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>2</mn></math>
                    </p>
                    <p>
                        Now let's take a look at the graphs of the original function and the reflected function:
                    </p>
                    <div>
                        <div class="chart-container">
                            <h3><math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>2</mn></math></h3>
                            <canvas ref="reflectionXChart1Ref" width="150" height="150"></canvas>
                        </div>
                        <div class="chart-container">
                            <h3><math><mo>-</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>2</mn></math></h3>
                            <canvas ref="reflectionXChart2Ref" width="150" height="150"></canvas>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">
                    Reflections over the y-axis
                </h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        To reflect a graph over the y-axis, we simply replace each instance of <math><mi>x</mi></math> with <math><mo>-</mo><mi>x</mi></math>.
                    </p>
                    <p>
                        First let's try this with the most simple parabola, <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></math>.
                    </p>
                    <p>
                        If we replace each instance of <math><mi>x</mi></math> with <math><mo>-</mo><mi>x</mi></math>, we get: 
                        <math><mi>f</mi><mo>(</mo><mo>-</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mo>-</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup></math>
                    </p>
                    <p>
                       When we square <math><mo>-</mo><mi>x</mi></math>, we get <math><msup><mi>x</mi><mn>2</mn></msup></math>, because squaring a negative number makes it positive. So we end up with the same function we started with. This makes sense, because the parabola we started with is symmetric over the y-axis, so reflecting it over the y-axis doesn't change it.
                    </p>
                    
                    <p>
                        Now let's try a function that will better demonstrate the effect of reflecting over the y-axis. 
                        <div>
                            Let's take the cubic function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>-</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></math> as an example:
                        </div>
                    </p>
                    <p>
                        To reflect this graph over the y-axis, we replace each instance of <math><mi>x</mi></math> with <math><mo>-</mo><mi>x</mi></math>:
                    </p>
                    <p>
                        <math><mi>f</mi><mo>(</mo><mo>-</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mo>-</mo><mi>x</mi><mo>)</mo></mrow><mn>3</mn></msup><mo>-</mo><mn>2</mn><msup><mrow><mo>(</mo><mo>-</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mo>(</mo><mo>-</mo><mi>x</mi><mo>)</mo></math>
                    </p>
                    <p>
                        This simplifies to:
                    </p>
                    <p>
                        <math><mi>f</mi><mo>(</mo><mo>-</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><msup><mi>x</mi><mn>3</mn></msup><mo>-</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi></math>
                    </p>
                    <p>
                        Now let's take a look at the graphs of the original function and the reflected function:
                    </p>
                    <div>
                        <div class="chart-container">
                            <h3><math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>-</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></math></h3>
                            <canvas ref="reflectionYChart1Ref" width="150" height="150"></canvas>
                        </div>
                        <div class="chart-container">
                            <h3><math><mi>f</mi><mo>(</mo><mo>-</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><msup><mi>x</mi><mn>3</mn></msup><mo>-</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi></math></h3>
                            <canvas ref="reflectionYChart2Ref" width="150" height="150"></canvas>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Combining Transformations
        </h2>
        <div class="sat-guide-section-content">
            <p>
                We don't have to be limited to just one transformation at a time. We can combine transformations to create more complex functions.
            </p>
            <p>
                Let's start with the simple parabola <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></math> as an example.
            </p>
            <p>
                Let's start by multiplying the function by 2, which will stretch it vertically by a factor of 2. This gives us:
            </p>
            <p>
                <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></math>
            </p>
            <p>
                Now let's multiply the function by -1, which will reflect the graph over the x-axis. This gives us:
            </p>
            <p>
                <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></math>
            </p>
            <p>
                Now let's shift it to the right 1 unit by replacing each instance of <math><mi>x</mi></math> with <math><mi>x</mi><mo>-</mo><mn>1</mn></math>. This gives us:
            </p>
            <p>
                <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup></math>
            </p>
            <p>
                Finally, let's shift it up 2 units by adding 2 to the function. This gives us:
            </p>
            <p>
                <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>2</mn></math>
            </p>
            <p>
                Now let's take a look at the graphs of the original function and the transformed function:
            </p>
            <div>
                <div class="chart-container">
                    <h3><math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></math></h3>
                    <canvas ref="combinedTransformationsChart1Ref" width="150" height="150"></canvas>
                </div>
                <div class="chart-container">
                    <h3><math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mn>2</mn><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>2</mn></math></h3>
                    <canvas ref="combinedTransformationsChart2Ref" width="150" height="150"></canvas>
                </div>
            </div>
            <p>
                Compared with our original function, we can see that the transformed function:
            </p>
            <ul>
                <li>
                    Has been stretched vertically by a factor of 2 (making it look narrower).
                </li>
                <li>
                    Has been reflected over the x-axis (flipped upside down).
                </li>
                <li>
                    Has been shifted to the right 1 unit (the vertex is now at x=1 instead of x=0).
                </li>
                <li>
                    Has been shifted up 2 units (the vertex is now at y=2 instead of y=0).
                </li>
            </ul>
            
        </div>
        
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';

// Create refs for all chart elements
const chart1Ref = ref(null);
const chart2Ref = ref(null);
const chart3Ref = ref(null);
const horizontalChart1Ref = ref(null);
const horizontalChart2Ref = ref(null);
const horizontalChart3Ref = ref(null);

// Create refs for the reflection charts
const reflectionXChart1Ref = ref(null);
const reflectionXChart2Ref = ref(null);

// Create refs for the y-axis reflection charts
const reflectionYChart1Ref = ref(null);
const reflectionYChart2Ref = ref(null);

// Create refs for the combined transformations charts
const combinedTransformationsChart1Ref = ref(null);
const combinedTransformationsChart2Ref = ref(null);

// Create the vertical scaling charts
function createChart(chartRef, coefficient) {
  if (!chartRef.value) return;

  // Generate data points
  const data = [];
  for (let x = -4; x <= 4; x += 0.1) {
    // Calculate y = coefficient * (x² - x - 2)
    const y = coefficient * (Math.pow(x, 2) - x - 2);
    data.push({ x, y });
  }

  // Create chart
  new Chart(chartRef.value, {
    type: 'scatter',
    data: {
      datasets: [{
        label: coefficient === 1 
          ? 'f(x) = x² - x - 2' 
          : `f(x) = ${coefficient}(x² - x - 2)`,
        data: data,
        showLine: true,
        borderColor: 'blue',
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'linear',
          position: 'center',
          min: -4,
          max: 4,
          grid: {
            color: (context) => context.tick.value === 0 ? '#000' : 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            stepSize: 1,
            font: {
              size: 10
            }
          }
        },
        y: {
          type: 'linear',
          position: 'center',
          min: -8,
          max: 4,
          grid: {
            color: (context) => context.tick.value === 0 ? '#000' : 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            stepSize: 2,
            font: {
              size: 10
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// Create the horizontal scaling charts
function createHorizontalScalingChart(chartRef, coefficient) {
  if (!chartRef.value) return;

  // Generate data points
  const data = [];
  for (let x = -7; x <= 7; x += 0.1) {
    // Calculate y = (coefficient*x)² - coefficient*x - 2
    const y = Math.pow(coefficient * x, 2) - coefficient * x - 2;
    data.push({ x, y });
  }

  // Create chart
  new Chart(chartRef.value, {
    type: 'scatter',
    data: {
      datasets: [{
        data: data,
        showLine: true,
        borderColor: 'blue',
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          type: 'linear',
          position: 'center',
          min: -7,
          max: 7,
          grid: {
            display: true,
            drawOnChartArea: true,
            drawTicks: true,
            color: (context) => context.tick.value === 0 ? '#000' : 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            display: false,
            autoSkip: false,
            stepSize: 1
          }
        },
        y: {
          type: 'linear',
          position: 'center',
          min: -3,
          max: 5,
          grid: {
            display: true,
            drawOnChartArea: true,
            drawTicks: true,
            z: 1, // Ensure grid lines are drawn on top
            color: (context) => context.tick.value === 0 ? '#000' : 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            display: false,
            autoSkip: false,
            stepSize: 1
          }
        }
      }
    }
  });
}

// Create the reflection charts
function createReflectionCharts() {
  createReflectionChart(reflectionXChart1Ref, 1);  // Original function
  createReflectionChart(reflectionXChart2Ref, -1); // Reflected function
}

function createReflectionChart(chartRef, coefficient) {
  if (!chartRef.value) return;

  // Generate data points
  const data = [];
  for (let x = -4; x <= 4; x += 0.1) {
    // Calculate y = coefficient * (x² - x - 2)
    // When coefficient is -1, this becomes -x² + x + 2
    const y = coefficient * (Math.pow(x, 2) - x - 2);
    data.push({ x, y });
  }

  // Create chart
  new Chart(chartRef.value, {
    type: 'scatter',
    data: {
      datasets: [{
        data: data,
        showLine: true,
        borderColor: 'blue',
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          type: 'linear',
          position: 'center',
          min: -4,
          max: 4,
          grid: {
            color: (context) => context.tick.value === 0 ? '#000' : 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            display: false,
            autoSkip: false,
            stepSize: 1
          }
        },
        y: {
          type: 'linear',
          position: 'center',
          min: -8,
          max: 8, // Expanded to show both functions clearly
          grid: {
            color: (context) => context.tick.value === 0 ? '#000' : 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            display: false,
            autoSkip: false,
            stepSize: 1
          }
        }
      }
    }
  });
}

// Function to create the y-axis reflection charts
function createYAxisReflectionCharts() {
  // Original function: f(x) = x³ - 2x² + x
  createCubicChart(reflectionYChart1Ref, (x) => Math.pow(x, 3) - 2 * Math.pow(x, 2) + x);
  
  // Reflected function: f(-x) = -x³ - 2x² - x
  createCubicChart(reflectionYChart2Ref, (x) => -Math.pow(x, 3) - 2 * Math.pow(x, 2) - x);
}

// Generic function to create a chart for any function
function createCubicChart(chartRef, func) {
  if (!chartRef.value) return;

  // Generate data points
  const data = [];
  for (let x = -3; x <= 3; x += 0.1) {
    const y = func(x);
    data.push({ x, y });
  }

  // Create chart
  new Chart(chartRef.value, {
    type: 'scatter',
    data: {
      datasets: [{
        data: data,
        showLine: true,
        borderColor: 'blue',
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          type: 'linear',
          position: 'center',
          min: -3,
          max: 3,
          grid: {
            color: (context) => context.tick.value === 0 ? '#000' : 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            display: false,
            autoSkip: false,
            stepSize: 1
          }
        },
        y: {
          type: 'linear',
          position: 'center',
          min: -10,
          max: 10,
          grid: {
            color: (context) => context.tick.value === 0 ? '#000' : 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            display: false,
            autoSkip: false,
            stepSize: 2
          }
        }
      }
    }
  });
}

function createTransformationChart(chartRef, func) {
  if (!chartRef.value) return;
  // Generate data points
  const data = [];
  for (let x = -3; x <= 5; x += 0.1) {
    const y = func(x);
    data.push({ x, y });
  }

  // Create chart
  new Chart(chartRef.value, {
    type: 'scatter',
    data: {
      datasets: [{
        data: data,
        showLine: true,
        borderColor: 'blue',
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          type: 'linear',
          position: 'center',
          min: -3,
          max: 5,
          grid: {
            color: (context) => context.tick.value === 0 ? '#000' : 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            display: false,
            autoSkip: false,
            stepSize: 1
          }
        },
        y: {
          type: 'linear',
          position: 'center',
          min: -5,
          max: 5,
          grid: {
            color: (context) => context.tick.value === 0 ? '#000' : 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            display: false,
            autoSkip: false,
            stepSize: 1
          }
        }
      }
    }
  });
}

function createCombinedTransformationsCharts() {
  createTransformationChart(combinedTransformationsChart1Ref, (x) => Math.pow(x, 2));
  createTransformationChart(combinedTransformationsChart2Ref, (x) => -2 * Math.pow(x - 1, 2) + 2);
}

// Initialize all charts
function initializeCharts() {
  // Vertical scaling charts
  createChart(chart1Ref, 1);
  createChart(chart2Ref, 3);
  createChart(chart3Ref, 0.5);
  
  // Horizontal scaling charts
  createHorizontalScalingChart(horizontalChart1Ref, 1);
  createHorizontalScalingChart(horizontalChart2Ref, 0.5);
  createHorizontalScalingChart(horizontalChart3Ref, 2);
  
  // Reflection charts
  createReflectionCharts();

  // Y-axis reflection charts
  createYAxisReflectionCharts();

  // Combined transformations charts
  createCombinedTransformationsCharts();
}

// Run initialization when component is mounted
onMounted(() => {
  initializeCharts();
});


</script>

<style scoped>
.chart-container {
  margin-bottom: 20px;
  width: 150px;
  height: 150px;
  display: inline-block;
  margin-right: 20px;
  text-align: center;
}
</style> 