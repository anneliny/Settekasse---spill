
function treasureView(){
    let html = '';
    html = /*html*/`
    <div class="treasureContainerBtn">
        <button class="treasureBtn" onclick="changeLocation('forest')">Fortsett i skogen</button>
        <button class="treasureBtn" onclick="goToPage('mainView')">Vis områder</button>
        <button class="treasureBtn" onclick="changeLocation('beach')">Fortsett på stranda</button>
        ${filterTreasure()}
    </div>
    <div class="treasureContainer">
       <div class="treasureBox">
        ${showTreasures()}
      </div>
    </div>
    `;
    app.innerHTML = html;
}


function showTreasures() {
  let html = '';
  if (model.input.filter.location == 'all'){
    for (let i = 0; i < model.data.collectedTreasure.length && i < 15; i++) {
      html += /*HTMl*/ `
      <div>
          <img onclick="deleteTreasure(${i})" class="imgBoxTreasure" src="${model.data.collectedTreasure[i].img}"> 
      </div>
    `;
    }
   }
  else {
      for (let i = 0; i < model.data.collectedTreasure.length && i < 15; i++) {
        if (model.data.collectedTreasure[i].location == model.input.filter.location)
        html += /*HTMl*/ `
          <div>
              <img onclick="deleteTreasure(${i})" class="imgBoxTreasure" src="${model.data.collectedTreasure[i].img}"> 
          </div>
        `;
    }
  }
  return html;
  }
  // hilsen carl - bare hyggelig (og litt audun)
// Fikk det ikke til å funke med null, så vi byttet det til en string kalt "all" i stedet
function filterTreasure(){
  return /*html*/ `
  <div class="filterContent" width="20rem">
    <select name="filterSelect" onchange="sortFilter(this.value)">
      <option value="all" ${model.input.filter.location == 'all' ? "selected" : ""}>Alle</option> 
      <option value="forest" ${model.input.filter.location == "forest" ? "selected" : ""}>Skog</option>
      <option value="beach" ${model.input.filter.location == "beach" ? "selected" : ""}>Strand</option>
    </select>
  </div>
  `;
}


