<script setup>
import renderMathInElement from "katex/dist/contrib/auto-render";
import 'katex/dist/katex.min.css';

const renderKaTeX = () => {
    try {
        console.log('Rendering LaTeX');
        const mathElements = document.querySelectorAll(".latex-formula");
        mathElements.forEach(el => {
            try {
                console.log('Rendering LaTeX element');
                renderMathInElement(el, {
                    throwOnError: false,
                    errorCallback: (msg) => {
                        console.warn('KaTeX rendering error:', msg);
                    },
                    strict: false
                });
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
})
</script>

<template>
    <h1 class="sat-guide-page-header">Distance & Midpoint</h1>
    <div class="section-description">
        Understanding and using the distance and midpoint formulas.
    </div>

    <h2 class="sat-guide-section-header">Distance Formula</h2>
    <div class="section-description">
        The distance formula allows you to find the distance between any two points on a coordinate plane.
        <div class="pt-4">
            <div>
                For points (x₁, y₁) and (x₂, y₂), the distance is:
            </div>
            <div>
                <span class="latex-formula">$$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$</span>
            </div>
            <div class="pt-4">
                This formula is derived from the Pythagorean theorem. If you draw a right triangle between two points:
                <ul class="list-disc pl-8 pt-2">
                    <li>The horizontal distance is |x₂ - x₁|</li>
                    <li>The vertical distance is |y₂ - y₁|</li>
                    <li>The direct distance is the hypotenuse</li>
                </ul>
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">Example: Using the Distance Formula</h2>
    <div class="section-description">
        Let's find the distance between points (2, 3) and (5, 7):
        <div class="pt-4">
            <div>
                <span class="latex-formula">$$d = \sqrt{(5-2)^2 + (7-3)^2}$$</span>
            </div>
            <div>
                <span class="latex-formula">$$d = \sqrt{3^2 + 4^2}$$</span>
            </div>
            <div>
                <span class="latex-formula">$$d = \sqrt{9 + 16}$$</span>
            </div>
            <div>
                <span class="latex-formula">$$d = \sqrt{25} = 5$$</span>
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">Midpoint Formula</h2>
    <div class="section-description">
        The midpoint formula finds the coordinates of the point exactly halfway between two points.
        <div class="pt-4">
            <div>
                For points (x₁, y₁) and (x₂, y₂), the midpoint is:
            </div>
            <div>
                <span class="latex-formula">$$\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$</span>
            </div>
            <div class="pt-4">
                The formula works by:
                <ul class="list-disc pl-8 pt-2">
                    <li>Taking the average of the x-coordinates</li>
                    <li>Taking the average of the y-coordinates</li>
                </ul>
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">Example: Using the Midpoint Formula</h2>
    <div class="section-description">
        Let's find the midpoint between (2, 3) and (6, 9):
        <div class="pt-4">
            <div>
                <span class="latex-formula">$$x = \frac{2 + 6}{2} = \frac{8}{2} = 4$$</span>
            </div>
            <div>
                <span class="latex-formula">$$y = \frac{3 + 9}{2} = \frac{12}{2} = 6$$</span>
            </div>
            <div>
                Therefore, the midpoint is (4, 6)
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">Common Applications</h2>
    <div class="section-description">
        <ul class="list-disc pl-8">
            <li>Finding the length of a line segment</li>
            <li>Determining if a triangle is right, isosceles, or equilateral by comparing side lengths</li>
            <li>Finding the center of a circle (midpoint of diameter)</li>
            <li>Verifying if a point is equidistant from two other points</li>
            <li>Finding coordinates of points that divide a line segment in a given ratio</li>
        </ul>
    </div>
</template>

<style scoped>
.latex-formula {
    display: inline-block;
    padding: 0;
}
</style> 