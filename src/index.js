// Primeiro Passo: Definindo a função: criaremos uma função que recebe o número de vitórias e derrotas como parâmetros

function calculoSaldoRankeada(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;    // Aqui calculamos o saldo de vitórias
    let nivel;                                  // Aqui determinamos o nível com base no número de vitórias
    if (saldoVitorias <= 10) {                  // Aqui definimos a lógica para os níveis
        nivel = "Ferro";
    }

    else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    }

    else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    }

    else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    }

    else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    }

    else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    }

    else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

    return {saldoVitorias, nivel}
}

let resultado = calculoSaldoRankeada(120, 20)
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível: ${resultado.nivel}.`)