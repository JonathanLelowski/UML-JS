import { FormeFactory } from './formeFactory'

export class Triangle extends FormeFactory {
    private sideLenthA: number = 25
    private sideLenthB: number = 30
    private sideLenthC: number = 35


    /**
     * dessiner
 : void    */
    public dessiner(): void {
        console.log('Je suis un : ' + this.typeForme);
        console.log('Et j\'ai un côté A de : ' + this.sideLenthA);
        console.log('Et j\'ai un côté B de : ' + this.sideLenthB);
        console.log('Et j\'ai un côté C de : ' + this.sideLenthC);
        }

    public constructor() {
        super();
        this.setTypeForme('triangle');
    }

    public compareTo(object: Triangle): number {
        if (this.sideLenthA === object.sideLenthA) {
            if (this.sideLenthB === object.sideLenthB) {
                if (this.sideLenthC === object.sideLenthC) {
                    return 0
                } else {
                    return -1
            }
        }
    }
}

    public setSideLenthA(side: number): void {
        this.sideLenthA = side; 
        }

    public setSideLenthB(side: number): void {
        this.sideLenthB = side; 
        }

    public setSideLenthC(side: number): void {
        this.sideLenthC = side; 
        }


    }