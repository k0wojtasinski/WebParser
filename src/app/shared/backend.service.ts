import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseUrl = 'https://mercury.postlight.com/parser?url=';
const key = 'Fk9R6eYfM7xBi3BmhHGorpYp0pFdWsh4HdB2Ds3I';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  constructor(private http: HttpClient) {
  }

  private get(address: string): Observable<any> {
    return this.http.get(baseUrl + address, {
      headers: new HttpHeaders().set('x-api-key', key)
    });
  }

  public fetchData(url: string): Observable<any> {
    return this.get(url);
  }
}
