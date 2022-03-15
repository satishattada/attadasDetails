import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [CommonModule, LayoutRoutingModule],
    declarations: [LayoutComponent, SidebarComponent]
})
export class LayoutModule {}
