(function() {
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    async function process() {
      let currentPage = 0;
      
      while (true) {
        // Get the next button
        const nextButton = document.querySelector('a[id="undefined_next"]');
        
        // Check if we've reached the last page
        if (!nextButton || nextButton.getAttribute('aria-disabled') === 'true') {
          console.log('Reached last page');
          break;
        }
  
        // Select all checkboxes except "Exclude Active Questions"
        const checkboxes = document.querySelectorAll('input[type=checkbox]');
        for (let checkbox of checkboxes) {
          // Skip the "Exclude Active Questions" checkbox by checking its aria-label
          if (!checkbox.checked && 
              checkbox.getAttribute('aria-label') !== 'Exclude Active Questions Toggle') {
            checkbox.click();
          }
        }
  
        // Move to next page
        nextButton.click();
        currentPage++;
        
        // Wait for page transition
        await delay(1000);
      }
  
      // Handle the last page
      const finalCheckboxes = document.querySelectorAll('input[type=checkbox]');
      for (let checkbox of finalCheckboxes) {
        if (!checkbox.checked && 
            checkbox.getAttribute('aria-label') != 'Exclude Active Questions Toggle') {
          checkbox.click();
        }
      }
  
      console.log('Completed processing all pages');
    }
  
    process();
  })();