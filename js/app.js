document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');

  var $listForm = document.querySelector('.list-maker-form');

$('.cart').append($('<ul>'))
$('.cart ul').append($('<li>'))
var y = $('.options');
for(i=0; i < y.length; i++){
  var x = $('.cart').append($('.btn'));
  (x).onclick().append(y[i]);
}

});


console.log('this is before the dom loaded');


