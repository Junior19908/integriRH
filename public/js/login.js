(function () {
  const form = document.getElementById("loginForm");
  const btn = document.getElementById("submitBtn");
  const spinner = document.getElementById("spinner");
  const errorBox = document.getElementById("errorBox");
  const togglePassword = document.getElementById("togglePassword");
  const password = document.getElementById("password");

  // Mostrar/Ocultar senha
  togglePassword?.addEventListener("click", () => {
    const isPwd = password.type === "password";
    password.type = isPwd ? "text" : "password";
    togglePassword.setAttribute("aria-pressed", String(isPwd));
  });

  // Validação leve + feedback visual
  form?.addEventListener("submit", (e) => {
    const username = document.getElementById("username");
    const pwd = document.getElementById("password");

    if (!username.value.trim() || !pwd.value.trim()) {
      e.preventDefault();
      showError("Preencha usuário e senha para continuar.");
      return;
    }

    // Simula loading (apenas visual, ainda GET /dashboard)
    btn.disabled = true;
    spinner.classList.remove("hidden");
  });

  function showError(msg) {
    if (!errorBox) return;
    errorBox.textContent = msg;
    errorBox.classList.remove("hidden");
    setTimeout(() => errorBox.classList.add("hidden"), 4000);
  }
})();
