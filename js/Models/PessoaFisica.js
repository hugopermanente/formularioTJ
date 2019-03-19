class PessoaFisica {
    constructor(nome, email, tel) {
        this._nome = nome;
        this._email = email;
        this._tel = tel;
    }
 
    get nome( ) {
        return this._nome;  
    }

    get email( ) {
        return this._email;
    }

    get tel( ) {
        return this._tel;
    }
}