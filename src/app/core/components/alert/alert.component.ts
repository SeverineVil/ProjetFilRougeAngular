import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'core-alert',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {

  @Input()
  public text?: string;

  @Input()
  public canBeClosed: boolean = false;

  @Input()
  public color: string = 'primary';

  @Output()
  public alertClosed = new EventEmitter<void>();

  public emitCloseEvent(): void {
    console.log('alert was closed');

    // On envoie une notification au parent pour indiquer que l'alerte a été fermée
    this.alertClosed.emit();
  }
}
