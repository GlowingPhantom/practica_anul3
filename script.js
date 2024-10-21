function openPopup(title, imageSrc, description, price, genre) {
    document.getElementById('popupModalLabel').innerText = title;
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupDescription').innerText = description;
    document.getElementById('popupPrice').innerText = price;
    document.getElementById('popupGenre').innerText = "Genre: " + genre;
    $('#popupModal').modal('show');
}

function searchGames() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const gameCards = [...document.getElementsByClassName('game-card')]; 

    gameCards.forEach(card => {
        const title = card.querySelector('.card-title').innerText.toLowerCase(); 

        if (title.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });

    if (input === '') {
        resetGameCards();
    }
}

function resetGameCards() {
    const gameContainer = document.getElementById('gameContainer');
    const cards = gameContainer.getElementsByClassName('game-card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = '';
    }
}
// Add this function to your script.js file
function sortGames() {
    var selectedGenre = document.getElementById("genreSelect").value;
    var gameCards = document.getElementsByClassName("game-card");

    for (var i = 0; i < gameCards.length; i++) {
        var genres = gameCards[i].getAttribute("data-genre").toLowerCase().split(",");
        if (selectedGenre === "all" || genres.includes(selectedGenre)) {
            gameCards[i].style.display = "block";
        } else {
            gameCards[i].style.display = "none";
        }
    }
}


