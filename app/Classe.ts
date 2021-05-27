import { Attaque } from "./attaques/Attaque";
import { AttaqueBasique } from "./attaques/AttaqueBasique";

export class Classe {
    private _nom: string;
    private _listeAttaques: Attaque[];
    
    constructor(nom: string, listeAttaques: Attaque[]) {
        this._nom = nom;
        this._listeAttaques = listeAttaques;
    }
    
    getAttaque() : Attaque {
        // recuperer une attaque parmi les attaques de la classe
        const attaqueChoisit = this._listeAttaques[Math.round(Math.random() * (this._listeAttaques.length-1))];
        console.log(`Par la puissance du crane ancestrale j'invoque l'attaque du ${attaqueChoisit.nom}` )
        return attaqueChoisit;
    }
    
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
}