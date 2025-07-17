  const loginForm = document.querySelector("#login-form");
  const signupForm = document.querySelector("#signup-form");
  const loginTab = document.querySelector("#show-login");
  const signupTab = document.querySelector("#show-signup");

  loginTab.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginTab.classList.add("border-blue-600");
    signupTab.classList.remove("border-blue-600");
  });

  signupTab.addEventListener("click", () => {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    signupTab.classList.add("border-blue-600");
    loginTab.classList.remove("border-blue-600");
  });