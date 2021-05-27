import { Attaque } from "./Attaque";

export class AttaqueBasique implements Attaque{
    private _nom: string;
    private _degats: number;    
    private _chanceToucher: number;
    
    /**
     * Constructeur d'une attaque basique
     * @param chanceToucher Poucentage entre 0 et 100 de toucher l'adversaire
     * @param degats Nombre de dégats de l'attaque
     * @param nom Nom de l'attaque, exemple : Tempète de wazaa
     */
    public constructor(chanceToucher : number, degats : number, nom : string){
        this._chanceToucher = chanceToucher;
        this._degats = degats;
        this._nom = nom;       
    }
    
    /**
     * Génére une attaque avec un poucentage alétaoire de chance de la rater
     * @returns Les dégats infligés
     */
    lancerAttaque(): number {
        // Génère un nombre aleatoire compris entre 0 et 100
        const nombreAleatoire = Math.random()*100;
        // si rand < chanceToucher
        if (nombreAleatoire <= this._chanceToucher){
            // retourner lanceur.Degats
            console.log(`Attaque réussi ! Lancer de chance de toucher ${nombreAleatoire} % <= chance de toucher ${this._chanceToucher}`);
            return this._degats;
        } else {
            // sinon
            // renvoyer 0 et afficher un message d'echec
            console.log(`Attaque ratée ! Lancer de chance de toucher ${nombreAleatoire} % > chance de toucher ${this._chanceToucher}`);
            return 0;
        }
    }    
   
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    public get degats(): number {
        return this._degats;
    }
    public set degats(value: number) {
        this._degats = value;
    }

    public get chanceToucher(): number {
        return this._chanceToucher;
    }

    public set chanceToucher(value: number) {
        if (value<=100 && value>=0){
            this._chanceToucher = value;
        }
        else {
            console.log("La chance de toucher doit être entre 0 et 100");
            // throw new error(`La chance de toucher doit être entre 0 et 100`)
        }
    }
}