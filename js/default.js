/**--------------
     loading
----------------*/

document.onreadystatechange = function () {
    const state = document.readyState;

    if (state == 'interactive') {
        document.getElementById('contents').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('load').style.visibility = "hidden";
            document.getElementById('contents').style.visibility = "visible";
        }, 1000);
    }
};


/**--------------
       HTML
----------------*/

const fetchHtmlAsText = async (url) => {
    const response = await fetch(url);
    return await response.text();
};

/**--------------
       css
----------------*/

const makeFaviconLink = ({ rel, type, sizes, href }) => {
    let link = document.createElement('link');
    rel && (link.rel = rel);
    type && (link.type = type);
    sizes && (link.sizes = sizes);
    href && (link.href = href);

    document.getElementsByTagName("head")[0].appendChild(link);
};

const cssList = [
    { rel: 'stylesheet', href: './css/style/reset.css' },
    { rel: 'stylesheet', href: './css/style/font.css' },
    { rel: 'stylesheet', href: './css/style/color.css' },
    { rel: 'stylesheet', href: './css/default/footer.css' },
    { rel: 'stylesheet', href: './css/default/header.css' },
    { rel: 'stylesheet', href: './css/default/progress.css' },
];

cssList.forEach((value, index) => (makeFaviconLink({ ...value })));

/**--------------
     favicon
----------------*/

const faviconList = [
    { rel: 'apple-touch-icon', sizes: '180x180', href: './favicon/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: './favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: './favicon/favicon-16x16.png' },
    { rel: 'manifest', href: '../favicon/site.webmanifest' },
    { rel: 'shortcut icon', href: '../favicon/favicon.ico' },
];

faviconList.forEach((value, index) => (makeFaviconLink({ ...value })));

/**--------------
       meta
----------------*/

const makeFaviconMeta = ({ name, content }) => {
    let meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;

    document.getElementsByTagName('head')[0].appendChild(meta);
};

const faviconMeta = [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'description', content: 'Bootstrap 3 template for corporate business' },
    { name: 'msapplication-config', content: '#./favicon/browserconfig.xml' },
    { name: 'msapplication-TileColor', content: '#5100ba' },
    { name: 'theme-color', content: '#ffffff' },
];

faviconMeta.forEach((value, content) => (makeFaviconMeta({ ...value })));

/**--------------
    Load Page
----------------*/

const loadPage = async () => {
    // footer
    const footer = document.querySelector("#footer");
    footer.innerHTML = await fetchHtmlAsText("/footer.html");
};

loadPage();

/**--------------
      header
----------------*/

const loadHeader = async () => {

    // header
    const header = document.querySelector("#header");
    header.innerHTML = await fetchHtmlAsText("/header.html");

    // header open & close
    const body = document.querySelector("body");
    const headerOpen = document.querySelector("header > .hamburger_btn");
    const headerClose = document.querySelector("header > .bg ");
    const menu = document.querySelector("header > .menu ");

    const toggleHeader = (btn) => {
        btn.addEventListener('click', () => {
            body.classList.toggle('fixing');
            headerOpen.classList.toggle('active');
            headerClose.classList.toggle('over');
            menu.classList.toggle('on');
        });
    };

    const headerBtn = [headerOpen, headerClose];
    headerBtn.forEach((btn) => toggleHeader(btn));

    // header close
    headerBg.addEventListener('click', () => {
        body.classList.toggle('fixing');
        headerBg.classList.toggle('over');
        naviBtn.classList.toggle('active');
        menu.classList.toggle('on');
    });

    // search
    const search = document.querySelector(".menu .search input");

    search.addEventListener('keyup', () => {

        const main = document.querySelector('#main');
        main.style.display = 'none';

        const inputValue = search.value.toUpperCase();
        const itemTag = [...document.querySelectorAll(".portfolio .name")];

        const searchTag = itemTag.filter((tag) => {
            const tagUpperCase = tag.innerText.toUpperCase();
            const searchNum = tagUpperCase.indexOf(inputValue);
            if (searchNum > -1) return tag;
        });

        searchTag.forEach((tag) => tag.parentNode.style.display = '');

    });

    // header menu click event 
    const moveEvent = (menu, place) => {
        const menuPointer = document.querySelector(place);
        const menuTop = menuPointer.getBoundingClientRect().top;
        menu.addEventListener('click', () => {
            window.scrollTo(0, menuTop);
        });
    };

    const aTag = document.querySelectorAll('#menu h1');
    const hearderMenu = [...aTag];
    hearderMenu.forEach((value, index) => { moveEvent(value, '.intro'); });
};

loadHeader();



