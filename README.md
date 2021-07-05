# jokenpo Service

Como o problema foi resolvido?

Foi desenvolvida uma API Rest, onde a mesma recebe, através de uma requisição POST, dois valores referentes às jogadas dos Players, sendo eles "Player1" e "Player2".

Recebido os valores, a função "analisajogada" é chamada pela rota "/play";

O método "analisajogada" funciona da seguinte forma:

1 - Cria uma lista padrão seguindo a seguinte ordem:
    
    Primeira posição da Lista - Pedra;
    Segunda posição da Lista - Papel;
    Terceira posição da Lista - Tesoura;

2 - Identifica em qual posição da lista a jogada do Player1 se encontra.

3 - Identifica em qual posição da lista a jogada do Player2 se encontra.

4 - Realiza uma verificação de posição de jogada para identificar qual a "força" da jogada.

    Realiza mais Uma verificação para conferir se a jogada de ambos os jogadores não são iguais a posição 3 e 1, pois nesse caso a vitória deverá ser no numero menor.

Obs.: Para uma possivel melhoria do codigo, seria a implementação de uma lista circular para resolver o problema de forma mais eficiente.

Instruções para utilização:

    Premissas: Necessário ter o NodeJS instalado no device.
               Necessário ter alguma aplicação para testes de serviços Rest.

1 - Baixe todas as dependencias do projeto, executando o comando "npm install" através do terminal;
2 - Após baixar as dependencias, acesse a pasta "backend" no terminal através do comando "cd backend";
3 - Ainda no terminal, execute o comando "npm start" para iniciar o serviço;
4 - Com o serviço iniciado, através da aplicação para testes de serviços Rest, crie uma requição com as seguintes caracteristicas:
    URL: http://localhost:3333/play
    Method: POST
    Body-Format: JSON
    Body: {
            "player1":"tesoura",
            "player2":"Papel"
          }
5 - Enviar a requisição para o serviço e aguardar a resposta;

Ferramentas utilizadas:

Linguagem:

-- Javascript;

Framesworks:

-- NodeJS;
-- Express;

Para Testes:

-- Jest;