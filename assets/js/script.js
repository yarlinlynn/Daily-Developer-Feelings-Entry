// DECLARE EMOTION BUTTONS IN NEW-ENTRY.HTML

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');

// HOEVER STATES FOR EMOTIONS BUTTONS
btn1.addEventListener("mouseover", function() {
  document.querySelector('body').style.backgroundColor = '#acc794';
});
btn1.addEventListener("mouseleave", function() {
  if (!btn1.classList.contains("selected")) {
    document.body.style.backgroundColor = 'rgb(168, 155, 209)';
  }
});
btn1.addEventListener("click", function() {
  btn1.classList.toggle("selected");

  if (btn1.classList.contains("selected")) {
    document.body.style.backgroundColor = '#acc794';
  } else {
    document.body.style.backgroundColor = 'rgb(168, 155, 209)';
  }
});

btn2.addEventListener("mouseover", function() {
  document.querySelector('body').style.backgroundColor = '#ffb3c8';
});
btn2.addEventListener("mouseleave", function() {
  if(!btn2.classList.contains("selected")) {
    document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});
btn2.addEventListener("click", function() {
  btn2.classList.toggle("selected");

  if(btn2.classList.contains("selected")) {
    document.body.style.backgroundColor = '#ffb3c8';
  } else {
    document.body.style.backgroundColor = 'rgb(168, 155, 209)';
  }
});

btn3.addEventListener("mouseover", function() {
  document.querySelector('body').style.backgroundColor = '#75e4ff';
});
btn3.addEventListener("mouseleave", function() {
  if(!btn3.classList.contains("selected")) {
    document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});
btn3.addEventListener("click", function(){
  btn3.classList.toggle("selected");

  if(btn3.classList.contains("selected")) {
    document.querySelector('body').style.backgroundColor = '#75e4ff';
  } else {
    document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});

btn4.addEventListener("mouseover", function() {
  document.querySelector('body').style.backgroundColor = '#ffce3f';
});
btn4.addEventListener("mouseleave", function() {
  if(!btn4.classList.contains("selected")) {
  document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});
btn4.addEventListener("click", function() {
  btn4.classList.toggle("selected");

  if(btn4.classList.contains("selected")) {
    document.querySelector('body').style.backgroundColor = '#ffce3f';
  } else {
    document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});

btn5.addEventListener("mouseover", function() {
  document.querySelector('body').style.backgroundColor = '#83da79';
});
btn5.addEventListener("mouseleave", function() {
  if(!btn5.classList.contains(selected)) {
    document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});
btn5.addEventListener("click", function() {
  btn5.classList.toggle("selected");

  if(btn5.classList.contains("selected")) {
    document.querySelector('body').style.backgroundColor = '#83da79';
  } else {
    document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});

btn6.addEventListener("mouseover", function() {
  document.querySelector('body').style.backgroundColor = '#e88015';
});
btn6.addEventListener("mouseleave", function() {
  if(!btn6.classList.contains("selected")) {
  document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});
btn6.addEventListener("click", function() {
  btn6.classList.toggle("selected");

  if(btn6.classList.contains("selected")) {
    document.querySelector('body').style.backgroundColor = '#e88015';
  } else {
    document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});

btn7.addEventListener("mouseover", function() {
  document.querySelector('body').style.backgroundColor = '#7897d4';
});
btn7.addEventListener("mouseleave", function() {
  if(!btn7.classList.contains("selected")) {
  document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});
btn7.addEventListener("click", function() {
  btn7.classList.toggle("selected");

  if(btn7.classList.contains("selected")) {
    document.querySelector('body').style.backgroundColor = '#7897d4';
  } else {
    document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});

btn8.addEventListener("mouseover", function() {
  document.querySelector('body').style.backgroundColor = '#a4b4d4';
});
btn8.addEventListener("mouseleave", function() {
  if(!btn8.classList.contains("selected")) {
  document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});
btn8.addEventListener("click", function() {
  btn8.classList.toggle("selected");

  if(btn8.classList.contains("selected")) {
    document.querySelector('body').style.backgroundColor = '#a4b4d4';
  } else {
    document.querySelector('body').style.backgroundColor = 'rgb(168, 155, 209)';
  }
});

// NOTE FOR LATER ONCE I GET TO IT USE ARROW FUNCTIONS
