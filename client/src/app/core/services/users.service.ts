import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersCreateDTO } from '../models/input-models/user-create.model';
import { UserDeleteDTO } from '../models/input-models/user-delete.dto';
import { RequestOptions } from '@angular/http';

@Injectable()
export class UsersService {

    public constructor(
        private readonly httpClient: HttpClient,
    ) { }

    getUsers(): Observable<any> {
        return this.httpClient
            .get('http://localhost:3000/users')
    }

    createUser(userData: UsersCreateDTO): Observable<any> {
        return this.httpClient
            .post('http://localhost:3000/users', JSON.stringify(userData))
    }

    editUser(userData: UsersCreateDTO): Observable<any> {
        return this.httpClient
            .put('http://localhost:3000/users', JSON.stringify(userData))
    }

    deleteUser(email: UserDeleteDTO): Observable<any> {
        const options: any = {
            body: { email }
        };

        return this.httpClient
            .delete('http://localhost:3000/users', options);
    }
}
