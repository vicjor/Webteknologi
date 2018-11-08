document.getElementById('navbar').innerHTML = '<div> <header id="header"> <div class="navbar"> \
<h1> <a href="index.html">MEDIAFY</a></h1>\
<nav>\
<ul>\
  <li><a href="index.html">HOME</a> </li>\
  <li><a href="about.html">ABOUT</a> </li>\
  <li><a href="music.html">MUSIC</a> </li>\
  <li><a href="movies.html">FILM</a> </li>\
  <li><a href="series.html">SERIES</a> </li>\
  <li class="icon">\
    <a href="javascript:void(0);" onclick="myFunction()">&#9776;</a>\
  </li>\
</ul>\
</nav> </div> </header> </div>';

function myFunction() {
  document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}

var scrollEventHandler = function(){
    window.scroll(0,window.pageYOffset)
}
window.addEventListener("scroll",scrollEventHandler, false);
