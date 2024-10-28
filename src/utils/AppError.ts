//crio um construtor
//toda vez q eu chamar essa class eu devo passar esse contruttor q sera executados

export class AppError {
    message: string;
    
    //vou receber uma mensagem e armazenar na outra mensagem como this
    constructor(message: string){
        this.message = message;
    }
}

//agora toda vez q eu chmar um throw new  AppError (nome dessa class) eu posso acessar essa mensagem