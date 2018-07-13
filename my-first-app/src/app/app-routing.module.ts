import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/books' },
  { path: 'books', loadChildren: './book/book.module#BookModule' },
  {
    path: 'sandbox',
    loadChildren: './sandbox/sandbox.module#SandboxModule'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
