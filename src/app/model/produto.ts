export class Produto {
    _id: string = '';
    nome: string = '';
    categoria: string = '';
    descricao: string = '';
    quant: number = 0
    valor: number = 0
    ativo: boolean = true;

    constructor() {}

    add() {
        console.log("SALVO!");
    }
}
