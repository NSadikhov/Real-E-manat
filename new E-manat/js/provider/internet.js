logoText={
    text:"Internet",
};
mainPart=[
    {
        src:"images/aztelekom.png",
    },
    {
        src:"images/azerurotel.png",
    },
    {
        src:"images/baktelekom.jpg",
    },
    {
       src:"images/katv.jpg",
    },
    {
        src:"images/connecttv.jpg",
    },
    {
        src:"images/birlink.png",
    },
    {
        src:"images/ultel.png",
    },
    {
        src:"images/azeronline.png",
    },
    {
        src:"images/ailetv.png",
    },
    {
        src:"images/alfanet.jpg",
    },
    {
        src:"images/azstarnet.png",
    },
    {
        src:"images/smarttv.png",
    },
    {
        src:"images/avirtel.png",
        text:"AVIRTEL",
    },
    {
        src:"images/narhome.png",
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
    let headLogoInternet=createElement("img","logoInternet","images/internet.png",header);
    let h1=createElement("h1","h1",null,header);
    h1.innerText=logoText.text;
    let main = createElement("div", "main", null, container);
    let mainFlex=createElement("div","mainFlex",null,main);
    for(let i=0;i<mainPart.length;i++){
        let mainDiv=createElement("div","InternetMainDiv",null,mainFlex);
        var mainImg=createElement("img","mainImg",mainPart[i].src,mainDiv);
        if(i==12){
            let h1=createElement("h1","mainH1",null,mainDiv);
            h1.innerText=mainPart[12].text;
        }
    }
    let btn=createElement("button","btn",null,container);
    let btnImg=createElement("img","btnImg","images/home.png",btn);
    let btnH2=createElement("h2","btnH2",null,btn);
    btnH2.innerText="ANA SƏHİFƏ";
    btn.onclick=function(){
        document.location.href="index.html";
    }
}
drawHTML();