const input1 = document.querySelectorAll("input")
const custom = document.querySelector(".custom")
const btn = document.querySelectorAll(".btn")
let storedItems = {}
const ta = document.querySelector(".ta")
const ta2 = document.querySelector(".ta2")
const reset = document.querySelector(".reset")
const spa = document.querySelectorAll(".spa")
let check;
let isEmpty;

input1.forEach(item => {
 item.addEventListener("keyup",checkValue)
})

function checkValue(e) {
 //console.log(parseInt(e.target.value))   
 storedItems = {...storedItems,[e.target.name]: e.target.value}
 //console.log(storedItems)
}

function checkEmpty() {
 input1.forEach((input,index) => {
 console.log(input.name)
 if (input.name !== "custom") {
 const isEmpty = !input.value || parseInt(input.value) <= 0;
 input.classList.toggle("active", isEmpty);
 //return true
 }
 
 //console.log(isEmpty)
});
}

function checkStored() {
 if ((parseInt(storedItems.text) !== 0 && parseInt(storedItems.people) !== 0) && !storedItems.length) {
    spa[1].classList.remove("show")
    console.log(storedItems)
    return true
} else {
    input1.forEach((item,index) => {
     if (item.value == 0) {
        spa[1].classList.add("show")
     } else if (item.value !== 0) {
        spa[1].classList.remove("show")
     }
  })    
 }
}

custom.addEventListener("keyup", (e) => {
 if (checkStored()) {
    checkEmpty()
    let bill = parseFloat(storedItems.text) 
    let peopleAmt = parseInt(storedItems.people) 
    let tipPercent =  parseInt(e.target.value)
    const billTotal = bill  / peopleAmt
    const tipPrice = tipPercent / 100 
    const psk = tipPrice * billTotal
    //const total = billTotal + psk
    const result = Math.round(psk * 100 - 0.5) / 100 ;
    const total =  Math.round((billTotal + psk) * 100) / 100;
    ta.innerText = result ? `$${result}` : "$00.00"
    ta2.innerText = total ? `$${total}` : "$00.00"
 }  
          
})

btn.forEach((item,e) => {
 item.addEventListener("click", (e) => {
  checkEmpty()
  console.log(storedItems)
  if (checkStored()) {
  let bill = parseFloat(storedItems.text) 
  let peopleAmt = parseInt(storedItems.people) 
  let tipPercent =  parseInt(e.target.value)
  const billTotal = bill  / peopleAmt
  const tipPrice = tipPercent / 100 
  const psk = tipPrice * billTotal
 //const total = billTotal + psk
  const result = Math.round(psk * 100 - 0.5) / 100 ;
  const total =  Math.round((billTotal + psk) * 100) / 100;
  ta.innerText = result ? `$${result}` : "$00.00"
  ta2.innerText = total ? `$${total}` : "$00.00"

  }  
 })
})        
//console.log(storedItems.custom)
function resett() {
    ta.innerText = "$00.00"
    ta2.innerText = "$00.00"
}
reset.addEventListener("click",resett)

