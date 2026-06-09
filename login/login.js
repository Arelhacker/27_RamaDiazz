/* ================================================
   login.js — MABARLAH Login Page Logic
================================================ */

/* Redirect if already logged in */
if (localStorage.getItem('mlSession')) {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get('redirect') || '../index.html';
  window.location.href = redirect;
}

function doLogin() {
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value.trim();

  if (!user || !pass) {
    setMsg('loginMsg', 'Username dan password wajib diisi!', 'error');
    return;
  }

  const users = JSON.parse(localStorage.getItem('mlUsers') || '{}');

  if ((users[user] && users[user].pass === pass) || (user === 'admin' && pass === 'admin123')) {
    const name = (user === 'admin') ? 'Admin' : users[user].name;
    loginSuccess(name, user);
  } else {
    setMsg('loginMsg', 'Username atau password salah!', 'error');
  }
}

function loginSuccess(name, username) {
  localStorage.setItem('mlSession', JSON.stringify({ name, username }));
  sessionStorage.setItem('justLoggedIn', '1');
  setMsg('loginMsg', `Berhasil masuk! Mengarahkan... ⚡`, 'success');

  const params = new URLSearchParams(window.location.search);
  const redirect = params.get('redirect') || '../index.html';

  setTimeout(() => {
    window.location.href = redirect;
  }, 900);
}

function setMsg(id, msg, type) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.className = 'form-msg ' + type;
}

/* Allow Enter key to submit */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') doLogin();
});

/* Mobile menu */
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');
const navRight   = document.getElementById('navRight');
if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    navRight.classList.toggle('mobile-visible');
  });
}
