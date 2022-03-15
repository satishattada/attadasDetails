import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(public router: Router) {

    }

    ngOnInit() {

    }

}
