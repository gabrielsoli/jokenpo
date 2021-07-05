const { request } = require("express");

module.exports = {


    async play (request, reponse){

    function analisajogada(player1, player2){
        //Analisando possiveis jogadas Papel
        let jogadas = ["pedra","papel","tesoura"];

        //Analisando o poder da jogada
        var jogada1 = jogadas.indexOf(player1);
        var jogada2 = jogadas.indexOf(player2);

        //Definindo o vencedor da jogada - Podendo dar empate
        if(jogada1 > jogada2){
            
            if(player1 === "tesoura" && player2 === "pedra"){
                return ("Vitória - Player 2");
            };
            
            return ("Vitória - Player 1");
        };
        if(jogada1 === jogada2){
               return ("Empate - Jogue novamente");
        };
        if(jogada2 > jogada1){
        
            if(player2 === "tesoura" && player1 === "pedra"){
                return ("Vitória - Player 1");
            };

            return ("Vitória - Player 2");
        };
            
         
        
    };

    //obtendo o Body da requisicao
    const {player1, player2} = request.body;

    //Executando a Funcao analisajogada para verificar o vencedor
    const result = analisajogada(player1, player2);
    
    return reponse.json(result)
    
}
};