function howdy(firstName){
    alert("Howdy" + firstName);
}

function conditional() {
    alert("Use Insepct to see the console and inspect the code")
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    } else if (currentHour < 18) {
        alert("Good day!");
    } else {
        alert("Good evening!");
    }
}


function evalNumber(){
    var inputValue = prompt("Enter any five-digit number without commas")
    if (isNaN(inputValue)|| Number(inputValue) > 99999 || !Number.isInteger(Number(inputValue)) ) {
        alert(inputValue + " This is not a valid input")
    } else if (inputValue % 2 == 0){
        alert(inputValue + " is an even number.")
    } else {
        alert(inputValue + " is an odd number.")
    }
}



function changeTitle(){
    let selectedElement = document.getElementById('programCard');
    console.log(selectedElement);
    selectedElement.innerText = "DIGS"
}

function getMins(){
    var currentMin = new Date().getMinutes();
    let selectedElement = document.getElementById('currentTime');
    selectedElement.innerText = currentMin
}

function disappear(){
    let selectedElement = document.getElementById('disappear');
    selectedElement.style.display = "none"
}
function appear(){
    let selectedElement = document.getElementById('disappear');
    selectedElement.style.display = ""
}