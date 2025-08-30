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


  document.addEventListener("DOMContentLoaded", () => {
    const authBtn = document.getElementById("authBtn");
    const authDropdown = document.getElementById("authDropdown");
    const signOutBtn = document.getElementById("signOut");

    const modal = document.getElementById("loginModal");
    const closeModalBtn = document.getElementById("closeModal");
    const authForm = document.getElementById("authForm");
    const authTitle = document.getElementById("authTitle");
    const toggleAuth = document.getElementById("toggleAuth");

    // Check login state on load
    const currentUser = localStorage.getItem("finoraUser");
    if (currentUser) {
      authBtn.textContent = currentUser; // show username
      authBtn.href = "#"; // not modal
      authBtn.classList.add("has-dropdown");
    }

    // Open modal only if not logged in
    authBtn.addEventListener("click", (e) => {
      const user = localStorage.getItem("finoraUser");
      if (!user) {
        e.preventDefault();
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
      } else {
        // toggle dropdown
        e.preventDefault();
        authDropdown.style.display =
          authDropdown.style.display === "block" ? "none" : "block";
      }
    });

    // Close modal
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
      }
    });

    // Toggle Login/Signup
    if (toggleAuth && authTitle) {
      let isLogin = true;
      toggleAuth.addEventListener("click", (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        authTitle.textContent = isLogin ? "Login" : "Sign Up";
        const btn = authForm?.querySelector('button[type="submit"]');
        if (btn) btn.textContent = isLogin ? "Login" : "Sign Up";
        const p = document.querySelector(".auth-toggle");
        if (p) {
          p.innerHTML = isLogin
            ? `Don't have an account? <a href="#" id="toggleAuth">Sign Up</a>`
            : `Already have an account? <a href="#" id="toggleAuth">Login</a>`;
        }
      });
    }

    // Handle login/signup
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = (
        document.getElementById("username")?.value || "User"
      ).trim();

      localStorage.setItem("finoraUser", username);
      modal.classList.remove("is-open");
      authBtn.textContent = username;
      authBtn.href = "#";
      window.location.href = "dashboard.html";
    });

    // Handle Sign out
    if (signOutBtn) {
      signOutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("finoraUser");
        authBtn.textContent = "Login";
        authDropdown.style.display = "none";
        window.location.href = "index.html"; // redirect home
      });
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".auth-menu")) {
        authDropdown.style.display = "none";
      }
    });
  });

