import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Pour *ngIf, etc. dans template
//import { SuggestionService } from '../suggestion.service';  // Ajuste chemin si besoin
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';
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
  private suggestionService: SuggestionService
) {}

 ngOnInit(): void {
  const id = this.route.snapshot.params['id'];  // Récupère l'ID de l'URL (ex. /suggestions/1)
  const allSuggestions = this.suggestionService.getSuggestionList();
  this.suggestion = allSuggestions.find(s => s.id === +id);  // Filtrage par ID (+id convertit string en number)
  if (!this.suggestion) {
    this.router.navigate(['/suggestions']);  // Redirige si non trouvé
  }
}

  goBack(): void {
    this.router.navigate(['/suggestions']);
  }
}