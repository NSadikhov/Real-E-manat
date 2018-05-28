logoText={
    text:"Банковские услуги",
};
mainPart=[
    {
        src:"images/unibank.png",
    },
    {
        src:"images/bankofbaku.png",
    },
    {
        src:"images/kapitalbank.png",
    },
    {
       src:"images/rabitebank.png",
    },
    {
        src:"images/yapikredi.jpeg",
    },
    {
        src:"images/embafinans.jpg",
    },
    {
        src:"images/bankrespublika.png",
    },
    {
        src:"images/finca.png",
    },
    {
        src:"images/nikoil.jpg",
    },
    {
        src:"images/findev.png",
    },
    {
        src:"images/molbulak.jpg",
    },
    {
        src:"images/merkuri.jpg",
    },
    {
        src:"images/muganbank.jpg",
    },
    {
        src:"images/VTB.jpg",
    },
    {
        src:"images/bankbtb.png",
    },
    {
        src:"images/turanbank.png",
    }
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
    let headLogoBank=createElement("img","logoBank","images/bank-xidmetleri.png",header);
    let h1=createElement("h1","h1",null,header);
    h1.innerText=logoText.text;
    let main = createElement("div", "main", null, container);
    let mainFlex=createElement("div","mainFlex",null,main);
    for(let i=0;i<mainPart.length;i++){
        let mainDiv=createElement("div","bankMainDiv",null,mainFlex);
        var mainImg=createElement("img","mainImg",mainPart[i].src,mainDiv);
    }
    let btn=createElement("button","btn",null,container);
    let btnImg=createElement("img","btnImg","images/home.png",btn);
    let btnH2=createElement("h2","btnH2",null,btn);
    btnH2.innerText="ГЛАВНАЯ СТРАНИЦА";
    btn.onclick=function(){
        document.location.href="index.html";
    }
}
drawHTML();