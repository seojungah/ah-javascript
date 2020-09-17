const loading = async () => {
  const divLoad = document.createElement("div");

  document.body.appendChild(divLoad);
  const h1Load = document.createElement("h1");
  divLoad.appendChild(h1Load);
  const imgLoad = document.createElement("iframe");
  divLoad.appendChild(imgLoad);

  divLoad.setAttribute("id", "loading");
  h1Load.setAttribute("id", "loading_text");
  imgLoad.setAttribute("id", "loading_img");

  const loading = document.querySelector("#loading");
  loading.style.position = "fixed";
  loading.style.width = "100%";
  loading.style.height = "100%";
  loading.style.background = "#161519";
  loading.style.zIndex = "9999";
  loading.style.opacity = "1";

  const loadingText = document.querySelector("#loading_text");
  loadingText.style.display = "block";
  loadingText.style.width = "100%";
  loadingText.style.margin = "15% auto 0";
  loadingText.style.color = "#fff";
  loadingText.style.textAlign = "center";
  loadingText.style.fontWeight = "300";
  loadingText.style.fontSize = "1rem";
  loadingText.innerText = "loading page ...!";

  const loadingImage = document.querySelector("#loading_img");
  loadingImage.src = "/load-animation.html";
  loadingImage.style.display = "block";
  loadingImage.style.width = "50%";
  loadingImage.style.height = "30%";
  loadingImage.style.margin = "0 auto";
};

loading();
