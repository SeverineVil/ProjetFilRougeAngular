import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../entities/reservations';
import { ReservationService } from '../../services/reservation.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent implements OnInit {
  public _reservations$?: Observable<Reservation[]>;

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.getAllReservations();

  }

  getAllReservations(): void {
    this._reservations$ = this.reservationService.getAllResa();
  }
}