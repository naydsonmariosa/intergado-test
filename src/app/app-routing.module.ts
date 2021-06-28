import { MainComponent } from './pages/main/main.component';
import { CrudComponent } from './shared/components/crud/crud.component';
import { AnimalListComponent } from './shared/components/animal-list/animal-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: CrudComponent
  },
  { path: 'animals', component: AnimalListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
