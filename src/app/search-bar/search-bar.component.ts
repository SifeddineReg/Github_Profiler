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
      .then(response => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then(data => {
        this.userProfile.emit(data);
      })
      .catch(error => {
        this.userProfile.emit({
          login: 'Jhon Doe',
          id: 103838543,
          node_id: 'U_kgDOBjBzTw',
          avatar_url: 'https://via.placeholder.com/120',
          gravatar_id: '',
          url: 'https://api.github.com/users/JhonDoe',
          html_url: '',
          followers_url: '',
          following_url: '',
          gists_url: '',
          starred_url: '',
          subscriptions_url: '',
          organizations_url: '',
          repos_url: '',
          events_url: '',
          received_events_url: '',
          type: '',
          site_admin: false,
          name: '',
          company: '',
          blog: '',
          location: '',
          email: '',
          hireable: '',
          bio: 'They use me as a placeholder for the examples.',
          twitter_username: '',
          public_repos: 5,
          public_gists: 0,
          followers: 3,
          following: 2,
          created_at: '2022-04-16T14:28:52Z',
          updated_at: '2024-07-06T11:18:14Z'
        });
      })
  }
}
