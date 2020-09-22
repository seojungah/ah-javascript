/**--------------------
      load script
----------------------*/

const makeIndexScript = [
  { tagType: "script", id: "progress_js", file: "item/progress" },
];

makeIndexScript.forEach((value, index) => {
  loadByHtml(value);
  if (value.file !== "") {
    const js = document.querySelector(`#${value.id}`);
    js.src = `js/${value.file}.js`;
  }
});

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
  { rel: "stylesheet", href: "./css/page/pallet.css" },
];

cssList.forEach((value, index) => makeCssLink({ ...value }));

/**--------------
    load tag
----------------*/

const makeIndexTag = [{ tagType: "header", id: "header" }];

makeIndexTag.forEach((value) => {
  loadByHtml(value);
});

/**--------------------
     make content
----------------------*/

const makeContent = async () => {};

makeContent();

/**--------------
      back
----------------*/

const backHome = document.querySelector(".back_home");
backHome.addEventListener("click", () => {
  location.href = "/index.html";
});
