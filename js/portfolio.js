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