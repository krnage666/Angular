// ressource-form.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RessourceService, Ressource } from '../../Services/ressource.service';

@Component({
  selector: 'app-ressource-form',
  templateUrl: './ressource-form.component.html',
  styleUrls: ['./ressource-form.component.css']
})
export class RessourceFormComponent implements OnInit {
  ressource: Ressource = {
    titre: '',
    description: '',
    dateAjout: new Date()
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ressourceService: RessourceService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const titre = params.get('titre');
      if (titre) {
        const existingRessource = this.ressourceService.getRessourceByTitre(titre);
        if (existingRessource) {
          this.ressource = { ...existingRessource };
        }
      }
    });
  }

  saveRessource() {
    // Add or update the ressource
    if (this.ressource.titre) {
      if (this.ressourceService.getRessourceByTitre(this.ressource.titre)) {
        // Update existing ressource
        // Implement update logic here
      } else {
        // Add new ressource
        this.ressourceService.addRessource(this.ressource);
      }

      // Redirect to ressource list
      this.router.navigate(['/']);
    }
  }
}
