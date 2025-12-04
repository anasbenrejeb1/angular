import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../models/suggestion'; // Chemin vers ton interface n°2

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalSuggestions: number = 0;
  acceptedSuggestions: number = 0;
  pendingSuggestions: number = 0;
  rejectedSuggestions: number = 0;

  // Liste statique du n°2 (copie pour stats)
  private suggestions: Suggestion[] = [
    { id: 1, title: 'Organiser une journée team building', description: '...', category: 'Événements', date: new Date('2025-01-20'), status: 'acceptee' },
    { id: 2, title: 'Améliorer le système de réservation', description: '...', category: 'Technologie', date: new Date('2025-01-15'), status: 'refusee' },
    { id: 3, title: 'Créer un système de récompenses', description: '...', category: 'Ressources Humaines', date: new Date('2025-01-25'), status: 'refusee' },
    { id: 4, title: 'Moderniser l\'interface utilisateur', description: '...', category: 'Technologie', date: new Date('2025-01-30'), status: 'en_attente' },
    { id: 5, title: 'Formation à la sécurité informatique', description: '...', category: 'Formation', date: new Date('2025-02-05'), status: 'acceptee' }
  ];

  ngOnInit() {
    this.totalSuggestions = this.suggestions.length;
    this.acceptedSuggestions = this.suggestions.filter(s => s.status === 'acceptee').length;
    this.pendingSuggestions = this.suggestions.filter(s => s.status === 'en_attente').length;
    this.rejectedSuggestions = this.suggestions.filter(s => s.status === 'refusee').length;
  }
}