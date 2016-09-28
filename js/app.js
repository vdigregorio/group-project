document.addEventListener('DOMContentLoaded', function() {
    console.log('this is after the dom loaded');

    var $listForm = document.querySelector('.list-maker-form');
    var y = $('.options');
    $('.cart').append($('<ul>'))
    //$('.cart ul').append($('<li>'))
    for (i = 0; i < y.length; i++) {
        $('.form').append($(y))
        var x = $('.btn');
        var z = $('.form').click($('.btn2')).append(y[i]);
       // $('.cart ul li').append($(z))
    }
    console.log(window.location.search.charAt(1))

});


console.log('this is before the dom loaded');
