const makeButton = async (value, where) => {
  const button = document.createElement("button");
  const menu = document.querySelector(where);
  button.setAttribute("class", value);
  button.innerHTML = value;
  button.lang = "en";
  menu.appendChild(button);
};

const portfoiloMenu = ["ALL", "UXUI", "WEB", "ILLUST", "ANIMATION", "ADD"];
portfoiloMenu.forEach((value) => {
  makeButton(value, ".portfolio_menu");
});

const portfoiloYearMenu = ["2020", "2019", "2018"];
portfoiloYearMenu.forEach((value) => {
  makeButton(value, ".portfolio_year_menu");
});

const makeContent = async () => {
  const portfolioList = document.querySelector(".portfolio_list");

  const jsonToHtml = async (url) => {
    const { projects } =
      (await fetch(url).then((response) => response.json())) || [];
    const html = projects.map(
      ({ id, clas, tag, title, year, text, titleImage }) =>
        `<div id="${id}" class="content_box ${clas}">
          <p class="tag">${tag}</p>
          <div class="image" style="background-image:url('https://drive.google.com/uc?export=download&id=${titleImage}')"></div>
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
