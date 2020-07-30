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
    { tagType: "script", id: "header_js", file: "/js/default/header" },
    { tagType: "script", id: "footer_js", file: "/js/default/footer" },
    { tagType: "script", id: "list_js", file: "/js/item/list" },
    { tagType: "script", id: "progress_js", file: "/js/item/progress" },
    { tagType: "script", id: "scroll_js", file: "/js/item/scroll" },
    { tagType: "script", id: "swiper_js", file: "" },
    { tagType: "script", id: "sweetalert_js", file: "https://unpkg.com/sweetalert/dist/sweetalert.min" },
];

makeIndexScript.forEach((value, index) => {
    loadByHtml(value);
    if (value.file !== "") {
        const js = document.querySelector(`#${value.id}`);
        js.src = `${value.file}.js`;
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
    swiper.innerHTML =
        `import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
        //main
        new Swiper('.swiper-main', {
            direction: 'horizontal',
            loop: true,
            // pagination: {
            //     el: '.swiper-pagination',
            //     type: 'progressbar',
            //   },
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
        });
        //list
        new Swiper('.swiper-list', {
            direction: 'horizontal',
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                // type: 'progressbar',
                clickable: true,
            },
        });`
        ;

    const closeBtn = document.querySelector(".close_btn");
    const section = document.querySelector("section");

    closeBtn.addEventListener('click', () => {
        main.classList.toggle('close');
        closeBtn.classList.toggle('close');
        section.classList.toggle('close');
    });

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
