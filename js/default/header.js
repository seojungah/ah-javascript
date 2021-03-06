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
  const pallet = document.querySelector("#pallet");
  const contect = document.querySelector("#contect");
  const menuList = document.querySelector(".menu_list");
  const portfolio = document.querySelector("#portfolio");

  // header open & close
  const toggleHeader = (btn) => {
    btn.addEventListener("click", () => {
      headerOpen.classList.toggle("active");
      headerClose.classList.toggle("show");
      menu.classList.toggle("sliding");
      menuList.classList.toggle("hover");
    });
  };
  const headerBtn = [headerOpen, headerClose];
  headerBtn.forEach((btn) => toggleHeader(btn));

  // search bar
  search.addEventListener("keyup", () => {
    showPortfolioList();

    const inputValue = search.value.toUpperCase();
    const itemTag = [...document.querySelectorAll(".content_box > .tag")];

    const searchTag = itemTag.filter((tag) => {
      const tagUpperCase = tag.innerText.toUpperCase();
      const searchNum = tagUpperCase.indexOf(inputValue);
      if (searchNum > -1) return tag;
    });
    searchTag.forEach((tag) => (tag.parentNode.style.display = ""));
  });

  // header menu click event
  const moveEvent = (menu, place) => {
    const menuPointer = document.querySelector(place);
    const menuTop = menuPointer.getBoundingClientRect().top;
    menu.addEventListener("click", () => {
      window.scrollTo(0, menuTop);
    });
  };
  const pointer = document.querySelectorAll(".pointer");
  const hearderMenu = [...pointer];
  hearderMenu.forEach((value, index) => {
    moveEvent(value, "#main");
  });

  //Clipboard - sweetalert.js -> alert
  const textArea = document.createElement("textarea");
  textArea.value = "sjungah99@gmail.com";
  document.body.appendChild(textArea);

  contect.addEventListener("click", () => {
    try {
      const copy = document.execCommand("copy");
      if (copy)
        swal({
          title: "복사 완료",
          text: "sjungah99@gmail.com",
          icon: "success",
          button: "OK",
        });
    } catch (err) {
      console.log("Unable to copy");
    }
    textArea.select();
    document.body.removeChild(textArea);
  });

  //Music button
  const musicBtn = document.querySelector(".music_btn");
  const musicBtnON = document.querySelector(".music_btn .on");
  const musicBtnOff = document.querySelector(".music_btn .off");

  musicBtn.addEventListener("click", () => {
    musicBtnON.classList.toggle("change_on");
    musicBtnOff.classList.toggle("change_off");
  });

  //menu - home
  const homeBtn = document.querySelector("#home");
  homeBtn.addEventListener("click", () => {
    location.href = location.href;
    //     location.reload(true);
    // history.go(0);
  });

  // foltfolio
  const section = document.querySelector("#section");
  const projectsBtn = document.querySelector("#projects");
  const choiseBar = document.querySelector(".menu_list > h1 > div");
  projectsBtn.addEventListener("click", () => {
    showPortfolioList();
  });

  //show portfolio
  const showPortfolioList = () => {
    portfolio.style.right = "0";
    portfolio.style.display = "block";
    choiseBar.classList.add("choise_bar");
    setTimeout(() => {
      section.style.display = "none";
    }, 600);
  };

  //show pallet
  pallet.addEventListener("click", () => {
    location.href = "/pallet.html";
  });
};

loadHeader();
