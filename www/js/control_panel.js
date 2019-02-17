var GridButton = function(gridSize) {
  
  var parent_container = new Button("", console.log);
  
  parent_container.style.height = "50px";
  parent_container.style.width = "50px";
  parent_container.style.backgroundImage = getResourceUrl(gridSize);
  parent_container.style.backgroundSize = "30px";
  parent_container.style.backgroundPosition = "10px";
  parent_container.style.backgroundRepeat = "no-repeat";
  
  function getResourceUrl(gridSize) {
    var image_map = {
      3: "./img/3x3.svg",
      4: "./img/4x4.svg",
      5: "./img/5x5.svg",
    };
    return castResourceToCSSUrl(image_map[gridSize]);
  }
  
  function castResourceToCSSUrl(path) {
    return "url(" + path + ")";
  }
  
  return parent_container;
}

var Button = function(title, callback) {
  var btn = document.createElement("button");
  btn.classList.add("btn");
  btn.onclick = callback;
  btn.innerText = title;
  return btn;
}