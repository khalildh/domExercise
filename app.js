// change the color of the body element to #6f84a5
// use document.body
document.body.style.background = "#6F84A5";


// change the display property of the <a> elements to be block
// use document.getElementsByTagName()

aTags = document.getElementsByTagName("a");
for (i = 0; i < aTags.length; i++) {
	aTags[i].style.display = "block";
}

// change the font size of the first paragraph to be 20px
// use document.getElementById()
document.getElementById("p1").style.fontSize = "20px";

// change the color of the elements with class "sam" to rgb(24, 84, 69)
// use document.getElementsByClassName()
samClass = document.getElementsByClassName("sam");
for (var i = samClass.length - 1; i >= 0; i--) {
	samClass[i].style.color = "rgb(24, 84, 69)";
}

// change the color of the elements with class "angel" to rgb(77, 24, 84)
// use document.querySelectorAll()
angelClass = document.getElementsByClassName("angel");
for (var i = angelClass.length - 1; i >= 0; i--) {
	angelClass[i].style.color = "rgb(77, 24, 84)";
}


// change the font size of the fourth paragraph to be 20px
// use document.querySelector()
document.querySelector("#p4").style.fontSize = "20px";


// center all the paragraphs
para = document.getElementsByTagName("p");
for (var i = para.length - 1; i >= 0; i--) {
	para[i].style.textAlign = "center";
}

// bonus: select the first paragraph using each of the five different
// methods

var par1 = document.getElementById("p1");
var par1 = document.getElementsByClassName("angel");
var par1 = document.getElementsByTagName("p");
var par1 = document.querySelector("p");
var par1 = document.querySelectorAll("p")[0];