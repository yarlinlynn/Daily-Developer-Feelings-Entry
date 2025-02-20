const buttons = document.querySelectorAll(".btn");
const dashboard = document.querySelector(".dashboardDiv");
const textareas = document.querySelectorAll("textarea"); // Select all textareas

// Function to count number of lines in textarea
function countLines(textarea) {
    const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
    return Math.floor(textarea.scrollHeight / lineHeight);
}

// Function to remove all hover classes
const removeHoverClasses = () => {
    dashboard.classList.remove(
        "hover-bg1", "hover-bg2", "hover-bg3", "hover-bg4",
        "hover-bg5", "hover-bg6", "hover-bg7", "hover-bg8"
    );

    // Remove hover classes from all buttons
    buttons.forEach(btn => {
        btn.classList.remove(
            "hover-btn-bg1", "hover-btn-bg2", "hover-btn-bg3",
            "hover-btn-bg4", "hover-btn-bg5", "hover-btn-bg6",
            "hover-btn-bg7", "hover-btn-bg8"
        );
    });
};

textareas.forEach((textarea) => {
    textarea.addEventListener("input", function () {
        // Prevents input from exceeding 4 rows
        if (countLines(this) > 4) {
            this.value = this.value.slice(0, -1); // Remove last character if overflow occurs
        }
    });

    textarea.addEventListener("keydown", function (e) {
        // Block Enter key if at max rows
        if (e.key === "Enter" && countLines(this) >= 4) {
            e.preventDefault();
        }
    });
});

buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        removeHoverClasses(); // Remove previous classes first

        if (btn.id === "btn1") {
            dashboard.classList.add("hover-bg1");
            buttons.forEach(b => b.classList.add("hover-btn-bg1")); // Apply to all buttons
        } 
        if (btn.id === "btn2") {
            dashboard.classList.add("hover-bg2");
            buttons.forEach(b => b.classList.add("hover-btn-bg2"));
        }
        if (btn.id === "btn3") {
            dashboard.classList.add("hover-bg3");
            buttons.forEach(b => b.classList.add("hover-btn-bg3"));
        }
        if (btn.id === "btn4") {
            dashboard.classList.add("hover-bg4");
            buttons.forEach(b => b.classList.add("hover-btn-bg4"));
        }
        if (btn.id === "btn5") {
            dashboard.classList.add("hover-bg5");
            buttons.forEach(b => b.classList.add("hover-btn-bg5"));
        }
        if (btn.id === "btn6") {
            dashboard.classList.add("hover-bg6");
            buttons.forEach(b => b.classList.add("hover-btn-bg6"));
        }
        if (btn.id === "btn7") {
            dashboard.classList.add("hover-bg7");
            buttons.forEach(b => b.classList.add("hover-btn-bg7"));
        }
        if (btn.id === "btn8") {
            dashboard.classList.add("hover-bg8");
            buttons.forEach(b => b.classList.add("hover-btn-bg8"));
        }
    });

    btn.addEventListener("mouseleave", () => {
        removeHoverClasses(); // Reset when mouse leaves
    });
});

  //Screenshot functionality
  const saveBtn = document.getElementById('save-btn');

  saveBtn.addEventListener('click', () => {
    saveBtn.classList.add('hidden');
    //Send message to the main process to capture the screenshot
    window.electronAPI.captureScreenshot();
  });

  //Listen for the 'screenshot-saved' event from main process
  window.electronAPI.onScreenshotSaved((event, filePath) => {
    console.log('Screenshot saved at:', filePath);
    alert(`Screenshot saved at: ${filePath}`);
    saveBtn.classList.remove('hidden');
  });