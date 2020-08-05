/**--------------
    load tag
----------------*/

const makeIndexTag = [
    { tagType: "header", id: "header" },
    { tagType: "main", id: "main" },
    { tagType: "section", id: "section" },
];

makeIndexTag.forEach((value) => { loadByHtml(value); });

//section inside
const section = document.querySelector("#section");
const sectionItem = ['information', 'list', 'skill'];

sectionItem.forEach((value) => {
    const item = document.createElement('div');
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
    { tagType: "script", id: "swiper_js", file: "" },
    { tagType: "script", id: "sweetalert_js", file: "https://unpkg.com/sweetalert/dist/sweetalert.min.js" },
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
    main.innerHTML = await fetchHtmlAsText("/main.html");

    // information
    const information = document.querySelector("#information");
    information.innerHTML = await fetchHtmlAsText("/information.html");

    const swiper = document.querySelector("#swiper_js");
    swiper.type = 'module';
    swiper.innerHTML =
        `import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
        //main
        // new Swiper('.swiper-main', {
        //     direction: 'horizontal',
        //     loop: true,
        //     autoplay: {
        //         delay: 2500,
        //         disableOnInteraction: true,
        //     },
	    // observer: true,
		// observeParents: true,
        // });
        //list
        new Swiper('.swiper-list', {
            direction: 'horizontal',
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
                clickable: true,
            },
	observer: true,
		observeParents: true,
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
