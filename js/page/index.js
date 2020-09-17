/**--------------
       css
----------------*/

const cssList = [
  { rel: "stylesheet", href: "./css/style/reset.css" },
  { rel: "stylesheet", href: "./css/style/font.css" },
  { rel: "stylesheet", href: "./css/style/color.css" },
  { rel: "stylesheet", href: "./css/default/scroller.css" },
  { rel: "stylesheet", href: "./css/default/header.css" },
  { rel: "stylesheet", href: "./css/default/progress.css" },
  { rel: "stylesheet", href: "./css/page/index.css" },
  { rel: "stylesheet", href: "https://unpkg.com/swiper/swiper-bundle.css" },
  { rel: "stylesheet", href: "https://unpkg.com/swiper/swiper-bundle.min.css" },
];

cssList.forEach((value, index) => makeCssLink({ ...value }));

/**--------------
    load tag
----------------*/

const makeIndexTag = [
  { tagType: "header", id: "header" },
  { tagType: "main", id: "main" },
  { tagType: "section", id: "section" },
  { tagType: "div", id: "item-popup" },
];

makeIndexTag.forEach((value) => {
  loadByHtml(value);
});

//section inside
const section = document.querySelector("#section");
const sectionItem = ["information", "list", "skill"];

sectionItem.forEach((value) => {
  const item = document.createElement("div");
  section.appendChild(item);
  item.setAttribute("id", value);
});

/**--------------------
      load script
----------------------*/

const makeIndexScript = [
  { tagType: "script", id: "header_js", file: "/js/default/header.js" },
  { tagType: "script", id: "list_js", file: "/js/item/list.js" },
  { tagType: "script", id: "progress_js", file: "/js/item/progress.js" },
  { tagType: "script", id: "scroll_js", file: "/js/item/scroll.js" },
  { tagType: "script", id: "popup_js", file: "/js/page/popup.js" },
  { tagType: "script", id: "swiper_js", file: "" },
  {
    tagType: "script",
    id: "sweetalert_js",
    file: "https://unpkg.com/sweetalert/dist/sweetalert.min.js",
  },
];

makeIndexScript.forEach((value, index) => {
  loadByHtml(value);
  if (value.file !== "") {
    const js = document.querySelector(`#${value.id}`);
    js.src = `${value.file}`;
  }
});

/**--------------
    Load Page
----------------*/

const loadIndexPage = async () => {
  // main
  const main = document.querySelector("#main");
  if (document.querySelector("#main")) {
    main.innerHTML = await fetchHtmlAsText("/main.html");
  }

  // item-popup
  const itemPopup = document.querySelector("#item-popup");
  if (document.querySelector("#item-popup")) {
    itemPopup.innerHTML = await fetchHtmlAsText("/item-popup.html");
  }

  // information
  const information = document.querySelector("#information");
  information.innerHTML = await fetchHtmlAsText("/information.html");

  const swiper = document.querySelector("#swiper_js");
  swiper.type = "module";
  swiper.innerHTML = `import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
        //main
        // new Swiper('.swiper-main', {
        //     direction: 'horizontal',
        //     loop: true,
        //     autoplay: {
        //         delay: 2500,
        //         disableOnInteraction: true,
        //     },
	      //   observer: true,
		    //  observeParents: true,
        // });
        //list
        new Swiper('.swiper-list', {
            direction: 'horizontal',
            slidesPerView: 2,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
                clickable: true,
            },
	          // observer: true,
            // observeParents: true,
        });`;

  const mainCloseBtn = document.querySelector(".main_btn");
  const section = document.querySelector("section");
  const portfolioPage = document.querySelector("#portfolio");

  mainCloseBtn.addEventListener("click", () => {
    main.classList.toggle("close");
    mainCloseBtn.classList.toggle("close");
    section.classList.toggle("close");
    if (portfolioPage.style.right !== "55vw") {
      portfolioPage.classList.toggle("close");
    }
    if (
      mainCloseBtn.children[0].src ==
      "http://127.0.0.1:5500/image/icon/material/arrow_left-white-18dp.svg"
    ) {
      mainCloseBtn.children[0].src =
        "image/icon/material/arrow_left-black-18dp.svg";
    } else {
      mainCloseBtn.children[0].src =
        "image/icon/material/arrow_left-white-18dp.svg";
    }
  });

  const moreBtn = document.querySelector(".more");

  /**--------------
        popup
  ----------------*/

  const loadPopup = () => {
    const itemPopup = document.querySelector("#item-popup");
    const viewBtn = document.querySelector(".view_btn");
    const viewBtnStr = document.querySelector(".view_btn > span");

    viewBtn.addEventListener("click", () => {
      if (viewBtnStr.innerHTML === "github") {
        window.open("https://github.com/seojungah/seojungah.github.io");
      } else if (viewBtnStr.innerHTML === "view") {
        itemPopup.style.display = "block";
      } else {
        try {
          const error = document.execCommand("error");
          if (error)
            swal({
              title: "ERROR",
              text: "ÁË¼ÛÇÕ´Ï´Ù. ¿À·ù°¡ »ý°å½À´Ï´Ù.",
              icon: "error",
              button: "´Ý±â",
            });
        } catch (err) {
          console.log("error");
        }
      }
    });

    const closePopup = (value) => {
      value.addEventListener("click", () => {
        itemPopup.style.display = "none";
      });
    };
  };

  loadPopup();
};

loadIndexPage();
