/**--------------
     loading
----------------*/

document.onreadystatechange = function () {
  const state = document.readyState;

  if (state == "interactive") {
  } else if (state == "complete") {
    setTimeout(function () {
      document.querySelector("#interactive");
      document.querySelector("#loading").style.visibility = "hidden";
    }, 1000);
  }
};

/**--------------
       css
----------------*/

const makeCssLink = ({ rel, type, sizes, href }) => {
  let link = document.createElement("link");
  rel && (link.rel = rel);
  type && (link.type = type);
  sizes && (link.sizes = sizes);
  href && (link.href = href);

  document.getElementsByTagName("head")[0].appendChild(link);
};

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
     favicon
----------------*/

const makeFaviconLink = ({ rel, type, sizes, href }) => {
  let link = document.createElement("link");
  rel && (link.rel = rel);
  type && (link.type = type);
  sizes && (link.sizes = sizes);
  href && (link.href = href);

  document.getElementsByTagName("head")[0].appendChild(link);
};

const faviconList = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "./favicon/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "./favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "./favicon/favicon-16x16.png",
  },
  { rel: "manifest", href: "../favicon/site.webmanifest" },
  { rel: "shortcut icon", href: "../favicon/favicon.ico" },
];

faviconList.forEach((value, index) => makeFaviconLink({ ...value }));

/**--------------
       meta
----------------*/

const makeFaviconMeta = ({ name, content }) => {
  let meta = document.createElement("meta");
  meta.name = name;
  meta.content = content;

  document.getElementsByTagName("head")[0].appendChild(meta);
};

const faviconMeta = [
  { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  {
    name: "description",
    content: "Bootstrap 3 template for corporate business",
  },
  { name: "msapplication-config", content: "#./favicon/browserconfig.xml" },
  { name: "msapplication-TileColor", content: "#5100ba" },
  { name: "theme-color", content: "#ffffff" },
];

faviconMeta.forEach((value, content) => makeFaviconMeta({ ...value }));

/**----------------
      security
------------------*/
