/**
 * @name Repository
 * @desc Classe abstraite définisssant une collection d'objets
 * @author JonathanL
 * @version 1.0.0
 */

export abstract class Repository<T> { // <T> c'est un spécificateur. cette classe sera spécifiée par une autre classe</T>
    protected repository: Map<number, T> = new Map<number, T>(); //Attribut, type Map : structure qui associe une clé et une valeur

    public abstract add(object: T): void; //methode abstraite : méthode que l'on ne peut pas utiliser. 

    public abstract remove(object: T): void;

    public abstract get(id: number): T;

    /**
     * Méthode concrète d'une classe abstraite
     * @return number Nombre d'éléments de la collection
     */
    public getSize(): number {
        return this.repository.size;
    }
}
