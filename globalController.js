
function getRandomTreasure() {
    let randomNum = Math.floor(Math.random() * model.data.treasures.length)
    model.app.selectedTreasure = randomNum;
}

function pushTreasure() {
    model.data.collectedTreasure.push(model.data.treasures[model.app.selectedTreasure]);
}

function deleteTreasure(i){
    model.data.collectedTreasure.splice(i,1);
    updateView();
}

function changeLocation(location) {
    model.app.location = location;
    if (location == 'beach')
        goToPage('findTreasureView')

    if (location == 'forest')
        goToPage('findTreasureView')
}

function goToPage(page) {
    model.app.currentPage = page;
    updateView();
}