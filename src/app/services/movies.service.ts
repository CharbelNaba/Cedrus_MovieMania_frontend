import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + 'movie');
  }

  rateMovie(rating): any{
    return this.http.post<any>(this.url + 'rating', rating).subscribe(res => console.log(res));;
  }

  deleteMovie(movieId): Observable<any> {

    return this.http.delete<any>(this.url + 'movie/' + movieId);
  }
}
