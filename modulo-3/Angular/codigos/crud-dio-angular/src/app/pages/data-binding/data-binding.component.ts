import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Renan Toporoff';
  imageUrl = 'https://picsum.photos/300/300';
  imageDesc = 'descrição da imagem';
  buttonText = 'Clique aqui';
  textRed = 'text-red';
  bgColor = 'black';
  fontColor = 'white';
  widthImg = 600;
  textInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text
  }

  clicou (value: any) {
    console.log('clicou aqui', value);
  }

}
