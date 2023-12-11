// ressource-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RessourceService, Ressource } from '../../Services/ressource.service';

@Component({
  selector: 'app-ressource-detail',
  templateUrl: './ressource-detail.component.html',
  styleUrls: ['./ressource-detail.component.css']
})
export class RessourceDetailComponent implements OnInit {
  ressource: Ressource | undefined;

  constructor(
    private route: ActivatedRoute,
    private ressourceService: RessourceService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const titre = params.get('titre');
      if (titre) {
        this.ressource = this.ressourceService.getRessourceByTitre(titre);
      }
    });
  }
}
