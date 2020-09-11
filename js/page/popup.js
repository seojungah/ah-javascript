/**------------------------------------
              load json file
    -------------------------------------*/
const listItem = document.querySelector("#list .swiper-wrapper");

const jsonToHtml = async (url) => {
  const { projects } =
    (await fetch(url).then((response) => response.json())) || [];
  const html = projects.map(
    ({ id, clas, tag, title, year, text, defaultImage },index) =>
      `<div id="${index}" class="detail_image">
        <div class=""></div>
      </div >`
  );
  //   listItem.innerHTML = html.join("");
};
