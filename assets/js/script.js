// typing animation
document.addEventListener("DOMContentLoaded", function () {
  const words = ["Inspired", "Dejected", "Frustrated", "Satisfied"];
  const colors = ["rgb(255, 179, 200)", "rgb(164, 180, 212)", "#e88015", "#acc794"]; 

  const animateEl = document.querySelector(".animate-text");

  if (!animateEl) {
    console.error("Element '.animate-text' not found!");
    return;
  }

  const typed = new Typed(animateEl, {
    strings: words,
    typeSpeed: 150,
    backSpeed: 90,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: "|",

    preStringTyped: function (pos) {
      const color = colors[pos % colors.length];
      document.body.style.backgroundColor = color;
    },
  });

  // Optional: set initial background before typing starts
  document.body.style.backgroundColor = colors[0];
});

// HOVER & SELECTED STATES FOR EMOTIONS BUTTONS

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button[id^='btn']");
  const defaultColor = "rgb(168, 155, 209)";

  buttons.forEach((btn) => {
    const color = btn.dataset.color;

    btn.addEventListener("mouseover", () => {
      document.body.style.backgroundColor = color;
    });

    btn.addEventListener("mouseleave", () => {
      if (!btn.classList.contains("selected")) {
        document.body.style.backgroundColor = defaultColor;
      }
    });

    btn.addEventListener("click", () => {
      // buttons.forEach((b) => b.classList.remove("selected"));

      // Toggle the clicked one
      const selected = btn.classList.toggle("selected");

      // Apply the appropriate background
      document.body.style.backgroundColor = selected ? color : defaultColor;
    });
  });
});

