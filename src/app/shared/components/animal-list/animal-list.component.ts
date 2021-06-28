import { Animal } from './../../../models/Animal';
import { CrudService } from './../../../core/services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  constructor(private service: CrudService) { }
  animals: Animal[] = [];

  ngOnInit() {
    this._getAnimalsList();
  }

  _getAnimalsList() {
    this.service.getAnimals()
      .subscribe(result => {
        console.log(result)
        localStorage.setItem('animals', JSON.stringify(result));
        this.animals = result;
      });
  }

  deleteAnimal(id) {
    if (confirm("Confirma exclusão do animal?")) {
      this.service.deleteAnimal(id).subscribe(_ => {
        console.log("Acompanhar o comentário do código por favor!!")
        // Olá pesssoal!!! Aqui está o porque da dúvida enviada por email!!! Sendo um registro criado recentemente
        // faz-se necessário obter o ID registrado na base de dados para poder excluir logo em seguida. O problema
        // obviamente não irá acontecer caso a página seja atualizada nesse momento.... 
        // Mas atualizando a página precisamos novamente fazer a chamada no endpoint /animals/....
        // Caso o cadastro de animais seja utilizado com frequencia e varios registros ao mesmo tempo, varias chamadas seriam feitas.... :((  Por isso, esotu considerando que tenho o ID do animal após o POST, como enviado por email!! :)
        this.animals = this.animals.filter(it => it.id != id);
      }, (error) => console.log(error))
    } else {
      alert('Operação cancelada');
    }
  }

  _onGetNewAnimal(event) {
    this.animals.push(event)
  }
}
