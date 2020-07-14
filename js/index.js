




/**--------------
      header
----------------*/

// const loadHeader = async () => {

//     const header = document.querySelector("#header");
//     header.innerHTML = await fetchHtmlAsText("../default/header.html");

//     const footer = document.querySelector("#footer");
//     footer.innerHTML = await fetchHtmlAsText("../default/footer.html");


//     const naviBtn = document.querySelector("#navi-btn");
//     const menu = document.querySelector("#menu");

//     naviBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         naviBtn.classList.toggle('active');
//         menu.classList.toggle('on');
//     });

//     const logo = document.querySelector('.logo');
//     logo.data = "../default/header/main_logo.svg";

// };

// loadHeader();



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



// const jsonToHtml = async (url) => {
//     const { works } = await fetch(url).then(response => response.json()) || [];
//     const html = works.map(({ id, content, href, imgUrl, intro, tag, name }) => (
//         `<div id="${id}" class="item ${content}">
//             <div class="tag"> ${name}${intro}${tag} </div>
//             <a href='${href}'>
//             <div class="name" id="name"> <h1>${name}</h1> <p>${intro}</p> </div>
//             <img src='${imgUrl}'/>
//             </a >
//         </div > `
//     ));
//     return html.join('');
// };
