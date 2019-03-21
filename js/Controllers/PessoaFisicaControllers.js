class PessoaFisicaControllers {
    constructor( ) {
        let $ = document.querySelector.bind(document);
        
        this._inputNome = $("#inputName");
        this._inputEmail = $("#inputEmail");
        this._inputTel = $("#inputTel");
    }
    
     adiciona(event) {
        event.preventDefault( );
        
        let pessoaFisica = new PessoaFisica (
                this._inputNome.value,
                this._inputEmail.value,
                this._inputTel.value
        );

        console.log(pessoaFisica);
     }
}