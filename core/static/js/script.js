function onlynumber(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode( key );
   //var regex = /^[0-9.,]+$/;
   var regex = /^[0-9.]+$/;
   if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}
    $(document).ready(function(){
    $('.telefone').mask("(99) 99999-9999");
});


$("#cep").blur(function(){
    var cep = this.value.replace(/[^0-9]/, "");

    if(cep.length != 8){
        return false;
    }

    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    $.getJSON(url, function(dadosRetorno){
        try{
            // Preenche os campos de acordo com o retorno da pesquisa
            $("#logradouro").val(dadosRetorno.logradouro);
            $("#bairro").val(dadosRetorno.bairro);
            $("#cidade").val(dadosRetorno.localidade);
            $("#estado").val(dadosRetorno.uf);
        }catch(ex){}
    });
});

function mascara(t, mask){
     var i = t.value.length;
     var saida = mask.substring(1,0);
     var texto = mask.substring(i)
     if (texto.substring(0,1) != saida){
     t.value += texto.substring(0,1);
    }
 }
$(document).ready(function(){
		$("#cpf").mask("999.999.999-99");
	});

 /*function validaCPF(cpf)
  {
    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
          return false;
    for (i = 0; i < cpf.length - 1; i++)
          if (cpf.charAt(i) != cpf.charAt(i + 1))
                {
                digitos_iguais = 0;
                break;
                }
    if (!digitos_iguais)
          {
          numeros = cpf.substring(0,9);
          digitos = cpf.substring(9);
          soma = 0;
          for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(0))
                return false;
          numeros = cpf.substring(0,10);
          soma = 0;
          for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(1))
                return false;
          return true;
          }
    else
        return false;
  }*/
function validaCPF(cpf) {
    var Soma;
    var Resto;
    Soma = 0;
  if (cpf == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
}
/*$(document).ready(function () {
    $('#data_nascimento').mask('99/99/9999');
       return false;
    });*/

$("#toolbox-tooltip").delay(2500).queue(function(){
  $(this).addClass("show").dequeue();
  next();
});

$("#toolbox-tooltip").delay(5000).fadeOut("slow", function() {
    $(this).removeClass("show");
});


function play_options() {
  document.getElementById("play-dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('#play-button')) {
    var dropdowns = document.getElementsByClassName("play-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function toolbox_options() {
  document.getElementById("toolbox-tooltip").classList.toggle("show");
}


$(document).ready(function(){
    $( "#categories" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 800);
    });
    $( "a" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 800);
    });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 250) {
    $("#categories").addClass("scroll-check");
    $("#slideshow").addClass("slideshow-visible");
  }
  else {
    $("#categories").removeClass("scroll-check");
    $("#slideshow").removeClass("slideshow-visible");
  }

});


$('.t-box').hover(
       function(){ $('.t-box').removeClass('hover-t-box') },
       function(){ $(this).addClass('hover-t-box') }
)



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function setDivs(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex";
}


var today = new Date();
if(today.getDay() == 1) {
  $('.time-part').each(function(i) {
      if ( i === 0 ) {
         $(this).addClass('today');
      }
  });
}
if(today.getDay() == 2) {
  $('.time-part').each(function(i) {
      if ( i === 1 ) {
         $(this).addClass('today');
      }
  });
}
if(today.getDay() == 3) {
  $('.time-part').each(function(i) {
      if ( i === 2 ) {
         $(this).addClass('today');
      }
  });
}
if(today.getDay() == 4) {
  $('.time-part').each(function(i) {
      if ( i === 3 ) {
         $(this).addClass('today');
      }
  });
}
if(today.getDay() == 5) {
  $('.time-part').each(function(i) {
      if ( i === 4 ) {
         $(this).addClass('today');
      }
  });
}

var today = new Date().getHours();
if (today >= 8 && today <= 15) { //15 goes up to 15:59:59
  $(".today").addClass("available");
} else {
  $(".today").removeClass("available");
}


// FAQ


$(".open").click(function() {
  var container = $(this).parents(".topic");
  var answer = container.find(".answer");
  var trigger = container.find(".faq-t");

  answer.slideToggle(200);

  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  } else {
    trigger.addClass("faq-o");
  }

  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  } else {
    container.addClass("expanded");
  }
});

jQuery(document).ready(function($) {
  $('.question').each(function() {
    $(this).attr('data-search-term', $(this).text().toLowerCase() + $(this).find("ptag").text().toLowerCase());

  });

  $('.live-search-box').on('keyup', function() {

    var searchTerm = $(this).val().toLowerCase();

    $('.question').each(function() {

      if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
      }

    });

  });

});