function addElenments(){
    var valueArray = ["first", "second", "third"];
    for (i in valueArray){
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'row');
        newDiv.setAttribute('id', 'div '+i);
        document.getElementById('addElements').appendChild(newDiv);
        newDiv.innerText = valueArray[i];        
    }
}