import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-structural-directives',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-structural-directives.component.html',
  styleUrl: './new-structural-directives.component.scss'
})
export class NewStructuralDirectivesComponent {
  public booleanValue: boolean = false;

  public newValue?: string;
  public values: string[] = [];

  public switchValue?: string;

  public addValue(): void {
    if (this.newValue) {
      this.values.push(this.newValue);
      this.newValue = undefined;
    }
  }

  public removeValue(index: number): void {
    this.values.splice(index, 1);
  }
}
