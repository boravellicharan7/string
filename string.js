//Question-1:-
var a="boravelli ravipati surya";
console.log(a.slice(10,19).toUpperCase());

//Question-2:-
var b="hello";
console.log(b.toUpperCase());
console.log(b.length);

//Question-3:-
var c="ascii";
console.log(c.charAt(2));
console.log(c.toUpperCase().charCodeAt());

//Question-4:-
var d="     boravelli    "
console.log(d.trim().slice(1,5));

//Question-5:-
var e="HELLO";
var ee=" WORLD";
var eee=ee.toLowerCase();
let result=e.concat(eee);
console.log(result);

//Question-6:-
var f="   sthithapragnasakabasha";
console.log(f.trimStart().slice(1));

//Question-7:-
var g="retrograde";
console.log(g.charAt(6).toUpperCase());

//Question-8:-
var h="hello";
var hh=" world";
var hhh=hh.trim();
let results=h.concat(hh);
console.log(results);

//Question-9:-
var i="   configurable  ";
console.log(i.trim().toUpperCase().slice(1,7));

//Question-10:-
let string1="HELLO";
let string2="WORLD";
let string3=string1.toLowerCase();
let string4=string2.toLowerCase();
let res=string3.concat(string4);
console.log(res.charAt(0));
