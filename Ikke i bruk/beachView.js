
function beachView(){
    let html = '';
    html = /*html*/`
    <div class="placeViewBtnContainer">
    <button class="placeViewBtn" onclick="goToPage('mainView')">Vis områder</button>
    </div>
    <div class="placeViewContainer">
    ${showTreasure()}
    </div>
    <div class="placeViewBtnContainer">
    <button class="placeViewBtn" onclick="pushTreasure(); goToPage('treasureView')">Putt i settekassa</button>
    <button class="placeViewBtn" onclick="goToPage('beachView')">Gå videre</button>
    </div>
    `;
    app.innerHTML = html;
}