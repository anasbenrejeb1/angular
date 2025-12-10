import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuggestionService } from '../suggestion.service';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm!: FormGroup;
  categories: string[] = ['Idée produit', 'Amélioration', 'Bug', 'Autre'];
  currentDate: Date = new Date(); 
  currentDateStr: string = new Date().toISOString().split('T')[0];  

  constructor(
    private fb: FormBuilder,
    private suggestionService: SuggestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^[A-Z][a-zA-Z]*$/)  // Majuscule + lettres seulement
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(30)
      ]],
      category: ['', Validators.required],
      date: [{ value: this.currentDateStr, disabled: true }],  // String pour affichage, disabled
      status: [{ value: 'en attente', disabled: true }]
    });
  }

  onSubmit(): void {
    if (this.suggestionForm.valid) {
      const formValue = this.suggestionForm.getRawValue();
      const newSuggestion: Suggestion = {
        id: this.suggestionService.getNextId(),
        title: formValue.title,
        description: formValue.description,
        category: formValue.category,
        date: new Date(formValue.date),  // Reconverti string → Date pour le modèle
        status: formValue.status,
        likes: 0  // Par défaut (requis dans l'interface)
      };

      this.suggestionService.addSuggestion(newSuggestion);
      this.router.navigate(['/suggestions']);
    }
  }

  // Getters pour erreurs dans le template
  get title() { return this.suggestionForm.get('title'); }
  get description() { return this.suggestionForm.get('description'); }
  get category() { return this.suggestionForm.get('category'); }
}