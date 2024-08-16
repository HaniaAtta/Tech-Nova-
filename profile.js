// // Get the profile portal elements
// const profilePortal = document.querySelector('.profile-portal');
// const dashboard = document.querySelector('.dashboard');
// const profileSection = document.querySelector('.profile-section');
// const projectSubmission = document.querySelector('.project-submission');
// const notifications = document.querySelector('.notifications');
// const support = document.querySelector('.support');

// // Get the profile form elements
// const profileForm = document.getElementById('profile-form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');

// // Get the project form elements
// const projectForm = document.getElementById('project-form');
// const projectNameInput = document.getElementById('project-name');
// const projectDescriptionInput = document.getElementById('project-description');

// // Get the project list element
// const projectList = document.getElementById('project-list');

// // Get the notification list element
// const notificationList = document.getElementById('notification-list');

// // Add event listener for profile form submission
// profileForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const name = nameInput.value;
//   const email = emailInput.value;

//   // Update the user's profile information
//   const users = JSON.parse(localStorage.getItem('users')) || [];
//   const existingUser = users.find(user => user.email === email);

//   if (existingUser) {
//     existingUser.name = name;
//     localStorage.setItem('users', JSON.stringify(users));
//     popupMessage("Profile updated successfully!", "success");
//   } else {
//     popupMessage("User not found", "error");
//   }
// });

// // Add event listener for project form submission
// projectForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const projectName = projectNameInput.value;
//   const projectDescription = projectDescriptionInput.value;

//   // Add the project to the list of submitted projects
//   const projects = JSON.parse(localStorage.getItem('projects')) || [];
//   projects.push({ name: projectName, description: projectDescription });
//   localStorage.setItem('projects', JSON.stringify(projects));

//   // Display the submitted project in the project list
//   const projectListItem = document.createElement('li');
//   projectListItem.textContent = `${projectName} - ${projectDescription}`;
//   projectList.appendChild(projectListItem);

//   popupMessage("Project submitted successfully!", "success");
// });

// // Display the list of submitted projects
// const projects = JSON.parse(localStorage.getItem('projects')) || [];
// projects.forEach((project) => {
//   const projectListItem = document.createElement('li');
//   projectListItem.textContent = `${project.name} - ${project.description}`;
//   projectList.appendChild(projectListItem);
// });

// // Display the list of notifications
// const notificationsData = JSON.parse(localStorage.getItem('notifications')) || [];
// notificationsData.forEach((notification) => {
//   const notificationListItem = document.createElement('li');
//   notificationListItem.textContent = notification;
//   notificationList.appendChild(notificationListItem);
// });

// Get the profile portal elements
const profilePortal = document.querySelector('.profile-portal');
const dashboard = document.querySelector('.dashboard');
const profileSection = document.querySelector('.profile-section');
const projectSubmission = document.querySelector('.project-submission');
const notifications = document.querySelector('.notifications');
const support = document.querySelector('.support');

// Get the profile form elements
const profileForm = document.getElementById('profile-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const bioInput = document.getElementById('bio');

// Get the project form elements
const projectForm = document.getElementById('project-form');
const projectNameInput = document.getElementById('project-name');
const projectDescriptionInput = document.getElementById('project-description');

// Get the project list element
const projectList = document.getElementById('project-list');

// Get the notification list element
const notificationList = document.getElementById('notification-list');

// Add event listener for profile form submission
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const bio = bioInput.value;

  // Update the user's profile information
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUserIndex = users.findIndex(user => user.email === email);

  if (existingUserIndex !== -1) {
    users[existingUserIndex].name = name;
    users[existingUserIndex].bio = bio;
    localStorage.setItem('users', JSON.stringify(users));
    popupMessage("Profile updated successfully!", "success");
  } else {
    popupMessage("User not found", "error");
  }
});

// Add event listener for project form submission
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = projectNameInput.value;
  const projectDescription = projectDescriptionInput.value;

  // Add the project to the list of submitted projects
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  projects.push({ name: projectName, description: projectDescription });
  localStorage.setItem('projects', JSON.stringify(projects));

  // Display the submitted project in the project list
  const projectListItem = document.createElement('li');
  projectListItem.textContent = `${projectName} - ${projectDescription}`;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    projectListItem.remove();
    const updatedProjects = projects.filter(project => project.name !== projectName);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  });
  projectListItem.appendChild(removeButton);
  projectList.appendChild(projectListItem);

  popupMessage("Project submitted successfully!", "success");
});
// Display the list of submitted projects
const projects = JSON.parse(localStorage.getItem('projects')) || [];
projects.forEach((project) => {
  const projectListItem = document.createElement('li');
  projectListItem.textContent = `${project.name} - ${project.description}`;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    projectListItem.remove();
    const updatedProjects = projects.filter(p => p.name !== project.name);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  });
  projectListItem.appendChild(removeButton);
  projectList.appendChild(projectListItem);
});

// Display the list of notifications
const notificationsData = JSON.parse(localStorage.getItem('notifications')) || [];
notificationsData.forEach((notification) => {
  const notificationListItem = document.createElement('li');
  notificationListItem.textContent = notification;
  notificationList.appendChild(notificationListItem);
});

// Display the dashboard information
const users = JSON.parse(localStorage.getItem('users')) || [];
const email = emailInput.value;
const existingUser = users.find(user => user.email === email);

if (existingUser) {
  const dashboardInfoElement = document.createElement('div');
  dashboardInfoElement.textContent = `Name: ${existingUser.name}\nEmail: ${existingUser.email}\nBio: ${existingUser.bio}`;
  dashboard.appendChild(dashboardInfoElement);
} else {
  popupMessage("User not found", "error");
}

// Function to display popup messages
function popupMessage(message, type) {
  const popupElement = document.createElement('div');
  popupElement.textContent = message;
  popupElement.classList.add(type);
  document.body.appendChild(popupElement);
  setTimeout(() => {
    popupElement.remove();
  }, 2000);
}