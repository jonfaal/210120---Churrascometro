var qtdAdultos = document.getElementById('qtd-adt');
var qtdCriancas = document.getElementById('qtd-cri');
var qtdTempo = document.getElementById('qtd-tmp');
var print = document.querySelector('#print');

function add(n1){
    let valor = n1.value;
    valor++;
    n1.value = valor;
}

function sub(n1){
    let valor = n1.value;
    if(valor > 0){
        valor--;
    }
    n1.value = valor;
}

function calcCarne(){
    let carne = 400;
    let linha = document.createElement('h3');
    if(qtdTempo.value >= 6){
        carne = 650;
    }

    let qtde = carne * qtdAdultos.value + carne / 2 * qtdCriancas.value;
    let un = 'g';
    
    if(qtde >= 1000){
        un = 'kg';
    }
    if(qtde >= 1000){
        qtde = qtde / 1000;
    }
    linha.innerHTML = `${qtde}<span>${un}</span> de carne.`;

    return print.appendChild(linha);
}


function calcCerveja(){
    let cerveja = 1200;
    let linha = document.createElement('h3');
    if(qtdTempo.value >= 6){
        cerveja = 2000;
    }

    let qtde = cerveja * qtdAdultos.value;

    linha.innerText = `${Math.ceil(qtde / 350)} latas de cerveja.`;

    return print.appendChild(linha);
}

function calcRefri(){
    let refri = 1000
    let linha = document.createElement('h3');
    if(qtdTempo.value >= 6){
        refri = 1500;
    }

    let qtde = refri * qtdAdultos.value + refri / 2 * qtdCriancas.value;
    
    linha.innerText = `${Math.ceil(qtde / 2000)} garrafas de refrigerante.`;

    return print.appendChild(linha);
}

function calcula(){

    if(qtdAdultos.value < 1){
        print.innerHTML = '<h2>Defina a quantidade<br> de pessoas!<h2>'

    } else{
        print.innerHTML = '<h2>Você vai precisar de:<h2>'
        calcCarne();
        calcCerveja();
        calcRefri();
    }
    
}