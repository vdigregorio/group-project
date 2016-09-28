document.addEventListener('DOMContentLoaded', function() {
    console.log('this is after the dom loaded');

    var $listForm = document.querySelector('.list-maker-form');
    var y = $('.options');
    $('.cart').append($('<ul>'))
    //$('.cart ul').append($('<li>'))
    for (i = 0; i < y.length; i++) {

        var x = $('.btn');
        var z = $('.cart').click($('.btn')).append(y[i]);
        $('.cart ul li').append($(z))
    }

});


console.log('this is before the dom loaded');
