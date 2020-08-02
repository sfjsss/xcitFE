import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
    private showAddMenu:boolean = false;

    constructor() { }

    ngOnInit() {
    }

    toggleAddMenu() {
        this.showAddMenu = !this.showAddMenu;
    }

}
