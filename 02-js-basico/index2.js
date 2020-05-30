class smartphone {
    
    // Metodo padrão que é executado automaticamente.

    constructor() {
        this.cor = "prata";
    }
    ligar() {
        console.log("ligando...");
        return "Ligação em andamento...";
    }
}

let object = new smartphone();
console.log(object);
console.log(object.ligar());