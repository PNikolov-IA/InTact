import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AnonymousGuardService implements CanActivate {
    public constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
        private readonly toastrService: ToastrService
    ) { }

    public canActivate(): Observable<boolean> {
        return this.authService
            .isLoggedIn$()
            .pipe(
                map((isLogged: boolean) => {
                    if (isLogged) {
                        this.router.navigate(['dashboard']);
                        this.toastrService.error(
                            'You must not be logged-in in order to access this page!'
                        );
                    }

                    return !isLogged;
                })
            );
    }
}
