import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() userProfile = new EventEmitter<any>();
  constructor() {}

  searchUser() {
    const username = (document.querySelector('.search_text') as HTMLInputElement).value;
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        this.userProfile.emit(data);
      });
  }
}
