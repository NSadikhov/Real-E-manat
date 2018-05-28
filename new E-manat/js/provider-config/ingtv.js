logoText={
    text:"TV",
};
mainPart=[
    {
        src:"images/atv.png",
    },
    {
        src:"images/katv.jpg",
    },
    {
        src:"images/connecttv.png",
    },
    {
       src:"images/ailetv.png",
    },
    {
        src:"images/ultel.png",
    },
    {
        src:"images/baktelekom.jpg",
    },
    {
        src:"images/alfanet.jpg",
    },
    {
        src:"images/smarttv.png",
    },
    {
        src:"images/ntv.png",
    },
    {
        src:"images/tvcity.png",
    },
    {
        src:"images/cliptv.png",
    },
    
];

function createElement(tagName, className, src, parent) {
    let element = document.createElement(tagName);
    element.className = className;
    element.src = src;
    parent.appendChild(element);
    return element;
}

function drawHTML(){
    let container = createElement("div", "container", null, document.body);
    container.id = "containerId";
    let header = createElement("div", "header", null, container);
    let headLogoTV=createElement("img","logoTV","images/TV.png",header);
    let h1=createElement("h1","h1",null,header);
    h1.innerText=logoText.text;
    let main = createElement("div", "main", null, container);
    let mainFlex=createElement("div","mainFlex",null,main);
    for(let i=0;i<mainPart.length;i++){
        let mainDiv=createElement("div","TVMainDiv",null,mainFlex);
        var mainImg=createElement("img","mainImg",mainPart[i].src,mainDiv);
    }
    let btn=createElement("button","btn",null,container);
    let btnImg=createElement("img","btnImg","images/home.png",btn);
    let btnH2=createElement("h2","btnH2",null,btn);
    btnH2.innerText="HOME PAGE";
    btn.onclick=function(){
        document.location.href="index.html";
    }
}

drawHTML();