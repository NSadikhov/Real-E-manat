logoText={
    text:"Мобильные операторы",
};
mainPart=[
    {
        src:"images/azercell.png",
    },
    {
        src:"images/bakcell.png",
    },
    {
        src:"images/nar.png",
    },
    {
       src:"images/freenet.jpg",
    },
    {
        src:"images/naxtel.png",
    },
    {
        src:"images/mobile-card.png",
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
    let headLogoMobile=createElement("img","logoMobile","images/mobile-operator.png",header);
    let h1=createElement("h1","h1",null,header);
    h1.innerText=logoText.text;
    let main = createElement("div", "main", null, container);
    let mainFlex=createElement("div","mainFlex",null,main);
    for(let i=0;i<mainPart.length;i++){
        let mainDiv=createElement("div","mobileMainDiv",null,mainFlex);
        var mainImg=createElement("img","mainImg",mainPart[i].src,mainDiv);
        if(i==5){
            let h1First=createElement("h1","mainH1",null,mainDiv);
            h1First.innerText="Xarici";
            let h1Second=createElement("h1","mainH1",null,mainDiv);
            h1Second.innerText="Mobil";
            let h1Third=createElement("h1","mainH1",null,mainDiv);
            h1Third.innerText="Operatorlar";
        }
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