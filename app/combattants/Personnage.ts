import { AbstractCombattant } from "./AbstractCombattant";

export class Personnage extends AbstractCombattant{
    constructor(pointsDeVie : number, degats : number, nom : string){

        super(pointsDeVie,degats,nom);

    }


}
