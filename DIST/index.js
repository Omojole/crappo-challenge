const navIcon=document.querySelector('.fa-bars');
const toggleIcon=document.querySelector('.toggle-icon');
let clicked=true;
const toggleNavbar=function(){
    if(clicked){

        document.querySelector('.nav-lists').classList.add('dropdown');
    
        clicked=false;
    }
    else{

        document.querySelector('.nav-lists').classList.remove('dropdown');
    
    clicked=true;
    }
};
navIcon.addEventListener('click',toggleNavbar)