(function() {
    const typingText = "Software Engineering Student";
    const typingSpeed = 100;
    const eraseDelay = 10000; // Delay before erasing in milliseconds
    const typingElement = document.getElementById("typing-text");
    const toggleButton = document.getElementById("theme-toggle");
    const toggleIcon = toggleButton.querySelector("i");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    let charIndex = 0;
    let isErasing = false;

    function typeErase() {
        typingElement.innerHTML = isErasing
            ? typingText.substring(0, charIndex - 1)
            : typingText.substring(0, charIndex + 1);

        charIndex = isErasing ? Math.max(charIndex - 1, 0) : Math.min(charIndex + 1, typingText.length);

        if (!isErasing && charIndex === typingText.length) {
            setTimeout(() => { isErasing = true; typeErase(); }, eraseDelay);
        } else if (isErasing && charIndex === 0) {
            isErasing = false;
            setTimeout(typeErase, typingSpeed);
        } else {
            setTimeout(typeErase, typingSpeed);
        }
    }

    function toggleTheme() {
        const isDarkTheme = document.body.classList.toggle("dark-theme");
        toggleIcon.classList.toggle("fa-sun", isDarkTheme);
        toggleIcon.classList.toggle("fa-moon", !isDarkTheme);
        toggleIcon.style.color = isDarkTheme ? "#fff" : "";
    }

    toggleButton.addEventListener("click", toggleTheme);

    if (prefersDarkScheme.matches) {
        toggleTheme();
    }

    typeErase();
})();
