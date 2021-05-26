import {Personnage} from "./combattants/Personnage"
import read from 'readline-sync';
import { Monstre } from "./combattants/Monstre";
import { Combattant } from "./combattants/Combattant";
export class Monde{
    
    /**
     * cette méthode crée un personnage
     * @returns le personnage créé
     */
    static personnageFactory = () : Personnage =>{
        console.log("création d'un personnage")
        let nomPersonnage = read.question("nom du personnage?");
        return new Personnage(50,10,nomPersonnage) 
    
    }

    static monstreFactory = () : Monstre =>{
        console.log("création d'un monstre")
        return new Monstre(35,2,Monde.genererNom()) 
    
    }

    static genererNom = () : string =>{
        const debutNom : string[]= ["chat","chien","chaton"];
        const finNom :string[] = [" mechant"," de feu"," de la mort"];
        let nomGenere :string = debutNom[Math.floor(Math.random()*3)] + finNom[Math.floor(Math.random()*3)]
        return nomGenere;

    }

    /**
     * On lance le combat à mort entre le combattant 1 et le combattant 2
     * @param combattant1 Le premier combattant
     * @param combattant2 Le second combattant
     */
    static combat = (combattant1 : Combattant, combattant2 : Combattant) : void => {
        while (combattant2.pointsDeVie>0 && combattant1.pointsDeVie >0){            

            combattant1.attaquer(combattant2);
            // combattant2.pointsDeVie -= combattant1.degats;
            if (combattant2.pointsDeVie<=0){
                AfficherCombattantMort(combattant1, combattant2);
                // afficherPersonnageMort(combattant1, combattant2);
                break;
            }
            else {
                console.log(`${combattant1.nom} attaque ${combattant2.nom}, ${combattant2.nom} : ${combattant2.pointsDeVie} pvs restants  `);
            }
            
            combattant2.attaquer(combattant1);
            // combattant1.pointsDeVie -= combattant2.degats;
            if (combattant1.pointsDeVie<=0){
                AfficherCombattantMort(combattant2,combattant1);
                // console.log(`${personnage.nom} attaque ${combattant1.nom}, ${combattant1.nom} :${combattant1.nom} mort`);
                // afficherMonstreMort(combattant2, combattant1);
                break
            }
            else {
                console.log(`${combattant2.nom} attaque ${combattant1.nom}, ${combattant1.nom} : ${combattant1.pointsDeVie} pvs restants  `);
            }

        }

    }

}

/**
 * Affiche la mort de combattantMort tué par combattantTueur après son attaque
 * @param combattantTueur 
 * @param combattantMort 
 */
function AfficherCombattantMort(combattantTueur: Combattant, combattantMort: Combattant) {
    console.log(`${combattantTueur.nom} attaque ${combattantMort.nom}, ${combattantMort.nom} mort !`);
}
