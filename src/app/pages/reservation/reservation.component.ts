import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../entities/reservations';
import { ReservationService } from '../../services/reservation.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent implements OnInit {
  public _reservations$?: Observable<Reservation[]>;

  constructor(private reservationService: ReservationService, private router: Router) {}

  ngOnInit(): void {
    this.getAllReservations();

  }

  getAllReservations(): void {
    this._reservations$ = this.reservationService.getAllResa();
  }
  
  acceptResa(reservationId: number): void {  
    console.log('Réservation acceptée avec succès !',{reservationId});
    this.router.navigate(['menu-equipe/reservation/tables', reservationId]);
  }

  refuseResa(reservationId: number): void {   
    console.log('Réservation refusée avec succès !');
  }
}

 