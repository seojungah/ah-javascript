/**--------------
       css
----------------*/

const cssListPallet = [
    { rel: 'stylesheet', href: './css/page/pallet.css' },
    { rel: 'stylesheet', href: './css/page/pallet_mobile.css' }
];

cssListPallet.forEach((value, index) => (makeFaviconLink({ ...value })));


/**--------------
    load tag
----------------*/

const makeIndexTag = [
    { tagType: "header", id: "header" },
    { tagType: "footer", id: "footer" },
];

makeIndexTag.forEach((value) => { loadByHtml(value); });


/**--------------------
      load script
----------------------*/

const makeIndexScript = [
    { tagType: "script", id: "header_js", file: "default/header" },
    { tagType: "script", id: "footer_js", file: "default/footer" },
    { tagType: "script", id: "progress_js", file: "item/progress" },
];

makeIndexScript.forEach((value, index) => {
    loadByHtml(value);
    if (value.file !== "") {
        const js = document.querySelector(`#${value.id}`);
        js.src = `js/${value.file}.js`;
    }
});

/**--------------------
     make content
----------------------*/

const makeContent = async () => {


};

makeContent();