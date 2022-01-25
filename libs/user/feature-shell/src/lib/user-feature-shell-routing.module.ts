import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    // redirectTo: 'recipes',
    pathMatch: 'full',
  },
  // {
  //   path: 'recipes',
  //   loadChildren: () =>
  //     import('./features/recipes/recipes.module').then((m) => m.RecipesModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserFeatureShellRoutingModule {}
