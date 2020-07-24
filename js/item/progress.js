/**--------------
    progress
----------------*/
const loadProgress = async () => {

    const progress = ({ id, persent, front }) => {
        document.querySelectorAll(id).innerHTML =
            '<div>' +
            '<svg svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 100 50" class="front" >' +
            `<path d=${front}></path> ` +
            '</svg>' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" class="back">' +
            ' <path d="M6,48a44,44,0,0,1,88,0"></path>' +
            '</svg>' +
            `<p>${persent}</p>` +
            ' </div>';
    };

    const svg = [
        { id: ".pro_90", persent: '90%', front: "M6,48A44,44,0,0,1,92,34.83" },
        { id: ".pro_80", persent: '80%', front: "M6,48A44,44,0,0,1,86.39,23.26" },
        { id: ".pro_70", persent: '70%', front: "M6,48A44,44,0,0,1,76.35,12.76" },
        { id: ".pro_60", persent: '60%', front: "M6,48A44,44,0,0,1,64.49,6.44" },
        { id: ".pro_50", persent: '50%', front: "M6,48A44,44,0,0,1,50,4" }
    ];

    svg.forEach((value, index) => (progress({ ...value })));
};

loadProgress();