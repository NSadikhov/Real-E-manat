logoText={
    text:"Коммунальные платежи",
};
mainPart=[
    azeriqaz={
        src:"images/fire.png",
    },
    azersu={
        src:"images/azersu.png",
    },
    azerisiq={
        src:"images/electricity.png",
    },
    azeristilik={
       src:"",
    },
    rahat={
        src:"images/rahat-yasam.jpg",
    },
    naxcivan={
        src:"images/naxcivan.png",
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
    let headLogoFire=createElement("img","logo","images/fire.png",header);
    let headLogoWater=createElement("img","logo","images/water.png",header);
    let headLogoLight=createElement("img","logo","images/light.png",header);
    let h1=createElement("h1","h1",null,header);
    h1.innerText=logoText.text;
    let main = createElement("div", "main", null, container);
    let mainFlex=createElement("div","mainFlex",null,main);
    for(let i=0;i<mainPart.length;i++){
        let mainDiv=createElement("div","mainDiv",null,mainFlex);
        var mainImg=createElement("img","mainImg",mainPart[i].src,mainDiv);
        if(i==0){
            let h1=createElement("h1","mainH1",null,mainDiv);
            h1.innerText="azəriqaz";
        }
        else if(i==2){
            let h1=createElement("h1","mainH1",null,mainDiv);
            h1.innerText="azərişıq";
        }
        else if(i==3){
            let h1=createElement("h1","mainH1",null,mainDiv);
            h1.innerText="AZƏRİSTİLİKTƏCHİZAT";
        }
        else if(i==5){
            let h1First=createElement("h1","mainH1",null,mainDiv);
            h1First.innerText="Communal";
            let h1Second=createElement("h1","mainH1",null,mainDiv);
            h1Second.innerText="payments";
            let h1Third=createElement("h1","mainH1",null,mainDiv);
            h1Third.innerText="Naxçıvan";
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