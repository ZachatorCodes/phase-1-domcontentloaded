document.addEventListener("DOMContentLoaded", function() { // Creates a new event listener on the document that waits until DOM content loads, then executes the function call.
    const text = document.querySelector("#text"); // Uses a query selector to find the node with the id "text" and assigns it to a variable named "text".
    text.textContent = "This is really cool!"; // Changes the text content of the variable to "This is really cool!".
});