import { Classe } from "../Classe";
import { AbstractCombattant } from "./AbstractCombattant";
import { Combattant } from "./Combattant";

export class Personnage extends AbstractCombattant{
    
    private _classe: Classe; 
    public get classe(): Classe {
        return this._classe;
    }
    public set classe(value: Classe) {
        this._classe = value;
    }

    constructor(pointsDeVie : number, degats : number, nom : string, classe : Classe){
        super(pointsDeVie,degats,nom);
        this._classe = classe;
    }

    /**
     * Appel de la méthode défendre du combattant attaqué
     * avec le résultat de l'attaque (gestion des chances de toucher)
     * @param combattantAAttaquer Le combattant
     */
    attaquer(combattantAAttaquer : Combattant ) :void{
        console.log(`Notre héros ${this.nom} lance son attaque :`);
        combattantAAttaquer.defendre(this._classe.getAttaque().lancerAttaque());
    }
}
