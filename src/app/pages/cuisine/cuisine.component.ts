import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cuisine',
  standalone: true,
  imports: [],
  templateUrl: './cuisine.component.html',
  styleUrl: './cuisine.component.scss'
})
export class CuisineComponent {

  @Input()
  private platAenvoyer?: string;




  public cestPret(): boolean{


    return false;
}




}
