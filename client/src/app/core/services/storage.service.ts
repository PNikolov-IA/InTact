import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    getItem(key: string): string {
        return localStorage.getItem(key);
    }

    setItem(key: string, value: string): void {
        return localStorage.setItem(key, value);
    }

    removeItem(key: string): void {
        return localStorage.removeItem(key);
    }

    clear(): void {
        return localStorage.clear();
    }
}
