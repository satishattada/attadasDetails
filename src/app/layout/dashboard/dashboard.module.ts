import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule, NgbModule],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
