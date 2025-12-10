import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // Ajouté pour Reactive Forms (formulaire suggestion)
import { RouterModule } from '@angular/router';
import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';  // Non-standalone : reste en declarations
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';  // Standalone : déplacé en imports
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';  // Standalone : déplacé en imports

@NgModule({
  declarations: [
    ListSuggestionComponent  // Seulement les composants non-standalone
  ],
  imports: [
    CommonModule,
    FormsModule,  // Pour ngModel (si utilisé dans la liste ou ailleurs)
    ReactiveFormsModule,  // Nécessaire pour le formulaire réactif dans SuggestionFormComponent
    RouterModule,  // Pour les directives routerLink, etc.
    SuggestionsRoutingModule,  // Routes enfants : /suggestions, /suggestions/add, /suggestions/:id
    SuggestionDetailsComponent,  // Standalone : importé ici pour disponibilité
    SuggestionFormComponent  // Standalone : importé ici pour disponibilité
  ]
})
export class SuggestionsModule { }