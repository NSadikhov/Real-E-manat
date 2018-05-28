communalPart = [
  (azQaz = {
    background: "#054899",
    src: "images/azerqaz.png"
  }),
  (azSu = {
    background: "#1b89c8",
    src: "images/azersu.png"
  }),
  (azercell = {
    background: "#6a2b93",
    src: "images/azercell.png"
  }),
  (bakcell = {
    background: "#ef193b",
    src: "images/bakcell.png"
  }),
  (nar = {
    background: "#b0043e",
    src: "images/nar.png"
  }),
  (azerIsiq = {
    background: "#d5971e",
    src: "images/azerisiq.png"
  }),
  (megaSigorta = {
    background: "#ca3394",
    src: "images/atesgah.png"
  })
];

mainPart = [
  (communalPayments = {
    src: "images/communal.png"
  }),
  (mobileOperators = {
    src: "images/mobile-operator.png"
  }),
  (bank = {
    src: "images/bank-xidmetleri.png"
  }),
  (country = {
    src: "images/DB.png"
  }),
  (TV = {
    src: "images/TV.png"
  }),
  (internet = {
    src: "images/internet.png"
  }),
  (paymentCard = {
    src: "images/telephone.png"
  }),
  (game = {
    src: "images/game.png"
  }),
  (portManat = {
    src: "images/e-pulqabi.png"
  })
];
containerText = {
  mainText: [
    (first = "Коммунальные платежи"),
    (second = "Мобильные операторы"),
    (third = "Банковские сервисы"),
    (fourth = "Государство и муниципалитет"),
    (fifth = "ТВ"),
    (sixth = "Интернет"),
    (seventh = "телефон"),
    (eighth = "Развлечения и игры"),
    (ninth = "E-кошелек")
  ],
  footText: {
    text: "Обслуживание клиентов: 012 404 48 88"
  }
};

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
  let imgEmanat = createElement("img", "imgE", "images/E-manat.png", header);
  let imgInfo = createElement("img", "imgI", "images/Info.png", header);
  let langUk = createElement("img", "imgUK", "images/UK.png", header);
  langUk.onclick = function() {
    let a = document.createElement("script");
    a.src = "js/config/ingscript.js";
    let b = document.getElementById("scriptId");
    b.remove();
    a.id = "scriptId";
    let c = document.getElementById("containerId");
    c.remove();
    document.body.appendChild(a);
  };
  let langRu = createElement("img", "imgRU", "images/RU.png", header);
  let langAze = createElement("img", "imgAZE", "images/AZE.png", header);
  langAze.onclick = function() {
    let b = document.getElementById("scriptId");
    b.remove();
    let c = document.getElementById("containerId");
    c.remove();
    let a = document.createElement("script");
    a.src = "js/script.js";
    a.id = "scriptId";    
    document.body.appendChild(a);
  };
  let nav = createElement("div", "nav", null, container);
  let flex = createElement("div", "flex", null, nav);
  for (let i = 0; i < communalPart.length; i++) {
    let flexDiv = createElement("div", "flexPart", null, flex);
    flexDiv.style.background = communalPart[i].background;
    let flexImg = createElement("img", "flexImg", communalPart[i].src, flexDiv);
  }
  let clear = createElement("div", "clear", null, container);
  let main = createElement("div", "main", null, container);
  let mainFlex = createElement("div", "mainFlex", null, main);
  for (let t = 0; t < mainPart.length; t++) {
    let mainFlexDiv = createElement("div", "mainFlexDiv", null, mainFlex);
    let mnDivImg = createElement(
      "img",
      "mainImg",
      mainPart[t].src,
      mainFlexDiv
    );
    let h2 = createElement("h2", "h2", null, mainFlexDiv);
    h2.innerText = containerText.mainText[t];
    if (t == 0) {
      mainFlexDiv.onclick = function() {
        let src = "js/provider-config/rucommunal.js";
        localStorage.name = src;
        document.location.href = "provider.html";
      };
    } else if (t == 1) {
      mainFlexDiv.onclick = function() {
        let src = "js/provider-config/rumobile.js";
        localStorage.name = src;
        document.location.href = "provider.html";
      };
    } else if (t == 2) {
      mainFlexDiv.onclick = function() {
        let src = "js/provider-config/rubank.js";
        localStorage.name = src;
        document.location.href = "provider.html";
      };
    } else if (t == 3) {
      mainFlexDiv.onclick = function() {
        let src = "js/provider-config/rustate.js";
        localStorage.name = src;
        document.location.href = "provider.html";
      };
    } else if (t == 4) {
      mainFlexDiv.onclick = function() {
        let src = "js/provider-config/rutv.js";
        localStorage.name = src;
        document.location.href = "provider.html";
      };
    } else if (t == 5) {
      mainFlexDiv.onclick = function() {
        let src = "js/provider-config/ruinternet.js";
        localStorage.name = src;
        document.location.href = "provider.html";
      };
    } else if (t == 6) {
      mainFlexDiv.onclick = function() {
        let src = "js/provider-config/rutelefon.js";
        localStorage.name = src;
        document.location.href = "provider.html";
      };
    } else if (t == 7) {
      mainFlexDiv.onclick = function() {
        let src = "js/provider-config/rugame.js";
        localStorage.name = src;
        document.location.href = "provider.html";
      };
    } else if (t == 8) {
      mainFlexDiv.onclick = function() {
        let src = "js/provider-config/ruwallet.js";
        localStorage.name = src;
        document.location.href = "provider.html";
      };
    }
  }
  let footer = createElement("div", "footer", null, container);
  footer.innerText = containerText.footText.text;
}
drawHTML();

function creation() {
  let scriptElement = document.createElement("script");
  scriptElement.src = localStorage.name;
  document.body.appendChild(scriptElement);
}
