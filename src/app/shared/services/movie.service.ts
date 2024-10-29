import { Injectable,Inject, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmI2Njg5NTYwYThjZTNkOTU3YTE2Yzk3YjI3N2NkZSIsIm5iZiI6MTczMDE0MDk5Ni40ODEyNjcsInN1YiI6IjY2ZjY0Njk2N2IzMDcyNjg4ZDk2NWJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vfkcd5BRrwX_MiaADqlcDXnWgIIPmaPIr98plcQ1Obs'
  }
}

@Injectable({
    providedIn:'root'
})
export class MovieService {
    http = inject(HttpClient);
    private apiURL='https://api.themoviedb.org/3';
    private apiKey='5bb6689560a8ce3d957a16c97b277cde';


  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }

  getPopularMovies(page: number = 1): Observable<any> {
    // return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
    // return this.http.get<any>(`${this.apiURL}/movie/popular?api_key=${this.apiKey}`)
    return this.http.get(`${this.apiURL}/movie/popular?api_key=${this.apiKey}&page=${page}`);

  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }

  
  getMovieDetails(movieId:number):Observable<any> {
    // return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
    return this.http.get<any>(`${this.apiURL}/movie/${movieId}?api_key=${this.apiKey}`)
  }
  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiURL}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}`);
  }

}