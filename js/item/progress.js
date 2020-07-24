/**--------------
    progress
----------------*/
const progress = ({ select, percent, front }) => {
    document.querySelector(select).innerHTML =
        '<div>' +
        '<svg svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 100 50" class="front" >' +
        `<path d=${front}></path> ` +
        '</svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" class="back">' +
        ' <path d="M6,48a44,44,0,0,1,88,0"></path>' +
        '</svg>' +
        `<p>${percent}</p>` +
        ' </div>';
};

const svg = [
    { select: ".pro_90", percent: '90%', front: "M6,48A44,44,0,0,1,92,34.83" },
    { select: ".pro_80", percent: '80%', front: "M6,48A44,44,0,0,1,86.39,23.26" },
    { select: ".pro_70", percent: '70%', front: "M6,48A44,44,0,0,1,76.35,12.76" },
    { select: ".pro_60", percent: '60%', front: "M6,48A44,44,0,0,1,64.49,6.44" },
    { select: ".pro_50", percent: '50%', front: "M6,48A44,44,0,0,1,50,4" }
];


console.log(document.querySelector(".list > .pro_90"));
svg.forEach((value, index) => (progress({ ...value })));
