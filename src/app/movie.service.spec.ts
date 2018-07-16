import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { defer } from "rxjs";

import { MovieService } from "./movie.service";
import { Movie } from "./movie";

let httpClientSpy: { get: jasmine.Spy };
let movieService: MovieService;

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
  movieService = new MovieService(<any>httpClientSpy);
});

it("should return expected heroes (HttpClient called once)", () => {
  const expectedMovies: Movie[] = [];

  httpClientSpy.get.and.returnValue(asyncData(expectedMovies));

  movieService
    .getMovies()
    .subscribe(
      heroes => expect(heroes).toBeTruthy(),
      fail
    );
  expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
});

it("should return an error when the server returns a 404", () => {
  const errorResponse = new HttpErrorResponse({
    error: "test 404 error",
    status: 404,
    statusText: "Not Found"
  });

  httpClientSpy.get.and.returnValue(asyncError(errorResponse));

  movieService
    .getMovies()
    .subscribe(
      movies => fail("expected an error, not heroes"),
      error => expect(error.message).toBeUndefined()
    );
});
