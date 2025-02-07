import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        data: {animation: 'slide'},
        loadChildren: () => import('../home/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'messages',
        data: {animation: 'slide'},
        loadChildren: () => import('../messages/messages-page.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'parameters',
        data: {animation: 'slide'},
        loadChildren: () => import('../parameters/parameters-page.module').then(m => m.ParametersPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
