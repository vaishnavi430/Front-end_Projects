// Get references to the HTML elements
const btn1 = document.getElementById("btn1"); // Decrease button
const btn2 = document.getElementById("btn2"); // Reset button
const btn3 = document.getElementById("btn3"); // Increase button
const countlabel = document.getElementById("countlabel"); // Label displaying the count

// Initialize the counter variable
let count = 0;

// Event listener for the Increase button
btn3.onclick = function() {
    count++; // Increment the count
    countlabel.textContent = count; // Update the label text
}

// Event listener for the Decrease button
btn1.onclick = function() {
    count--; // Decrement the count
    countlabel.textContent = count; // Update the label text
}

// Event listener for the Reset button
btn2.onclick = function() {
    count = 0; // Reset the count to zero
    countlabel.textContent = count; // Update the label text
}