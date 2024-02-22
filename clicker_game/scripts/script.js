const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;


// Buildings are made from classes here.
// Building(name, clicks per second, base cost, button ID)
let cursor = new Building('Amazon Worker', 0.1, 15, 'buySingleCursor');
let energyDrink = new Building('Amazon Supervisor', 1, 100, 'buyEnergyDrink');
let tendies = new Building('Amazon Robot', 8, 1100, 'buyTendies');
let stonks = new Building('Bathrooms', 47, 12000, 'buyStonks');
let AI = new Building('AI', 80, 24000, 'buyAI');
let ceoClone = new Building('Ceo Clone', 10000, 1000000, 'buyCeoClone')
let warehouse = new Building('New Warehouse Location', 5000000, 10000000, 'buyWarehouse')

// Manual click function
function scorePlusPlus() {
    score++;
}

// Increases the score by the current clicks-per-second
function incScore() {
    score += cursor.cps + energyDrink.cps + tendies.cps + stonks.cps + AI.cps + ceoClone.cps + warehouse.cps;
}

// Updates the states of all the Building buttons
function updateButtons() {
    cursor.buttonState();
    energyDrink.buttonState();
    tendies.buttonState();
    stonks.buttonState();
    AI.buttonState();
    ceoClone.buttonState();
    warehouse.buttonState();
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        Math.floor(score).toLocaleString();
}
setInterval(updatePage, tickRate);
