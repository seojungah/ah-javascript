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
    const menu = document.querySelector("header > .menu");

    const toggleHeader = (btn) => {
        btn.addEventListener('click', () => {
            document.querySelector("#main").classList.toggle('fixing');
            document.querySelector("#skill").classList.toggle('fixing');
            document.querySelector("#footer").classList.toggle('fixing');

            headerOpen.classList.toggle('active');
            headerClose.classList.toggle('show');
            menu.classList.toggle('sliding');
        });
    };

    const headerBtn = [headerOpen, headerClose];
    headerBtn.forEach((btn) => toggleHeader(btn));


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
    hearderMenu.forEach((value, index) => { moveEvent(value, '#main'); });
};

loadHeader();


