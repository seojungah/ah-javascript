/**--------------
    footer
----------------*/

const loadFooter = async () => {

    const footer = document.querySelector("#footer");
    footer.innerHTML = await fetchHtmlAsText("/footer.html");
};

loadFooter();
