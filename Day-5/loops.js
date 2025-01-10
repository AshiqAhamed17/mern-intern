
let c = [1,3,3,6,8];

for(let i in c){
    console.log(i);
}

const loop = () => {
    c.map((i) => {
        console.log(i);
    })
}
loop();
