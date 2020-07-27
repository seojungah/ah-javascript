/**--------------
    load tag
----------------*/

const makeIndexTag = [
    { tagType: "header", id: "header" },
    { tagType: "main", id: "main" },
    { tagType: "section", id: "section" },
    { tagType: "footer", id: "footer" },
];

makeIndexTag.forEach((value) => { loadByHtml(value); });

//section inside
const section = document.querySelector("#section");
const sectionItem = ['list', 'skill'];

sectionItem.forEach((value) => {
    const item = document.createElement('div');
    section.appendChild(item);
    item.setAttribute("id", value);
});


/**--------------------
      load script
----------------------*/

const makeIndexScript = [
    { tagType: "script", id: "header_js", file: "default/header" },
    { tagType: "script", id: "footer_js", file: "default/footer" },
    { tagType: "script", id: "list_js", file: "item/list" },
    { tagType: "script", id: "progress_js", file: "item/progress" },
    { tagType: "script", id: "scroll_js", file: "item/scroll" },
    { tagType: "script", id: "swiper_js", file: "" },
];

makeIndexScript.forEach((value, index) => {
    loadByHtml(value);
    if (value.file !== "") {
        const js = document.querySelector(`#${value.id}`);
        js.src = `/js/${value.file}.js`;
    }
});


/**--------------
    Load Page
----------------*/

const loadIndexPage = async () => {
    // main
    const main = document.querySelector("#main");
    main.innerHTML = await fetchHtmlAsText("/main.html");

    const swiper = document.querySelector("#swiper_js");
    swiper.type = 'module';
    swiper.innerHTML = `
    import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
    const swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },

    });
    `;
};

loadIndexPage();


/**--------------
       css
----------------*/

const cssListIndex = [
    { rel: 'stylesheet', href: '/css/page/index.css' },
    { rel: 'stylesheet', href: '/css/page/index_mobile.css' },
    { rel: 'stylesheet', href: 'https://unpkg.com/swiper/swiper-bundle.css' },
    { rel: 'stylesheet', href: 'https://unpkg.com/swiper/swiper-bundle.min.css' },
];

cssListIndex.forEach((value, index) => (makeFaviconLink({ ...value })));