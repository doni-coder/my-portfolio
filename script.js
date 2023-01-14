//============== preloader animation ==============//
let preloader = document.getElementById('preloader');
window.addEventListener('load', function(){
    preloader.style.display = 'none';
}); // ----------- preloader End ------------- //

//============home page animations==============//
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');

let menuId = document.getElementById('menuId');
let menu = document.getElementById('menu');

menu.addEventListener('click',function(){
    menuId.classList.add('openmenu');

    if(box2.style.display != 'none'){
        box2.style.display = 'none';
        box3.style.rotate = '50deg';
        box1.style.rotate = '-50deg';
        box3.style.transform = 'translateX(-20%)';
        box1.style.transform = 'translateX(-20%)';
    }else{
        box2.style.display = 'block';
        box3.style.rotate = '0deg';
        box1.style.rotate = '0deg';
        box3.style.transform = 'translateX(0px)';
        box1.style.transform = 'translateX(0px)';
        menuId.classList.remove('openmenu');
    }
}); //----------------- home page animation End -----------------//

//----------------- tab content ---------------------------//

let skills = document.getElementById('skills');
let expe = document.getElementById('expe');
let edu = document.getElementById('edu');

let tabcontent = document.getElementsByClassName('tabcontent');

expe.style.backgroundColor = 'white';
expe.style.color = 'black';

edu.style.backgroundColor = 'white';
edu.style.color = 'black';

tabcontent[0].style.display = 'block';

function Skills(){

    tabcontent[0].style.display = 'block';
    tabcontent[1].style.display = 'none';
    tabcontent[2].style.display = 'none';

    expe.style.backgroundColor = 'white';
    expe.style.color = 'black';

    edu.style.backgroundColor = 'white';
    edu.style.color = 'black';

    skills.style.backgroundColor = '#0f23ff';
    skills.style.color = 'white'
};

function Experience(){
    tabcontent[0].style.display = 'none';
    tabcontent[1].style.display = 'block';
    tabcontent[2].style.display = 'none';

    expe.style.backgroundColor = '#0f23ff';
    expe.style.color = 'white';

    edu.style.backgroundColor = 'white';
    edu.style.color = 'black';

    skills.style.backgroundColor = 'white';
    skills.style.color = 'black'
};

function Education(){
    tabcontent[0].style.display = 'none';
    tabcontent[1].style.display = 'none';
    tabcontent[2].style.display = 'block';

    skills.style.backgroundColor = 'white';
    skills.style.color = 'black'

    expe.style.backgroundColor = 'white';
    expe.style.color = 'black';

    edu.style.backgroundColor = '#0f23ff';
    edu.style.color = 'white';

};  //----------------- tab content End ---------------------------//



//--------------------- scroller up --------------------------//
  let scroller = document.getElementById('scroller');
  window.addEventListener('scroll',function(){
      if(window.pageYOffset >= 200){
        scroller.style.display = 'block' ;
      }else{
        scroller.style.display = 'none' ;
      }
  })



// ----------------------  contact form --------------------- //

// let namee = document.getElementById('name');
// let number = document.getElementById('number');

function sentmsg(){
        alert('please enter ur name');
};

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzrT0ga7mw8zGTqDZfld4xCMj9gZameGFEjPsB1Zyal3smwuIbGkRLgiLnfLeFkcm4kzQ/exec'
  const form = document.forms['submit-to-google-sheet'];

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))});



