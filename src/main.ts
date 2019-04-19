import { CompanyModel } from './models/company.model';
import { ToHtml } from './utils/to-html';
import { CompanyRepository } from './models/company-repository';
import { NameStrategy } from './models/strategies/name-strategy';
import { NameAndZipStrategy } from './models/strategies/Nameandzip-strategy';
import { AllStrategy } from './models/strategies/all-strategy'
import { Carre } from './geometrie/carre';
import { Cercle } from './geometrie/cercle';
import { Triangle } from './geometrie/triangle';
import { Table } from './geometrie/table';
import { Paintable } from './geometrie/paintable-interface';
import { Voiture } from './vehicules/voiture';
import { Moto } from './vehicules/moto';
/** import { Catalog } from './vehicules/catalog';*/
/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */

 // Istancier un "repository" de CompanyModel
 const companyRepository: CompanyRepository = new CompanyRepository();

// Création d'Aélion et ajout adresse, ville et code postal
const aelion: CompanyModel = new CompanyModel(1);
aelion.setStrategy(new AllStrategy());
aelion.setId(1);
aelion.setName('Aélion');
aelion.setAddress('95, Chemin de Gabardie');
aelion.setCity('Toulouse');
aelion.setZipCode('31200');

// Ajoute Aelion dans le repository...
companyRepository.add(aelion);

// Création de Capgemini et ajout adresse, ville et code postal
const cap: CompanyModel = new CompanyModel(2);
cap.setStrategy(new AllStrategy());
cap.setId(2);
cap.setName('Capgemini');cap.setAddress('109, Avenue du Général Eisenhower');
cap.setCity('Toulouse');
cap.setZipCode('31000');

// Ajoute Cap dans le repository...
companyRepository.add(cap);

// Pour contrôle
console.log('Nombre de sociétés : ' + companyRepository.getSize());
console.log('Nom Aélion : ' + aelion.getName() + ' ' + aelion.getId());
console.log('Adress Aélion : ' + aelion.getAddress() + ', ' + aelion.getCity() + ', ' + aelion.getZipCode());
console.log('Nom Capgemini : ' + cap.getName());
console.log('Adress Capgemini : ' + cap.getAddress() + ', ' + cap.getCity() + ', ' + cap.getZipCode());

// Envoyer les infos vers la page web
const toHtml = new ToHtml();

toHtml.appendToPage(aelion.useOutputStrategy());
toHtml.appendToPage(cap.useOutputStrategy());

/** // Ecouter le clic dans le document 
const clickDetection: any = document.querySelector('.click');
clickDetection.addEventListener(
    "click",
    () => {
        alert('Merci...')
    }
)*/

/** const myCounter = new counter()
myCounter.setMax(10);
myCounter.setStep(1);
toHtml.add(counter);*/


//Illustration des classes, héritages et interfaces
const grandCarre: Carre = new Carre();
// Recalibrer la machine à 100
grandCarre.setSideLenth(100);
grandCarre.dessiner();

const unAutreGrandCarre: Carre = new Carre();

const petitCarre: Carre = new Carre();
// Recalibrer la machine à 50
petitCarre.setSideLenth(100);
petitCarre.dessiner(); 

//Tracer un cercle de diamètre 75
const grandCercle: Cercle = new Cercle();
grandCercle.setDiaLenth(75);
grandCercle.dessiner();

// Tracer un triangle de côté A, B et C
const grandTriangle: Triangle = new Triangle();
grandTriangle.setSideLenthA(33);
grandTriangle.setSideLenthB(35);
grandTriangle.setSideLenthC(40);
grandTriangle.dessiner();

const petitTriangle: Triangle = new Triangle();
petitTriangle.setSideLenthA(33);
petitTriangle.setSideLenthB(35);
petitTriangle.setSideLenthC(40);
petitTriangle.dessiner();

//Nouvelle table à peindre
const grandeTable: Table = new Table(60, 35); 
grandeTable.make();
const toCabine: Array<Paintable> = new Array();
toCabine.push(grandCarre);
toCabine.push(petitCarre);
toCabine.push(grandCercle);
toCabine.push(grandTriangle);
toCabine.push(grandeTable);

toCabine.forEach((object: any) => {
    object.paint('Black');
    });

// je veux comparer les deux carrés
if(grandCarre.compareTo(petitCarre) === 0) {
    console.log('Les deux carrées sont identiques');
} else {
    console.log('Les deux carrés sont différents');
}

// Je veux comparer deux triangles 
if(grandTriangle.compareTo(petitTriangle) === 0) {
    console.log('Les deux triangles sont identiques');
} else {
    console.log('Les deux triangles sont différents');
}

// Fabrique d'une voiture 
const peugeot: Voiture = new Voiture(); 
peugeot.setTypeVehicule('Voiture');
peugeot.setCostPrice(11000);
peugeot.setSellPrice(12000);
peugeot.build();
peugeot.marge();

// Fabrique d'une moto
const yamaha: Moto = new Moto(); 
yamaha.setTypeVehicule('moto');
yamaha.setCostPrice(4500);
yamaha.setSellPrice(9999);
yamaha.build();
yamaha.marge();
yamaha.catalog();

const bmw: Voiture = new Voiture();
bmw.setTypeVehicule('moto');
bmw.setCostPrice(18000);
bmw.setSellPrice(30000);
bmw.build();
bmw.marge();
