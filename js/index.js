

/**--------------
    progress
----------------*/

const makeIndexTag = ["header", "main", "section", "footer"];
makeIndexTag.forEach((value) => { loadByHtml(value); });
const section = document.querySelector("#section");

const main = document.createElement('main');
section.appendChild(main);
main.setAttribute("id", 'skill');

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


    const swiper = document.querySelector("#swiper");
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


