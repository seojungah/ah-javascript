const makeList = async () => {

    // list
    const list = document.querySelector("#list");
    if (document.querySelector("#list")) list.innerHTML = await fetchHtmlAsText("/list.html");

    //json
    const listItem =document.querySelector("#list .swiper-wrapper");

    const jsonToHtml = async (url) => {
        const { projects } = await fetch(url).then(response => response.json()) || [];
        const html = projects.map(({ id, clas, tag, title, year, text, goggleUrl}) => (
            `<div id="${id}" class="swiper-slide">
              <p class="tag">${tag}</p>
              <div class="box ${clas}">
                 <div class="title">
                    <h2>${title}</h2>
                    <p>${year}</p>
                 </div>
                 <img src="https://drive.google.com/uc?export=download&id=${goggleUrl}">
              </div>
            </div >`
        ));
        return listItem.innerHTML = html.join('');
    };

    jsonToHtml('/js/item/projects.json');
    const boxImage = document.querySelector(".box img");
};
makeList();

const eventList = async () => {

  //click show main
  const box = document.querySelectorAll(".box");
  const listBtn = [...box];
  const closeMain = document.getElementsByClassName("close");

  if(box.length > 0) {
    listBtn.forEach((value) => {
        const titleStr = value.childNodes[1].childNodes[1].textContent;
        console.log(titleStr);
        value.addEventListener('click', () => {
            if (closeMain.length > 0) {
                document.querySelector("#main").classList.toggle('close');
                document.querySelector(".close_btn").classList.toggle('close');
                document.querySelector("section").classList.toggle('close');
            }
            document.querySelector("#main").style.backgroundColor = '#e3c3c2';
            document.querySelector("#main > .info > h1").innerHTML = titleStr;
            document.querySelector("#main > .info > p").style.display = 'none';
        });
    });
  }
};
eventList();