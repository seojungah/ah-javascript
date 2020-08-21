const makeButton = async (value) => {
  const button = document.createElement("button");
  const menu = document.querySelector(".portfolio_menu");
  button.setAttribute("class", value);
  button.innerHTML = value;
  button.lang = "en";
  menu.appendChild(button);
};

const portfoiloMenu = ["ALL", "UXUI", "WEB", "ILLUST", "ANIMATION", "ADD"];
portfoiloMenu.forEach((value) => {
  makeButton(value);
});

const makeContent = async () => {
  const portfolioList = document.querySelector(".portfolio_list");

  const jsonToHtml = async (url) => {
    const { projects } =
      (await fetch(url).then((response) => response.json())) || [];
    const html = projects.map(
      ({ id, clas, tag, title, year, text, goggleUrl }) =>
        `<div id="${id}" class="content_box ${clas}">
          <p class="tag">${tag}</p>
          <div class="image" style="background-image:url('https://drive.google.com/uc?export=download&id=${goggleUrl}')"></div>
          <div class="title">
            <h4>${title}</h4>
            <span class="year">${year}</span>
          </div>
        </div>`
    );
    portfolioList.innerHTML = html.join("");
  };

  jsonToHtml("/js/item/projects.json");
};

makeContent();
