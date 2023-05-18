const projectsData = [
  {
    id: '01',
    name: 'Tonia',
    role: 'Back end Dev',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    descriptionlong:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent ',
    featuredImage: 'images/Portfolio.svg',
    technologies: ['HTML', 'CSS', 'ReactJs'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
  {
    id: '02',
    name: 'Tonia',
    role: 'Developer',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionlong:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featuredImage: 'images/Multi.svg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
  {
    id: '03',
    name: 'Tonia',
    role: 'Developer',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionlong:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featuredImage: 'images/FACEBOOK.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
  },
  {
    id: '04',
    name: 'Tonia',
    role: 'Developer',
    platform: 'Web',
    year: '2022',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionlong:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featuredImage: 'images/Uber.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: '#',
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
const popup = ' ';
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
            <p class="firstPara">${descriptionlong}</p>
            <ul class="lang">
                ${generateTechnologyTags(technologies)}
                </ul>
                </div>
            <div class="modal-footer">
            <p class="secondPara">${descriptionlong}</p>
                <div class="btn-group">
                  <div class="bt-img">
                    <a href="${linkToLiveVersion}" class="buttonpop">See live <img src="images/Icon.svg"></a>
                    
                  </div> 
                  <div class="bt-img"> 
                    <a href="${linkToSource}" class="buttonpop">See source <img src="images/Vector.svg"></a>
                    
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