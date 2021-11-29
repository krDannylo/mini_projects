const propeller = [':LOL',':ROFL',':ROFL'].join().replace(/,/gi, "");
const space = '             ';

function draw(a){
    if(a % 2 == 0 ) console.log(space+propeller);
    else console.log(propeller+space);
    console.log("             A")
    console.log("         /━━━━━━━━━")
    console.log("LOL======        []\\");
    console.log(" L      \\           \\");
    console.log("         \\___________]");
    console.log("            I      I");
    console.log("        ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
}

async function program(){
    for(let x = 0; x < 10000; x++){
        await toClear(); 
        draw(x);
    }
}

async function toClear(){
    await sleep(100)
    console.clear();
}

function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}

program();