// Take an empty array to store movie names
var movieList = [];
// On pressing enter Add button will be triggered
var input = document.getElementById("text1");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("add").click();
    }
});
// Add the entered movie name to list 
function addMovie() {
    var inputValue = document.getElementById('text1').value;
    if (inputValue === "") {
        alert("Please enter a movie name!");
    }
    else {
        movieList.push(inputValue);
        deleteList();
        showList();
    }
    document.getElementById("text1").value = "";

}
// Clear the old list before showing new list 
function deleteList() {
    var e = document.getElementById("my-movie-list");
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
// Show the list 
function showList() {
    movieList.forEach(element => {
        var div = document.createElement("div");
        var textNode = document.createTextNode(element);
        div.appendChild(textNode);
        div.className = "movie-list-item";
        document.getElementById('my-movie-list').appendChild(div);
    });
}
//deletes the list as well as empties the list array.
function clearAll(){
    movieList.length = 0;
    deleteList();
}