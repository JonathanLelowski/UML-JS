import { FormeFactory } from './formeFactory'

export class Cercle extends FormeFactory {
    private diaLenth: number = 25


    /**
     * dessiner
 : void    */
    public dessiner(): void {
        console.log('Je suis un : ' + this.typeForme);
        console.log('Et j\'ai un diamètre de : ' + this.diaLenth);
        }

    public constructor() {
        super();
        this.setTypeForme('cercle');
    }

    public compareTo(object: Cercle): number {
        if (this.diaLenth === object.diaLenth) {
            return 0
        } else {
            return -1
            }
        }
    public setDiaLenth(side: number): void {
        this.diaLenth = side; 
        }


    }