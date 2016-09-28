var seachUrl = window.location.search.substring(1);
var split = [];
split = searchUrl.split("&");
var obj = {};
for (i = 0; i < split.length; i++) {
  var arr = [];
  arr = split[i].split("=");
  var key = arr[0];
  var value = arr[1];
  obj[key] = value;
}
var select = key;
if (obj[select] === value1) {
  $('.cart').append('NEW')
} else if (obj[select] === value2) {
  $('.cart').append('USED')
} else if (obj[select] === value3) {
  $('.cart').append('NO SELECTION')
}
