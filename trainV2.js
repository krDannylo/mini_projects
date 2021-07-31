let line0 = [' _/JL\\_']
let line1 = [' (҂`_´) ']
let line2 = [' <,︻╦╤─']
let line3 = [' _/﹋\\_']

let shot  = ['<,︻╦╤─҉']
let bullet =[' ~ ']

program();

async function program(){
    for(let x = 0; x < 100; x++){
        await toClear(); 
        toShow(x);
    }
}

async function toShow(x){
    console.log(line0.join(''))
    console.log(line1.join(''))
    if(x%2 === 0){
        console.log(line2.join(''))
    }
    else {
        toPush();
        console.log(shot.join('') + " " + bullet.join(''))
    }
    console.log(line3.join(''))
}

function toPush(){
    bullet.push(' ~ ')
}

async function toClear(){
    await sleep(220)
    console.clear();
}

function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}