import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Pour *ngIf, etc. dans template
import { SuggestionService } from '../suggestion.service';  // Ajuste chemin si besoin
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  standalone: true,  // Si Angular 17+ ; enlève si module-based
  imports: [CommonModule],
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion?: Suggestion;
  id: number | undefined;
  notFound: boolean = false;  // Pour gérer 404 dans le template

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suggestionService: SuggestionService  // Injection du service pour données dynamiques
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;  // Récupère :id de l'URL et convertit en number
    if (this.id) {
      this.suggestion = this.suggestionService.getSuggestions().find(s => s.id === this.id);  // Cherche dans le service (dynamique !)
      if (!this.suggestion) {
        this.notFound = true;  // Marque comme non trouvée
        // Optionnel : Redirige auto vers liste
        // this.router.navigate(['/suggestions']);
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/suggestions']);
  }
}