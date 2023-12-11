// ressource.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  private ressources: Ressource[] = [];
  private ressourceSubject = new BehaviorSubject<Ressource[]>([]);

  constructor() {}

  getRessources() {
    return this.ressourceSubject.asObservable();
  }

  addRessource(ressource: Ressource) {
    this.ressources.push(ressource);
    this.ressourceSubject.next([...this.ressources]);
  }
  getRessourceByTitre(titre: string): Ressource | undefined {
    return this.ressources.find(ressource => ressource.titre === titre);
  }
  // Implement update, delete, etc.
}

export interface Ressource {
  titre: string;
  description: string;
  url?: string;
  dateAjout: Date;
  image?: string;
}
