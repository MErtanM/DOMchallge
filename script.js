// getEleemntById

let  fName = document.getElementById("first-name") //daha hizli cagiriyor
let lastName = document.getElementById("last-name") // hepsini cagirip icinden seciyor
console.log(fName)
console.log(lastName)


// getElementsByClassName

let formControl = document.getElementsByClassName("form-control")  // [0],[1]
console.log(formControl)



//getElementByTageName

let input = document.getElementsByTagName("input")[3]
console.log(input)


//querySelector

let firstName = document.querySelector("#first-name")
console.log(firstName)

let div = document.querySelector("div")
console.log(div)

let fControl =document.querySelector(".form-control")
console.log(fControl)

let fControlAll = document.querySelectorAll(".form-control")
console.log(fControlAll)
console.log(fControlAll[1])