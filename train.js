let line0 = ['█████████']
let line1 = ['█▄█████▄█']
let line2 = ['█▼▼▼▼▼▼▼']
let line3 = ['█']
let line4 = ['█▲▲▲▲▲▲▲']
let line5 = ['█████████']
let line6 = [' ██ ██']

program();

async function program(){
    for(let x = 0; x < 189; x++){
        await toClear(); 
        if(x%2 === 0)
            toShow();
        else
            closeMouth();
        toPush();
    }
}

async function toShow(){
    console.log(line0.join(''))
    console.log(line1.join(''))
    console.log(line2.join(''))
    console.log(line3.join(''))
    console.log(line4.join(''))
    console.log(line5.join(''))
    console.log(line6.join(''))
}

function toPush(){
    line0.unshift(" ");
    line1.unshift(" ");
    line2.unshift(" ");
    line3.unshift(" ");
    line4.unshift(" ");
    line5.unshift(" ");
    line6.unshift(" ");
}

async function toClear(){
    await sleep(100)
    console.clear();
}

function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}

function closeMouth(){
    console.log(line0.join(''))
    console.log(line1.join(''))
    console.log(line2.join(''))
    console.log(line4.join(''))
    console.log(line5.join(''))
    console.log(line5.join(''))
    console.log(line6.join(''))
}

/*

_/﹋\_
(҂`_´)
<,︻╦╤─ ҉ - -
_/﹋\_

*/

//Test
//Fake Feat