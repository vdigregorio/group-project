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
// }
$(document).ready(function(){
// function getUrlVariables(url){
//   var variables = [] , hash;
//   var hashes = url.slice(url.indexof('?')+1).split('&');

// for (var i=0; i < hashes.length; i++){
//   hash = hashes[i].split('=');
//   variables.push(hash[0]);
//   variables[hash[0]] = hash[1];
// }

// return variables;
// }
// $('#personal').append($(this.variables));
console.log(this.vars);
$(function() {
    function getUrlVars() {
        var vars = [], hash;
        console.log(window.query)
        var hashes = window.query.slice(window.query.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[i];
        }
        return vars;
    }
    $('.btn2').click(function() {
        var value = $(this).attr("value");
        var test = getUrlVars(value)["name"];
        alert(test);
    });

    getUrlVars()
});

})



