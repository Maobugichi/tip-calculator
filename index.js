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
      if (!storedItems[item.name] && item.name !== "custom") {
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


function resett() {
   ta.innerText = "$00.00"
   ta2.innerText = "$00.00"
}
reset.addEventListener("click",resett)

