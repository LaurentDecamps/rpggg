import { Personnage } from "./combattants/Personnage"
import read from 'readline-sync';
import BasicOptions from 'readline-sync';
import { Monstre } from "./combattants/Monstre";
import { Combattant } from "./combattants/Combattant";
import { Classe } from "./Classe";
import { AttaqueBasique } from "./attaques/AttaqueBasique";
import { Attaque } from "./attaques/Attaque";
export class Monde {

    /**
     * cette méthode crée un personnage
     * @returns le personnage créé
     */
    static personnageFactory = (): Personnage => {
        console.log("création d'un personnage");
        let nomPersonnage = "Roger";//read.question("Nom du personnage?");
        // Récupérer l'ensemble des noms de classes de la classeFactory
        let nomClasses : string[] = [];
        Monde.tableauClassefactory.forEach(classe => {
            nomClasses.push(classe.nom);
        });
        let indexClasse : number = read.keyInSelect(nomClasses, "Quelle classe choisissez vous ?",  {cancel:false});
        console.log(`Index de la classe choisi dans le tableau de classe :  ${indexClasse}`);
        return new Personnage(50, 10, nomPersonnage, Monde.tableauClassefactory[indexClasse]);
    }

    static monstreFactory = (): Monstre => {
        console.log("création d'un monstre")
        return new Monstre(35, 2, Monde.genererNom())

    }

    static attaqueListFactory = (): Attaque[] => {
        const attaque1: Attaque = new AttaqueBasique(10, 20, "Foncer comme un gros bourrin");
        const attaque2: Attaque = new AttaqueBasique(50, 10, "coup de tete");
        const attaque3: Attaque = new AttaqueBasique(90, 2, "gifle");
        const listeAttaques = [attaque1, attaque2, attaque3];
        return listeAttaques;
    }

    /**
     * Crée un ensemble de classes "Classes" et le retourne. 
     * @returns Le tableau des classes générées
     */
    static classeFactory = (): Classe[] => {
        const classePaladin: Classe = new Classe("Paladin", Monde.attaqueListFactory());
        const classeGuerrier: Classe = new Classe("Guerrier", Monde.attaqueListFactory());
        const classeVielleMeme: Classe = new Classe("VielleMémé", Monde.attaqueListFactory());
        const classes: Classe[] = [classePaladin, classeGuerrier, classeVielleMeme];
        return classes;
    }

    private static tableauClassefactory : Classe[] = Monde.classeFactory();

    static genererNom = (): string => {
        const debutNom: string[] = ["chat", "chien", "chaton"];
        const finNom: string[] = [" mechant", " de feu", " de la mort"];
        let nomGenere: string = debutNom[Math.floor(Math.random() * 3)] + finNom[Math.floor(Math.random() * 3)]
        return nomGenere;
    }

    /**
     * On lance le combat à mort entre le combattant 1 et le combattant 2
     * @param combattant1 Le premier combattant
     * @param combattant2 Le second combattant
     */
    static combat = (combattant1: Combattant, combattant2: Combattant): void => {
        while (combattant2.pointsDeVie > 0 && combattant1.pointsDeVie > 0) {
            
            combattant1.attaquer(combattant2);
            // combattant2.pointsDeVie -= combattant1.degats;
            if (combattant2.pointsDeVie <= 0) {
                AfficherCombattantMort(combattant1, combattant2);
                // afficherPersonnageMort(combattant1, combattant2);
                break;
            }
            else {
                console.log(`${combattant1.nom} attaque ${combattant2.nom}, ${combattant2.nom} : ${combattant2.pointsDeVie} pvs restants  `);
            }
            read.question("");

            combattant2.attaquer(combattant1);
            // combattant1.pointsDeVie -= combattant2.degats;
            if (combattant1.pointsDeVie <= 0) {
                AfficherCombattantMort(combattant2, combattant1);
                // console.log(`${personnage.nom} attaque ${combattant1.nom}, ${combattant1.nom} :${combattant1.nom} mort`);
                // afficherMonstreMort(combattant2, combattant1);
                break
            }
            else {
                console.log(`${combattant2.nom} attaque ${combattant1.nom}, ${combattant1.nom} : ${combattant1.pointsDeVie} pvs restants  `);
            }
            read.question("");
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
