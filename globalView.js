
function showTreasurePlace(){
    let treasure;
    do {
    getRandomTreasure()
    treasure = model.data.treasures[model.app.selectedTreasure];
    } while (treasure.location != model.app.location);
    
    return /*html*/`
    <div class="placeViewBox">${treasure.text}</div>
    <div>${model.data.rarityComment[treasure.rarity]}</div>
    <div class="placeViewBox">
    <img class="imgBox"src= ${treasure.img}>
    </div>
   `;
}