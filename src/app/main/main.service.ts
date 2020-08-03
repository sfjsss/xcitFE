import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MainService {
    private _showAddMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() { }

    get showAddMenu() {
        return this._showAddMenu.asObservable();
    }

    toggleAddMenu(): void {
        const currentStatus: boolean = this._showAddMenu.getValue();
        this._showAddMenu.next(!currentStatus);
    }
}
