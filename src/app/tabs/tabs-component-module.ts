import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabsComponent } from './tabs-component';
import {TabsComponentRoutingModule} from "./tabs-component-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsComponentRoutingModule
  ],
  declarations: [TabsComponent]
})
export class TabsPageModule {}
