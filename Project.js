let id_4 = false;
var tabNavs = document.querySelectorAll(".Button_of_menu");
var tabPanes = document.querySelectorAll(".Content_of_menu");
var Line = document.querySelector("#JS_line");
function remover(){
  Line.classList.remove("Line_m_2");
  Line.classList.remove("Line_m_3");
  Line.classList.remove("Line_m_4");
}
for (var i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");
    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");
      if (activeTabAttr === contentAttr) {
        if (j == 0){
          remover();
          id_4 = false;
        }
        else if (j == 1){
          remover();
          Line.classList.add("Line_m_2");
          id_4 = false;
        }
        else if (j == 2){
          remover();
          Line.classList.add("Line_m_3");
          id_4 = true;
        }else{
          remover();
          Line.classList.add("Line_m_4");
          id_4 = false;
        }
        tabPanes[j].classList.add("active"); 
      } else {
        tabPanes[j].classList.remove("active");
      }
    };
  });
}
let Burger_menu = [document.querySelector('.Black_block'), document.querySelector('.Main_burger_menu'), document.querySelector('.Info_of_b_menu')];
let body = document.querySelector('body');
let function_of_burger = document.querySelectorAll('.Info_of_b_menu a');
Burger_menu[1].addEventListener("click", Burger);
Burger_menu[0].addEventListener("click", Burger);
function Burger(){
  Burger_menu[0].classList.toggle('BB_block');
  Burger_menu[1].classList.toggle('M_B_M');
  Burger_menu[2].classList.toggle('I_o_b_m_mod');
  body.classList.toggle('body_scroll');
}

for (p in function_of_burger){
  function_of_burger[p].onclick = function(){
    Burger();
  }
}

let Button_f = document.querySelector('#Form_button');
Form_info = {};
Button_f.onclick = function(){
  let form = document.forms[0];
  if (form.elements.Form_input[0].value.length > 0 && form.elements.Form_input[1].value.length > 0 && form.elements.Form_input[2].value.length > 0 && form.elements.Form_input[1].value.split('').includes('@')){
    Form_info[form.elements.Form_input[0].value] = {[form.elements.Form_input[1].value]: `${form.elements.Form_input[2].value}`};
    alert('Sucess');
  }else{
    alert('Error');
  }
  console.log(Form_info);
}

let Modal = [document.querySelector('.Modal_block'), document.querySelector('.Block_of_modal_block'), document.querySelector('.Main_block_1 button'), document.querySelector('.Cancel_Of_Modal'), document.querySelector('.Modal_block p')];
let Link_of_modal = document.querySelectorAll('.Text_block_6 a');
Modal[2].addEventListener("click", Modal_block_window);
function Modal_block_window(){
  Modal[1].classList.toggle('B_O_M_B');
  Modal[0].classList.toggle('M_B');
  body.classList.toggle('body_scroll');
  Modal[4].innerHTML = 'Hello! Lets make something Greate';
}

Modal[3].addEventListener("click", function(){
  Modal[1].classList.toggle('B_O_M_B');
  Modal[0].classList.toggle('M_B');
  body.classList.toggle('body_scroll');
});

let Texts_of_modal_window = {0: '1', 1: '2', 2: '3', 3: '4', 4: '5', 5: '6'};
for (c in Link_of_modal){
  let Element_of_text = Texts_of_modal_window[c];
  Link_of_modal[c].onclick = function(){
    Modal_block_window();
    Modal[4].innerHTML = Element_of_text;
  }
}

let Text_A = document.querySelector('.Dynamic_text');
let id = null;
clearInterval(id);
id = setInterval(Animation_2, 200);
function Animation_2(){
  if(Text_A.innerHTML.length == 3){
    clearInterval(id);
    id = setInterval(Animation_2_1, 200);
  }else{
    Text_A.innerHTML += '.';
  }
}
function Animation_2_1(){
  if(Text_A.innerHTML.length == 0){
    clearInterval(id);
    id = setInterval(Animation_2, 200);
  }else{
    Text_A.innerHTML = Text_A.innerHTML.slice(0, -1);
  }
}
let electrick_watch = document.querySelectorAll('.Electrick_watch span');
let Minutes = 0;
let id_1 = null;
clearInterval(id_1);
id_1 = setInterval(Watch, 1000);
function Watch(){
  if (Minutes != 1439){
    Minutes++;
    if(Math.floor(Minutes/60) > 9){
      electrick_watch[0].innerHTML = Math.floor(Minutes/60);
    }else{
      electrick_watch[0].innerHTML = `0${Math.floor(Minutes/60)}`;
    }
    if(Minutes - 60 * Math.floor(Minutes/60) > 9){
      electrick_watch[1].innerHTML = Minutes - 60 * Math.floor(Minutes/60);
    }else{
      electrick_watch[1].innerHTML = `0${Minutes - 60 * Math.floor(Minutes/60)}`;
    }
  }else{
    Minutes = 0;
  }
}
let LOM = document.querySelector(".minutes");
let LOS = document.querySelector(".seconds");
let Minutes_2 = 0;
let id_2 = null;
clearInterval(id_2);
id_2 = setInterval(Clock, 1000);
function Clock(){
  Minutes_2+=6;
  LOS.style.transform = `rotate(${Minutes_2}deg)`;
  if (Minutes_2 == 360){
    Minutes_2 = 0;
    LOS.style.transform = `rotate(${Minutes_2}deg)`;
    LOM.style.transform += `rotate(${30}deg)`;
  }
}
let DVD_border = document.querySelector('.DVD_border');
let DVD_object = document.querySelector('.DVD_object');
let id_3 = null;
let xPOS = 0;
let xSpeed = 1;
let ySpeed = 1;
let yPOS = 0;
clearInterval(id_3);
id_3 = setInterval(DVD, 10);
function DVD(){
  if(id_4 == true){
    if(xPOS + DVD_object.clientWidth == DVD_border.clientWidth){
      xSpeed = -xSpeed;
      DVD_object.style.background = colors();
    }
    if(yPOS + DVD_object.clientHeight == DVD_border.clientHeight){
      ySpeed = -ySpeed;
      DVD_object.style.background = colors();
    }
    if(xPOS == 0){
      xSpeed = Math.abs(xSpeed);
      DVD_object.style.background = colors();
    }
    if(yPOS == 0){
      ySpeed = Math.abs(ySpeed);
      DVD_object.style.background = colors();
    }
    xPOS += xSpeed;
    yPOS += ySpeed;
    DVD_object.style.left = xPOS + 'px';
    DVD_object.style.top = yPOS + 'px';
  }
}
function colors(){
  return `#${Math.random().toString(16).slice(2,8).toUpperCase()}`
}