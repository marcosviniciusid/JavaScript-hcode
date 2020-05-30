/**
 * Funções:
 * São trechos de códigos
 * que podem ser reutilizados.
 * 
 */

/**
 * Classes:
 * Agrupa atributos e métodos
 * no mesmo lugar
 * 
 */

/**
 * JS é uma linguagem reativa.
 * O JS fica ouvindo o usuário, uma ação.
 * Ele reaje a um outro servidor, site, DB.
 * Chamar funções, objetos e variaveis.
 * 
 */

/**
 * Função é um trecho de código e retorna algo.
 * 
 * return:
 * Encerra a função e retorna um valor.
 * 
 * Pode ser usado para calculos, conversão e validação.
 * 
 * 
 * Tres tipos de funções:
 * 
 * Função comum,
 * Função anonima,
 * Arraow Functions.
 * 
 */

function calc(x1, x2, operator) { // Conhecido como argumentos ou parametros, são informações que as funções precisam.
    // Se definir parametros, ideal é respeita.
    // Argumentos ou Args permitem acessar Parâmetro de uma função.

    return eval(`${x1} ${operator} ${x2}`);
    // Quero que interprete. Então vou utilizar uma função nativa que faça a validação.
    // Então ele vai pegar a string e vai executar o calculo.
}

// Precisa chamar/invocar a função
let resultado = calc(1, 2, "+");

console.log(resultado);


/**
 * Função anonima
 *
 */

(function(x1, x2, operator) { // Os parenteses é para dizer que minha função é um valor. Um bloco de cód. que estou criando.

    document.write("Hello, sou uma função anonima!");

    return eval(`${x1} ${operator} ${x2}`);

})(1,2, "*"); // Passando os parametros aqui.

/**
 * Arrow Function
 * 
 * É um novo recurso para funções.
 * 
 * No arrow function consigo compartilhar o que está fora dentro dá função também.
 * 
 */




let cal = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);

}

let result = cal(1, 2, "*");

console.log(result);

/**
 * Pode ser passado num parametro.
 * 
 * callback
 * Função de retorno
 * como parametro após uma ação
 * 
 */


/**
 * Document Object Model
 * DOM
 * a estrutura como o HTML é formado
 * 
 */

/**
 * Eventos
 * ações realizadas na aplicação que dispara rotinas
 * 
 * Se alguém clica em algo, por exemplo o JS vai fazer algo. Vai chamar uma função por exemplo.
 * 
 * Eventos de mouse, teclado, tempo etc.
 * 
 */

window.addEventListener('focus', event => {
    console.log("focus"); // Ex: se eu minimizar e abrir o browser (A janela/windows). ou ainda, clicar.
});

document.addEventListener('click', event => {
    console.log("Clique"); // Caso eu clique em meu documento/document ('boby'), ele executa.
});

/**
 * Windows
 * Manipulamos a aplicação.
 * 
 * Ex: Acesso ao historico do usuario, mudar propriedade da janela, abrir nova janela.
 * window.open, window.close, window.focus
 * 
 */

// Date.now, é um metodo estático da classe Date

let agora = Date.now(); // TimeStamp = Quantidade de segundos desde 01.01.1970
console.log(agora); // retorno em milessegundos

// Formatar data

// Instanciando a classe Date
let now = new Date();

console.log(now);

console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());

/**
 * Mostrando a data de acordo com a localização do usuário.
 *
 */

console.log(now.toLocaleDateString("pt-BR"));

/**
 * Array
 * Variavel indexada
 * 
 * Armazenar mais de uma informação numa variavel
 * 
 */

 let carros = ["palio 98", "toro", "uno", true, new Date(), function(){}];

 console.log(carros);

/**
 * Selecionando um item
 */

 console.log(carros[2]);

/**
 * Saber a quantidade que tem dentro do array
 * 
 */

console.log(carros.length);

// Pegando a data no array

console.log(carros[4]);

// A partir da data dá pra pegar o ano que quero.

console.log(carros[4].getFullYear());

// Poderia invocar a função assim
// console.log(carros[6]());


/**
 * Usando um laço para
 * Percorrendo um array.
 * 
 */

// Aqui o array ganha um metodo, ou seja, uma função

/**
 * forEach
 * Laço para percorrer Array
 * 
 */

carros.forEach(function(value, index) {
    console.log(index, value);
});


/**
 * 
 * Orientação a objetos
 * 
 * Classe: conjunto de atributos e metodos
 * 
 * 
 * Calculadora: somar, subtrair, limpar
 * 
 * Classe: calculadora
 * Atributo: Variavel
 * Metodos: somar, subtrair, uma função
 * 
 */

/**
 * this
 * é um comando interno usado para referenciar
 * 
 * serve para referenciar um atributo, metodo dentro da classe.
 * 
 * Para usar uma Classe usa-se: new
 * 
 * let calc = new calculator();
 * 
 * Essa variavel agora é uma nova instancia da classe calculator.
 * 
 * Instância
 * É quando o objeto representa uma classe
 * 
 * o new é como se tivesse tirando uma foto, uma copia da classe e guarda aqui.
 * 
 * Ele era uma variavel, agora é um objeto e vai ter acesso aos metodos e atributos dessa classe.
 * 
 * Dica: "Quanto mais inteligente for sua classe, mais limpo será seu código".
 * 
 * 
 */


let celular = function() {
    
    this.cor = "prata";

    this.ligar = function() {
        console.log("ligando...");
        return "Ligação em andamento...";
    }

}

let objeto = new celular();

console.log(objeto);
console.log(objeto.ligar());
// se não definir um return, no console vai ficar mostrando: undefined

// Classe no novo ECMA

// NO ARQUIVO INDEX2.JS


