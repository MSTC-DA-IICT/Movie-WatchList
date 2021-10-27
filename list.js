// Take an empty array to store movie names
var movieList = [];
var movieDesc = [];
// On pressing enter Add button will be triggered
var input = document.getElementById('text1');
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('add').click();
    }
});
// Add the entered movie name to list
function addMovie() {
    var inputValue = document.getElementById('text1').value;
    var movieDescVal = document.getElementById('description').value;
    if (inputValue === '') {
        alert('Please enter a movie name!');
    } 
    else if (movieDescVal === '') {
        alert('Please enter a description of show!');
    } 
    else {
        movieList.push(inputValue);
        movieDesc.push(movieDescVal);
        deleteList();
        showList();
    }
    document.getElementById('text1').value = '';
    document.getElementById('description').value = '';
}
// Clear the old list before showing new list
function deleteList() {
    var e = document.getElementById('my-movie-list');
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
// Show the list
function showList() {
    movieList.forEach((element,index) => {
        var div = document.createElement('div');
        div.id="new"+index;
        var textNode = document.createTextNode(element);
        var desc= document.createTextNode(movieDesc[index]);
        div.className = 'movie-list-item';
        document.getElementById('my-movie-list').appendChild(div);
        document.getElementById("new"+index).innerHTML="<b>Movie : </b>"+element+"<br><br><b>Description : </b>"+movieDesc[index];
    });
}
//deletes the list as well as empties the list array.
function clearAll() {
    movieList.length = 0;
    deleteList();
}

// toggles theme between light and dark mode
function toggleTheme() {
    document.body.classList.toggle('darkmode');
    console.log('inside theme');
}
