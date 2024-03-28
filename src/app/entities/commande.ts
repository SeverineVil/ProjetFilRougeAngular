export type Commandes = Commande[]

export interface Commande {
  id?: number
  idClient: number
  idTable: number
  idPlats?: number[]
  etatCommande?: string
  montant?: number
}
