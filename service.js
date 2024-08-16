// Get all service elements
const services = document.querySelectorAll('.service');

// Function to check if element is in viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add appear class to service elements when they come into viewport
function addAppearClass() {
  services.forEach((service) => {
    if (isElementInViewport(service)) {
      service.classList.add('appear');
    }
  });
}

// Add event listener to window scroll event
window.addEventListener('scroll', addAppearClass);

// Call addAppearClass function on page load
addAppearClass();



const popups = document.querySelectorAll('.popup');

services.forEach((service) => {
  service.addEventListener('click', () => {
    const popupId = service.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    popup.classList.add('show');
  });
});

popups.forEach((popup) => {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('show');
    }
  });
});
services.forEach((service) => {
    service.addEventListener('click', () => {
      const popupId = service.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      popup.classList.add('show');
    });
  });