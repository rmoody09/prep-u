<script setup>
import renderMathInElement from "katex/dist/contrib/auto-render";
import 'katex/dist/katex.min.css';

const renderKaTeX = () => {
    try {
        console.log('Rendering LaTeX');
        // Only target elements that actually contain LaTeX content
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
                el.setAttribute('rendered', 't');
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
    <h1 class="sat-guide-page-header">Math Cheat Sheet</h1>
    <div class="section-description">
        This page is a collection of all the formulas and concepts you need to know for the SAT Math section.
    </div>

    <h2 class="sat-guide-section-header">Provided Formulas</h2>
    <div class="section-description">
        The following formulas are provided to you in the BlueBook app while you're taking the test. Since they're provided to you, you don't need to memorize the formulas, but you should memorize which formulas are provided, and familiarize yourself with how to use them.
        <div>
            <img src="/images/sat/math-reference-sheet.png" class="w-full h-full object-contain max-w-[800px]" /> 
        </div>
    </div>

    <h2 class="sat-guide-section-header">Algebra</h2>
    <div class="section-description">
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">Linear Equation Forms</h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Slope-Intercept Form
                    </div>
                    <div class="cheat-sheet-concept-content">
                        y = mx + b
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Standard Form
                    </div>
                    <div class="cheat-sheet-concept-content">
                        ax + by = c
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Point-Slope Form
                    </div>
                    <div class="cheat-sheet-concept-content">
                        y - y1 = m(x - x1)
                    </div>
                </div>
            </div>
        </div>
        <div class="cheat-sheet-subsection">
            <h3 class="cheat-sheet-subsection-header">Concepts</h3>
            <div class="cheat-sheet-subsection-content">
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Slope
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Steepness/rate of change of line
                        </div>
                        <div>
                            m = <span class="latex-formula">$$\frac{rise}{run}$$</span> = <span class="latex-formula">$$\frac{\Delta y}{\Delta x}$$</span> = <span class="latex-formula">$$\frac{y_2 - y_1}{x_2 - x_1}$$</span>
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Y-Intercept
                    </div>
                    <div class="cheat-sheet-concept-content">
                        Point where the line crosses the y-axis
                        <div>
                            Plug in x = 0
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        X-Intercept
                    </div>
                    <div class="cheat-sheet-concept-content">
                        Point where the line crosses the x-axis
                        <div>
                            Plug in y = 0
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Horizontal Line
                    </div>
                    <div class="cheat-sheet-concept-content">
                        y = constant
                        <div>
                            e.g. y = 3
                        </div>
                        <div>
                            Slope = 0
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Vertical Line
                    </div>
                    <div class="cheat-sheet-concept-content">
                        x = constant
                        <div>
                            e.g. x = 3
                        </div>
                        <div>
                            Slope = undefined
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Parallel Lines
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Same slope, different intercepts
                        </div>
                        <div>
                            Never intersect, always same distance apart
                        </div>
                    </div>
                </div>
                <div class="cheat-sheet-concept">
                    <div class="cheat-sheet-concept-header">
                        Perpendicular Lines
                    </div>
                    <div class="cheat-sheet-concept-content">
                        <div>
                            Negative reciprocal slopes
                        </div>
                        <div>
                            <span class="latex-formula">$$m_2 = -\frac{1}{m_1}$$</span>
                        </div>
                        <div>
                            Intersect at right angle (90°)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cheat-sheet-subsection {
    margin-bottom: 20px;
}
.cheat-sheet-subsection-header {
    @apply text-lg font-bold mb-2;
}
.cheat-sheet-subsection-content {
    @apply flex items-start gap-6 flex-wrap;
}
.cheat-sheet-concept-header {
    @apply text-sm font-semibold mb-1;
}
.cheat-sheet-concept-content {
    @apply text-sm;
}
.latex-formula {
    display: inline-block;
    vertical-align: middle;
    max-height: 16px;
    max-width: 16px;
    visibility: hidden;
    margin: 0;
    padding: 0;
}
.latex-formula[rendered='t'] {
    max-height: none;
    max-width: none;
    visibility: visible;
}
</style>