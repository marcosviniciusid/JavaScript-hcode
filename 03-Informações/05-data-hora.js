
// Refatorar = melhorar ou refazer o código otimizando o mesmo

this._locale = 'pt-BR';

initialize(){

    this.setDisplayDateTime();

    setInterval(()=>{

        this.setDisplayDateTime();

    }, 1000);

}

setDisplayDateTime() {
        
    this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  
}