/**--------------
      header
----------------*/

const loadHeader = async () => {

    // import header     
    const header = document.querySelector("#header");
    header.innerHTML = await fetchHtmlAsText("/header.html");

    // import html elegment

    const headerOpen = document.querySelector("header > .hamburger_btn");
    const headerClose = document.querySelector("header > .bg ");
    const menu = document.querySelector("header > .menu");
    const search = document.querySelector(".menu .search input");
    const pallet = document.querySelector('#pallet');
    const contect = document.querySelector("#contect");


    // header open & close
    const toggleHeader = (btn) => {
        btn.addEventListener('click', () => {
            headerOpen.classList.toggle('active');
            headerClose.classList.toggle('show');
            menu.classList.toggle('sliding');
        });
    };
    const headerBtn = [headerOpen, headerClose];
    headerBtn.forEach((btn) => toggleHeader(btn));

    // search bar
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
    const pointer = document.querySelectorAll('.pointer');
    const hearderMenu = [...pointer];
    hearderMenu.forEach((value, index) => { moveEvent(value, '#main'); });

    pallet.addEventListener('click', () => {
        location.href = "/pallet.html";
    });

    //Clipboard - sweetalert.js -> alert
    const textArea = document.createElement('textarea');
    textArea.value = 'sjungah99@gmail.com';
    document.body.appendChild(textArea);

    contect.addEventListener('click', () => {
        try {
            textArea.select();
            const copy = document.execCommand('copy');
            if (copy) swal({
                title: "복사 완료",
                text: "sjungah99@gmail.com",
                icon: "success",
                button: "OK",
            });
            document.body.removeChild(textArea);
        } catch (err) {
            console.log('Unable to copy');
        }
    });

    //Music button
        const musicBtn = document.querySelector(".music_btn");
        const musicBtnON = document.querySelector(".music_btn .on");
        const musicBtnOff = document.querySelector(".music_btn .off");
       
        musicBtn.addEventListener('click', () => {
            musicBtnON.classList.toggle("change_on");
            musicBtnOff.classList.toggle("change_off");
        });

        //youtube
        let player;
            player = new YT.Player('player', {
                width:'100',
                height:'100',
                videoId: 'b58dL4tkwaw',
                playerVars: {
                    'autoplay': 1,
                    'controls': 0,
                    'rel': 0,
                    'wmode': 'transparent',
                    'disablekb':1,
                },
                listType:{
                    'loop':1,
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        
        function onPlayerReady(event) {
            event.target.playVideo();
          }
    

        // musicBtnOff.addEventListener('click',()=>{
        //     player.playVideo();
        // });
        
        // musicBtnON.addEventListener('click',()=>{
        //     player.pauseVideo();
        // }); 

};

loadHeader();

