// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Jarmarr Washington" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0     // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0    // Sugar Sprinkle
let total = 0 

let gbTotal = document.querySelector('#qty-gb')
let ccTotal = document.querySelector('#qty-cc')
let sugarTotal = document.querySelector('#qty-sugar')
let CookieTotal = document.querySelector('#qty-total')




// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies 
document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    total++
    gbTotal.textContent = gb
    CookieTotal.textContent = total

    // HINT: You can delete this console.log after you no longer need it!
    
    
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('add-cc').addEventListener('click', function(){
    cc++
    total++
    ccTotal.textContent = cc 
    CookieTotal.textContent = total
})
document.getElementById('add-sugar').addEventListener('click', function(){
    sugar++
    total++
    sugarTotal.textContent = sugar
    CookieTotal.textContent = total
})


document.getElementById('minus-gb').addEventListener('click', function(){
    gb--
    total--
    gbTotal.textContent = gb 
    CookieTotal.textContent = total

})
document.getElementById('minus-cc').addEventListener('click', function(){
    cc--
    total--
    ccTotal.textContent = cc
    CookieTotal.textContent = total
    
})
document.getElementById('minus-sugar').addEventListener('click', function(){
    sugar--
    total--
    sugarTotal.textContent = sugar
    CookieTotal.textContent = total
    
})



