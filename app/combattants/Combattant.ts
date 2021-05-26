export interface Combattant{

    pointsDeVie : number;
    degats: number;
    nom: string;

    /**
     * appelle la méthode defendre de l'adversaire passé en paramètre
     * @param adversaire 
     */
    
    attaquer(adversaire : Combattant) : void;

    /**
     * inflige des dégats au combattant
     * @param degats 
     */
    defendre(degats : number) : void;
    getNom() : string;
    setNom(nom : string) : void;
    getPointsDeVie() : number;
    setPointsDeVie(pdv : number) : void;
    getDegats() : number;
    setDegats(degats : number) : void ;
}