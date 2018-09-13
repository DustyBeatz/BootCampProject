/*global $, jQuery, alert*/
  'use strict';



    var navMenu = document.getElementById('#main_nav');
    var button = document.getElementById('#button');

    button.onclick = function(displayNav){

    };

button.addEventListener("click", displayNav, false);




    var dropdowns = document.getElementsByClassName('.nav-menu')
    var i;
    for (i = 0; i < dropdowns.length; i++){
      var openDropdown = dropdowns[i];
      if
    (openDropdown.classList.contains('show'))
    {
      openDropdown.classList.remove('show');
    }
    }
