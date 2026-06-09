/* ================================================
   register.js — MABARLAH Register Page Logic
================================================ */

/* Redirect if already logged in */
if (localStorage.getItem('mlSession')) {
  window.location.href = 'index.html';
}

function isValidGmail(email) {
  return /^[^\s@]+@gmail\.com$/i.test(email);
}

function doRegister() {
  const name   = document.getElementById('regName').value.trim();
  const user   = document.getElementById('regUser').value.trim();
  const gmail  = document.getElementById('regGmail').value.trim();
  const pass   = document.getElementById('regPass').value.trim();

  if (!name || !user || !gmail || !pass) {
    setMsg('registerMsg', 'Semua kolom wajib diisi!', 'error');
    return;
  }
  if (!isValidGmail(gmail)) {
    setMsg('registerMsg', 'Masukkan alamat Gmail yang valid! (contoh@gmail.com)', 'error');
    return;
  }
  if (pass.length < 6) {
    setMsg('registerMsg', 'Password minimal 6 karakter!', 'error');
    return;
  }

  const users = JSON.parse(localStorage.getItem('mlUsers') || '{}');

  if (users[user]) {
    setMsg('registerMsg', 'Username sudah digunakan, coba yang lain!', 'error');
    return;
  }

  users[user] = { name, pass, gmail };
  localStorage.setItem('mlUsers', JSON.stringify(users));

  setMsg('registerMsg', 'Akun berhasil dibuat! Mengarahkan ke halaman masuk... 🎉', 'success');

  setTimeout(() => {
    window.location.href = 'login/index.html';
  }, 1500);
}

function setMsg(id, msg, type) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.className = 'form-msg ' + type;
}

/* Allow Enter key to submit */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') doRegister();
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
