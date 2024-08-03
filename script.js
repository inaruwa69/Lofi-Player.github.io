const gifs = [
    "assets/cacao_and_coffee_shop.gif",
    "assets/droidcrime.gif",
    "assets/exodus.gif",
    "assets/familydinner.gif",
    "assets/flower_shop.gif",
    "assets/future.gif",
    "assets/girlinrain.gif",
    "assets/highlands.gif",
    "assets/highsoceity.gif",
    "assets/lowlands.gif",
    "assets/lullaby.gif",
    "assets/midnight_melancholy.gif",
    "assets/nighttrain.gif",
    "assets/player2.gif",
    "assets/sideshop.gif",
    "assets/skate.gif",
    "assets/sushi.gif",
];

const gifContainer = document.getElementById('gifContainer');
const imageElement = gifContainer.querySelector('img');

let usedIndices = [];

function randomGif() {

    let randomIndex;

    if (usedIndices.length === gifs.length) {
        
        usedIndices = [];
    }
    if (usedIndices.length < gifs.length) {
        do {
            
            randomIndex = Math.floor(Math.random() * gifs.length);
    
        } while(usedIndices.includes(randomIndex));
    
        usedIndices.push(randomIndex);
    
        imageElement.src = gifs[randomIndex];

    }
}

randomGif();
setInterval(randomGif, 7000);

