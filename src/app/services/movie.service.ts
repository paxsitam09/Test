import { Injectable,Inject, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class MovieService {
    http = inject(HttpClient);
    private apiURL='https://api.themoviedb.org/3';
    private apiKey='5bb6689560a8ce3d957a16c97b277cde';

  getTvShows(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiURL}/discover/tv?api_key=${this.apiKey}&page=${page}`);
  }

  getPopularMovies(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiURL}/movie/popular?api_key=${this.apiKey}&page=${page}`);
  }
  
  getMovieDetails(movieId:number):Observable<any> {
    return this.http.get<any>(`${this.apiURL}/movie/${movieId}?api_key=${this.apiKey}`)
  }
  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiURL}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}`);
  }

}