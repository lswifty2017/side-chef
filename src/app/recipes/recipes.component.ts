import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input() currentPage: string;

  constructor() { }

  ngOnInit() {
  }

}
