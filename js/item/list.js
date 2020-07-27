const makeList = async () => {
    // skill
    const list = document.querySelector("#list");
    if (document.querySelector("#list")) list.innerHTML = await fetchHtmlAsText("/list.html");


    const listBtn = document.querySelectorAll(".list_btn");

    listBtn.forEach((value, index) => {
        const hiddenPage = document.querySelector(`#list_${index + 1}`);
        value.addEventListener('click', () => {
            console.log(hiddenPage);
            hiddenPage.style.display = 'block';
        });
    });
};

makeList();