import { Animal } from './../../../models/Animal';
import { CrudService } from './../../../core/services/crud.service';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.scss']
})
export class AnimalCreateComponent implements OnInit {

  @Output() afterCreate: EventEmitter<Animal> = new EventEmitter();

  constructor(private service: CrudService) { }

  animal: Animal = {
    manejo: '',
    tag: ''
  };

  @ViewChild('tag', { static: false }) tag: ElementRef;

  form = new FormGroup({
    manejo: new FormControl('', [Validators.required]),
    tag: new FormControl('', [Validators.required])
  });

  ngOnInit() {
  }

  createAnimal() {
    if (this.form.invalid) {
      alert('Manejo e TAG são obrigatórios')
      return;
    }

    if (this._validatingDuplicatedLocalTags()) {
      alert('TAG já existente'); return;
    }

    this.service.createAnimal(this.animal).subscribe(_ => {
      this.afterCreate.emit(this.animal)
    }, (error) => {
      console.log(error)
    });
  }

  _validatingDuplicatedLocalTags() {
    let animals = JSON.parse(localStorage.getItem('animals'));
    return animals.find(it => it.tag === this.animal.tag);
  }

  /*_getLastAnimal() {
    let animals = JSON.parse(localStorage.getItem('animals'));
    animals = animals.sort((a, b) => b.id - a.id);

    if (animals.length > 0) {
      return animals[0].id;
    }
    return 0
  }*/
}
