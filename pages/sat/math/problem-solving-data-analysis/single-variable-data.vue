<template>
    <h1 class="sat-guide-page-header">Single-Variable Data Analysis</h1>
    <div class="section-description">
        Single-variable data analysis involves examining and interpreting data that has only one variable of interest. This includes understanding measures of central tendency, spread, and various ways to visualize data.
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Measures of Central Tendency
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Measures of central tendency are values that represent the center or middle of a data set. The three main measures are mean, median, and mode.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Mean (Average)</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        The mean is the arithmetic average of all values in a data set. To find the mean, add up all the values and divide by the number of values.
                    </p>
                    <p>
                        For example, if we have the data set {2, 4, 6, 8, 10}, the mean would be:
                    </p>
                    <p>
                        <math>
                            <mi>mean</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>6</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>10</mn></mrow><mn>5</mn></mfrac><mo>=</mo><mn>6</mn>
                        </math>
                    </p>
                    <p>
                        The mean is sensitive to outliers - extreme values can significantly affect the mean. For example, if we add 100 to our data set, the mean becomes much larger, even though most of our values are still small.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Median</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        The median is the middle value when data is arranged in order. If there's an even number of values, the median is the average of the two middle values.
                    </p>
                    <p>
                        For example, with our data set {2, 4, 6, 8, 10}:
                    </p>
                    <ul>
                        <li>The values are already in order</li>
                        <li>There are 5 values (odd number)</li>
                        <li>The middle value is 6, so the median is 6</li>
                    </ul>
                    <p>
                        If we had {2, 4, 6, 8, 10, 12}:
                    </p>
                    <ul>
                        <li>There are 6 values (even number)</li>
                        <li>The two middle values are 6 and 8</li>
                        <li>The median would be <math><mfrac><mrow><mn>6</mn><mo>+</mo><mn>8</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mn>7</mn></math></li>
                    </ul>
                    <p>
                        Unlike the mean, the median is not affected by outliers. This makes it a better measure of central tendency when dealing with data that has extreme values.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Mode</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        The mode is the value(s) that appear most frequently in a data set. A data set can have:
                    </p>
                    <ul>
                        <li>One mode (unimodal)</li>
                        <li>Two modes (bimodal)</li>
                        <li>More than two modes (multimodal)</li>
                        <li>No mode (if no value appears more than once)</li>
                    </ul>
                    <p>
                        For example:
                    </p>
                    <ul>
                        <li>In {1, 2, 2, 3, 4}, the mode is 2</li>
                        <li>In {1, 2, 2, 3, 3, 4}, the modes are 2 and 3</li>
                        <li>In {1, 2, 3, 4, 5}, there is no mode</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Measures of Spread
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Measures of spread tell us how spread out or dispersed the data is. The main measures are range and standard deviation.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Range</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        The range is the difference between the largest and smallest values in a data set.
                    </p>
                    <p>
                        For example, in the data set {2, 4, 6, 8, 10}:
                    </p>
                    <p>
                        <math>
                            <mi>range</mi><mo>=</mo><mi>largest value</mi><mo>-</mo><mi>smallest value</mi><mo>=</mo><mn>10</mn><mo>-</mo><mn>2</mn><mo>=</mo><mn>8</mn>
                        </math>
                    </p>
                    <p>
                        Like the mean, the range is sensitive to outliers. A single extreme value can make the range much larger, even if most values are close together.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Standard Deviation</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Standard deviation measures how spread out the values are from the mean. A small standard deviation indicates that the values are close to the mean, while a large standard deviation indicates that the values are spread out.
                    </p>
                    <p>
                        While you don't need to know the exact formula for the SAT, it's helpful to understand that:
                    </p>
                    <ul>
                        <li>About 68% of values fall within 1 standard deviation of the mean</li>
                        <li>About 95% of values fall within 2 standard deviations of the mean</li>
                        <li>About 99.7% of values fall within 3 standard deviations of the mean</li>
                    </ul>
                    <p>
                        For example, if a class has a mean score of 75 with a standard deviation of 5:
                    </p>
                    <ul>
                        <li>About 68% of students scored between 70 and 80</li>
                        <li>About 95% of students scored between 65 and 85</li>
                        <li>About 99.7% of students scored between 60 and 90</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Frequency and Data Distribution
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Frequency tells us how often each value appears in a data set. Understanding frequency is crucial for interpreting various types of data visualizations.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Frequency Tables</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        A frequency table shows how many times each value appears in a data set. It can also show relative frequency (the proportion or percentage of times each value appears).
                    </p>
                    <p>
                        For example, if we have test scores:
                    </p>
                    <table>
                        <tr>
                            <th>Score</th>
                            <th>Frequency</th>
                            <th>Relative Frequency</th>
                        </tr>
                        <tr>
                            <td>90</td>
                            <td>2</td>
                            <td>20%</td>
                        </tr>
                        <tr>
                            <td>85</td>
                            <td>3</td>
                            <td>30%</td>
                        </tr>
                        <tr>
                            <td>80</td>
                            <td>5</td>
                            <td>50%</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Data Visualization
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Data can be visualized in many different ways. Each type of visualization has its own strengths and is best suited for certain types of data.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Bar Charts</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Bar charts are used to compare quantities across different categories. The height of each bar represents the frequency or value for that category.
                    </p>
                    <p>
                        Bar charts are particularly useful for:
                    </p>
                    <ul>
                        <li>Comparing quantities across categories</li>
                        <li>Showing discrete data (data that can only take certain values)</li>
                        <li>Making it easy to see which category has the highest or lowest value</li>
                    </ul>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Box and Whisker Plots</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Box and whisker plots (also called box plots) show the distribution of data using five key values:
                    </p>
                    <ul>
                        <li>Minimum (bottom whisker)</li>
                        <li>First Quartile (Q1) - bottom of the box</li>
                        <li>Median (Q2) - line in the middle of the box</li>
                        <li>Third Quartile (Q3) - top of the box</li>
                        <li>Maximum (top whisker)</li>
                    </ul>
                    <p>
                        The box represents the middle 50% of the data (from Q1 to Q3), and the whiskers extend to the minimum and maximum values (excluding outliers).
                    </p>
                    <p>
                        Box plots are particularly useful for:
                    </p>
                    <ul>
                        <li>Showing the spread and center of the data</li>
                        <li>Identifying outliers</li>
                        <li>Comparing distributions across different groups</li>
                    </ul>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Histograms</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Histograms are similar to bar charts but are used for continuous data. The bars represent ranges of values (called bins or intervals) rather than specific categories.
                    </p>
                    <p>
                        Histograms are particularly useful for:
                    </p>
                    <ul>
                        <li>Showing the distribution of continuous data</li>
                        <li>Identifying patterns in the data (like whether it's normally distributed)</li>
                        <li>Spotting outliers or unusual patterns</li>
                    </ul>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Line Graphs</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Line graphs show how values change over time or across a continuous variable. Points are connected by lines to show the trend.
                    </p>
                    <p>
                        Line graphs are particularly useful for:
                    </p>
                    <ul>
                        <li>Showing trends over time</li>
                        <li>Comparing multiple trends</li>
                        <li>Identifying patterns or cycles in the data</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add styles for the math layout */
math {
    font-size: 1.1em;
}

/* Style for ordered list numbers to make them bold */
ol li::marker {
    font-weight: bold;
}

/* Add styles for tables */
table {
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f5f5f5;
}
</style>
