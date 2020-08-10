const makeButton = (value) => {
  const button = document.createElement("button");
  button.setAttribute("class", value);
  button.innerHTML = value;
  document.body.appendChild(button);
};


const portfoiloMenu = ["UXUI", "WEB", "ILLUST", "ANIMATION", "ADD"];
portfoiloMenu.forEach((value) => {
  makeButton(value);
});
