let pontos = calc(80, 15)
let ranking = mostrarRanking(pontos)

function calc(vitorias, derrotas){

    let saldo = vitorias - derrotas
    return saldo
}

function mostrarRanking(vitorias){
   
   let guardaRanking
   
   if (vitorias < 10){
    guardaRanking = ("Ferro")
    } else if (vitorias > 10 && vitorias < 21){
        guardaRanking = ("Bronze")
    } else if (vitorias > 20 && vitorias < 51){
    guardaRanking = ("Prata")
    } else if (vitorias > 50 && vitorias < 81){
    guardaRanking = ("Ouro")
    } else if (vitorias > 80 && vitorias < 91){
    guardaRanking = ("Diamante")
    }else if (vitorias > 90 && vitorias < 101){
    guardaRanking = ("Lendário")
    } else{guardaRanking = ("Imortal")}
    return guardaRanking
}

console.log("O Herói tem saldo de "+ pontos + " vitórias e está no nível "+ ranking)