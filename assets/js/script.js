var color = $('.rectangle').css('background-color');
// pour le button 3

$(function(){
  $('#button1').click(function(){
    var px;
// je crée une variable
    px= $('.rectangle').height();
// ma variable appel la taille du rectangle
if(px == 100){
// si px est égale à 100
  $('.rectangle').css('height','10px')
// la taille du rectangle sera de 10px
}
else{
// sinon
  px += 10;
// px augmente de 10
  $('.rectangle').css('height',px);
}
  });

  $('#button2').click(function(){
    $('.rectangle').css('background-color','green')
  });
  $('#button3').click(function(){
    $('.rectangle').css('background-color',color)
  // j'appel ma variable color donc pas d'entres quotes
  });
  $('#button4').click(function(){
    $('.rectangle').hide()
  });
  $('#button5').click(function(){
    $('.rectangle').show()
  });
});
