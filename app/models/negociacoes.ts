import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }
    lista(): ReadonlyArray<Negociacao>/* apenas leitura do array */{
        return this.negociacoes
    }
}
