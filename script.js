function toggleForm(formId) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  // Hide both forms
  loginForm.style.display = 'none';
  registerForm.style.display = 'none';

  // Show the selected form
  const formToShow = document.getElementById(formId);
  if (formToShow) {
    formToShow.style.display = 'block';
  }
}


