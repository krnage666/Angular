// ressource-list.component.ts

import { Component, OnInit } from '@angular/core';
import { RessourceService, Ressource } from '../../Services/ressource.service';

@Component({
  selector: 'app-ressource-list',
  templateUrl: './ressource-list.component.html',
  styleUrls: ['./ressource-list.component.css']
})
export class RessourceListComponent implements OnInit {
  ressources: Ressource[] = [];

  constructor(private ressourceService: RessourceService) {}

  ngOnInit() {
    this.ressourceService.getRessources().subscribe(ressources => {
      this.ressources = ressources;
    });
  }
}
