function wikiAPI(){
    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

    //API call
    connect.open('GET', url);

    // Define actions
    connect.onload = function(){
        var wikiObject = JSON.parse(this.response);
        console.log(wikiObject);
        console.log(wikiObject.query.pages);
        var pages = wikiObject.query.pages;
        for (var i in pages) {
            var newDiv = document.createElement('div')
            var newhref = document.createElement('a')
            newhref.setAttribute('href', 'https://en.wikipedia.org/?curid='+ pages[i].pageid);
            newDiv.setAttribute('class', 'row h4');
            newDiv.setAttribute('id', 'div'+ i);
            document.getElementById('wiki').appendChild(newDiv);
            document.getElementById('div'+i).appendChild(newhref);
            newhref.innerText = pages[i].title;
        }
    }

    //send the api request to the server
    connect.send();

    // superchallenge

}