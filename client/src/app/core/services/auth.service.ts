import { HttpHeaders, HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserLoginDTO } from '../input-models/user-login.model';

@Injectable()
export class AuthService {
    private readonly isLoggedInSubject$ = new BehaviorSubject<boolean>(
        this.hasToken()
    );

    public constructor(
        private readonly httpClient: HttpClient,
        private readonly storageService: StorageService,
    ) { }

    public isLoggedIn$(): Observable<boolean> {
        return this.isLoggedInSubject$.asObservable();
    }

    register(userData: UserLoginDTO): Observable<any> {
        const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.httpClient
            .post('http://localhost:3000/register', JSON.stringify(userData), { headers })
    }

    login(userData: UserLoginDTO): Observable<string> {
        const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.httpClient
            .post<string>('http://localhost:3000/login', JSON.stringify(userData), { headers })
            .pipe(
                tap((response) => {
                    this.storageService.setItem('jwtToken', response);
                    this.isLoggedInSubject$.next(true);
                })
            );
    }

    logout() {
        this.isLoggedInSubject$.next(false);
        this.storageService.removeItem('jwtToken');
    }

    private hasToken(): boolean {
        return !!this.storageService.getItem('token');
    }
}
