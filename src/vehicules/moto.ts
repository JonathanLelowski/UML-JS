import { VehiculeFactory } from "./vehiculeFactory";


export class Moto extends VehiculeFactory {

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

    public catalog(): void {
        const margeTot = this.sellPrice - this.costPrice;
        console.log(margeTot + ' euros')
    }

    public constructor() {  
        super();
        this.setTypeVehicule('moto');
        this.setSellPrice(this.sellPrice); 
        this.setCostPrice(this.costPrice);
        }

    /** public setSellPriceM(spriceM: number): void {
        this.sellPriceM = spriceM;
        }

    public setCostPriceM(cPriceM: number): void {
        this.costPriceM = cPriceM;
        }*/
    }