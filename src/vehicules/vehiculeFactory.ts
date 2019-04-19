export abstract class VehiculeFactory {
    
    protected typeVehicule: string;
    protected sellPrice: number;
    protected costPrice: number;

    public abstract build(): void;

    public abstract marge(): void;

    public setTypeVehicule(type: string) {
        this.typeVehicule = type;
    }
    public setSellPrice(sell: number) {
        this.sellPrice = sell;
    }
    public setCostPrice(cost: number) {
        this.costPrice = cost;
    }
}