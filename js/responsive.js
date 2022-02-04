var bars = document.getElementById('bars');
var navlinks = document.getElementById('navlinks');
var nav_links = document.getElementById('nav_links');
open = 0;

bars.addEventListener('click', function () {
    if (open == 1) {
        navlinks.style.height = "0px";
        navlinks.style.opacity = "0";
        nav_links.style.display = "none";
        open = 0;
    } else {
        navlinks.style.height = "auto";
        navlinks.style.opacity = "1";
        nav_links.style.display = "block";
        open = 1;
    }
});