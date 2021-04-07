window.addEventListener('scroll',function(){
    let simbrellaHead=document.querySelector('header#header')

    if(window.scrollY>30){
        simbrellaHead.classList.add('fix_me')
    }else{
        simbrellaHead.classList.remove('fix_me')
    }
})
let inputsInForm=document.querySelectorAll('#vacancy_form input')
let formControl=document.querySelector('#vacancy_form')
formControl.addEventListener('submit',function(e){
    let check=false
    inputsInForm.forEach(event=>{
        if(event.value==='' || event.value==null){
            event.style.borderColor='red'
            check=true
        }else{
            event.style.borderColor='rgba(255,255,255,0.5)'
        }
    })
    if(check){
        e.preventDefault()
    }
})


