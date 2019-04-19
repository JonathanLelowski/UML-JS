import { FormeFactory } from './formeFactory'

export class Carre extends FormeFactory {
    private sideLenth: number = 32

    /**
     * dessiner
 : void    */
    public dessiner(): void {
        console.log('Je suis un : ' + this.typeForme);
        console.log('Et j\'ai un côté de : ' + this.sideLenth);
    }

    public constructor() {
        super();
        this.setTypeForme('carré');
    }
        
    public setSideLenth(side: number): void {
        this.sideLenth = side; 
        }

    public compareTo(object: Carre): number {
        return this.sideLenth === object.sideLenth ? 0 : -1;
        }
    }