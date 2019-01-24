import { AuthService } from '../services/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuardService implements CanActivate {
    public constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
        private readonly toastrService: ToastrService
    ) { }

    public canActivate(): Observable<boolean> {
        return this.authService
            .isLoggedIn$()
            .pipe(
                tap((isLogged: boolean) => {
                    if (!isLogged) {
                        this.router.navigate(['login']);
                        this.toastrService.error(
                            'You must be logged-in in order to see this page!'
                        );
                    }
                })
            );
    }
}
