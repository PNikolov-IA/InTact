import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersCreateDTO } from '../models/input-models/user-create.model';

@Injectable()
export class UsersCreateService {

    public constructor(
        private readonly httpClient: HttpClient,
    ) { }

    createUser(userData: UsersCreateDTO): Observable<any> {
        return this.httpClient
            .post('http://localhost:3000/users', JSON.stringify(userData))
    }
}
