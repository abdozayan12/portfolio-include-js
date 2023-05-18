const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.new');

// nav menu //

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// validate Email //

const form = document.querySelector('.form1');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailel = document.getElementById('email').value;
  const valid = document.querySelector('.invalid');
  if (emailel !== emailel.toLowerCase()) {
    valid.innerText = 'please enter a correct email address format';
  } else {
    form.submit();
  }
});