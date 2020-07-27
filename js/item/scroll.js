// Save a current position in global
window.scrollPosition = document.documentElement.scrollTop || 0;

document.addEventListener('scroll', function () {
    let documentY = document.documentElement.scrollTop;
    let direction = documentY - window.scrollPosition >= 0 ? 1 : -1;
    window.scrollPosition = documentY; // Update scrollY
    console.log(direction); //
});


// const width = window.innerWidth;
// const getCurrentScroll = () => {
//     return window.pageYOffset || document.documentElement.scrollTop;
// };
// const getScroll = getCurrentScroll();
// if (width > 1000) {
//     if (getScroll >= 400) { }
//     if (getScroll >= 1450) { }
// }