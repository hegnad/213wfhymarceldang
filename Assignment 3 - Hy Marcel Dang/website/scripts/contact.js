// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

let mainVar = document.getElementById("contact-page");
let headVar = document.createElement("div");

console.log(mainVar);

let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {
    headVar.innerHTML = "<p>Thank you for your message!</p>";
    headVar.style.fontSize = "24px";
    headVar.style.textAlign = "center";
    headVar.style.height = "420px";
    mainVar.replaceWith(headVar);
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

