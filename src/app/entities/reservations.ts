import { Time } from "@angular/common";

export type Reservations = Reservation[]

export interface Reservation {
  id: number;
  client: Client;
  id_table: number;
  dateReservation: Date;
  heureReservation: Time;
  etatReservation: string;
  tailleGroupe: number;
}

export interface Client {
    id: number
    nom: string
    prenom: string
    mail: string
    telephone: string
    mdp: string
    token: any
    expirationTime: any
  }
