
// Get elements
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Menu show
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

// Menu hidden
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})



// Login
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

// Login show
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

// Login hidden
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})

// Hide login page when main page is clicked
document.addEventListener('click', (e) => {
   if (!e.target.closest('.main')) return;
   login.classList.remove('show-login');
 });

// Signup
const signup = document.getElementById('signup'),
      signupBtn = document.getElementById('signup-btn'),
      signupClose = document.getElementById('signup-close')

// Signup show
signupBtn.addEventListener('click', () =>{
   signup.classList.add('show-signup')
})

// Signup hidden
signupClose.addEventListener('click', () =>{
   signup.classList.remove('show-signup')
})

// Add event listener for signup button
const signupButton = document.querySelector('.signup__button');
signupButton.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  if (password !== confirmPassword) {
    popupMessage("Passwords do not match", "error");
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    popupMessage("Email already exists", "error");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  popupMessage("You're signed up!", "success");
  signup.classList.remove('show-signup');
  login.classList.add('show-login');
});


const loginButton = document.querySelector('.login__button');
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(user => user.email === email && user.password === password);

  if (!existingUser) {
    popupMessage("Invalid email or password", "error");
    return;
  }

  popupMessage("You're logged in!", "success");
  localStorage.setItem('loggedInUser', existingUser.name);

  // Update the nav bar with the logged in username
  const loginText = document.getElementById('login-text');
  loginText.innerText = `Hello, ${existingUser.name}`;

  // Hide the login popup
  const login = document.getElementById('login');
  login.classList.remove('show-login');
   // Prevent the user from logging in again if they are already logged in
   e.target.disabled = true;
});

// On each page load, check if the user is logged in
window.addEventListener('load', () => {
   const loggedInUser = localStorage.getItem('loggedInUser');
   if (loggedInUser) {
     // Update the nav bar with the logged in username
     const loginText = document.getElementById('login-text');
     loginText.innerText = `Hello, ${loggedInUser}`;
 
     // Hide the login popup
     const login = document.getElementById('login');
     login.classList.remove('show-login');
   } else {
     // Show the login popup
     const login = document.getElementById('login');
     login.classList.add('show-login');
   }
 });

// Add event listener for login link
const loginLink = document.getElementById('login-link');
loginLink.addEventListener('click', () => {
  signup.classList.remove('show-signup');
  login.classList.add('show-login');
});

// Add event listener for signup link
const signupLink = document.getElementById('signup-btn');
signupLink.addEventListener('click', () => {
  login.classList.remove('show-login');
  signup.classList.add('show-signup');
});

// Function to show popup message
function popupMessage(message, type) {
  const popup = document.createElement("div");
  popup.className = `popup ${type}`;
  popup.innerHTML = `<i class="ri-${type}-line"></i> ${message}`;
  document.body.appendChild(popup);
  setTimeout(() => {
    popup.remove();
  }, 3000);
}



// On each page load, check if the user is logged in
window.addEventListener('load', () => {
   const loggedInUser = localStorage.getItem('loggedInUser');
   if (!loggedInUser) {
     // Show the login popup
     const login = document.getElementById('login');
     login.classList.add('show-login');
   }
 });

// Add event listener for logout button
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  popupMessage("You're logged out!", "success");
  
  const loginText = document.getElementById('login-text');
  loginText.innerText = 'Login';
  login.classList.add('show-login');
});



 



// Add event listener for forgot password button
const forgotPasswordBtn = document.getElementById('forgot-password-btn');
forgotPasswordBtn.addEventListener('click', () => {
  const forgotPasswordModal = document.getElementById('forgot-password-modal');
  forgotPasswordModal.classList.add('show-forgot-password-modal');
});

// Add event listener for forgot password modal close button
const forgotPasswordModalCloseBtn = document.getElementById('forgot-password-modal-close-btn');
forgotPasswordModalCloseBtn.addEventListener('click', () => {
  const forgotPasswordModal = document.getElementById('forgot-password-modal');
  forgotPasswordModal.classList.remove('show-forgot-password-modal');
});

// Add event listener for forgot password submit button
const forgotPasswordSubmitBtn = document.getElementById('forgot-password-submit-btn');
forgotPasswordSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('forgot-password-email').value;
  const newPassword = document.getElementById('forgot-password-new-password').value;
  const confirmPassword = document.getElementById('forgot-password-confirm-password').value;

  if (newPassword !== confirmPassword) {
    popupMessage("Passwords do not match", "error");
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(user => user.email === email);

  if (!existingUser) {
    popupMessage("Email does not exist", "error");
    return;
  }

  existingUser.password = newPassword;
  localStorage.setItem('users', JSON.stringify(users));
  popupMessage("Password updated successfully!", "success");
  const forgotPasswordModal = document.getElementById('forgot-password-modal');
  forgotPasswordModal.classList.remove('show-forgot-password-modal');
});













