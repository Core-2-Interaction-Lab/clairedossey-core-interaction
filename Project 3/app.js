const url = 'https://data.cityofnewyork.us/resource/p937-wjvj.json';

document.getElementById("pass").addEventListener("click", function() {
  var shape = document.getElementById("shape");
  var width = parseInt(window.getComputedStyle(shape).getPropertyValue("width"));
  var height = parseInt(window.getComputedStyle(shape).getPropertyValue("height"));
  shape.style.width = (width + 100) + "px";
  shape.style.height = (height + 100) + "px";
});

fetch(url)
  .then(response => response.json())


