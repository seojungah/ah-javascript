const makeList = async () => {
    // skill
    const list = document.querySelector("#list");
    if (document.querySelector("#list")) list.innerHTML = await fetchHtmlAsText("/list.html");


    const listBtn = document.querySelectorAll(".box");
    const listItem = [...listBtn];

    const main = document.querySelector("#main");
    const closeBtn = document.querySelector(".close_btn");
    const section = document.querySelector("section");

    listItem.forEach((value) => {
        //     const hiddenPage = document.querySelector(`#list_${index + 1}`);
        value.addEventListener('click', () => {
            main.classList.toggle('close');
            closeBtn.classList.toggle('close');
            section.classList.toggle('close');
            //         hiddenPage.classList.toggle('unfold');
        });
    });
};

makeList();