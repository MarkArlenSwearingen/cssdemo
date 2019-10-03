'use strict';

//Create event listener to change absolute positioning on and off.

var button = document.querySelector('button');
button.addEventListener('click', function(){
  var p = document.querySelector('.absolute');
  p.setAttribute('class', 'notabsolute');
});
