const makeList = async () => {
    // skill
    const list = document.querySelector("#list");
    if (document.querySelector("#list")) list.innerHTML = await fetchHtmlAsText("/list.html");


    const listBtn = document.querySelectorAll(".box");

    // listBtn.forEach((value, index) => {
    //     const hiddenPage = document.querySelector(`#list_${index + 1}`);
    //     value.addEventListener('click', () => {
    //         hiddenPage.classList.toggle('unfold');
    //     });
    // });
};

makeList();