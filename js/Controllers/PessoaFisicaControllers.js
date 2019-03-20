class PessoaFisicaControllers {
    constructor( ) {
        let $ = document.querySelector.bind(document);
        
        this.inputNome = $("#inputName");
        this.inputEmail = $("#inputEmail");
        this.inputTel = $("#inputTel");
    }
    
     adiciona(event) {
        event.preventDefault( );

        alert(this.inputNome.value);
     }
}