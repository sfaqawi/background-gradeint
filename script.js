var color1= document.getElementById("color1");
var color2= document.getElementById("color2");
var body= document.querySelector("body");
var h3= document.querySelector("p");

function setColors(){
	body.style.background="linear-gradient(to right,"+ color1.value+" , "+ color2.value+")";
	h3.innerHTML="linear-gradient(to right,"+ color1.value+" ,"+ color2.value+")";
}


color1.addEventListener("input", setColors);

color2.addEventListener("input", setColors);



	
