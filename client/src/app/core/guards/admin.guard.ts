import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
        private readonly storageService: StorageService
    ) { }

    canActivate(): boolean {
        const token = this.storageService.getItem('jwtToken');
        const tokenPayload = decode(token);

        if (!this.authService.isLoggedIn$() || !tokenPayload.isAdmin) {
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }
}
