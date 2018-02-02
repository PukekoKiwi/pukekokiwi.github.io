function showContent() {
    var content = document.getElementById("content");
    var loader = document.getElementById("loadScreen");
    var screenHight = window.innerHeight;
    
    content.style.display = "block";
    window.scrollTo(0, screenHight);
    loader.style.display = "none";
}

function openTab(evt, tabName) {

    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

var langSwitch = 0; //En = 0, Jp = 1

function changeLang() {
    var langButton = document.getElementById("switchLanguage");
    var engBilin = document.getElementById("englishBilingualism");
    var japBilin = document.getElementById("japaneseBilingualism");
    
    if (langSwitch === 0) {
        langSwitch = 1;
        engBilin.style.display = "none";
        japBilin.style.display = "block";
        langButton.innerHTML = "A";
    } else {
        langSwitch = 0;
        japBilin.style.display = "none";
        engBilin.style.display = "block";
        langButton.innerHTML = "あ";
    }
    
}
