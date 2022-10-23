const navIcon=document.querySelector('.fa-bars');
const toggleIcon=document.querySelector('.toggle-icon');
const cancelled=document.querySelector('.fa-sharp');
let clicked=true;
const toggleNavbar=function(){
    if(clicked){

        document.querySelector('.nav-lists').classList.add('dropdown');
    document.querySelector('.fa-sharp').classList.remove('x-mark');
    document.querySelector('.fa-bars').classList.add('bars');

        clicked=false;
    }
    else{

        document.querySelector('.nav-lists').classList.remove('dropdown');
    
    clicked=true;
    }
};
navIcon.addEventListener('click',toggleNavbar);
const cancel=function(){
    if(!clicked){
        document.querySelector('.nav-lists').classList.remove('dropdown');

        document.querySelector('.fa-bars').classList.remove('bars');
        document.querySelector('.fa-sharp').classList.add('x-mark');

    }
}
cancelled.addEventListener('click',cancel);