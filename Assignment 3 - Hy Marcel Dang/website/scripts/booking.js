/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = document.getElementById("calculated-cost");

let daySelected = document.querySelectorAll(".day-selector li");

let clearDayButton = document.getElementById("clear-button");
let halfDayButton = document.getElementById("half");
let fullDayButton = document.getElementById("full");

let dayBool = "full";

var numSelected = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (let i = 0; i < daySelected.length; i++) {
    daySelected[i].addEventListener("click", function(event) {
        event.target.style.backgroundColor = "#E5AF42";
        numSelected++;

        if (dayBool == "full") {
            costPerDay.innerHTML = 35 * numSelected;
        } else {
            costPerDay.innerHTML = 20 * numSelected;
        }

    });
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

for (let i = 0; i < daySelected.length; i++) {
    clearDayButton.addEventListener("click", function() {
        daySelected[i].style.backgroundColor = "";
        numSelected = 0;

        if (dayBool == "full") {
            costPerDay.innerHTML = 35 * numSelected;
        } else {
            costPerDay.innerHTML = 20 * numSelected;
        }

    });
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", function() {
    halfDayButton.style.backgroundColor = "#E5AF42";
    fullDayButton.classList.remove("clicked");
    fullDayButton.style.backgroundColor = "";
    costPerDay.innerHTML = 20 * numSelected;
    dayBool = "half";
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", function() {
    fullDayButton.style.backgroundColor = "#E5AF42";
    halfDayButton.classList.remove("clicked");
    halfDayButton.style.backgroundColor = "";
    costPerDay.innerHTML = 35 * numSelected;
    dayBool = "full";
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


