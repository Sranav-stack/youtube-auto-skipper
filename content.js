// content.js

// 1. define the selector for the skip button
// YouTube changes these class names occasionally to foil ad-blockers.
// These are the most common current selectors.
const SKIP_BUTTON_SELECTORS = [
    '.ytp-ad-skip-button', 
    '.ytp-ad-skip-button-modern',
    '.videoAdUiSkipButton' 
];

function clickSkipBtn() {
    // Try to find the button using any of the known selectors
    for (let selector of SKIP_BUTTON_SELECTORS) {
        const skipBtn = document.querySelector(selector);
        
        // If the button exists and is technically clickable
        if (skipBtn) {
            skipBtn.click();
            console.log("Ad skipped by Auto Skipper!");
            return; // Stop checking once clicked
        }
    }
}

// 2. Create an observer to watch for changes in the page structure
// This fires whenever an element is added or removed from the DOM
const observer = new MutationObserver((mutations) => {
    // For performance, we could check mutations, but simply running the check
    // is fast enough in this context.
    clickSkipBtn();
});

// 3. Start observing the document body
observer.observe(document.body, {
    childList: true, // watch for direct children changes
    subtree: true    // watch all descendants (deep watch)
});