import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/Movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.css']
})
export class MoviesTableComponent implements OnInit {

  movies: Movie[];

  headElements = ['name', 'genre_name', 'rating', 'rate', 'Delete'];
  ratings = [1, 2, 3, 4, 5]
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(data => this.movies = data);
  }


  giveRating(rating, movieId): void {

    var body = {
      value: rating,
      movie_id: movieId
    }
    console.log(body)

    this.moviesService.rateMovie(body);
  }

  deleteMovie(movieId): void {
    // this.moivesService
    this.moviesService.deleteMovie(movieId).subscribe(res => console.log(res));
  }

}
