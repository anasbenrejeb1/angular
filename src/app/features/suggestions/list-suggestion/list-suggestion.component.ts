import { Component, OnInit } from '@angular/core';  // Add OnInit
import { SuggestionService } from '../suggestion.service';  // Import service
import { Suggestion } from '../../../models/suggestion';
import { Router } from '@angular/router';  // For navigation if needed

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent implements OnInit {  // Implement OnInit
  searchTerm = '';
  favorites: Suggestion[] = [];
  suggestions: Suggestion[] = [];  // Empty initially; load in ngOnInit

  constructor(private suggestionService: SuggestionService) {}  // Inject service

  ngOnInit(): void {
    this.suggestions = this.suggestionService.getSuggestions();  // Load from service
  }

  incrementLike(s: Suggestion) {
    s.likes = (s.likes || 0) + 1;
  }

  addToFavorites(s: Suggestion) {
    if (!this.isFavorite(s)) {
      this.favorites.push(s);
    }
  }

  isFavorite(s: Suggestion): boolean {
    return this.favorites.some(f => f.id === s.id);
  }

  get filteredSuggestions(): Suggestion[] {
    const term = this.searchTerm.trim().toLowerCase(); 
    if (!term) return this.suggestions;
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(term) ||
      s.category.toLowerCase().includes(term)
    );
  }
}