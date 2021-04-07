
const b = document.querySelector(".button-toogler")
const Menu = document.querySelector('.menu-for-media')
const ulMenu = document.querySelector('.menu-for-media ul')
let firstSide = document.querySelector('.button-toogler .first-side')
let thirdSide = document.querySelector('.button-toogler .third-side')
let secondDiv = document.querySelector('.button-toogler .second-side')
b.addEventListener('click', e => {

    if (ulMenu.style.display == 'none') {
        firstSide.classList.add('active')
        thirdSide.classList.add('active')
        secondDiv.style.display = 'none'
        ulMenu.style.display = 'block'
        Menu.style.display = 'block'
    } else {
        firstSide.classList.remove('active')
        thirdSide.classList.remove('active')
        secondDiv.style.display = ''
        ulMenu.style.display = 'none'
        Menu.style.display = 'none'
    }

})
window.addEventListener('scroll', function () {
    let simbrellaHead = document.querySelector('header#header')
    
    if (window.scrollY > 30) {
        simbrellaHead.classList.add('fix_me')
    } else {
        simbrellaHead.classList.remove('fix_me')
       
    }
})

$(document).on('click', '.navbar-na a', function () {
    $(this).addClass('active').siblings().removeClass('active')
})





let imageHover = document.querySelectorAll('.three_news article .image img')
let aHover = document.querySelectorAll('.three_news article .full_link')

aHover.forEach(e => {
    e.addEventListener('mouseenter', function () {
        e.parentNode.querySelector('.image').childNodes[1].classList.add('active')

    })
    e.addEventListener('mouseleave', function () {
        e.parentNode.querySelector('.image').childNodes[1].classList.remove('active')
    })
})

let countries = document.querySelectorAll('.footer_first .footer_nav ul a')
countries.forEach(e => {

    e.addEventListener('click', function () {
        let country = document.querySelector('.footer_first .footer_nav ul .active')
        let show = document.querySelector('.footer_contacts ul.show_me')
        if (show != null && show != "") {
            show.classList.remove('show_me')
        }
        country.classList.remove('active')
        e.classList.add('active')
        let id = document.querySelector(`#${e.innerHTML}`)
        id.classList.add('show_me')
    })

})

//problem
let spanEm = $('.achievements_three article h3 span em')

one();

function one() {
    spanEm.counterUp({ delay: 10 });
}

let i=0;
let sections = document.querySelectorAll('.section')
let alar = document.querySelectorAll('.navbar-na a')
let forBefore=document.querySelectorAll('.forSc')
window.addEventListener('scroll', () => {

    forBefore.forEach(oneBef=>{
        let Beftop=oneBef.offsetTop
        let befHeight=oneBef.clientHeight
        if(pageYOffset>=(Beftop-befHeight/3)){
            if(oneBef.classList.contains('index_solutions')){
                oneBef.classList.add('show_me')
            }
        }
    })



    let current = ''
    sections.forEach(section => {
        let sectionTop = section.offsetTop
        let sectionHeight = section.clientHeight
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            // console.log(sectionTop)
            // console.log(sectionHeight)
            // console.log(pageYOffset)
            // if(sectionTop-pageYOffset  ){
            //     if(section.id==''){

            //     }else if(){

            //     }
            // }
            current = section.getAttribute('id')
        }
    })
    alar.forEach(a => {
        a.classList.remove('active')
        if (a.classList.contains(current)) {
            a.classList.add('active')
        }
    })
})


// let heig = document.querySelector('.index_solutions')
// console.log(heig.offsetHeight); //yuxaridan mesafe
// console.log(pageYOffset)
// let sec=document.querySelector('section').getElementsByClassName('second')[0]

// console.log(sec)
// let sec=$('section')
// console.log(sec.find('.second'))



//sarilar
//macar
let macar = document.querySelector('#MG');
let circleMacar=document.querySelector('circle[data-city="MG"]');
let gCircleMG=document.querySelector('g circle[data-city="MG"] ')

macar.addEventListener('mouseenter',function(){
    this.style.fill="#FF931E"
    circleMacar.style.fill='white'
    gCircleMG.style.fill='white'
})
macar.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleMacar.style.fill='#FF931E'
    gCircleMG.style.fill='#FF931E'
})


circleMacar.addEventListener('mouseenter',function(){
    macar.style.fill="#FF931E"
    circleMacar.style.fill='white'
    gCircleMG.style.fill='white'
})
circleMacar.addEventListener('mouseleave',function(){
    macar.style.fill='#E5E9F4'
    circleMacar.style.fill='#FF931E'
    gCircleMG.style.fill='#FF931E'
})
//botswana

let botswana = document.querySelector('#BW');
let circleBostswana=document.querySelector('circle[data-city="BW"]');
let gcircleBW=document.querySelector('g circle[data-city="BW"] ')

botswana.addEventListener('mouseenter',function(){
    this.style.fill="#FF931E"
    circleBostswana.style.fill='white'
    gcircleBW.style.fill='white'
})
botswana.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleBostswana.style.fill='#FF931E'
    gcircleBW.style.fill='#FF931E'
})

circleBostswana.addEventListener('mouseenter',function(){
    botswana.style.fill="#FF931E"
    circleBostswana.style.fill='white'
    gcircleBW.style.fill='white'
})
circleBostswana.addEventListener('mouseleave',function(){
    botswana.style.fill='#E5E9F4'
    circleBostswana.style.fill='#FF931E'
    gcircleBW.style.fill='#FF931E'
})
//uaganda
let uganda = document.querySelector('#UG');
let circleUG=document.querySelector('circle[data-city="UG"]');
let gcircleUG=document.querySelector('g circle[data-city="UG"] ')

uganda.addEventListener('mouseenter',function(){
    this.style.fill="#FF931E"
    circleUG.style.fill='white'
    gcircleUG.style.fill='white'
})
uganda.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleUG.style.fill='#FF931E'
    gcircleUG.style.fill='#FF931E'
})


circleUG.addEventListener('mouseenter',function(){
    uganda.style.fill="#FF931E"
    circleUG.style.fill='white'
    gcircleUG.style.fill='white'
})
circleUG.addEventListener('mouseleave',function(){
    uganda.style.fill='#E5E9F4'
    circleUG.style.fill='#FF931E'
    gcircleUG.style.fill='#FF931E'
})
//ethiopiya


let ethiopiya = document.querySelector('#ET');
let circleET=document.querySelector('circle[data-city="ET"]');
let gcircleET=document.querySelector('g circle[data-city="ET"] ')

ethiopiya.addEventListener('mouseenter',function(){
    this.style.fill="#FF931E"
    circleET.style.fill='white'
    gcircleET.style.fill='white'
})
ethiopiya.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleET.style.fill='#FF931E'
    gcircleET.style.fill='#FF931E'
})
circleET.addEventListener('mouseenter',function(){
    ethiopiya.style.fill="#FF931E"
    circleET.style.fill='white'
    gcircleET.style.fill='white'
})
circleET.addEventListener('mouseleave',function(){
    ethiopiya.style.fill='#E5E9F4'
    circleET.style.fill='#FF931E'
    gcircleET.style.fill='#FF931E'
})

//Myamar
let myamar = document.querySelector('#MM');
let circleMM=document.querySelector('circle[data-city="MM"]');
let gcircleMM=document.querySelector('g circle[data-city="MM"] ')

myamar.addEventListener('mouseenter',function(){
    this.style.fill="#FF931E"
    circleMM.style.fill='white'
    gcircleMM.style.fill='white'
})
myamar.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleMM.style.fill='#FF931E'
    gcircleMM.style.fill='#FF931E'
})


circleMM.addEventListener('mouseenter',function(){
    myamar.style.fill="#FF931E"
    circleMM.style.fill='white'
    gcircleMM.style.fill='white'
})
circleMM.addEventListener('mouseleave',function(){
    myamar.style.fill='#E5E9F4'
    circleMM.style.fill='#FF931E'
    gcircleMM.style.fill='#FF931E'
})
//senegal

let senegal = document.querySelector('#SN');
let circleSN=document.querySelector('circle[data-city="SN"]');
let gcircleSN=document.querySelector('g circle[data-city="SN"] ')

senegal.addEventListener('mouseenter',function(){
    this.style.fill="#FF931E"
    circleSN.style.fill='white'
    gcircleSN.style.fill='white'
})
senegal.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleSN.style.fill='#FF931E'
    gcircleSN.style.fill='#FF931E'
})
circleSN.addEventListener('mouseenter',function(){
    senegal.style.fill="#FF931E"
    circleSN.style.fill='white'
    gcircleSN.style.fill='white'
})
circleSN.addEventListener('mouseleave',function(){
    senegal.style.fill='#E5E9F4'
    circleSN.style.fill='#FF931E'
    gcircleSN.style.fill='#FF931E'
})
//panama
let panama = document.querySelector('#PA');
let circlePN=document.querySelector('circle[data-city="PA"]');
let gcirclePN=document.querySelector('g circle[data-city="PA"] ')

panama.addEventListener('mouseenter',function(){
    this.style.fill="#FF931E"
    circlePN.style.fill='white'
    gcirclePN.style.fill='white'
})
panama.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circlePN.style.fill='#FF931E'
    gcirclePN.style.fill='#FF931E'
})


circlePN.addEventListener('mouseenter',function(){
    panama.style.fill="#FF931E"
    circlePN.style.fill='white'
    gcirclePN.style.fill='white'
})
circlePN.addEventListener('mouseleave',function(){
    panama.style.fill='#E5E9F4'
    circlePN.style.fill='#FF931E'
    gcirclePN.style.fill='#FF931E'
})
//Ecvator
let ecvator = document.querySelector('#EC');
let circleEC=document.querySelector('circle[data-city="EC"]');
let gcircleEC=document.querySelector('g circle[data-city="EC"] ')

ecvator.addEventListener('mouseenter',function(){
    this.style.fill="#FF931E"
    circleEC.style.fill='white'
    gcircleEC.style.fill='white'
})
ecvator.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleEC.style.fill='#FF931E'
    gcircleEC.style.fill='#FF931E'
})

circleEC.addEventListener('mouseenter',function(){
    ecvator.style.fill="#FF931E"
    circleEC.style.fill='white'
    gcircleEC.style.fill='white'
})
circleEC.addEventListener('mouseleave',function(){
    ecvator.style.fill='#E5E9F4'
    circleEC.style.fill='#FF931E'
    gcircleEC.style.fill='#FF931E'
})

//sari goyler
//rusiya


let RUSIYA = document.querySelector('#RU');
let circleRUSIYA=document.querySelector('circle[data-city="RU"]');
let halfcircleRUSIYA=document.querySelector('path.half[data-city="RU"]')
let HAlfs=document.querySelectorAll('path.half[data-city="RU"]')
let gCircleRU=document.querySelector('g circle[data-city="RU"] ')

RUSIYA.addEventListener('mouseenter',function(event){
    this.style.fill="#2D3192"
    circleRUSIYA.style.fill='white'
    gCircleRU.style.fill='white'
    halfcircleRUSIYA.style.fill='#fff'
    HAlfs[1].style.fill='white'
})
RUSIYA.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleRUSIYA.style.fill='#2D3192'
    gCircleRU.style.fill='#2D3192'
    halfcircleRUSIYA.style.fill='#FF931E'
    HAlfs[1].style.fill='#FF931E'
})

circleRUSIYA.addEventListener('mouseenter',function(event){
    RUSIYA.style.fill="#2D3192"
    circleRUSIYA.style.fill='white'
    gCircleRU.style.fill='white'
    halfcircleRUSIYA.style.fill='#fff'
    HAlfs[1].style.fill='white'
})
circleRUSIYA.addEventListener('mouseleave',function(){
    RUSIYA.style.fill='#E5E9F4'
    circleRUSIYA.style.fill='#2D3192'
    gCircleRU.style.fill='#2D3192'
    halfcircleRUSIYA.style.fill='#FF931E'
    HAlfs[1].style.fill='#FF931E'
})
//aze


let AZERB = document.querySelector('#AZ');
let circleAZE=document.querySelector('circle[data-city="AZ"]');
let halfcircleAZE=document.querySelector('path.half[data-city="AZ"]')
let halfsAZ=document.querySelectorAll('path.half[data-city="AZ"]')
let gcircleAZ=document.querySelector('g circle[data-city="AZ"] ')

AZERB.addEventListener('mouseenter',function(event){
    this.style.fill="#2D3192"
    circleAZE.style.fill='white'
    gcircleAZ.style.fill='white'
    halfcircleAZE.style.fill='#fff'
    halfsAZ[1].style.fill='white'
})
AZERB.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleAZE.style.fill='#2D3192'
    gcircleAZ.style.fill='#2D3192'
    halfcircleAZE.style.fill='#FF931E'
    halfsAZ[1].style.fill='#FF931E'
})

circleAZE.addEventListener('mouseenter',function(event){
    AZERB.style.fill="#2D3192"
    circleAZE.style.fill='white'
    gcircleAZ.style.fill='white'
    halfcircleAZE.style.fill='#fff'
    halfsAZ[1].style.fill='white'
})
circleAZE.addEventListener('mouseleave',function(){
    AZERB.style.fill='#E5E9F4'
    circleAZE.style.fill='#2D3192'
    gcircleAZ.style.fill='#2D3192'
    halfcircleAZE.style.fill='#FF931E'
    halfsAZ[1].style.fill='#FF931E'
})
//zambia

let zambia = document.querySelector('#ZM');
let circleZM=document.querySelector('circle[data-city="ZM"]');
let halfcircleZM=document.querySelector('path.half[data-city="ZM"]')
let halfsZM=document.querySelectorAll('path.half[data-city="ZM"]')
let gcircleZM=document.querySelector('g circle[data-city="ZM"] ')

zambia.addEventListener('mouseenter',function(event){
    this.style.fill="#2D3192"
    circleZM.style.fill='white'
    gcircleZM.style.fill='white'
    halfcircleZM.style.fill='#fff'
    halfsZM[1].style.fill='white'
})
zambia.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleZM.style.fill='#2D3192'
    gcircleZM.style.fill='#2D3192'
    halfcircleZM.style.fill='#FF931E'
    halfsZM[1].style.fill='#FF931E'
})


circleZM.addEventListener('mouseenter',function(event){
    zambia.style.fill="#2D3192"
    circleZM.style.fill='white'
    gcircleZM.style.fill='white'
    halfcircleZM.style.fill='#fff'
    halfsZM[1].style.fill='white'
})
circleZM.addEventListener('mouseleave',function(){
    zambia.style.fill='#E5E9F4'
    circleZM.style.fill='#2D3192'
    gcircleZM.style.fill='#2D3192'
    halfcircleZM.style.fill='#FF931E'
    halfsZM[1].style.fill='#FF931E'
})

//nigerya

let nigerya = document.querySelector('#NG');
let circleNG=document.querySelector('circle[data-city="NG"]');
let halfcircleNG=document.querySelector('path.half[data-city="NG"]')
let haflsNG=document.querySelectorAll('path.half[data-city="NG"]')
let gcircleNG=document.querySelector('g circle[data-city="NG"] ')

nigerya.addEventListener('mouseenter',function(event){
    this.style.fill="#2D3192"
    circleNG.style.fill='white'
    gcircleNG.style.fill='white'
    halfcircleNG.style.fill='#fff'
    haflsNG[1].style.fill='white'
})
nigerya.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleNG.style.fill='#2D3192'
    gcircleNG.style.fill='#2D3192'
    halfcircleNG.style.fill='#FF931E'
    haflsNG[1].style.fill='#FF931E'
})

circleNG.addEventListener('mouseenter',function(event){
    nigerya.style.fill="#2D3192"
    circleNG.style.fill='white'
    gcircleNG.style.fill='white'
    halfcircleNG.style.fill='#fff'
    haflsNG[1].style.fill='white'
})
circleNG.addEventListener('mouseleave',function(){
    nigerya.style.fill='#E5E9F4'
    circleNG.style.fill='#2D3192'
    gcircleNG.style.fill='#2D3192'
    halfcircleNG.style.fill='#FF931E'
    haflsNG[1].style.fill='#FF931E'
})

//Ghana

let ghana = document.querySelector('#GH');
let circleGH=document.querySelector('circle[data-city="GH"]');
let halfcircleGH=document.querySelector('path.half[data-city="GH"]')
let halfsGH=document.querySelectorAll('path.half[data-city="GH"]')
let gcircleGH=document.querySelector('g circle[data-city="GH"] ')

ghana.addEventListener('mouseenter',function(event){
    this.style.fill="#2D3192"
    circleGH.style.fill='white'
    gcircleGH.style.fill='white'
    halfcircleGH.style.fill='#fff'
    halfsGH[1].style.fill='white'
})
ghana.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleGH.style.fill='#2D3192'
    gcircleGH.style.fill='#2D3192'
    halfcircleGH.style.fill='#FF931E'
    halfsGH[1].style.fill='#FF931E'
})

circleGH.addEventListener('mouseenter',function(event){
    ghana.style.fill="#2D3192"
    circleGH.style.fill='white'
    gcircleGH.style.fill='white'
    halfcircleGH.style.fill='#fff'
    halfsGH[1].style.fill='white'
})
circleGH.addEventListener('mouseleave',function(){
    ghana.style.fill='#E5E9F4'
    circleGH.style.fill='#2D3192'
    gcircleGH.style.fill='#2D3192'
    halfcircleGH.style.fill='#FF931E'
    halfsGH[1].style.fill='#FF931E'
})

//CI

let cote = document.querySelector('#CI');
let circleCI=document.querySelector('circle[data-city="CI"]');
let halfcircleCI=document.querySelector('path.half[data-city="CI"]')
let halfsCI=document.querySelectorAll('path.half[data-city="CI"]')
let gcircleCI=document.querySelector('g circle[data-city="CI"] ')

cote.addEventListener('mouseenter',function(event){
    this.style.fill="#2D3192"
    circleCI.style.fill='white'
    gcircleCI.style.fill='white'
    halfcircleCI.style.fill='#fff'
    halfsCI[1].style.fill='white'
})
cote.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleCI.style.fill='#2D3192'
    gcircleCI.style.fill='#2D3192'
    halfcircleCI.style.fill='#FF931E'
    halfsCI[1].style.fill='#FF931E'
})

circleCI.addEventListener('mouseenter',function(event){
    cote.style.fill="#2D3192"
    circleCI.style.fill='white'
    gcircleCI.style.fill='white'
    halfcircleCI.style.fill='#fff'
    halfsCI[1].style.fill='white'
})
circleCI.addEventListener('mouseleave',function(){
    cote.style.fill='#E5E9F4'
    circleCI.style.fill='#2D3192'
    gcircleCI.style.fill='#2D3192'
    halfcircleCI.style.fill='#FF931E'
    halfsCI[1].style.fill='#FF931E'
})

//SL


let SL = document.querySelector('#SL');
let circleSL=document.querySelector('circle[data-city="SL"]');
let halfcircleSL=document.querySelector('path.half[data-city="SL"]')
let halfsSL=document.querySelectorAll('path.half[data-city="SL"]')
let gcircleSL=document.querySelector('g circle[data-city="SL"] ')

SL.addEventListener('mouseenter',function(event){
    this.style.fill="#2D3192"
    circleSL.style.fill='white'
    gcircleSL.style.fill='white'
    halfcircleSL.style.fill='#fff'
    halfsSL[1].style.fill='white'
})
SL.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleSL.style.fill='#2D3192'
    gcircleSL.style.fill='#2D3192'
    halfcircleSL.style.fill='#FF931E'
    halfsSL[1].style.fill='#FF931E'
})

circleSL.addEventListener('mouseenter',function(event){
    SL.style.fill="#2D3192"
    circleSL.style.fill='white'
    gcircleSL.style.fill='white'
    halfcircleSL.style.fill='#fff'
    halfsSL[1].style.fill='white'
})
circleSL.addEventListener('mouseleave',function(){
    SL.style.fill='#E5E9F4'
    circleSL.style.fill='#2D3192'
    gcircleSL.style.fill='#2D3192'
    halfcircleSL.style.fill='#FF931E'
    halfsSL[1].style.fill='#FF931E'
})
//goyler
//UKraniya
let ukraniya = document.querySelector('#UA');
let circleUK=document.querySelector('circle[data-city="UA"]');
let gcircleUK=document.querySelector('g circle[data-city="UA"] ')

ukraniya.addEventListener('mouseenter',function(){
    this.style.fill="#2D3192"
    circleUK.style.fill='white'
    gcircleUK.style.fill='white'
})
ukraniya.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleUK.style.fill='#2D3192'
    gcircleUK.style.fill='#2D3192'
})
circleUK.addEventListener('mouseenter',function(){
    ukraniya.style.fill="#2D3192"
    circleUK.style.fill='white'
    gcircleUK.style.fill='white'
})
circleUK.addEventListener('mouseleave',function(){
    ukraniya.style.fill='#E5E9F4'
    circleUK.style.fill='#2D3192'
    gcircleUK.style.fill='#2D3192'
})

//bangladesh

let bangladesh = document.querySelector('#BD');
let circleBD=document.querySelector('circle[data-city="BD"]');
let gcircleBD=document.querySelector('g circle[data-city="BD"] ')

bangladesh.addEventListener('mouseenter',function(){
    this.style.fill="#2D3192"
    circleBD.style.fill='white'
    gcircleBD.style.fill='white'
})
bangladesh.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleBD.style.fill='#2D3192'
    gcircleBD.style.fill='#2D3192'
})
circleBD.addEventListener('mouseenter',function(){
    bangladesh.style.fill="#2D3192"
    circleBD.style.fill='white'
    gcircleBD.style.fill='white'
})
circleBD.addEventListener('mouseleave',function(){
    bangladesh.style.fill='#E5E9F4'
    circleBD.style.fill='#2D3192'
    gcircleBD.style.fill='#2D3192'
})

//lanka

let lanka = document.querySelector('#LK');
let circleLK=document.querySelector('circle[data-city="LK"]');
let gcricleLK=document.querySelector('g circle[data-city="LK"] ')

lanka.addEventListener('mouseenter',function(){
    this.style.fill="#2D3192"
    circleLK.style.fill='white'
    gcricleLK.style.fill='white'
})
lanka.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleLK.style.fill='#2D3192'
    gcricleLK.style.fill='#2D3192'
})
circleLK.addEventListener('mouseenter',function(){
    lanka.style.fill="#2D3192"
    circleLK.style.fill='white'
    gcricleLK.style.fill='white'
})
circleLK.addEventListener('mouseleave',function(){
    lanka.style.fill='#E5E9F4'
    circleLK.style.fill='#2D3192'
    gcricleLK.style.fill='#2D3192'
})

//tanzaniya


let tanzaniya = document.querySelector('#TZ');
let circleTZ=document.querySelector('circle[data-city="TZ"]');
let gcircleTZ=document.querySelector('g circle[data-city="TZ"] ')

tanzaniya.addEventListener('mouseenter',function(){
    this.style.fill="#2D3192"
    circleTZ.style.fill='white'
    gcircleTZ.style.fill='white'
})
tanzaniya.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleTZ.style.fill='#2D3192'
    gcircleTZ.style.fill='#2D3192'
})
circleTZ.addEventListener('mouseenter',function(){
    tanzaniya.style.fill="#2D3192"
    circleTZ.style.fill='white'
    gcircleTZ.style.fill='white'
})
circleTZ.addEventListener('mouseleave',function(){
    tanzaniya.style.fill='#E5E9F4'
    circleTZ.style.fill='#2D3192'
    gcircleTZ.style.fill='#2D3192'
})

//congo

let congo = document.querySelector('#CD');
let circleCD=document.querySelector('circle[data-city="CD"]');
let gcircleCD=document.querySelector('g circle[data-city="CD"] ')

congo.addEventListener('mouseenter',function(){
    this.style.fill="#2D3192"
    circleCD.style.fill='white'
    gcircleCD.style.fill='white'
})
congo.addEventListener('mouseleave',function(){
    this.style.fill='#E5E9F4'
    circleCD.style.fill='#2D3192'
    gcircleCD.style.fill='#2D3192'
})

circleCD.addEventListener('mouseenter',function(){
    congo.style.fill="#2D3192"
    circleCD.style.fill='white'
    gcircleCD.style.fill='white'
})
circleCD.addEventListener('mouseleave',function(){
    congo.style.fill='#E5E9F4'
    circleCD.style.fill='#2D3192'
    gcircleCD.style.fill='#2D3192'
})



function myFunction(x) {
    if (x.matches) { 
      document.body.classList.remove('loader');
    }
  }
  
  var x = window.matchMedia("(max-width: 1240px)")
  myFunction(x) 
  x.addListener(myFunction)



let BODYLOAD=document.querySelector('body')
function setTime(){
    setTimeout(function(){ BODYLOAD.classList.remove('loader'); }, 10000)
}
setTime()