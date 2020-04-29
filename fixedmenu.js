// When the user scrolls the page, execute fixedMenu
window.onscroll = function () {fixedMenu()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;
console.log(sticky)
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixedMenu() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    console.log(window.pageYOffset)
  } else {
    header.classList.remove("sticky");
  }
}