import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';

@NgModule({
  declarations: [ListSuggestionComponent, SuggestionDetailsComponent,],
  imports: [CommonModule, FormsModule, RouterModule, SuggestionsRoutingModule]
})
export class SuggestionsModule { }