import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Movie } from "./movie";

@Injectable({
  providedIn: "root"
})
@Injectable()
export class MovieService {
  private moviesUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=1bc173b5";

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      map(data => data),
      catchError(this.handleError)
    );
  }

  getMovie(title: string): Observable<Movie> {
    return this.getMovies().pipe(
      map(movies => movies.find(movie => movie.Title === title))
    );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || "Server error");
  }
}
