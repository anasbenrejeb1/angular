export interface Suggestion {
  id: number;
  title: string;
  description: string;
  category: string;
  date: Date;
  status: string;        // 'acceptee' | 'refusee' | 'en_attente'
  likes?: number;        // ajout facultatif pour gérer les likes
}
