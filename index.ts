const scores = document.getElementById('scores');
const container = document.getElementById('container');
const button = document.getElementById('button');

if (button !== null){
    button.addEventListener('click', ()=>{
        dice();
    })
}
const frequencyContainer = document.getElementById('frequencyContainer');
if (frequencyContainer === null || !(frequencyContainer instanceof HTMLElement)){
    throw new Error("frequencyContainer not found");
}
const frequencyDivOne = document.createElement('div');
frequencyContainer.append(frequencyDivOne);

frequencyDivOne.classList.add('frequencies')
const frequencyDivTwo = document.createElement('div');
frequencyContainer.append(frequencyDivTwo);

frequencyDivTwo.classList.add('frequencies')
const frequencyDivThree = document.createElement('div');
frequencyContainer.append(frequencyDivThree);

frequencyDivThree.classList.add('frequencies')
const frequencyDivFour = document.createElement('div');
frequencyContainer.append(frequencyDivFour);

frequencyDivFour.classList.add('frequencies')
const frequencyDivFive = document.createElement('div');
frequencyContainer.append(frequencyDivFive);

frequencyDivFive.classList.add('frequencies')
const frequencyDivSix = document.createElement('div');
frequencyContainer.append(frequencyDivSix);

frequencyDivSix.classList.add('frequencies')
function randomDiceNum (max: number) {
    return Math.floor(Math.random() * max + 1);
}
const images = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png'
]

let counter = 0;
let frequency1 = 0;
let frequency2 = 0;
let frequency3 = 0;
let frequency4 = 0;
let frequency5 = 0;
let frequency6 = 0;
function dice () {
    if (scores === null || !(scores instanceof HTMLElement)){
        throw new Error("scores not found");
    }
    const diceRolledNum = randomDiceNum(6);
    counter++;
    if(diceRolledNum === 1){
        scores.innerHTML = `<img src="${images[0]}" alt="1" width="100px">`
        frequencyDivOne.innerHTML  =`<div><img src="${images[0]}" alt="1" width="20px"><p>${++frequency1}</p></div>`;
    } else if(diceRolledNum === 2) {
        scores.innerHTML = `<img src="${images[1]}" alt="1" width="100px">`
        frequencyDivTwo.innerHTML  =`<div><img src="${images[1]}" alt="2" width="20px"><p>${++frequency2}</p></div>`;
    } else if(diceRolledNum === 3){
        scores.innerHTML = `<img src="${images[2]}" alt="1" width="100px">`
        frequencyDivThree.innerHTML  =`<div><img src="${images[2]}" alt="2" width="20px"><p>${++frequency3}</p></div>`;
    } else if(diceRolledNum === 4) {
        scores.innerHTML = `<img src="${images[3]}" alt="1" width="100px">`
        frequencyDivFour.innerHTML  =`<div><img src="${images[3]}" alt="2" width="20px"><p>${++frequency4}</p></div>`;
    } else if(diceRolledNum === 5) {
        scores.innerHTML = `<img src="${images[4]}" alt="1" width="100px">`
        frequencyDivFive.innerHTML  =`<div><img src="${images[4]}" alt="2" width="20px"><p>${++frequency5}</p></div>`;
    } else {
        scores.innerHTML = `<img src="${images[5]}" alt="1" width="100px">`
        frequencyDivSix.innerHTML  =`<div><img src="${images[5]}" alt="2" width="20px"><p>${++frequency6}</p></div>`;
    }

    const divElement = document.createElement('p');
    divElement.textContent = ' Roll ' + counter + ": " + diceRolledNum;

    if (container === null || !(container instanceof HTMLElement)){
        throw new Error("container element not found")
    }
    container.prepend(divElement);
}
