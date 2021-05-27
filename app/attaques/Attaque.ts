import { Combattant } from "../combattants/Combattant";

export interface Attaque {

    nom: string;
    degats : number;

    /**
     * Nombre Compris entre 0 et 100
     */
    chanceToucher : number;

    /**
     * Renvoie les dégats de l'attaque si 
     * la chance de toucher est inférieur strictement
     * à un nombre alétoire
     */
    lancerAttaque(): number;

}