import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = "Renan Toporoff Leote";
  text = ''

  pessoas = [  {
    firstName: '',
    lastName: '',
    age: 0
  }]; //uso [] quando quero usar array e {} quando quero usar objeto


  constructor(private peopleService: PeopleService) { //estou injetando o meu serviço dentro da minha classe componente

  }

  ngOnInit() {  //método que vai ser inicializado assim que meu componente for inicializado
    let interval = setInterval(() => { //usa let porque está dentro do bloco

      this.count++;     //se usa o this porque estou trabalhando com classe

      if(this.count == 10) {
        clearInterval(interval); //quando chegar em 10 segundos, vai limpar o contador (count)
      }
    }, 1000)  
    this,this.getPeople(); 
  }

  clicou(nome: string): void { //void porque ele nao vai retornar nada
    console.log('Clicou em mim', nome)
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}



