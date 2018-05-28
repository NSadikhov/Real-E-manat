logoText = {
    text: "Telephone"
  };
  mainPart = [
    {
      src: "images/baktel-aztel.png"
    },
    {
      src: "images/azerurotel.png"
    },
    {
      src: "images/ultel.png"
    },
    {
      src: "images/transeuro.png"
    },
    {
      src:"",
      text:"Naxçıvan Telefon",
    },
    
  ];
  
  function createElement(tagName, className, src, parent) {
    let element = document.createElement(tagName);
    element.className = className;
    element.src = src;
    parent.appendChild(element);
    return element;
  }
  
  function drawHTML() {
    let container = createElement("div", "container", null, document.body);
    container.id = "containerId";
    let header = createElement("div", "header", null, container);
    let headLogoTelefon = createElement(
      "img",
      "logoTelefon",
      "images/telephone.png",
      header
    );
    let h1 = createElement("h1", "h1", null, header);
    h1.innerText = logoText.text;
    let main = createElement("div", "main", null, container);
    let mainFlex = createElement("div", "mainFlex", null, main);
    for (let i = 0; i < mainPart.length; i++) {
      let mainDiv = createElement("div", "telefonMainDiv", null, mainFlex);
      var mainImg = createElement("img", "mainImg", mainPart[i].src, mainDiv);
      if (i == 4) {
        let h1 = createElement("h1", "mainH1", null, mainDiv);
        h1.innerText = mainPart[4].text;
      }
    }
    let btn = createElement("button", "btn", null, container);
    let btnImg = createElement("img", "btnImg", "images/home.png", btn);
    let btnH2 = createElement("h2", "btnH2", null, btn);
    btnH2.innerText = "HOME PAGE";
    btn.onclick = function() {
      document.location.href = "index.html";
    };
  }
  
  drawHTML();