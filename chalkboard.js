function welcome(){
    var firstName = prompt("Enter your First Name")
    var lastName = prompt("Enter your Last Name")
    alert("Welcome! " + firstName + " " + lastName)
}

function evalNumber(){
    var inputValue = prompt("Enter any five-digit number without commas")
    if (isNaN(inputValue)|| Number(inputValue) > 99999 || !Number.isInteger(Number(inputValue)) ) {
        alert("Please enter the number that within 5 digits.")
    } else if (inputValue % 2 == 0){
        alert(inputValue + " is an even number.")
    } else {
        alert(inputValue + " is an odd number.")
    }
}

function graduate(){
    var year = prompt("Enter your intended graduate year in four digit:")
    var month = prompt("Enter you intended graduate month in two digit:")
    if (year == 2023 && month == 06){
        alert("Congradulations!")
    } else if(year == 2023  && month > 06){
        alert("Congradulations on your upcoming graduation!")
    } else if(year > 2023){
        alert("You're almost there!")
    } else{
        alert("Well done on completed your studies and graduation!")
    }
}

