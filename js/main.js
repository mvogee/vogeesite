

const myHeading = document.querySelector('h1');

myHeading.textContent = "Hello World";

let iceCream = 'vanilla';
let yah = true;
console.log(1 === yah);
console.log(0 === yah);
console.log(null == yah);
/*if (iceCream === "vanilla") {
	alert(1 === yah);
}
else {
	alert("vanilla nah")
}
*/
function myTestFunc(num1, num2) {
	let product = num1 * num2;
	return product;
}

function clickMyFace() {
	alert('you click my face.... why?');
}

console.log(myTestFunc(2,2));


let myImage = document.getElementById('chickenme');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	let partymode = document.getElementById('partymode');
	if (mySrc === "../img/chickenme.jpg") {
		myImage.setAttribute('src', '../img/chickenme2.jpg');
		partymode.style.display = "block";
	}
	else {
		myImage.setAttribute('src','../img/chickenme.jpg');
		partymode.style.display = "none";
	}
}

let myButton = document.getElementById('changeUserButton');
let myTitle = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name');

	if (!myName || myName === null) {
		setUserName();
	}
	else {
		localStorage.setItem('name', myName);
		myTitle.textContent = "welcome " + myName;
	}
}

function checkforName() {
	let storedUserName = localStorage.getItem('name');
	if (!storedUserName) {
		setUserName();
	}
	else {
		myTitle.textContent = "Welcome back " + storedUserName;
	}
}

myButton.onclick = function () {
	console.log("button was pressed");
	setUserName();
}

checkforName();
