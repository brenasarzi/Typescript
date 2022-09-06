export class View {
    // protected - apenas as classes filhas podem acessar essa propriedade.
    protected elemento: HTMLElement

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }

}