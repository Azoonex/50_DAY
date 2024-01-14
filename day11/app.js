function openCity (e,name){
    var i ,tabcontent, tablinks
    document.getElementById("defaultOpen").click();
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i= 0;i<tabcontent.length;i++){
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }
    
    document.getElementById(name).style.display = 'block';
    e.cureenTarget.className += " active"
    
}

