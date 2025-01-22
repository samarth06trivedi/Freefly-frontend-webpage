document.addEventListener("DOMContentLoaded", () => {
  const footerHeadings = document.querySelectorAll(".footer-section h4");

  // Function to handle the dropdown toggle
  const toggleDropdown = (heading) => {
    const ul = heading.nextElementSibling;

    if (ul && ul.tagName === "UL") {
      const isOpen = ul.style.display === "block";
      ul.style.display = isOpen ? "none" : "block";
      heading.classList.toggle("open", !isOpen);
    }
  };

  // Function to enable dropdown functionality
  const enableDropdown = () => {
    footerHeadings.forEach((heading) => {
      const plusIcon = heading.querySelector(".plus-btn");

      if (!plusIcon) {
        // Create and append the "+" icon
        const icon = document.createElement("span");
        icon.classList.add("plus-btn");
        icon.textContent = "+";
        heading.appendChild(icon);

        heading.addEventListener("click", () => {
          toggleDropdown(heading);
          // Update "+" or "-" based on the state
          icon.textContent = heading.classList.contains("open") ? "-" : "+";
        });
      }
    });
  };

  // Function to disable dropdown functionality
  const disableDropdown = () => {
    footerHeadings.forEach((heading) => {
      const ul = heading.nextElementSibling;
      const plusIcon = heading.querySelector(".plus-btn");

      if (ul && ul.tagName === "UL") {
        ul.style.display = "block"; // Ensure all dropdowns are always open
      }
      if (plusIcon) {
        plusIcon.remove(); // Remove the "+" icon
      }

      heading.classList.remove("open");
      heading.removeEventListener("click", () => toggleDropdown(heading));
    });
  };

  // Function to check the screen width and adjust functionality
  const handleResize = () => {
    if (window.innerWidth <= 960) {
      enableDropdown(); // Enable dropdown for small screens
    } else {
      disableDropdown(); // Disable dropdown for larger screens
    }
  };

  // Initial check and listener for resizing
  handleResize();
  window.addEventListener("resize", handleResize);
});
