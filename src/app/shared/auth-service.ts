import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class AuthService implements OnDestroy {
    ngOnDestroy(): void {
         console.log('============ngOnDestroy====================');
    }

    constructor(){
        console.log('================================');
    }
}