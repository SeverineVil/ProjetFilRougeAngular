import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeDeBiere } from '../../entities/type-de-biere';
import { TypeDeBiereService } from '../../services/type-de-biere.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-update-type-de-biere',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-update-type-de-biere.component.html',
  styleUrl: './create-update-type-de-biere.component.scss'
})
export class CreateUpdateTypeDeBiereComponent {

  public typeDeBiere: TypeDeBiere;

  constructor(private typeDeBiereService: TypeDeBiereService, private router: Router,
    private activatedRoute: ActivatedRoute) {
    const id: string = this.activatedRoute.snapshot.params['id'];
    this.typeDeBiere =
      this.typeDeBiereService.getItemById(parseInt(id)) ?? new TypeDeBiere();
  }

  public get isInCreation(): boolean {
    return this.typeDeBiere?.id == null;
  }

  public saveForm(): void {
    const success: boolean = this.isInCreation ?
      this.typeDeBiereService.create(this.typeDeBiere) :
      this.typeDeBiereService.update(this.typeDeBiere);

    // Redirection de l'utilisateur vers la liste des types de bière
    this.router.navigateByUrl('types-de-biere');
  }
}
