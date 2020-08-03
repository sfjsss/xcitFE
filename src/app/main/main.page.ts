import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from "./main.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit, OnDestroy {
    private showAddMenu : boolean;
    private showAddMenuSub : Subscription;

    constructor(private mainService:MainService) { }

    ngOnInit() {
        this.showAddMenuSub = this.mainService.showAddMenu.subscribe(currState => {
            this.showAddMenu = currState;
        })
    }

    toggleAddMenu() : void {
        this.mainService.toggleAddMenu();
    }

    ngOnDestroy(): void {
        if (this.showAddMenuSub) {
            this.showAddMenuSub.unsubscribe();
        }
    }

}
