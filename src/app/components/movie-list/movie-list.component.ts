import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule,InfiniteScrollModule,RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})

export class MovieListComponent implements OnInit {

  movies: any[] = [];
  currentPage: number = 1;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getPopularMovies(this.currentPage).subscribe((data: any) => {
      this.movies = [...this.movies, ...data.results];
    });
  }

  onScroll(): void {
    this.currentPage++;
    this.loadMovies();
  }
}
