// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//when hamburger menu clicked
// document.querySelector('#hamburger-menu').onClick = () => {
//   navbarNav.classList.toggle('active');
//   console.log('clicked');
// };

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  console.log("clicked");
};

// cliked out sidebar menu to remove nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
