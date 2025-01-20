<script setup>
import renderMathInElement from "katex/dist/contrib/auto-render";

onMounted(async () => {
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
            } catch (elementError) {
                console.warn('Error rendering individual element:', elementError);
            }
        });
    } catch (error) {
        console.error('Error in KaTeX rendering:', error);
    }
})
</script>

<template>
    <h1 class="sat-guide-page-header">Solving Single Variable Linear Equations</h1>

    <h2 class="sat-guide-section-header">
        What is a Single Variable Linear Equation?
    </h2>
    <div class="section-description">
        A single variable linear equation is an equation that has only one variable and no exponents or radicals (like x + 5 = 3).
    </div>

    <h2 class="sat-guide-section-header">
        Isolate the Variable
    </h2>
    <div class="section-description">
        Solving a single variable linear equation is all about trying isolate the variable so that it is by itself on one side of the equation.
    </div>

    <h2 class="sat-guide-section-header">
        First Distribute (if applicable)
    </h2>
    <div class="section-description">
        If there are any terms in parentheses in the equation that are multiplied by a number, you need to distribute that number to the terms inside the parentheses. For example, take the equation below:
        <div class="pt-4">
            <div>
                <span class='latex-formula'>$$2(x + 5) = -4x + 16$$</span>
            </div>
            <div>
                We'll start by distributing the 2 to the x and the 5, resulting in:
            </div>
            <div>
                <span class='latex-formula'>$$2x + 10 = -4x + 16$$</span>
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">
        Add and Subtract Terms to Get the Variable on One Side
    </h2>
    <div class="section-description">
        The next thing you need to do is manipulate the equation so that every term that includes the variable is on one side of the equation. Let's continue with our example from above:
        <div class="pt-4">
            <div>
                <span class='latex-formula'>$$2x + 10 = -4x + 16$$</span>
            </div>
            <div>
                First, let's get all the terms with x on one side of the equation. We can either do this by subtracting 2x from both sides of the equation, or by adding 4x to both sides of the equation. Let's do the second option, because then we'll end up with a positive coefficient for x.
            </div>
            <div>
                <span class='latex-formula'>$$2x + 10 + 4x = -4x + 16 + 4x$$</span>
            </div>
            <div>
                Next we combine "like terms" on both sides of the equation. Like terms are terms that have the same variable and exponent. In this case, on the left side of the equation, 2x and 4x are like terms, so we can simply add those together to get 6x, as shown below. On the right side of the equation, -4x and 4x are like terms, so they add together to cancel each other out, resulting in the equation below:
            </div>
            <div>
                <span class='latex-formula'>$$6x + 10 = 16$$</span>
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">
        Add and Subtract Constants to Get the Variable by Itself
    </h2>
    <div class="section-description">
        Now that the variable is only on one side of the equation, we want to get everything that doesn't have the variable on the other side of the equation. In our example, we want to get rid of the 10 on the left side of the equation. We can do this by subtracting 10 from both sides of the equation, resulting in the equation below:
        <div class="pt-4">
            <div>
                <span class='latex-formula'>$$6x + 10 - 10 = 16 - 10$$</span>
            </div>
            <div>
                This simplifies to:
            </div>
            <div>
                <span class='latex-formula'>$$6x = 6$$</span>
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">
        Divide by the Coefficient
    </h2>
    <div class="section-description">
        Now that the variable is contained in a single term, and is by itself on one side of the equation, to get the variable completely by itself we need to get rid of the coefficient of the variable, if it has one. We do this by dividing both sides of the equation by the coefficient. In our example, the coefficient of the variable is 6, so we'll divide both sides of the equation by 6, resulting in the equation below:
        <div class="pt-4">
            <div>
                <span class='latex-formula'>$$\frac{6x}{6} = \frac{6}{6}$$</span>
            </div>
            <div>
                This simplifies to:
            </div>
            <div>
                <span class='latex-formula'>$$x = 1$$</span>
            </div>
        </div>
    </div>

    <h2 class="sat-guide-section-header">
        If the Variable is in the Denominator
    </h2>
    <div class="section-description">
        Sometimes, linear equations can be in a bit more complex form, where the variable is in the denominator of a fraction. For example, the equation below has x in the denominator:
        <div class="pt-4">
            <div>
                <span class='latex-formula'>$$\frac{2}{x + 3} + 10 = 15$$</span>
            </div>
            <div>
                Like before, first we want to get terms involving the variable on one side of the equation, with all other terms on the other side. We can do this by subtracting 10 from both sides of the equation, resulting in the equation below:
            </div>
            <div>
                <span class='latex-formula'>$$\frac{2}{x + 3} = 5$$</span>
            </div>
            <div>
                Ultimately, we don't want the variable in the denominator, so we want to get rid of the denominator in that fraction. We can do this by multiplying both sides of the equation by the denominator, which is x + 3, resulting in the equation below:
            </div>
            <div>
                <span class='latex-formula'>$$\frac{2\left(x+3\right)}{x+3}=5\left(x+3\right)$$</span>
            </div>
            <div>
                The x + 3 on the numerator and denominator on the left side of the equation cancels out, leaving us with the equation below:
            </div>
            <div>
                <span class='latex-formula'>$$2 = 5(x + 3)$$</span>
            </div>
            <div>
                Now we can solve for x like we did before, with the following steps:
                <div class="pt-4">
                    <div>
                        <span class='latex-formula'>$$2 = 5x + 15$$</span>
                    </div>
                    <div>
                        <span class='latex-formula'>$$2 - 15 = 5x + 15 - 15$$</span>
                    </div>
                    <div>
                        <span class='latex-formula'>$$-13 = 5x$$</span>
                    </div>
                    <div>
                        <span class='latex-formula'>$$\frac{-13}{5} = \frac{5x}{5}$$</span>
                    </div>
                    <div>
                        <span class='latex-formula'>$$-\frac{13}{5} = x$$</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.latex-formula {
    display: inline-block;
    padding: 0;
}
</style>