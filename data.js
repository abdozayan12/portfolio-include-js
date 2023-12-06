const projectsData = [
   {
    id: '01',
    name: 'Conference-page',
    role: 'Front End Dev',
    platform: 'Web',
    year: '2023',
    description:
      'The Conference Page is a responsive and dynamic website created using HTML, CSS and javascript. ',
    descriptionlong:
      'The Conference Page is a responsive and dynamic website created using HTML, CSS and javascript.',
    featuredImage: 'images/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: 'https://abdozayan12.github.io/capstone-project---Conference-page/',
    linkToSource: 'https://github.com/abdozayan12/capstone-project---Conference-page',
  },
  {
    id: '02',
    name: 'Countries Explorer',
    role: 'Front end Dev',
    platform: 'Web',
    year: '2023',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    descriptionlong:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ',
    featuredImage: 'images/Portfolio.svg',
    technologies: ['HTML', 'CSS', 'ReactJs'],
    linkToLiveVersion: 'https://react-capstone-project-05mk.onrender.com/',
    linkToSource: 'https://github.com/abdozayan12/REACT-CAPSTONE-PROJECT',
  },
  {
    id: '03',
    name: 'Dish-Discovery',
    role: 'Front End Dev',
    platform: 'Web',
    year: '2023',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionlong:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featuredImage: 'images/Multi.svg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/abdozayan12/Dish-Discovery',
  },
  {
    id: '04',
    name: 'To-Do-List',
    role: 'Front End Dev',
    platform: 'Web',
    year: '2023',
    description:
      'To-do list" is a tool that helps to organize a day which is built using ES6 and Webpack.',
    descriptionlong:
      'To-do list" is a tool that helps to organize a day which is built using ES6 and Webpack. It simply lists the tasks that a user wants to do and allows them to mark the tasks as completed or manage…',
    featuredImage: 'images/FACEBOOK.svg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'webpack'],
    linkToLiveVersion: 'https://abdozayan12.github.io/To-Do-List/dist/',
    linkToSource: 'https://github.com/abdozayan12/To-Do-List',
  },
  {
    id: '05',
    name: 'space_travelers',
    role: 'Front End Dev',
    platform: 'Web',
    year: '2023',
    description:
      'Space Travelers Hub, a web application that connects adventurous travelers with commercial and scientific space travel services.',
    descriptionlong:
      'Space Travelers Hub, a web application that connects adventurous travelers with commercial and scientific space travel services. The app is built on an external API and allows users to book rockets and join selected space missions. Our team collaborated using a kanban board to ensure a successful project delivery.',
    featuredImage: 'images/space-travelers.png',
    technologies: ['React', 'CSS', 'Redux', 'External API'],
    linkToLiveVersion: '#',
    linkToSource: '',
  },
  {
    id: '06',
    name: 'Resort Vista',
    role: 'Full Stack Dev',
    platform: 'Web',
    year: '2023',
    description:
      'Resort Vista is a web application built with a Ruby on Rails backend API and a React frontend UI, offering users a platform to explore and manage resort reservations.',
    descriptionlong:
      'Resort Vista is a web application built with a Ruby on Rails backend API and a React frontend UI, offering users a platform to explore and manage resort reservations. Whether you&apos;re planning a getaway or looking for a relaxing vacation spot, Resort Vista provides a seamless experience to discover, reserve, and manage your resort bookings.',
    featuredImage: 'images/resort.png',
    technologies: ['React', 'CSS', 'JavaScript', 'Rails'],
    linkToLiveVersion: 'https://resortvista.onrender.com/',
    linkToSource: 'https://github.com/abdozayan12/resort-front-end',
  }];

const project = document.querySelector('#project');
const displayPopup = document.querySelector('#display-popup');

const generateTechnologyTags = (technologies) => {
  const html = technologies
    .map((technology) => `<li>${technology}</li>`)
    .join('\n');
  return html;
};

let output = ' ';
// const popup = ' ';
projectsData.forEach((project) => {
  output += `
      <section class="grid-container">
        <div class="grid-item0">
            <img src="${project.featuredImage}" alt="portfolio 1">
        </div>
        <div class="grid-item2">
            <h1 class="tonic">${project.name}</h1>
            <ul class="listItem">
                <li>${project.platform}</li>
                <li>${project.role}</li>
                <li>${project.year}</li>
            </ul>
            <p class="firstPara">${project.description}</p>
            <ul class="lang">
              ${generateTechnologyTags(project.technologies)}
            </ul>
            <button id="open-project-popup-${project.id}" class="buttonButton1">See Project</button>
        </div>
      </section>
    `;
});

project.innerHTML = output;

const generateProjectPopUps = (projectDetails) => {
  const {
    name,
    role,
    platform,
    year,
    descriptionlong,
    featuredImage,
    technologies,
    linkToLiveVersion,
    linkToSource,
  } = projectDetails;

  return `
    <div class="container">
    <div class="modal-card">
        <div class="popup-card-header">
          <h1 class="tonic">${name}</h1>
          <i id="close-modal-popup" class="fas fa-times"></i>
        </div>
        <ul class="listItem">
            <li>${platform}</li>
            <li>${role}</li>
            <li>${year}</li>
        </ul>
        <img src="${featuredImage}" alt="project 2">
        <div class="modal-details">
            <ul class="lang">
                ${generateTechnologyTags(technologies)}
                </ul>
                </div>
            <div class="modal-footer">
            <p class="secondPara">${descriptionlong}</p>
                <div class="btn-group">
                  <div class="bt-img">
                    <a href="${linkToLiveVersion}" target="_blank" class="buttonpop">See live <img src="images/Icon.svg"></a>
                    
                  </div> 
                  <div class="bt-img"> 
                    <a href="${linkToSource}" target="_blank" class="buttonpop">See source <img src="images/Vector.svg"></a>
                    
                  </div>
                </div>
            </div>
        
    </div>
</div>
  `;
};

const handleModalOpen = (id) => {
  const selectedProject = projectsData.find((project) => project.id === id);
  const html = generateProjectPopUps(selectedProject);
  displayPopup.innerHTML = html;
  displayPopup.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

project.addEventListener('click', (e) => {
  e.preventDefault();

  const { id } = e.target;
  if (id.startsWith('open-project-popup-')) {
    const projectId = id.split('-')[3];
    handleModalOpen(projectId);
  }
});

displayPopup.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id === 'close-modal-popup') {
    displayPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

window.onclick = (e) => {
  if (e.target === displayPopup) {
    displayPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};