function applyClassFixedInNav(){
    const $navDown = document.querySelector('.navDown');
    if(window.pageYOffset > 80){
        $navDown.classList.add('nav-fixed');
    } else if (window.pageYOffset < 80 && $navDown.classList.contains('nav-fixed')){
        $navDown.classList.remove('nav-fixed');
    }
}

window.addEventListener('scroll', applyClassFixedInNav, false);
