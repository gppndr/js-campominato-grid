/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const eleGrid = document.querySelector(".grid");
const btnPlay = document.querySelector("#play");
const selectLevel = document.querySelector("#levels");
const eleHelp = document.querySelector(".help");

btnPlay.addEventListener("click", function () {
  eleHelp.classList.add("hidden");
  eleGrid.classList.remove("hidden");
  const nCells = parseInt(selectLevel.value);
  eleGrid.style.setProperty("--sideSquare", Math.sqrt(nCells));
  createGrid(nCells, eleGrid);
});

// function defenitions
function createGrid(nCells, eleContainer) {
  eleContainer.innerHTML = " ";
  for (let i = 1; i <= nCells; i++) {
    const eleCell = document.createElement("div");
    eleCell.innerHTML = i;
    eleCell.classList.add("box");
    eleContainer.append(eleCell);

    eleCell.addEventListener('click', function(){
        console.log('hai cliccato la cella' + this.innerHTML)
        this.classList.toggle('clicked');
    });
  }
}
