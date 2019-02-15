import { AuthService } from '../services/auth.service';
import { CanActivate, Router, NavigationExtras, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuardService implements CanActivate {
    private extras: NavigationExtras;

    public constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
        private readonly toastrService: ToastrService
    ) { }

    public canActivate(
        route: ActivatedRouteSnapshot,

    ): Observable<boolean> {
        return this.authService
            .isLoggedIn$()
            .pipe(
                tap((isLogged: boolean) => {
                    this.extras = {
                        queryParams: { returnUrl: route.routeConfig.path }
                    }

                    if (!isLogged) {
                        this.router.navigate(['login'], this.extras);
                        this.toastrService.error(
                            'You must be logged-in in order to see this page!'
                        );
                        return false;
                    } else {
                        return true;
                    }
                })
            );
    }
}
