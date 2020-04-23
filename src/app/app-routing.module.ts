import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'agregar',
  //   loadChildren: () => import('./screens/agregar/agregar.module').then( m => m.AgregarPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
