import { Brasserie } from "./brasserie";
import { TypeDeBiere } from "./type-de-biere";

export class Biere {
    public id?: number;
    public libelle?: string;
    public typeDeBiere?: TypeDeBiere;
    public brasserie?: Brasserie;

    /**
     * Alcool By Volume
     */
    public abv?: number;

    /**
     * l’International Bitterness Unit (l'amertume)
     */
    public ibu?: number;

    /**
     * European Brewery Convention (couleur de la bière)
     */
    public ebc?: number;
}