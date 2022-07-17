document.getElementById('top-player').style.color = 'rgb(255, 145, 0)';
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'rgb(255, 128, 171)';
    // player.style.padding = '5px 10px';
    player.style.borderRadius = '5px';
}

document.getElementById('add-new-item').addEventListener('click', function () {
    const listItem = document.createElement('li');
    listItem.innerText = 'hellow'
    // const textNode = document.createTextNode('ami perechi');
    // listItem.appendChild(textNode);
    console.log(listItem);
    document.getElementById('lists').appendChild(listItem);
})

const counterInputFild = document.getElementById('counter-input-fild');
function increment() {
    if (counterInputFild.value >= 5) {
        document.getElementById('incriment-btn').setAttribute('disabled', true);
    } else {
        counterInputFild.value++;
    }


}