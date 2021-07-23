const rolarDado = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const rolarDoisDados = () => {
    let dado1 = rolarDado();
    let dado2 = rolarDado();
    return dado1 + dado2;
}

// console.log(rolarDoisDados());
let count = [];
for(let i = 0; i < 1000; i++) {
    let resultado = rolarDoisDados();
    if(count[resultado] == undefined) {
        count[resultado] = 1
    } else {
        count[resultado] += 1
    } 
}
// console.log(count);

let textOutput = document.getElementById("textOutput");

for(let i = 2; i < 13; i++) {
    textOutput.innerText += ` ${i}: ${count[i]}\n`;
}
  
let graphOutput = document.getElementById("graphOutput");

for (let i = 2; i < 13; i++) {
    let id = `r${i}`;
    let div = document.getElementById(id);
    div.innerText = count[i];
    div.style.height = `${count[i]}px`;
}