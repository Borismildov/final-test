"use strict"

// задача 1

var arr = [2, 5, 8, 4, 1, 12];

arr.sort(function(a, b) {
	return a > b;
});
console.log(arr);

// задача 2

var text = "The quick brown fox jumps over the lazy dog";

text.forEach(function(e){
	if(e.length > 3){
		return e;
	}
})

// задача 3

setInterval(function(){
 	var body = document.getElementsByTagName("body")[0];
	body.appendChild("<p>repetition is fun</p>");
}, 1000);

// задача 4

// задача 5


var getCookieByName = function(name) {
    var result = ['-1','-1'];
    if(name) {
        var cookieList = document.cookie.split(';');
        result = $.grep(cookieList,function(cookie) {
            cookie = cookie.split('=')[0];
            return cookie == name;
        });
    }
    return result;
};
