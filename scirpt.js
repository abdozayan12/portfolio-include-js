const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.new');

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

// preserve data in the browser//

const Name = document.getElementById('name');
const emailEl = document.getElementById('email');
const Text = document.getElementById('textArea');

form.addEventListener('click', () => {
  const formData = {
    Name: document.getElementById('name').value,
    emailEl: document.getElementById('email').value,
    Text: document.getElementById('textArea').value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});
// window.addEventListener('form', (e) => {
//   document.querySelector('.my-key').textContent = e.key;
//   document.querySelector('.my-old').textContent = e.oldValue;
//   document.querySelector('.my-new').textContent = e.newValue;
//   document.querySelector('.my-storage').textContent = JSON.stringify(e.storageArea);
// });

