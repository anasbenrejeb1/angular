import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent  } from './list-suggestion/list-suggestion.component';  // Ajuste chemin/nom
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';  // Nouveau import

const routes: Routes = [
  { path: '', component: ListSuggestionComponent  },  // /suggestions → Liste
  { path: 'add', component: SuggestionFormComponent },  // /suggestions/add → Formulaire
  { path: ':id', component: SuggestionDetailsComponent }  // /suggestions/:id → Détails (ex. : /suggestions/1)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }