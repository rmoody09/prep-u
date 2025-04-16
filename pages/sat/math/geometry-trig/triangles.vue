<template>
    <h1 class="sat-guide-page-header">Triangles</h1>
    <div class="section-description">
        Triangles are fundamental shapes in geometry and appear frequently on the SAT. Understanding their properties, relationships, and special cases is crucial for solving many geometry problems.
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Basic Triangle Properties
        </h2>
        <div class="sat-guide-section-content">
            <p>
                A triangle is a polygon with three sides and three angles. The sum of the measures of the interior angles of a triangle is always 180°.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Triangle Classification</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Triangles can be classified based on their sides and angles:
                    </p>
                    <p>
                        <strong>By Sides:</strong>
                    </p>
                    <ul>
                        <li><strong>Scalene:</strong> All sides have different lengths.</li>
                        <li><strong>Isosceles:</strong> At least two sides have the same length.</li>
                        <li><strong>Equilateral:</strong> All sides have the same length.</li>
                    </ul>
                    <p>
                        <strong>By Angles:</strong>
                    </p>
                    <ul>
                        <li><strong>Acute:</strong> All angles measure less than 90°.</li>
                        <li><strong>Right:</strong> One angle measures exactly 90°.</li>
                        <li><strong>Obtuse:</strong> One angle measures more than 90°.</li>
                    </ul>
                    <p>
                        <strong>Note:</strong> An equilateral triangle is also equiangular (all angles measure 60°), and an equiangular triangle is also equilateral.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Triangle Area</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        The area of a triangle is given by the formula:
                    </p>
                    <p>
                        <math>
                            <mi>Area</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mi>base</mi><mo>×</mo><mi>height</mi>
                        </math>
                    </p>
                    <p>
                        The base can be any side of the triangle, and the height is the perpendicular distance from the base to the opposite vertex.
                    </p>
                    <p>
                        <strong>Note:</strong> This formula is provided on the SAT reference sheet.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Altitude of a Triangle</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        An altitude of a triangle is a line segment drawn from a vertex perpendicular to the line containing the opposite side. The length of the altitude is the height of the triangle when the opposite side is considered the base.
                    </p>
                    <p>
                        In a right triangle, the altitude to the hypotenuse can be used to find the lengths of the segments it creates on the hypotenuse.
                    </p>
                    <p>
                        <strong>Altitude Theorem:</strong> In a right triangle, the altitude to the hypotenuse is the geometric mean of the two segments it creates on the hypotenuse.
                    </p>
                    <p>
                        If the altitude divides the hypotenuse into segments of lengths <math><mi>p</mi></math> and <math><mi>q</mi></math>, then the length of the altitude <math><mi>h</mi></math> satisfies:
                    </p>
                    <p>
                        <math>
                            <msup><mi>h</mi><mn>2</mn></msup><mo>=</mo><mi>p</mi><mo>×</mo><mi>q</mi>
                        </math>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Similar Triangles
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Similar triangles have the same shape but not necessarily the same size. Their corresponding angles are equal, and their corresponding sides are proportional.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Proving Triangles Similar</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        There are several ways to prove that two triangles are similar:
                    </p>
                    <p>
                        <strong>AA (Angle-Angle):</strong> If two angles of one triangle are equal to two angles of another triangle, then the triangles are similar.
                    </p>
                    <p>
                        <strong>SAS (Side-Angle-Side):</strong> If two sides of one triangle are proportional to two sides of another triangle, and the included angles are equal, then the triangles are similar.
                    </p>
                    <p>
                        <strong>SSS (Side-Side-Side):</strong> If all three sides of one triangle are proportional to all three sides of another triangle, then the triangles are similar.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Properties of Similar Triangles</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        If two triangles are similar, then:
                    </p>
                    <ul>
                        <li>Their corresponding angles are equal.</li>
                        <li>Their corresponding sides are proportional.</li>
                        <li>The ratio of their areas is equal to the square of the ratio of their corresponding sides.</li>
                        <li>The ratio of their perimeters is equal to the ratio of their corresponding sides.</li>
                    </ul>
                    <p>
                        Example: If two triangles are similar with a ratio of corresponding sides of 2:3, then the ratio of their areas is 4:9, and the ratio of their perimeters is 2:3.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Using Similar Triangles to Solve Problems</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Similar triangles can be used to solve various problems, such as finding the height of an object using its shadow.
                    </p>
                    <p>
                        Example: A 6-foot person casts a 4-foot shadow. At the same time, a tree casts a 20-foot shadow. How tall is the tree?
                    </p>
                    <p>
                        The person and the tree form similar triangles with the ground and the sun's rays. Let <math><mi>h</mi></math> be the height of the tree. Then:
                    </p>
                    <p>
                        <math>
                            <mfrac><mn>6</mn><mn>4</mn></mfrac><mo>=</mo><mfrac><mi>h</mi><mn>20</mn></mfrac>
                        </math>
                    </p>
                    <p>
                        Cross-multiply: <math><mn>6</mn><mo>×</mo><mn>20</mn><mo>=</mo><mn>4</mn><mo>×</mo><mi>h</mi></math>
                    </p>
                    <p>
                        Solve for <math><mi>h</mi></math>: <math><mi>h</mi><mo>=</mo><mfrac><mrow><mn>6</mn><mo>×</mo><mn>20</mn></mrow><mn>4</mn></mfrac><mo>=</mo><mn>30</mn></math>
                    </p>
                    <p>
                        Therefore, the tree is 30 feet tall.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Right Triangles and the Pythagorean Theorem
        </h2>
        <div class="sat-guide-section-content">
            <p>
                A right triangle is a triangle with one angle measuring 90°. The side opposite the right angle is called the hypotenuse, and the other two sides are called the legs.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">The Pythagorean Theorem</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        In a right triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the legs:
                    </p>
                    <p>
                        <math>
                            <msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup>
                        </math>
                    </p>
                    <p>
                        where <math><mi>a</mi></math> and <math><mi>b</mi></math> are the lengths of the legs, and <math><mi>c</mi></math> is the length of the hypotenuse.
                    </p>
                    <p>
                        <strong>Note:</strong> This formula is provided on the SAT reference sheet.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Common Right Triangles with Integer Sides</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Some right triangles have sides with integer lengths. The most common ones are:
                    </p>
                    <ul>
                        <li><strong>3-4-5:</strong> A triangle with sides of lengths 3, 4, and 5.</li>
                        <li><strong>5-12-13:</strong> A triangle with sides of lengths 5, 12, and 13.</li>
                        <li><strong>6-8-10:</strong> A triangle with sides of lengths 6, 8, and 10.</li>
                        <li><strong>8-15-17:</strong> A triangle with sides of lengths 8, 15, and 17.</li>
                        <li><strong>9-12-15:</strong> A triangle with sides of lengths 9, 12, and 15.</li>
                    </ul>
                    <p>
                        <strong>Note:</strong> Any multiple of these triangles is also a right triangle. For example, a 6-8-10 triangle is a multiple of a 3-4-5 triangle.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Special Right Triangles</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        <strong>45°-45°-90° Triangle:</strong> An isosceles right triangle with angles measuring 45°, 45°, and 90°. The sides are in the ratio <math><mn>1</mn><mo>:</mo><mn>1</mn><mo>:</mo><msqrt><mn>2</mn></msqrt></math>.
                    </p>
                    <p>
                        If the legs have length <math><mi>x</mi></math>, then the hypotenuse has length <math><mi>x</mi><msqrt><mn>2</mn></msqrt></math>.
                    </p>
                    <p>
                        <strong>30°-60°-90° Triangle:</strong> A right triangle with angles measuring 30°, 60°, and 90°. The sides are in the ratio <math><mn>1</mn><mo>:</mo><msqrt><mn>3</mn></msqrt><mo>:</mo><mn>2</mn></math>.
                    </p>
                    <p>
                        If the shorter leg has length <math><mi>x</mi></math>, then the longer leg has length <math><mi>x</mi><msqrt><mn>3</mn></msqrt></math>, and the hypotenuse has length <math><mn>2</mn><mi>x</mi></math>.
                    </p>
                    <p>
                        <strong>Note:</strong> These ratios are provided on the SAT reference sheet.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Trigonometry in Right Triangles
        </h2>
        <div class="sat-guide-section-content">
            <p>
                Trigonometry deals with the relationships between the sides and angles of triangles. In a right triangle, the trigonometric functions sine, cosine, and tangent are defined as ratios of the sides.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">SOH-CAH-TOA</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        SOH-CAH-TOA is a mnemonic for remembering the definitions of sine, cosine, and tangent in a right triangle:
                    </p>
                    <p>
                        <strong>SOH:</strong> <math><mi>sin</mi><mo>(</mo><mi>θ</mi><mo>)</mo><mo>=</mo><mfrac><mi>opposite</mi><mi>hypotenuse</mi></mfrac></math>
                    </p>
                    <p>
                        <strong>CAH:</strong> <math><mi>cos</mi><mo>(</mo><mi>θ</mi><mo>)</mo><mo>=</mo><mfrac><mi>adjacent</mi><mi>hypotenuse</mi></mfrac></math>
                    </p>
                    <p>
                        <strong>TOA:</strong> <math><mi>tan</mi><mo>(</mo><mi>θ</mi><mo>)</mo><mo>=</mo><mfrac><mi>opposite</mi><mi>adjacent</mi></mfrac></math>
                    </p>
                    <p>
                        where <math><mi>θ</mi></math> is one of the acute angles in the right triangle.
                    </p>
                    <p>
                        <strong>Note:</strong> These definitions are provided on the SAT reference sheet.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Relationships Between Trigonometric Functions</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        <strong>Complementary Angles:</strong> If two angles are complementary (their sum is 90°), then the sine of one angle is equal to the cosine of the other angle.
                    </p>
                    <p>
                        Example: If <math><mi>θ</mi></math> and <math><mi>φ</mi></math> are complementary angles, then <math><mi>sin</mi><mo>(</mo><mi>θ</mi><mo>)</mo><mo>=</mo><mi>cos</mi><mo>(</mo><mi>φ</mi><mo>)</mo></math>.
                    </p>
                    <p>
                        <strong>Pythagorean Identity:</strong> For any angle <math><mi>θ</mi></math>, <math><msup><mi>sin</mi><mn>2</mn></msup><mo>(</mo><mi>θ</mi><mo>)</mo><mo>+</mo><msup><mi>cos</mi><mn>2</mn></msup><mo>(</mo><mi>θ</mi><mo>)</mo><mo>=</mo><mn>1</mn></math>.
                    </p>
                    <p>
                        <strong>Tangent Identity:</strong> For any angle <math><mi>θ</mi></math>, <math><mi>tan</mi><mo>(</mo><mi>θ</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>sin</mi><mo>(</mo><mi>θ</mi><mo>)</mo></mrow><mrow><mi>cos</mi><mo>(</mo><mi>θ</mi><mo>)</mo></mrow></mfrac></math>.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Using Trigonometry to Solve Right Triangle Problems</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Trigonometry can be used to find missing sides or angles in right triangles.
                    </p>
                    <p>
                        Example: In a right triangle, if one leg has length 3 and the angle opposite that leg measures 30°, what is the length of the hypotenuse?
                    </p>
                    <p>
                        Since we know the opposite side and want to find the hypotenuse, we can use the sine function:
                    </p>
                    <p>
                        <math>
                            <mi>sin</mi><mo>(</mo><mn>30</mn><mo>°</mo><mo>)</mo><mo>=</mo><mfrac><mn>3</mn><mi>hypotenuse</mi></mfrac>
                        </math>
                    </p>
                    <p>
                        From the unit circle or special triangles, we know that <math><mi>sin</mi><mo>(</mo><mn>30</mn><mo>°</mo><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.
                    </p>
                    <p>
                        Therefore, <math><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mi>hypotenuse</mi></mfrac></math>.
                    </p>
                    <p>
                        Cross-multiply: <math><mn>1</mn><mo>×</mo><mi>hypotenuse</mi><mo>=</mo><mn>2</mn><mo>×</mo><mn>3</mn></math>
                    </p>
                    <p>
                        Solve for hypotenuse: <math><mi>hypotenuse</mi><mo>=</mo><mn>6</mn></math>
                    </p>
                    <p>
                        Therefore, the length of the hypotenuse is 6.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="sat-guide-section">
        <h2 class="sat-guide-section-header">
            Common Triangle Problems
        </h2>
        <div class="sat-guide-section-content">
            <p>
                On the SAT, you'll encounter various problems involving triangles. Here are some common types and how to approach them.
            </p>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Finding Missing Angles</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        When solving for missing angles in triangles, remember that the sum of the measures of the interior angles is 180°.
                    </p>
                    <p>
                        Example: In a triangle, if two angles measure 40° and 70°, what is the measure of the third angle?
                    </p>
                    <p>
                        Let <math><mi>x</mi></math> be the measure of the third angle. Then:
                    </p>
                    <p>
                        <math>
                            <mn>40</mn><mo>°</mo><mo>+</mo><mn>70</mn><mo>°</mo><mo>+</mo><mi>x</mi><mo>=</mo><mn>180</mn><mo>°</mo>
                        </math>
                    </p>
                    <p>
                        Solve for <math><mi>x</mi></math>: <math><mi>x</mi><mo>=</mo><mn>180</mn><mo>°</mo><mo>-</mo><mn>40</mn><mo>°</mo><mo>-</mo><mn>70</mn><mo>°</mo><mo>=</mo><mn>70</mn><mo>°</mo></math>
                    </p>
                    <p>
                        Therefore, the measure of the third angle is 70°.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Finding Missing Sides</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        When solving for missing sides in triangles, you can use the Pythagorean theorem for right triangles, or the Law of Sines and Law of Cosines for non-right triangles.
                    </p>
                    <p>
                        <strong>Law of Sines:</strong> In any triangle, <math><mfrac><mrow><mi>sin</mi><mo>(</mo><mi>A</mi><mo>)</mo></mrow><mi>a</mi></mfrac><mo>=</mo><mfrac><mrow><mi>sin</mi><mo>(</mo><mi>B</mi><mo>)</mo></mrow><mi>b</mi></mfrac><mo>=</mo><mfrac><mrow><mi>sin</mi><mo>(</mo><mi>C</mi><mo>)</mo></mrow><mi>c</mi></mfrac></math>, where <math><mi>A</mi></math>, <math><mi>B</mi></math>, and <math><mi>C</mi></math> are the angles, and <math><mi>a</mi></math>, <math><mi>b</mi></math>, and <math><mi>c</mi></math> are the sides opposite those angles.
                    </p>
                    <p>
                        <strong>Law of Cosines:</strong> In any triangle, <math><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>a</mi><mi>b</mi><mi>cos</mi><mo>(</mo><mi>C</mi><mo>)</mo></math>, where <math><mi>C</mi></math> is the angle opposite side <math><mi>c</mi></math>.
                    </p>
                    <p>
                        <strong>Note:</strong> The Law of Sines and Law of Cosines are not typically required on the SAT, but they can be useful for solving some problems.
                    </p>
                </div>
            </div>

            <div class="sat-guide-subsection">
                <h3 class="sat-guide-subsection-header">Using Special Right Triangles</h3>
                <div class="sat-guide-subsection-content">
                    <p>
                        Special right triangles (30°-60°-90° and 45°-45°-90°) can be used to solve problems without using a calculator.
                    </p>
                    <p>
                        Example: In a 30°-60°-90° triangle, if the shorter leg has length 4, what is the length of the longer leg?
                    </p>
                    <p>
                        In a 30°-60°-90° triangle, the longer leg is <math><msqrt><mn>3</mn></msqrt></math> times the length of the shorter leg.
                    </p>
                    <p>
                        Therefore, the length of the longer leg is <math><mn>4</mn><msqrt><mn>3</mn></msqrt></math>.
                    </p>
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
