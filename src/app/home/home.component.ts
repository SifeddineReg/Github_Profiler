import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent, ProfileCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
