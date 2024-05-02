
function findTreasureView(){
    let html = '';
    html = /*html*/`
    <div class="placeViewBtnContainer">
    <button class="placeViewBtn" onclick="goToPage('mainView')">Vis områder</button>
    </div>
    <div class="placeViewContainer">
    ${showTreasurePlace()}
    </div>
    <div class="placeViewBtnContainer">
    <button class="placeViewBtn" onclick="pushTreasure(); goToPage('treasureView')">Putt i settekassa</button>
    <button class="placeViewBtn" onclick="goToPage('findTreasureView')">Gå videre</button>
    </div>
    `;
    app.innerHTML = html;
}
