import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudService } from './core/services/crud.service';
import { CrudComponent } from './shared/components/crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalListComponent } from './shared/components/animal-list/animal-list.component';
import { AnimalCreateComponent } from './shared/components/animal-create/animal-create.component';

@NgModule({
  declarations: [AppComponent, CrudComponent, AnimalListComponent, AnimalCreateComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [CrudService],
  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule]
})

export class AppModule { }
