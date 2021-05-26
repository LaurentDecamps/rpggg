import { AbstractCombattant } from "./AbstractCombattant";

export class Monstre extends AbstractCombattant{
    constructor(pointsDeVie : number, degats : number, nom : string){

        super(pointsDeVie,degats,nom);

    }


}
