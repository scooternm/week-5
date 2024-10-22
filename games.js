
// const things = []
// const entities = []
const spriteList = [] //things that can move on screen

function Position(px,py){
    return { x: px, y: py };
}

function Sprite(nameParameter, kindParameter, posParameter){
    return {
        health: 100,
        name: nameParameter,
        kind: kindParameter,
        position: posParameter
    }
}
spriteList.push(Sprite("Cap", "wizard", Position(10,5)));
spriteList.push(Sprite("venom1", "parasite", Position(20,10)));
spriteList.push(Sprite("venom2", "parasite", Position(15,10)));
spriteList.push(Sprite("venom3", "parasite", Position(20,15)));

function printAll(){
for(let i = 0; i < spriteList.length; i++) {
    console.log(spriteList[i])
}
}

function printParasites(){
    for (let i =0; i < spriteList.length; i++) {
        console.log(i, spriteList[i].kind)
    }

}
function printParasites(){
    for (let i = 0; i < spriteList.length; i++) {
        if(spriteList[i].kind === "parasite"){
            console.log(i, spriteList[i]);
        }
    }

}
printParasites()
