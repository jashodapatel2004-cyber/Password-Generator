let passwordBox = document.getElementById("password")

let lengthSlider = document.getElementById("length")

let lengthValue = document.getElementById("lengthValue")

lengthSlider.oninput = function(){

lengthValue.innerText = this.value

}

function generatePassword(){

let length = lengthSlider.value

let upper = document.getElementById("uppercase").checked
let lower = document.getElementById("lowercase").checked
let number = document.getElementById("numbers").checked
let symbol = document.getElementById("symbols").checked

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let numberChars = "0123456789"
let symbolChars = "!@#$%^&*()_+{}[]<>?"

let allChars = ""

if(upper) allChars += upperChars
if(lower) allChars += lowerChars
if(number) allChars += numberChars
if(symbol) allChars += symbolChars

let password = ""

for(let i=0;i<length;i++){

password += allChars.charAt(Math.floor(Math.random()*allChars.length))

}

passwordBox.value = password

checkStrength(password)

}

function copyPassword(){

navigator.clipboard.writeText(passwordBox.value)

alert("Password Copied!")

}

function checkStrength(password){

let strengthText = document.getElementById("strengthText")

if(password.length < 8){

strengthText.innerText = "Weak"

}
else if(password.length < 14){

strengthText.innerText = "Medium"

}
else{

strengthText.innerText = "Strong"

}

}