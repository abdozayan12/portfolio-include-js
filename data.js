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
    featuredImage: 'images/conference.png',
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
      'Explore The Countries" is a web application built using React and Redux that displays information about different countries.',
    descriptionlong:
      'Explore The Countries" is a web application built using React and Redux that displays information about different countries. It consists of the following main pages: Homepage and Details. The project provides a user-friendly interface for users to search, sort, and view details about different countries.',
    featuredImage: 'images/country.png',
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
      'The Meal DB, is a web application that utilizes an external API to provide a comprehensive database of meals.',
    descriptionlong:
      'The Meal DB, is a web application that utilizes an external API to provide a comprehensive database of meals, complete with information such as name, image, and description. Users can interact with the meals by liking or commenting on them. Our team collaborated using a Kanban board to ensure successful project delivery.',
    featuredImage: 'images/dish.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
    linkToLiveVersion: 'https://abdozayan12.github.io/Dish-Discovery/dist/',
    linkToSource: 'https://github.com/abdozayan12/Dish-Discovery',
  },
  {
    id: '04',
    name: 'Budget App',
    role: 'Back End Dev',
    platform: 'mobile',
    year: '2023',
    description:
      'Budget App is an app for tracking your budget.',
    descriptionlong:
      'Budget App is an app for tracking your budget by creating categories and add transactions to these categories.',
    featuredImage: 'images/budget.png',
    technologies: ['Ruby', 'Ruby on Rails', 'tailwind'],
    linkToLiveVersion: 'https://budget-app-8pq6.onrender.com/',
    linkToSource: 'https://github.com/abdozayan12/Budget-App',
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
    featuredImage: 'images/space.png',
    technologies: ['React', 'CSS', 'Redux', 'External API'],
    linkToLiveVersion: 'https://space-traveler-1wv4.onrender.com/',
    linkToSource: 'https://github.com/abdozayan12/space_travelers',
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
              <a href="${linkToLiveVersion}" class="buttonpop" id="live-version-link">See live <img src="images/Icon.svg"></a>
            </div> 
            <div class="bt-img"> 
              <a href="${linkToSource}" class="buttonpop" id="source-link">See source <img src="images/Vector.svg"></a>
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

const handleLiveVersionClick = (e) => {
  e.preventDefault();
  // Add your custom functionality here, such as opening the live version link in a new tab or redirecting to it.
  window.open(e.target.href, '_blank');
};

const handleSourceClick = (e) => {
  e.preventDefault();
  // Add your custom functionality here, such as opening the source code link in a new tab or redirecting to it.
  window.open(e.target.href, '_blank');
};

displayPopup.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id === 'close-modal-popup') {
    displayPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  if (e.target.id === 'live-version-link') {
    handleLiveVersionClick(e);
  }

  if (e.target.id === 'source-link') {
    handleSourceClick(e);
  }
});