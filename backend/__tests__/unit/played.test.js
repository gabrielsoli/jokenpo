const { Play } = require("../../src/controllers/playedController");


    
    jest.setTimeout(() => {

        //Jogadas onde o Player 1 vence
        test('Should the player1 winner', ()=>{
        
            let play = Play.analisajogada("pedra","tesoura");
            expect().toBe("Vitória - Player 1");
        });

        test('Should the player1 winner', ()=>{
        
            let play = Play.analisajogada("papel","pedra");
            expect().toBe("Vitória - Player 1");
        });

        test('Should the player1 winner', ()=>{
        
            let play = Play.analisajogada("tesoura","papel");
            expect().toBe("Vitória - Player 1");
        });

        //Jogadas onde o Player 2 vence
        test('Should the player2 winner', ()=>{
        
            let play = Play.analisajogada("tesoura","pedra");
            expect().toBe("Vitória - Player 2");
        });

        test('Should the player2 winner', ()=>{
        
            let play = Play.analisajogada("pedra","papel");
            expect().toBe("Vitória - Player 2");
        });

        test('Should the player2 winner', ()=>{
        
            let play = Play.analisajogada("papel","tesoura");
            expect().toBe("Vitória - Player 2");
        });

        //Deve haver empate entre as jogadas
        test('Should no winner', ()=>{
        
            let play = Play.analisajogada("papel","papel");
            expect().toBe("Empate - Jogue novamente");
        });

        test('Should no winner', ()=>{
        
            let play = Play.analisajogada("tesoura","tesoura");
            expect().toBe("Empate - Jogue novamente");
        });

        test('Should no winner', ()=>{
        
            let play = Play.analisajogada("pedra","pedra");
            expect().toBe("Empate - Jogue novamente");
        });

    }, 5000);
    

