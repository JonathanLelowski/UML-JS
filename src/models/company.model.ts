import { OutputInterface } from "../utils/output-interface";

export class CompanyModel {
    private id: number;
    private name: string;
    private address: string;
    private city: string;
    private zipcode: string;

    private strategy: OutputInterface<CompanyModel>;
    
    public constructor (id: number) {
        this.id = id;
        }
    
    public setId(id: number) {
        if (this.id == null) { // === comparaison de valeur et de type, == comparaison de valeur uniquement
            this.id = id;
            }    
        }
    public getId(): number {
        return this.id
        } 

    public setStrategy(strategy: OutputInterface<CompanyModel>) {
        this.strategy = strategy;
        } 

    /**
     * @param name 
     * @return string
     * this : instance courante de la classe
     */
    public setName(name: string) {
        this.name = name;
        }
    public getName(): string {
        return this.name;
        } 

    public setAddress(address: string) {
        this.address = address;
        }
    public getAddress(): string {
        return this.address;
        } 

    public setCity(city: string) {
        this.city = city;
        }
    public getCity(): string {
        return this.city;
        } 

    public setZipCode(zipcode: string) {
        this.zipcode = zipcode;
        }
    public getZipCode(): string {
        return this.zipcode;
        }

    public useOutputStrategy(): JQuery {
        return this.strategy.output(this);
        }
 /**
  * Classe publication
  * Permet de publier sur une page web
  * w3school : balise JS
  * <strong> : gras
  * <p> : début d'un paragraphe // </p> : fin d'un paragraphe
  * <br> : saut de ligne
  * <em> : en emphase (texte différent du reste)
  * <h2> : titre
  */

    public toString(howTo: number): string{
        let output: string;
        if (howTo == 1){
            output = '<div.class="col-12 click" data-rel="' + this.id + '">';
            output += '<h2><i class="icon-office"></i> ' + this.name + '</h2>';
            output += '<p><i class="icon-address-book"></i>' + this.address + '<br>';
            output += this.zipcode + ' <em>' + this.city + '<em></p></div>';
            } else if (howTo == 2) {
                output += '<h2><i class="icon-office"></i> ' + this.name + '</h2>';
                } else if (howTo == 3) {
                    output += '<h2><i class="icon-office"></i> ' + this.name + '</h2>';
                    output += '<p><i class="icon-address-book"></i>' + this.address + '<br>';
                }
                return output
        }
    }