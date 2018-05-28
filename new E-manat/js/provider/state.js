logoText={
    text:"Dövlət və Bələdiyyə",
};
mainPart=[
    {
        src:"images/emdk.jpg",
        text:"ƏMDK",
    },
    {
        src:"images/gerb.png",
        text:"Bələdiyyə vergiləri və ödənişləri",
    },
    {
        src:"images/gerb.png",
        text:"NİZAMİ MKTB",
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
    let headLogoState=createElement("img","logoState","images/DB.png",header);
    let h1=createElement("h1","h1",null,header);
    h1.innerText=logoText.text;
    let main = createElement("div", "main", null, container);
    let mainFlex=createElement("div","mainFlex",null,main);
    for(let i=0;i<mainPart.length;i++){
        let mainDiv=createElement("div","stateMainDiv",null,mainFlex);
        var mainImg=createElement("img","mainImg",mainPart[i].src,mainDiv);
        if(i==0){
            let h1=createElement("h1","mainH1",null,mainDiv);
            h1.innerText=mainPart[0].text;
        }
        else if(i==1){
            let h1=createElement("h1","mainH1",null,mainDiv);
            h1.innerText=mainPart[1].text;
        }
        else if(i==2){
            let h1=createElement("h1","mainH1",null,mainDiv);
            h1.innerText=mainPart[2].text;
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