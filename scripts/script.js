tabela=[];
function losuj() {
    if (document.getElementById("alistar").checked==true) {
        tabela.push("Alistar");
    }
    if (document.getElementById("amumu").checked==true) {
        tabela.push("Amumu");
    }
    if (document.getElementById("ashe").checked==true) {
        tabela.push("Ashe");
    }
    if (document.getElementById("bard").checked==true) {
        tabela.push("Bard");
    }
    if (document.getElementById("blitzcrank").checked==true) {
        tabela.push("Blitzcrank");
    }
    if (document.getElementById("brand").checked==true) {
        tabela.push("Brand");
    }
    if (document.getElementById("braum").checked==true) {
        tabela.push("Braum");
    }
    if (document.getElementById("heimerdinger").checked==true) {
        tabela.push("Heimerdinger");
    }
    if (document.getElementById("janna").checked==true) {
        tabela.push("Janna");
    }
    if (document.getElementById("karma").checked==true) {
        tabela.push("Karma");
    }
    if (document.getElementById("leona").checked==true) {
        tabela.push("Leona");
    }
    if (document.getElementById("lulu").checked==true) {
        tabela.push("Lulu");
    }
    if (document.getElementById("lux").checked==true) {
        tabela.push("Lux");
    }
    if (document.getElementById("maokai").checked==true) {
        tabela.push("Maokai");
    }
    if (document.getElementById("morgana").checked==true) {
        tabela.push("Morgana");
    }
    if (document.getElementById("nami").checked==true) {
        tabela.push("Nami");
    }
    if (document.getElementById("nautilus").checked==true) {
        tabela.push("Nautilus");
    }
    if (document.getElementById("pantheon").checked==true) {
        tabela.push("Pantheon");
    }
    if (document.getElementById("pyke").checked==true) {
        tabela.push("Pyke");
    }
    if (document.getElementById("rakan").checked==true) {
        tabela.push("Rakan");
    }
    if (document.getElementById("rell").checked==true) {
        tabela.push("Rell");
    }
    if (document.getElementById("renata").checked==true) {
        tabela.push("Renata");
    }
    if (document.getElementById("senna").checked==true) {
        tabela.push("Senna");
    }
    if (document.getElementById("seraphine").checked==true) {
        tabela.push("Seraphine");
    }
    if (document.getElementById("sona").checked==true) {
        tabela.push("Sona");
    }
    if (document.getElementById("soraka").checked==true) {
        tabela.push("Soraka");
    }
    if (document.getElementById("swain").checked==true) {
        tabela.push("Swain");
    }
    if (document.getElementById("taric").checked==true) {
        tabela.push("Taric");
    }
    if (document.getElementById("thresh").checked==true) {
        tabela.push("Thresh");
    }
    if (document.getElementById("twitch").checked==true) {
        tabela.push("Twitch");
    }
    if (document.getElementById("velkoz").checked==true) {
        tabela.push("Velkoz");
    }
    if (document.getElementById("xerath").checked==true) {
        tabela.push("Xerath");
    }
    if (document.getElementById("yuumi").checked==true) {
        tabela.push("Yuumi");
    }
    if (document.getElementById("zilean").checked==true) {
        tabela.push("Zilean");
    }
    if (document.getElementById("zyra").checked==true) {
        tabela.push("Zyra");
    }
    max=tabela.length;
    random=Math.floor(Math.random() * max);
    // for (i=0; i>=max; i++);
    document.getElementById("result").innerHTML=(tabela[random]);
    tabela.length=0;
    max=0;
    random=0;
}
// --------------------

function checkAll(checkBox) {
    get = document.getElementsByName('checkbox');
    for(var i=0; i<get.length; i++) {
        get[i].checked = checkBox.checked;
    }
}