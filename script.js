// Contact form alert
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting PR Traders! We will get back to you soon.');
  form.reset();
});
