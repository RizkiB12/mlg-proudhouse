// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//when hamburger menu clicked
// document.querySelector('#hamburger-menu').onClick = () => {
//   navbarNav.classList.toggle('active');
//   console.log('clicked');
// };

document.querySelector('#hamburger-menu').onclick = function() { 
  navbarNav.classList.toggle('active');
  console.log('clicked'); 
}