import { Component, OnInit } from '@angular/core';
import questoes_quizz from '../../../assets/data/questoes_quizz.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css',
})
export class QuizzComponent implements OnInit {
  questoes: any;
  questaoEscolhida: any;

  respostas: string[] = [];
  respostaEscolhida: string = '';

  questaoIndex: number = 0;
  questaoMaximaIndex: number = 0;

  terminado: boolean = false;

  fotoEscolhida: string = '';
  personagenEscolhido: string = '';

  ngOnInit(): void {
    if (questoes_quizz) {
      this.terminado = false;

      this.questoes = questoes_quizz.questoes;
      this.questaoEscolhida = this.questoes[this.questaoIndex];

      this.questaoMaximaIndex = this.questoes.length;
    }
  }

  selecionarOpcao(valor: string) {
    this.respostas.push(valor);
    this.proximaQuestao();
  }

  async proximaQuestao() {
    this.questaoIndex += 1;

    if (this.questaoMaximaIndex > this.questaoIndex) {
      this.questaoEscolhida = this.questoes[this.questaoIndex];
    } else {
      const respostaFinal: string = await this.checarResultado(this.respostas);
      this.terminado = true;
      this.respostaEscolhida = questoes_quizz.resultado[respostaFinal as keyof typeof questoes_quizz.resultado];
      this.colocarResultado(respostaFinal);
    }
  }

  async checarResultado(respostas: string[]) {
    const resultado = respostas.reduce((previous, current, index, arr) => {
      if (
        arr.filter((item) => item === previous).length >
        arr.filter((item) => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });

    return resultado;
  }

  colocarResultado(respostaEscolhida: string): void{
    if(respostaEscolhida === "naruto"){
      this.fotoEscolhida = "assets/img/Naruto.png";
      this.personagenEscolhido = "Naruto";
    }else if(respostaEscolhida === "sasuke"){
      this.fotoEscolhida = "assets/img/Sasuke.png";
      this.personagenEscolhido = "Sasuke";
    }else if(respostaEscolhida === "sakura"){
      this.fotoEscolhida = "assets/img/Sakura.png";
      this.personagenEscolhido = "Sakura";
    }else{
      this.fotoEscolhida = "assets/img/Kakashi.png";
      this.personagenEscolhido = "Kakashi";
    }
  }
}
