const input1 = document.querySelectorAll("input")
const custom = document.querySelector(".custom")
const btn = document.querySelectorAll(".btn")
let storedItems = {}
const ta = document.querySelector(".ta")
const ta2 = document.querySelector(".ta2")
const reset = document.querySelector(".reset")
const spa = document.querySelector(".spa")
let check;
let isEmpty;
let prev = null
let bill;
let numberOfPeople

input1.forEach(item => {
  item.addEventListener("keyup", getInputValue)
})


function getInputValue(e) {
 const {name,value} = e.target
 storedItems = {...storedItems,[name]: value}
 const {text,people,custom} = storedItems;
 if (text && people && custom && custom !== "0") {
   if (!storedItems.text || !storedItems.people || !Object.keys(storedItems).length ) {
      input1.forEach(item => {
      if (!storedItems[item.name]) {
         item.classList.add("active");
      } else if (storedItems[item.name]) {
         if (prev) {
            prev.classList.add("active")
            }
         item.classList.remove("active")
         prev = item
      }
      })
   } else {
       input1.forEach(item => {
       item.classList.remove("active")
       spa.classList.remove("show")
       if (storedItems[item.name] == 0) {
          item.classList.add("active")
          spa.classList.add("show")
       } 
       bill = parseFloat(text)
       numberOfPeople = parseInt(people)
   if (bill !== 0 && numberOfPeople !== 0) {
        const value = custom
         const amountPaid = bill / numberOfPeople
         const tipPercent = parseInt(value) / 100
         const res = tipPercent * amountPaid
         const tipPrice = Math.round((res * 100 - 0.5)) / 100
         const total =    Math.round((tipPrice + amountPaid) * 100) / 100;
         ta.innerText = tipPrice ? `$${tipPrice}` : "$00.00"
         ta2.innerText = total ? `$${total}` : "$00.00"      
      }
         
    
      })
      
   }
 } else {
   ta.innerText =  "$00.00"
   ta2.innerText =  "$00.00"     
 }
}

btn.forEach((item) => {
item.addEventListener("click", getStoredItems) })
function getStoredItems(e) {
   if (!storedItems.text || !storedItems.people || !Object.keys(storedItems).length ) {
      input1.forEach(item => {
      if (!storedItems[item.name]) {
         item.classList.add("active");
      } else if (storedItems[item.name]) {
         if (prev) {
            prev.classList.add("active")
            }
         item.classList.remove("active")
         prev = item
      }
      })
   } else {
       input1.forEach(item => {
       item.classList.remove("active")
       spa.classList.remove("show")
       if (storedItems[item.name] == 0) {
          item.classList.add("active")
          spa.classList.add("show")
       } 
       const {text,people} = storedItems;
       bill = parseFloat(text)
       numberOfPeople = parseInt(people)
       console.log(bill)
       console.log(numberOfPeople)
       if (bill !== 0 && numberOfPeople !== 0) {
           const {value} = e.target
           const amountPaid = bill / numberOfPeople
           const tipPercent = parseInt(value) / 100
           const res = tipPercent * amountPaid
           const tipPrice = Math.round((res * 100 - 0.5)) / 100
           const total =    Math.round((tipPrice + amountPaid) * 100) / 100;
           ta.innerText = tipPrice ? `$${tipPrice}` : "$00.00"
           ta2.innerText = total ? `$${total}` : "$00.00"      
        }
          
         })
      
   }
   
   
   
}



/*input1.forEach(item => {
 item.addEventListener("keyup",checkValue)
 //console.log(item)
})

function checkValue(e) {
 storedItems = {...storedItems,[e.target.name]: e.target.value}
}

function checkEmpty() {
 input1.forEach((input,index) => {
 //console.log(input.name)
 if (input.name !== "custom") {
 const isEmpty = !input.value || parseInt(input.value) <= 0;
 input.classList.toggle("active", isEmpty);
 }
 
 //console.log(isEmpty)
});
}

function checkStored() {
 console.log(storedItems)
 if (!storedItems.length) {
   console.log("spa")
    spa[1].classList.remove("show")
    spa[0].classList.remove("show")
    //console.log(storedItems)
    return true
} else {
    input1.forEach((item,index) => {
      console.log(item.name)
     if (item.value == 0) {
      console.log(spa)
        spa[1].classList.add("show")
        spa[0].classList.add("show")
     } else if (item.value !== 0) {
        spa[1].classList.remove("show")
        spa[0].classList.remove("show")
     }
  })    
 }
}

custom.addEventListener("keyup", (e) => {
 if (checkStored()) {
    checkEmpty()
  
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
reset.addEventListener("click",resett)*/

