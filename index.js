var para = document.querySelector(".para")
var input = document.querySelector(".input")
var btn = document.querySelector(".btn")
var day = new Date().getDay()

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]



btn.addEventListener("click",weekend)

function weekend(){
    para.innerHTML = "Hallo " + input.value + "."+ "Today is " + days[day]+ "!." + " only " + (5 - day) + " Day to the Weekend"
    btn.style.display = "none"
    input.style.display = "none"
}