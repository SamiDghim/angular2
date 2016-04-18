import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()

export class HttpService {
  constructor(private _http: Http){}

  //Uses http.get() to load a single JSON file
  getFoods() {
    return this._http.get('/resourceJson/food.json').map((res:Response) => res.json());
  }

  //Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
  getBooksAndMovies() {
    return Observable.forkJoin(
      this._http.get('/resourceJson/books.json').map((res:Response) => res.json()),
      this._http.get('/resourceJson/movies.json').map((res:Response) => res.json())
    );
  }

}
