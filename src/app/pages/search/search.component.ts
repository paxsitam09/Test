import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/header/header.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,HeaderComponent,InfiniteScrollModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent implements OnInit{
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  searchQuery: string = '';
  movies: any[] = [];
  currentPage: number = 1;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    // Subscribe to query params to get the search query
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'];
      if (this.searchQuery) {
        this.resetSearch();
        this.searchMovies();
      }
    });
  }

  searchMovies(): void {
    this.movieService.searchMovies(this.searchQuery, this.currentPage).subscribe((data: any) => {
      this.movies = [...this.movies, ...data.results];
    });
  }

  onScroll(): void {
    if (this.searchQuery) {
      this.currentPage++;
      this.searchMovies();
    }
  }

  resetSearch(): void {
    this.currentPage = 1;
    this.movies = [];
  }
}