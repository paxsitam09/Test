import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { HeaderComponent } from '../../core/header/header.component';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit{
  movie: any;

  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  
  constructor (
    private route : ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const movieId = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovieDetails(movieId).subscribe((data) =>{
      this.movie=data;
    });
  }

}
