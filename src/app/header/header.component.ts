import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {

  recipePageStatus: boolean = false;
  shoppingListStatus: boolean = false;

  @Output() currentPage : EventEmitter<string> = new EventEmitter();

  showPage(pageSelected: string) {
    this.currentPage.emit(pageSelected);
  }

}
