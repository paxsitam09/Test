import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../core/header/header.component';

@Component({
  selector: 'app-shows-list',
  standalone: true,
  imports: [CommonModule,InfiniteScrollModule,RouterLink,HeaderComponent],
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss'
})
export class ShowsListComponent implements OnInit {

  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  movies: any[] = [];
  currentPage: number = 1;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getTvShows(this.currentPage).subscribe((data: any) => {
      this.movies = [...this.movies, ...data.results];
    });
  }

  onScroll(): void {
    this.currentPage++;
    this.loadMovies();
  }
}
