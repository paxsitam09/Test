import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../../core/header/header.component';
import { MovieService } from '../../services/movie.service';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent,MovieListComponent],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  auth = inject(AuthService);
  movieService = inject(MovieService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;

  ngOnInit(): void {
  }

  singOut() {
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
