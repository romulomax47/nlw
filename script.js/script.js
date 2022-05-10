
window.addEventListener('scroll', onScroll);

onScroll()

function onScroll(){
    showNavScroll()
    showBackTop()
    activeMenu(homer)
    activeMenu(servico)
    // activeMenu(about)
    // activeMenu(contato)
}
function showNavScroll(){
    let on = document.getElementById("navigation")
    if(scrollY > 0){
        on.classList.add("scrol")
    }else{
        on.classList.remove("scrol")
    }
    
}
function activeMenu(section){
    const targetLine = scrollY + innerHeight / 2;

    //verificar se asesao pasul da linha
    //quais dados vou usar
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight;

    const sectionTopReachOrPassaedTargetline = targetLine >= sectionTop;
    // console.log(`O topo da sesão pasol da linha? ${sectionTopReachOrPassaedTargetline}`)

    // A SESÃO TERMINA ONDE 
    const sectionEndsAt = sectionTop + sectionHeight;
    // o final da sesão pasou da linha alvo?
    const sectionEndPassedTargetLine = sectionEndsAt     <= targetLine;

    const sectionBoundaries = sectionTopReachOrPassaedTargetline && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id')

    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries){
        menuElement.classList.add('active')
    }

    // console.log(sectionBoundaries)
    // console.log(`O final da sesão pasou da da linha alvo ? ${sectionEndPassedTargetLine} `)










}


















function showBackTop(){
    let on = document.getElementById("top")
    console.log(scroll)
    if(scrollY > 550){
        on.classList.add("show")
    }else{
        on.classList.remove("show")
    }
}
function abriMenu(){
    document.body.classList.add("menu-expanded")
}

function fechaMenu(){
    document.body.classList.remove("menu-expanded")
}

ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: '700'
}).reveal('#homer, #homer .mulher,  #homer .numeros, #servico, #servico card, #servico cards, #about .wapp, .waap' )
