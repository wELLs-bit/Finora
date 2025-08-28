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

  //Modal
  function openModal(id) {
    document.getElementById(id).classList.add("active");
  }
  function closeModal(id) {
    document.getElementById(id).classList.remove("active");
  }

// Loging
    document.addEventListener('DOMContentLoaded', () => {
    const openLogin = document.getElementById('openLogin');
    const modal = document.getElementById('loginModal');
    const closeModalBtn = document.getElementById('closeModal');
    const authForm = document.getElementById('authForm');
    const authTitle = document.getElementById('authTitle');
    const toggleAuth = document.getElementById('toggleAuth');

    if (openLogin && modal && closeModalBtn) {
      openLogin.addEventListener('click', (e) => {
        e.preventDefault();                 // stop anchor navigation
        modal.classList.add('is-open');     // show modal
        modal.setAttribute('aria-hidden', 'false');
      });

      closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
      });

      // click outside dialog closes
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('is-open');
          modal.setAttribute('aria-hidden', 'true');
        }
      });
    }

    // Toggle Login/Signup (no re-binding issues)
    if (toggleAuth && authTitle) {
      let isLogin = true;
      toggleAuth.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        authTitle.textContent = isLogin ? 'Login' : 'Sign Up';
        // switch submit button text
        const btn = authForm?.querySelector('button[type="submit"]');
        if (btn) btn.textContent = isLogin ? 'Login' : 'Sign Up';
        // switch helper text
        const p = document.querySelector('.auth-toggle');
        if (p) {
          p.innerHTML = isLogin
            ? `Don't have an account? <a href="#" id="toggleAuth">Sign Up</a>`
            : `Already have an account? <a href="#" id="toggleAuth">Login</a>`;
          // re-bind the toggler because innerHTML replaced the element
          const newToggle = document.getElementById('toggleAuth');
          newToggle.addEventListener('click', (evt) => toggleAuth.dispatchEvent(new Event('click', {bubbles: true})));
        }
      });
    }

    // Handle submit → save username and redirect to dashboard
    if (authForm) {
      authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = (document.getElementById('username')?.value || 'User').trim();
        localStorage.setItem('finoraUser', username || 'User');
        window.location.href = 'dashboard.html';
      });
    }
  });
