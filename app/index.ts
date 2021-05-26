import {Personnage} from "./combattants/Personnage"
import {Monde} from "./Monde"
import { Monstre } from "./combattants/Monstre";

let personnage1 : Personnage = Monde.personnageFactory();
console.log(personnage1)
let monstre1 : Monstre = Monde.monstreFactory()
console.log(monstre1)
Monde.combat(personnage1,monstre1)