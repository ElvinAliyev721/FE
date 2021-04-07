window.addEventListener('scroll',function(){
    let simbrellaHead=document.querySelector('header#header')

    if(window.scrollY>30){
        simbrellaHead.classList.add('fix_me')
    }else{
        simbrellaHead.classList.remove('fix_me')
    }
})