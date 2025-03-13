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
                                
                            </div>
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
                </div>
            </div>
        </div>
    </div>
</template> 