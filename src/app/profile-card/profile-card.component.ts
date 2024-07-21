import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [DatePipe, LowerCasePipe],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input() userProfile: any;

  ngOnInit() {
    if (!this.userProfile) {
      this.userProfile = {
        login: 'Sifeddine',
        id: 103838543,
        node_id: 'U_kgDOBjBzTw',
        avatar_url: 'https://via.placeholder.com/120',
        gravatar_id: '',
        url: 'https://api.github.com/users/SifeddineReg',
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
        bio: 'CS student at EPITA Paris',
        twitter_username: '',
        public_repos: 5,
        public_gists: 0,
        followers: 3,
        following: 2,
        created_at: '2022-04-16T14:28:52Z',
        updated_at: '2024-07-06T11:18:14Z'
      };
      this.userProfile.username = `@${this.userProfile.login}`;
    }
  }
}
