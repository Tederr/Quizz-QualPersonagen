import { Component, OnInit } from '@angular/core';
import questoes_quizz from '../../../assets/data/questoes_quizz.json'


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent implements OnInit{
  titulo: string = '';
  introducao: string = '';

  ngOnInit(): void {

    if(questoes_quizz){
      this.titulo = questoes_quizz.titulo;
      this.introducao = questoes_quizz.introducao
    }
  }

}
