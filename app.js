'use strict';

//add event handler to change absolute positioning on and off.

var changeText = function(){
  var p = document.querySelector('p');
  p.textContent = 'I changed the text yay';
};

//create an event listener and attach to button;

var button = document.querySelector('button');
button.addEventListener('click', function(){
  var p = document.querySelector('.absolute');
  console.log(p);
  // p.textContent = 'I was change by an anonymous function.'
  p.setAttribute("class", "notabsolute");
});
