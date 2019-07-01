
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$('.slider').slider({
    	indicators: false,
    	interval: 3000,
    	duration: 2000
    });
    $('.tabs').tabs({
    	duration: 3000
    });
     $('.collapsible').collapsible();
     $('input.autocomplete').autocomplete({
      data: {
        "Diseño Web": null,
        "Redes de Datos": null,
      }
      
    });

$('.carousel.carousel-slider').carousel({
    fullWidth: true
  })
