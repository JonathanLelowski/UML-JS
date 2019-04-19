import { Paintable } from "./paintable-interface";

export class Table implements Paintable{

    private lenght: number;
    private width: number; 

    public constructor(lenght: number, width: number) {
        this.lenght = lenght;
        this.width = width;
    }

    public make(): void {
        console.log('Construction d\'une table de L' + this.lenght + ' x l' + this.width);
    }

    public paint(color: string): void {
        console.log('Peinture de la table en : ' + color + ' avec un pistolet à peinture');
    }
}