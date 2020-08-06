import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MainService} from "../main.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
    private showAddMenu : boolean;
    private showAddMenuSub : Subscription;

    constructor(private mainService : MainService) { }

    ngOnInit() {
        this.showAddMenuSub = this.mainService.showAddMenu.subscribe(currState => {
            this.showAddMenu = currState;
        })
    }

    onClickBackdrop() {
        console.log("backdrop is clicked");
        this.mainService.toggleAddMenu();
    }

    ngOnDestroy(): void {
        if (this.showAddMenuSub) {
            this.showAddMenuSub.unsubscribe();
        }
    }

}
