    /**
     * Trabalhando com comentarios e arquivo js + overwie básico sobre JS.
     */

    console.log('Oláaaa');
    /*console.log('Oláaaa');
    console.log('Oláaaa');*/

    /**
     * Utilizando varivel
     */

    var olaMundo = "Olá, Mundo!";

    console.log(olaMundo);
    console.log(olaMundo);
    console.log(olaMundo);
    console.log(olaMundo);
 
    /**
     * var = comando para declarar variaveis.
     * Novidades: (ES6 ES7) Declarações por escopo: let
     * 
     */

    /**
     * Atualização por escopo. Declarar variaveis com: let
     * Declara variáveis definindo o escopo de atuação.
     * Leva em consiferação o local que é declaro. Ela vai existir apenas num bloco de código.
     * 
     * Comando const = Declarando uma constante.
     * O valor nunca vai mudar. Gravou, ficou! :D
     * 
     * "Constante é constante, variavel é variavel!"
     * 
     */

    /**
    * Tipos de dados gravados em variaveis.
    * 
    * string (texto), number (numeros), objetos (array).
    * 
    * Mostrar o tipo de dado da variavel: typeOf.
    * Saber de onde veio uma instancia, objeto.
    * 
    * *Função anonima numa varivel.
    * 
    * Não precisa declarar o tipo da variavel, isso quer dizer que no JS as variaveis
    * são FRACAMENTE TIPADAS (tipo de dado variavel).
    * 
    * Funções de conversão:
    * parseInt, parseFloat, 
    * (to string)
    * 
    */

    /**
     * Operadores aritmeticos
     * 
     * 
     * Operadores de atribuição
     * Exemplo:
     */

     
    let a = 10;
    const b = "10";

    /**
     * Operador de comparação
     * 
     */

    console.log(a == b);

    /**
     * 
     * Operador de comparação, comparando o valor e o tipo de dado!
     * 
     */

    console.log(a === b);

    /**
     * Operador de comparação, diferente
     * 
     * Compara se os valores e tipos são diferentes
     * 
     * !==
     * 
     */

    console.log(a !== b);

    /**
     * Comparando apenas os dados (se são diferentes)
     * 
     * !=
     * 
     */

    console.log(a != b);

    /**
    * 
    * Operadores lógicos
    * 
    * Exemplo: A é maior que B?
    * 
    * AND = as duas condições precisam ser verdadeiras = &&
    * OR = uma condição precisa ser verdadeira.
    */

    console.log(a == b && typeof b == 'string');
    // Verdadeiro E Verdadeiro = Verdadeiro
    console.log(a == b && typeof a == 'string')
    // Verdadeiro E falso = falso

    /**
     * Operador lógico OR.
     * or é igual a: ou
     * 
     */

    console.log(a == b || typeof a == 'string');

    /**
     * 
     * Operador incremental ou decremental
     * 
     * a++;
     * ou
     * a--;
     * 
     * Cada vez que se passa num laço, é adicionado mais 1 na variavel.
     * 
     */


    /**
     * 
     * Controlando fluxo.
     * 
     * Estrutura de condição
     * 
     */

    let cor = "amarelo";

    if (cor === "verde") {
        console.log("siga");
    } else if (cor === "amarelo") {
        console.log("atenção");
    } else if (cor === "amarelo") {
        console.log("pare");
    }

    /**
     * 
     * Outro controle de fluxo.
     * 
     * Estrutura de condição
     * 
     */

     let cor2 = "azul";

    switch(cor2) {
        case "verde":
            console.log("siga");
            break;
        case "amarelo":
            console.log("atenção");
            break;
        case "vermleho":
            console.log("pare");
            break;
        default:
            console.log("não sei");
            break;
    }

    /**
     * 
     * Laços de repetição.
     * 
     * Quando preciso repetir uma instrução no cógido, caso eu saiba quantas vezes repetirá ou não.
     *  
     */

     // for, foreach, foring
     // while, do while

     // continue = ignora as instruções que defino. Passa direto e vai para o próximo.

    let n = 5;

    for (let i = 0; i <=10; i++) {
        console.log(`${i} X ${n} = ${i*n}`);
        // Recurso "novo": `Template String = ${js}

        /**
         * 
         * Dessa forma pode-se até quebrar linha.
         * 
         * console.log(`
         *  ${i} X ${n} = ${i*n}
         * `);
         * 
         * 
         */

        console.log(i + " X " + n + " = " + (i * n));
    }

    


