import { Time } from "@angular/common";

export type Reservations = Reservation[]

export interface Reservation {
  id: number;
  id_client: number;
  id_table: number;
  dateReservation: Date;
  heureReservation: Time;
  etatReservation: string;
  tailleGroupe: number;
}
