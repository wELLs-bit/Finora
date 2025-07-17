const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

toggleBtn.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

window.onload = () => {
  const saved = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", saved);
  toggleBtn.textContent = saved === "dark" ? "☀️" : "🌙";
};

//AOS Initialization
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true, // Animate only once
  });


// FAQ Toggle Functionality
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((btn) => {
      btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        answer.style.display =
          answer.style.display === "block" ? "none" : "block";
      });
    });

// Swiper Initialization
  const swiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true, 
    autoplay: {
      delay: 4000, 
      disableOnInteraction: false, 
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

    // const form = document.getElementById("contact-form");
    // const successMessage = document.getElementById("success-message");

    // form.addEventListener("submit", function (e) {
    //   e.preventDefault(); // Stop form from submitting for now

    //   // Show success message
    //   successMessage.classList.add("show");

    //   // Reset form fields
    //   form.reset();

    //   // Auto-hide after 5 seconds
    //   setTimeout(() => {
    //     successMessage.classList.remove("show");
    //   }, 5000);
    // });
