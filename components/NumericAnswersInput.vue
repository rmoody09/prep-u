<script setup>
    const props = defineProps(['answer_values', 'answers', 'require_all']);

    if (props.answers) {
        console.log('answers');
        console.log(JSON.stringify(props.answers));
    }


    /**
     * Cleans and formats a numeric input string
     * Ensures the string is a valid number with up to two decimal places
     * @param {string} input - The input string to clean
     * @returns {string} The cleaned string
     */
    function reformatString(input) {
        // Allow minus sign at the beginning for negative numbers
        let isNegative = input.startsWith('-');

        // Remove all non-digit, non-slash, non-decimal, non-minus characters
        let cleaned = input.replace(/[^\d/.-]/g, '');
        
        // Keep only the first slash
        let parts = cleaned.split('/');
        cleaned = parts.slice(0, 2).join('/');
        
        // Handle decimals in each part
        parts = cleaned.split('/');
        cleaned = parts.map(part => {
            let decimals = part.split('.');
            return decimals.slice(0, 2).join('.');
        }).join('/');

        // Remove any existing minus signs in the cleaned string
        cleaned = cleaned.replace(/-/g, '');
        
        // Remove leading zeros after minus sign but preserve single zero
        cleaned = cleaned.replace(/^(-?)0+(?=\d)/, '$1');

        // Limit the length (excluding the minus sign)
        cleaned = cleaned.slice(0, 5);
        
        // Add minus sign back if the original input was negative
        return isNegative ? '-' + cleaned : cleaned;
    }
   

    let answer_values = props.answer_values;
    let answers = props.answers;
    if (!answers) {
        answers = answer_values.map((answer) => {return {value: answer, label: ''}});
    }
    if (!answer_values) {
        answer_values = answers.map((answer) => answer.value);
    }
    console.log('answers');
    console.log(JSON.stringify(answers));


    const input_answers = ref(answer_values.map((answer) => ''));
    console.log('input_answers');
    console.log(JSON.stringify(input_answers.value));

   
    if (!props.require_all) {
        input_answers.value = [''];
    }

    const showing_solution = ref(false);

    function inputChanged(index) {
        nextTick(() => {
            let value = input_answers.value[index];
            let stripped = reformatString(value);
            if (stripped != value) {
                input_answers.value[index] = stripped;
            }
        });
    }
 
    function roundToXChars(num, x) {
        let rounded = num.toFixed(x-1); // Round to 4 decimal places initially

        // Check if the rounded number already has 5 characters or less
        if (rounded.length <= x) {
            return rounded;
        } 

        // If not, reduce the number of decimal places until it fits
        for (let i = x-2; i >= 0; i--) {
            rounded = num.toFixed(i);
            if (rounded.length <= x) {
                return rounded;
            }
        }
        return rounded;
    }

    /**
     * Generates alternative values for a given correct answer
     * Handles various formats including fractions, decimals, and negative numbers
     * Also accounts for different representations of the same number (e.g., with/without trailing zeros)
     * @param {string} correctValue - The correct answer to generate alternatives for
     * @returns {Array} An array of alternative values
     */
    function getAlternativeValues(correctValue) {
        let accepted_values = [correctValue];

        // Helper functions to add variations of accepted answers
        function addAcceptedValue(value) {
            if (!accepted_values.includes(value)) {
                accepted_values.push(value);
            }
        }

        function addAcceptedDecimalValue(value) {
            addAcceptedValue(value);
            
            // Handle trailing zeros in decimal numbers
            if (value.includes('.') && /\..*0+$/.test(value)) {
                let trimmed = value;
                // Add versions with trailing zeros removed
                while (trimmed.endsWith('0')) {
                    trimmed = trimmed.slice(0, -1);
                    addAcceptedValue(trimmed);
                }
                // Add version without decimal point if applicable
                if (trimmed.endsWith('.')) {
                    addAcceptedValue(trimmed.slice(0, -1));
                }
            }
        }

        // Parse correct answer format and convert to decimal if needed
        const isFraction = correctValue.includes('/');
        const isNegative = correctValue.startsWith('-');
        let decimalValue = null, decimalValueString = null;
        if (isFraction) {
            const [numerator, denominator] = correctValue.split('/');
            decimalValue = Number(numerator) / Number(denominator);
            decimalValueString = decimalValue.toString();
            
        } else {
            decimalValue = Number(correctValue);
            decimalValueString = decimalValue.toString();
        }

        // Handle different decimal representations based on value range
        let absoluteDecimalValue = Math.abs(decimalValue);
        let absoluteDecimalValueString = absoluteDecimalValue.toString();
        if (absoluteDecimalValue > 0 && absoluteDecimalValue < 1) {
            // Special handling for decimals between 0 and 1
            if (absoluteDecimalValueString.length > 5) {
                // Add both rounded and truncated versions for long decimals
                let rounded_str = roundToXChars(absoluteDecimalValue, 5);
                if (isNegative) {
                    rounded_str = '-' + rounded_str;
                }
                addAcceptedDecimalValue(rounded_str);
                let truncated_str = absoluteDecimalValueString.slice(0, 5);
                if (isNegative) {
                    truncated_str = '-' + truncated_str;
                }
                addAcceptedDecimalValue(truncated_str);
                if (absoluteDecimalValueString.length > 6) {
                    // Additional handling for very long decimals
                    let rounded_str = roundToXChars(absoluteDecimalValue, 6);
                    rounded_str = rounded_str.slice(1, 6);
                    if (isNegative) {
                        rounded_str = '-' + rounded_str;
                    }
                    addAcceptedDecimalValue(rounded_str);
                    let truncated_str = absoluteDecimalValueString.slice(1, 6);
                    if (isNegative) {
                        truncated_str = '-' + truncated_str;
                    }
                    addAcceptedDecimalValue(truncated_str);
                }
            } else {
                // Handle shorter decimals with and without leading zero
                let val_w_0 = absoluteDecimalValueString;
                if (isNegative) {
                    val_w_0 = '-' + val_w_0;
                }
                addAcceptedDecimalValue(val_w_0);
                let val_no_0 = absoluteDecimalValueString.slice(1);
                if (isNegative) {
                    val_no_0 = '-' + val_no_0;
                }
                addAcceptedDecimalValue(val_no_0);
            }
            
        } else {
            // Handle numbers >= 1 or <= -1
            let rounded_str = roundToXChars(absoluteDecimalValue, 5);
            if (isNegative) {
                rounded_str = '-' + rounded_str;
            }
            addAcceptedDecimalValue(rounded_str);
            let truncated_str = absoluteDecimalValueString.slice(0, 5);
            if (isNegative) {
                truncated_str = '-' + truncated_str;
            }
            addAcceptedDecimalValue(truncated_str);
        }
        return accepted_values;
    }

    /**
     * Generates alternative values for a given user input
     * Handles various formats including fractions, decimals, and negative numbers
     * Also accounts for different representations of the same number (e.g., with/without trailing zeros)
     * @param {string} inputValue - The user input to generate alternatives for
     * @returns {Array} An array of alternative values
     */
    function getInputValueAlternatives(inputValue) {
        let input_vals = [inputValue];
        let inputIsFraction = inputValue.includes('/');
        let inputIsNegative = inputValue.startsWith('-');
        let inputDecimalValue = null;
        let inputDecimalValueString = null;

        // If input is a fraction, convert to decimal and handle truncation if needed
        if (inputIsFraction) {
            const [numerator, denominator] = inputValue.split('/');
            inputDecimalValue = Number(numerator) / Number(denominator);
            inputDecimalValueString = inputDecimalValue.toString();
            let inputAbsoluteDecimalValue = Math.abs(inputDecimalValue);
            let inputAbsoluteDecimalValueString = inputAbsoluteDecimalValue.toString();
            if (inputAbsoluteDecimalValueString.length > 5) {
                let truncated_str = inputAbsoluteDecimalValueString.slice(0, 5);
                if (inputIsNegative) {
                    truncated_str = '-' + truncated_str;
                }
                input_vals.push(truncated_str);
            }
        }
        return input_vals;
    }


    /**
     * Checks if the user's input at a given index matches the correct answer
     * Handles various formats including fractions, decimals, and negative numbers
     * Also accounts for different representations of the same number (e.g., with/without trailing zeros)
     * @param {number} index - The index of the answer being checked
     * @returns {boolean} Whether the input matches any accepted form of the correct answer
     */
    function checkIfCorrect(index) {
        // Get user input
        const inputValue = input_answers.value[index];
        
        // Get correct answer and generate alternative values
        let accepted_values = [];
        if (!props.require_all) {
            for (let answer of answers) {
                accepted_values = accepted_values.concat(getAlternativeValues(answer.value));
            }
        } else {
            accepted_values = getAlternativeValues(answers[index].value);
        }
        
        // Generate alternative values for user input
        let input_vals = getInputValueAlternatives(inputValue);

        // Check if any input variation matches any accepted answer
        let is_correct = false;
        for (let input_val of input_vals) {
            if (accepted_values.includes(input_val)) {
                is_correct = true;
                break;
            }
        }
        return is_correct;
    }

    function showSolution() {
        showing_solution.value = true;
    }

    function hideSolution() {
        showing_solution.value = false;
    }

    defineExpose({
        showSolution,
        hideSolution
    });

</script>

<template>
    <div class="flex flex-row gap-6 items-center flex-wrap">
        <div v-for="(input_answer, index) in input_answers" class="flex flex-row justify-start items-center gap-2"> 
            <span class="grow-0" v-if="answers[index].label">
                {{ answers[index].label }}
            </span>
            <UInput v-model="input_answers[index]" class="w-[150px]" placeholder="Enter answer" :value="input_answer" @input="inputChanged(index)">
                <template #trailing v-if="showing_solution">
                    <UIcon v-if="checkIfCorrect(index)" name="i-heroicons-check-circle" class="text-green-500" />
                    <UIcon v-else name="i-heroicons-x-circle" class="text-red-500" />
                </template>
            </UInput>
        </div>
    </div>
</template>