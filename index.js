document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message')

// create function addMovie that takes in event as param
function addMovie(event) {
    event.preventDefault();
// get and set the value of input field
    let inputField = document.querySelector(`input`)

    const movie = document.createElement(`li`)

    const movieTitle = document.createElement(`span`);
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector("ul").appendChild(movie)

    inputField.value = ''
}

function deleteMovie(event) {
   
    message.textContent = `Movie deleted!`
    event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}