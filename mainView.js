
function updateView() {
    if (model.app.currentPage == null || model.app.currentPage == "mainView") mainView();
    else if (model.app.currentPage == "treasureView") treasureView();
    else if (model.app.currentPage == "findTreasureView") findTreasureView();
}

function mainView(){
     app.innerHTML = /*html*/`
    ${showMainView()}
    `;
}

function showMainView(){
return /*html*/`
<div class="mainViewBtnContainer">
<button class="mainViewBtn" onclick="goToPage('treasureView')">Vis settekasse</button>
</div>
<div class="mainViewImgContainer">
<img class="mainViewImg" onclick="changeLocation('forest')" src="pic/forest.jpg">
<img class="mainViewImg" onclick="changeLocation('beach')" src="pic/beach.jpg">
</div>
`;
}