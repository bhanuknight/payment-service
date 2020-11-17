import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()

export class CommonService {

    constructor(private http: HttpClient) {}

    sendDTO(body): Observable<any> {
        let baseUrl: string = `https://database1560.herokuapp.com/attachment/dummy_request/`;
    
        const option = {
            headers: new HttpHeaders()
        };
    
        return this.http.post(baseUrl, body, option)
        .pipe(
            catchError((error) => {
                return error;
            }),
            map((response) => {
                return response;
            }))
      }

}