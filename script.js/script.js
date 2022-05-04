

function onScroll(){
    let on = document.getElementById("navigation")
    if(scrollY > 0){
        on.classList.add("scrol")
    }else{
        on.classList.remove("scrol")
    }
    
}

function abriMenu(){
    document.body.classList.add("menu-expanded")
}


function fechaMenu(){
    document.body.classList.remove("menu-expanded")
}