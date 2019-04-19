import { VehiculeFactory } from './vehiculeFactory'

export class Voiture extends VehiculeFactory {

    /**
     * dessiner
 : void    */
    public build(): void {
        console.log('Nous construisons une : ' + this.typeVehicule);
        console.log('dont le coût de fabrication est de : ' + this.costPrice + ' euros')
        console.log('Et que vous allez payer ' + this.sellPrice + ' euros')
        }

    public marge(): void {
        const marge = this.sellPrice - this.costPrice;
        console.log('Grâce à vous, nous allons gagner ' + marge + ' euros')
        }

    public constructor() {
        super();
        this.setTypeVehicule('voiture');
        this.setSellPrice(this.sellPrice); 
        this.setCostPrice(this.costPrice);
        }

    /** public setSellPriceV(spriceV: number): void {
        this.sellPriceV = spriceV;
        }

    public setCostPriceV(cpriceV: number): void {
        this.costPriceV = cpriceV;
        }*/
    }