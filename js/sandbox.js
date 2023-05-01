
let inputArray = [3, 1, 4, 1, 5, 8, 3, 7, 2, 3, 5];

function sampleArray(array){
    let sortedArray = array.sort(function(a, b){return a - b});
    alert(sortedArray)
    console.log(sortedArray);
}

function parseArray() {
    var value1 = document.getElementById('val1').value;
    var value2 = document.getElementById('val2').value;
    var value3 = document.getElementById('val3').value;
    var value4 = document.getElementById('val4').value;
    var arrayList = [value1, value2, value3, value4];
    var arrayListSorted = arrayList.sort();
    var selectedElement = document.getElementById("arraySorted");
    selectedElement.innerHTML = arrayListSorted;
  }


function parentFunction(){
    let a = 1;
    function childFunction(){
        var b = a + 2;
        return b;
    }
    return childFunction();
}

function addElements(){
    var valueArray = ["first", "second", "third"];
    for (i in valueArray){
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'row');
        newDiv.setAttribute('id', 'div '+i);
        document.getElementById('addElements').appendChild(newDiv);
        newDiv.innerText = valueArray[i];        
    }
}