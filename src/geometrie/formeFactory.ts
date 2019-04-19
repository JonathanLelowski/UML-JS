import { Paintable } from "./paintable-interface";
import { Comparable } from "./comparable-interface";

export abstract class FormeFactory implements Paintable, Comparable<FormeFactory> {
    
    /**
     * @var string Libellé du type de forme à produire
     */
    protected typeForme: string;

    /** Méthode abstraite : impose les concepteurs de dalles 
    * à définir dans leurs classes mériers la méthode dessiner()
    */
   
    public abstract dessiner(): void;

    public setTypeForme(type: string) {
        this.typeForme = type;
    }
    
    public paint(color: string): void {
        console.log('Peinture de la forme en : ' + color);
    }

    public abstract compareTo(object: FormeFactory): number;
    
}