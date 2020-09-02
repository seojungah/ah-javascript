const makeList = async () => {
  // list
  const list = document.querySelector("#list");
  if (document.querySelector("#list"))
    list.innerHTML = await fetchHtmlAsText("/list.html");

  /**------------------------------------
              load json file
    -------------------------------------*/
  const listItem = document.querySelector("#list .swiper-wrapper");

  const jsonToHtml = async (url) => {
    const { projects } =
      (await fetch(url).then((response) => response.json())) || [];
    const html = projects.map(
      ({ id, clas, tag, title, year, text, goggleUrl }) =>
        `<div id="${id}" class="swiper-slide">
              <p class="tag">${tag}</p>
              <div class="box ${clas}" style="background-image:url('https://drive.google.com/uc?export=download&id=${goggleUrl}')">
                 <div class="title">
                    <h2>${title}</h2>
                    <p>${year}</p>
                 </div>
              </div>
            </div >`
    );
    listItem.innerHTML = html.join("");

    /**------------------------------------
             list -> main evert
    -------------------------------------*/

    const box = await document.querySelectorAll(".box");
    const closeMain = document.getElementsByClassName("close");
    const clearBtn = document.querySelector(".clear_btn");
    const viewBtn = document.querySelector(".view_btn");
    const viewBtnStr = document.querySelector(".view_btn > span");

    box.forEach((value) => {
      const titleStr = value.childNodes[1].childNodes[1].textContent;
      const yearStr = value.childNodes[1].childNodes[3].textContent;
      const bgImage = value.style.backgroundImage;

      value.addEventListener("click", () => {
        //If the mains are closed, Running event.
        if (closeMain.length > 0) {
          document.querySelector("#main").classList.toggle("close");
          document.querySelector(".close_btn").classList.toggle("close");
          document.querySelector("section").classList.toggle("close");
        }
        //change main style.
        document.querySelector("#main").style.backgroundImage = bgImage;
        document.querySelector("#main > .info > h1").innerHTML = titleStr;
        document.querySelector("#main > .info > h3").innerHTML = yearStr;
        document.querySelector("#main > .info > p").style.display = "none";
        viewBtnStr.innerHTML = "view";
        clearBtn.style.display = "block";
      });
    });

    clearBtn.addEventListener("click", () => {
      document.querySelector("#main").style.backgroundImage =
        'url("https://drive.google.com/uc?export=download&id=1dmx1usczoCC-a1uRdX4BJ5OAeLyJl856")';
      document.querySelector("#main > .info > h1").innerHTML =
        "<span>HELLO</span><span>SEO</span><span>JUNGAH</span>";
      document.querySelector("#main > .info > h3").innerHTML =
        "<h3>💜UXUI DESIGNER</h3>";
      document.querySelector("#main > .info > p").style.display = "none";
      clearBtn.style.display = "none";
      viewBtnStr.innerHTML = "github";
    });

    //main inside go button
    const itemPopup = document.querySelector("#item-popup");

   
  };

  jsonToHtml("/js/item/projects.json");

  //click show main
};

makeList();
