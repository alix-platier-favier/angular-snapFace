import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor() { }

    private token = "MyFakeToken";

    getToken(): string {
        return this.token;
    }
}