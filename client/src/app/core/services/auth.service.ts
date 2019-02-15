import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserLoginDTO } from '../models/input-models/user-login.dto';
import decode from 'jwt-decode';

@Injectable()
export class AuthService {
    private readonly isLoggedInSubject$ = new BehaviorSubject<boolean>(
        this.hasToken()
    );

    public constructor(
        private readonly httpClient: HttpClient,
        private readonly storageService: StorageService
    ) { }

    public isLoggedIn$(): Observable<boolean> {
        return this.isLoggedInSubject$.asObservable();
    }

    register(user: UserLoginDTO): Observable<string> {
        return this.httpClient
            .post<string>('http://localhost:3000/register', JSON.stringify(user))
    }

    login(user: UserLoginDTO): Observable<string> {
        return this.httpClient
            .post<string>('http://localhost:3000/login', JSON.stringify(user))
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
        return !!this.storageService.getItem('jwtToken');
    }

    isAdmin(): boolean {
        const token = this.storageService.getItem('jwtToken');
        const tokenPayload = decode(token);

        if (!this.isLoggedIn$() || !tokenPayload.isAdmin) {
            return false;
        }

        return true;
    }
}
