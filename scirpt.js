const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.new');
const body = document.querySelector('body');
const open = document.querySelector('.buttonButton1');
open.addEventListener('click', () => {
  const htm = document.createElement('div');
  htm.innerHTML = `
<div class="modal" id="modal">
                        <div class="modal-header">
                                
                                <h1 class="tonic">Tonic</h1>
                                <button class="close-button">&times;</button>
                        </div>
                        <div class = "project-listItems">    
                            <ul class="listItem">
                                <li>Canopy</li>
                                <li>Back End Dev</li>
                                <li>2015</li>
                            </ul>
                        </div>
                        <div><img src="images/Snapshoot.svg" alt="#"></div>
                        <div class="modal-body">
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam, iste molestiae laborum aperiam autem modi, cupiditate reprehenderit placeat nulla consectetur quam dolorem eos, veritatis praesentium voluptates! Totam, quasi pariatur!</p>
                                <br>
                                <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ab unde architecto impedit nisi, tempora tempore ad nobis culpa quidem a, aliquam explicabo quos fugit, neque illo non at distinctio.</p> -->
                            </div>
                            <div>
                                <ul class="lang">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Java Script</li>
                                    <li>Ruby</li>
                                    <li>Bootstrap</li>
                                </ul>
                                <button class="see">See Live <img src="images/Icon.svg"></button>
                                <button class="see">See source <img src="images/Vector.svg"></button>
                            </div>
                        </div>
                    </div>
                    <div id="overlay"></div>
`;
  body.appendChild(htm);
  const close = document.querySelector('.close-button');
  close.addEventListener('click', () => {
    body.removeChild(htm);
  });
});

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