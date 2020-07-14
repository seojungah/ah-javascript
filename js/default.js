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
    { rel: 'stylesheet', href: './css/reset.css' },
    { rel: 'stylesheet', href: './css/default.css' },
    { rel: 'stylesheet', href: './css/font.css' },
    { rel: 'stylesheet', href: './css/color.css' },
];

cssList.forEach((value, index) => (makeFaviconLink({ ...value })));



/**--------------
     favicon
----------------*/


// const faviconList = [
//     { rel: 'apple-touch-icon', sizes: '180x180', href: '../favicon/apple-touch-icon.png' },
//     { rel: 'icon', type: 'image/png', sizes: '32x32', href: '../favicon/favicon-32x32.png' },
//     { rel: 'icon', type: 'image/png', sizes: '16x16', href: '../favicon/favicon-16x16.png' },
//     { rel: 'manifest', href: '../favicon/site.webmanifest' },
//     { rel: 'shortcut icon', href: '../favicon/favicon.ico' },
// ];

// faviconList.forEach((value, index) => (makeFaviconLink({ ...value })));




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
    //favicon
    // { name: 'msapplication-config', content: '#./favicon/browserconfig.xml' },
    // { name: 'msapplication-TileColor', content: '#b91d47' },
    // { name: 'theme-color', content: '#ffffff' },
];

faviconMeta.forEach((value, content) => (makeFaviconMeta({ ...value })));



/**--------------
    Load Page
----------------*/


const loadPage = async () => {
    // header
    const header = document.querySelector("#header");
    header.innerHTML = await fetchHtmlAsText("./header.html");

    // footer
    const footer = document.querySelector("#footer");
    footer.innerHTML = await fetchHtmlAsText("./footer.html");
};

loadPage();



