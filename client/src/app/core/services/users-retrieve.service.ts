import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UsersRetrieveService {

    public constructor(
        private readonly httpClient: HttpClient,
    ) { }

    getUsers(): Observable<any> {
        return this.httpClient.get('http://localhost:3000/users', { })
    }
}
