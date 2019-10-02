import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'side-chef';
  currentPage: string;

  changePage(page) {
    this.currentPage = page;
  }
}
