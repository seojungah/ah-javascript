
/**--------------
       css
----------------*/

const cssListIndex = [
    { rel: 'stylesheet', href: './css/index.css' },
    { rel: 'stylesheet', href: './css/index_mobile.css' },
    { rel: 'stylesheet', href: 'https://unpkg.com/swiper/swiper-bundle.css' },
    { rel: 'stylesheet', href: 'https://unpkg.com/swiper/swiper-bundle.min.css' },
];

cssListIndex.forEach((value, index) => (makeFaviconLink({ ...value })));


/**--------------
    Load Page
----------------*/

const loadIndexPage = async () => {
    // main
    const main = document.querySelector("#main");
    main.innerHTML = await fetchHtmlAsText("./main.html");

};

loadIndexPage();


// const width = window.innerWidth;
// const getCurrentScroll = () => {
//     return window.pageYOffset || document.documentElement.scrollTop;
// };
// const getScroll = getCurrentScroll();
// if (width > 1000) {
//     if (getScroll >= 400) { }
//     if (getScroll >= 1450) { }
// }


/**--------------
    progress
----------------*/

