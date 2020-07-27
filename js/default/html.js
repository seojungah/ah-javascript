
/**--------------
     loading
----------------*/

document.onreadystatechange = function () {
    const state = document.readyState;

    if (state == 'interactive') {
    } else if (state == 'complete') {
        setTimeout(function () {
            document.querySelector('#interactive');
            document.querySelector('#loading').style.visibility = "hidden";
        }, 1000);
    }
};



/**----------------
      security
------------------*/

window.document.oncontextmenu = () => ("return false");
window.document.onselectstart = () => ("return false");
window.document.ondragstart = () => ("return false");



/**--------------
       HTML
----------------*/

const fetchHtmlAsText = async (url) => {
    const response = await fetch(url);
    return await response.text();
};


const loadByHtml = ({ tagType, id }) => {
    const tag = document.createElement(tagType);
    document.body.appendChild(tag);
    tag.setAttribute("id", id);
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




