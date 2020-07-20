






/**--------------
    Load Page
----------------*/

const loadIndexPage = async () => {
    // main
    const main = document.querySelector("#main");
    main.innerHTML = await fetchHtmlAsText("./main.html");

    // skill
    const skill = document.querySelector("#skill");
    skill.innerHTML = await fetchHtmlAsText("./skill.html");
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




//search works item
// const search = document.querySelector("input id");

// search.addEventListener('keyup', () => {

//       const inputValue = search.value.toUpperCase();//검색창 값 가져오고 모두 대문자

//       const itemTag = [...document.querySelectorAll("검색 될 키워드들")];

//       const searchTag = itemTag.filter((tag) => {
//             const tagUpperCase = tag.innerText.toUpperCase();
//             const searchNum = tagUpperCase.indexOf(inputValue);
//             if (searchNum > -1) return tag;
//       });

//       searchTag.forEach((tag) => tag.parentNode.style.display = '');
// });


/**--------------
    progress
----------------*/

