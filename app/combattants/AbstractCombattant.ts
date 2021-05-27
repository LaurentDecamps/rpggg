import { Combattant } from "./Combattant";

export abstract class AbstractCombattant implements Combattant{
    private _pointsDeVie : number;
    private _degats: number;
    private _nom: string;

    public constructor(pointsDeVie : number, degats : number, nom : string){
        this._pointsDeVie = pointsDeVie;
        this._degats = degats;
        this._nom = nom;       
    }

    attaquer(adversaire: Combattant): void {
        // Afficher un message pour notifier de l'attaque
        console.log(`${this._nom} attaque ${adversaire.nom} ! Le salaud !`);
        // Appeler la methode Defendre de l'adversaire en passant en Params.
        adversaire.defendre(this._degats);
    }

    defendre(degats: number): void {
        // Soustraire aux points de vie les degats passé en params
        this._pointsDeVie -= degats;
        // Afficher les point de vie restants
        console.log(`Il ne reste que ${this._pointsDeVie} point de vie à ${this._nom}`);
    }

    getNom(): string {
        throw new Error("Method not implemented.");
    }

    setNom(nom: string): void {
        throw new Error("Method not implemented.");
    }
    
    getPointsDeVie(): number {
        throw new Error("Method not implemented.");
    }

    setPointsDeVie(pdv: number): void {
        throw new Error("Method not implemented.");
    }

    getDegats(): number {
        throw new Error("Method not implemented.");
    }
    
    setDegats(degats: number): void {
        throw new Error("Method not implemented.");
    }

    public get pointsDeVie(): number {
        return this._pointsDeVie;
    }
    public set pointsDeVie(value: number) {
        this._pointsDeVie = value;
    }

    public get degats(): number {
        return this._degats;
    }
    public set degats(value: number) {
        this._degats = value;
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
}