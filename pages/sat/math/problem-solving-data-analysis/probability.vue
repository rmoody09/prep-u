<template>
    <h1 class="sat-guide-page-header">Probability</h1>
    <div class="section-description">
        Probability is the measure of how likely an event is to occur. On the SAT, you'll encounter basic probability concepts, including calculating probabilities from data tables, solving word problems, and understanding conditional probability.
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Basic Probability Concepts
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Probability is expressed as a number between 0 and 1, or as a percentage between 0% and 100%. A probability of 0 means the event is impossible, while a probability of 1 (or 100%) means the event is certain to occur.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Calculating Basic Probability</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        The basic formula for probability is:
                    </p>
                    <p>
                        <math>
                            <mi>probability</mi><mo>=</mo><mfrac><mrow><mi>number of favorable outcomes</mi></mrow><mrow><mi>total number of possible outcomes</mi></mrow></mfrac>
                        </math>
                    </p>
                    <p>
                        For example, if you roll a fair six-sided die:
                    </p>
                    <ul>
                        <li>The probability of rolling a 3 is <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> (one favorable outcome out of six possible outcomes)</li>
                        <li>The probability of rolling an even number is <math><mfrac><mn>3</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></math> (three favorable outcomes: 2, 4, or 6)</li>
                    </ul>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Converting Between Fractions and Percentages</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Probabilities can be expressed as fractions, decimals, or percentages. To convert between them:
                    </p>
                    <ul>
                        <li>Fraction to percentage: Multiply by 100%</li>
                        <li>Percentage to fraction: Divide by 100%</li>
                    </ul>
                    <p>
                        For example:
                    </p>
                    <ul>
                        <li><math><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>=</mo><mn>0.25</mn><mo>=</mo><mn>25</mn><mo>%</mo></math></li>
                        <li><math><mn>75</mn><mo>%</mo><mo>=</mo><mfrac><mn>75</mn><mn>100</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac></math></li>
                    </ul>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Sum of Probabilities</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        The sum of all possible probabilities for a given situation must equal 1 (or 100%). This is because one of the possible outcomes must occur.
                    </p>
                    <p>
                        For example, when rolling a die:
                    </p>
                    <ul>
                        <li>Probability of rolling a 1: <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math></li>
                        <li>Probability of rolling a 2: <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math></li>
                        <li>Probability of rolling a 3: <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math></li>
                        <li>Probability of rolling a 4: <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math></li>
                        <li>Probability of rolling a 5: <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math></li>
                        <li>Probability of rolling a 6: <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math></li>
                        <li>Total probability: <math><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mn>1</mn></math></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Probability from Data Tables
        </h2>
        <div class="sat-guide-section-content">
            <p>
                On the SAT, you'll often need to calculate probabilities from data presented in tables. These tables might show survey results, experimental outcomes, or other categorical data.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Two-Way Tables</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        A two-way table (also called a contingency table) shows the frequency of outcomes for two categorical variables. The rows represent one variable, and the columns represent another variable.
                    </p>
                    <p>
                        For example, consider a survey of 100 students about their favorite subject and grade level:
                    </p>
                    <table>
                        <tr>
                            <th></th>
                            <th>Math</th>
                            <th>Science</th>
                            <th>English</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td>9th Grade</td>
                            <td>15</td>
                            <td>10</td>
                            <td>5</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>10th Grade</td>
                            <td>12</td>
                            <td>8</td>
                            <td>10</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>11th Grade</td>
                            <td>8</td>
                            <td>12</td>
                            <td>10</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>12th Grade</td>
                            <td>5</td>
                            <td>5</td>
                            <td>0</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>40</td>
                            <td>35</td>
                            <td>25</td>
                            <td>100</td>
                        </tr>
                    </table>
                    <p>
                        From this table, you can calculate various probabilities:
                    </p>
                    <ul>
                        <li>Probability that a randomly selected student likes Math: <math><mfrac><mn>40</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.4</mn><mo>=</mo><mn>40</mn><mo>%</mo></math></li>
                        <li>Probability that a randomly selected student is in 9th grade: <math><mfrac><mn>30</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.3</mn><mo>=</mo><mn>30</mn><mo>%</mo></math></li>
                        <li>Probability that a randomly selected student is in 9th grade AND likes Math: <math><mfrac><mn>15</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.15</mn><mo>=</mo><mn>15</mn><mo>%</mo></math></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Conditional Probability
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Conditional probability is the probability of an event occurring given that another event has already occurred. It's written as P(A|B), which means "the probability of A given B."
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Calculating Conditional Probability</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        The formula for conditional probability is:
                    </p>
                    <p>
                        <math>
                            <mi>P</mi><mo>(</mo><mi>A</mi><mo>|</mo><mi>B</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>P</mi><mo>(</mo><mi>A</mi><mo>and</mo><mi>B</mi><mo>)</mo></mrow><mrow><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo></mrow></mfrac>
                        </math>
                    </p>
                    <p>
                        Using our previous example of the student survey:
                    </p>
                    <ul>
                        <li>What is the probability that a student likes Math given that they are in 9th grade?</li>
                        <li>P(Math|9th Grade) = <math><mfrac><mrow><mi>P</mi><mo>(</mo><mi>Math</mi><mo>and</mo><mi>9th Grade</mi><mo>)</mo></mrow><mrow><mi>P</mi><mo>(</mo><mi>9th Grade</mi><mo>)</mo></mrow></mfrac><mo>=</mo><mfrac><mfrac><mn>15</mn><mn>100</mn></mfrac><mfrac><mn>30</mn><mn>100</mn></mfrac></mfrac><mo>=</mo><mfrac><mn>15</mn><mn>30</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mn>0.5</mn><mo>=</mo><mn>50</mn><mo>%</mo></math></li>
                    </ul>
                    <p>
                        This means that 50% of 9th graders like Math.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Independent vs. Dependent Events</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Two events are independent if the occurrence of one event does not affect the probability of the other event. For independent events A and B:
                    </p>
                    <p>
                        <math>
                            <mi>P</mi><mo>(</mo><mi>A</mi><mo>|</mo><mi>B</mi><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo>
                        </math>
                    </p>
                    <p>
                        For example, if you roll a die twice, the outcome of the first roll does not affect the outcome of the second roll. These are independent events.
                    </p>
                    <p>
                        Two events are dependent if the occurrence of one event affects the probability of the other event. For example, drawing cards from a deck without replacement: the probability of drawing a second ace depends on whether an ace was drawn first.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Probability Word Problems
        </h2>
        <div class="sat-guide-section-content">
            <p>
                On the SAT, you'll encounter word problems that require you to calculate probabilities. These problems often involve real-world scenarios and may require you to:
            </p>
            <ul>
                <li>Identify the total number of possible outcomes</li>
                <li>Count the number of favorable outcomes</li>
                <li>Apply the basic probability formula</li>
                <li>Use conditional probability when appropriate</li>
            </ul>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Example Word Problems</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        <strong>Example 1:</strong> A bag contains 3 red marbles, 4 blue marbles, and 5 green marbles. If a marble is randomly selected, what is the probability that it is blue?
                    </p>
                    <p>
                        Solution:
                    </p>
                    <ul>
                        <li>Total number of marbles = 3 + 4 + 5 = 12</li>
                        <li>Number of blue marbles = 4</li>
                        <li>Probability = <math><mfrac><mn>4</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>≈</mo><mn>33.3</mn><mo>%</mo></math></li>
                    </ul>
                    <p>
                        <strong>Example 2:</strong> A standard deck of 52 cards contains 4 aces. If two cards are drawn without replacement, what is the probability that both cards are aces?
                    </p>
                    <p>
                        Solution:
                    </p>
                    <ul>
                        <li>Probability of drawing first ace = <math><mfrac><mn>4</mn><mn>52</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>13</mn></mfrac></math></li>
                        <li>After drawing first ace, 3 aces remain in 51 cards</li>
                        <li>Probability of drawing second ace = <math><mfrac><mn>3</mn><mn>51</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>17</mn></mfrac></math></li>
                        <li>Probability of both events = <math><mfrac><mn>1</mn><mn>13</mn></mfrac><mo>×</mo><mfrac><mn>1</mn><mn>17</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>221</mn></mfrac><mo>≈</mo><mn>0.0045</mn><mo>≈</mo><mn>0.45</mn><mo>%</mo></math></li>
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
