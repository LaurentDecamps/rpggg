import { Combattant } from "./combattants/Combattant";

export interface Attaque {

    lancerAttaque(lanceur: Combattant, cible: Combattant): number;
    getNom(): string;
    setNom(nom: string): void;
    getDegats(): number;
    setDegats(degats: number): void;
}