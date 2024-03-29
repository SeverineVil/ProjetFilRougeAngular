import { Plat } from "./plat"

export type Commandes = Commande[]

export interface Commande {
  id?: number
  idClient: number
  idTable: number
  plats?: Plat[]
  etatCommande?: string
  montant?: number
}
