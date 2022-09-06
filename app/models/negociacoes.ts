import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = []

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }
    public lista(): readonly Negociacao[]/* apenas leitura do array */{
        return this.negociacoes
    }
}
