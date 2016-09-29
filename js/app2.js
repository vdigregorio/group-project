console.log('app2.js is connected!')
// var searchUrl = window.location.search.substring(1);
// var split = [];
// split = searchUrl.split("&");
// var obj = {};
// for (i = 0; i < split.length; i++) {
//   var arr = [];
//   arr = split[i].split("=");
//   var key = arr[0];
//   var value = arr[1];
//   obj[key] = value;
// }

// }


// var select = key;
// if (obj[select] === value1) {
//   $('.cart').appendTo('NEW')
// } else if (obj[select] === value2) {
//   $('.cart').appendTo('USED')
// } else if (obj[select] === value3) {
//   $('.cart').appendTo('NO SELECTION')

$(document).ready(function() {
 var searchUrl = window.location.search.substring(1);
var split = [];
split = searchUrl.split("&");
var obj = {};

for (i = 0; i < split.length; i++) {
 var arr = [];
 arr = split[i].split("=");
 var key = arr[0];
 var value = arr[1];
 // obj[key] = value;

 // if ( value == "value" || value == "value" || value == "value" || value == "value") {
 //   $(this).remove();
 // }

   var p1 = $('<p>');
   var p2 = $('<p>');
   p1.text(key);
   p2.text(value);
   $('.cart').append(p1);
   $('.cart').append(p2);
   var input = $('<input>');
   $('form').append(x);
   $('form').append(y);
   var x = $('input');
   var y = $('input');
   x.attr("value", p1);
   y.attr("value", p2);
   // x.hide("type");
   // y.hide("tyle");
   // x.attr("type", hidden);
   // y.attr("type", hidden);
}

})


