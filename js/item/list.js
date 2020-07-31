const makeList = async () => {
    // list
    const list = document.querySelector("#list");
    if (document.querySelector("#list")) list.innerHTML = await fetchHtmlAsText("/list.html");

    const listBtn = document.querySelectorAll(".box");
    const listItem = [...listBtn];

    const main = document.querySelector("#main");
    const mainTitle = document.querySelector("#main > .info > h1");
    const mainSub = document.querySelector("#main > .info > p");

    const section = document.querySelector("section");
    const closeBtn = document.querySelector(".close_btn");
    const closeMain = document.getElementsByClassName("close");

    listItem.forEach((value) => {
        const titleStr = value.childNodes[1].childNodes[1].textContent;

        value.addEventListener('click', () => {
            if (closeMain.length > 0) {
                main.classList.toggle('close');
                closeBtn.classList.toggle('close');
                section.classList.toggle('close');
            }

            main.style.backgroundColor = '#e3c3c2';
            mainTitle.innerHTML = titleStr;
            mainSub.style.display = 'none';
        });
    });
};

makeList();