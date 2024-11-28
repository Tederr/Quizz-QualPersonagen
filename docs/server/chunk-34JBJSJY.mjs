import './polyfills.server.mjs';
import{B as A,C as N,D as F,E as Q,H as T,L as D,O as q,P as O,a as _,b as p,c as f,d as k,e as y,f as E,g as a,h as b,i as u,j as n,k as i,l as s,m as S,n as I,o as z,p as j,q as c,r as m,s as w,t as x}from"./chunk-5PAL653T.mjs";import{h as M}from"./chunk-VVCT4QZE.mjs";var d={titulo:"Qual   e   voce   do   lendario   time   7?",introducao:"Bem-vindo ao mundo de Naruto! Voc\xEA est\xE1 prestes a embarcar em uma jornada que vai testar sua personalidade ninja. Ser\xE1 que voc\xEA \xE9 t\xE3o determinado quanto Naruto Uzumaki? Ou talvez t\xE3o focado quanto Sasuke Uchiha? Quem sabe seu cora\xE7\xE3o compassivo combine com Sakura Haruno, ou sua sabedoria te conecte com Kakashi Hatake?",questoes:[{id:1,questoe:"O que voce faz quando enfrenta um obstaculo inesperado ?",opcoes:[{id:1,resposta:"Insisto at\xE9 encontrar uma solu\xE7\xE3o, mesmo que demore.",alias:"naruto"},{id:2,resposta:"Analiso calmamente, mas prefiro resolver sozinho.",alias:"sasuke"},{id:3,resposta:"Tento entender o problema e encontrar apoio, se necess\xE1rio.",alias:"sakura"},{id:4,resposta:"Avalio todas as op\xE7\xF5es poss\xEDveis antes de agir.",alias:"kakashi"}]},{id:2,questoe:"Como as pessoas ao seu redor te descreveriam ?",opcoes:[{id:1,resposta:"Observador e confi\xE1vel, com muita sabedoria.",alias:"kakashi"},{id:2,resposta:"Atencioso e sempre disposto a ajudar.",alias:"sakura"},{id:3,resposta:"Determinado, mas reservado em mostrar sentimentos.",alias:"sasuke"},{id:4,resposta:"Algu\xE9m cheio de energia, que nunca desiste.",alias:"naruto"}]},{id:3,questoe:"Quando voce trabalha em equipe, qual e a sua prioridade ?",opcoes:[{id:1,resposta:"Cumprir sua parte com perfei\xE7\xE3o, sem depender dos outros.",alias:"sasuke"},{id:2,resposta:"Garantir que o grupo siga na dire\xE7\xE3o certa, sem perder o foco.",alias:"kakashi"},{id:3,resposta:"Certificar-se de que todos est\xE3o bem e contribuindo igualmente.",alias:"sakura"},{id:4,resposta:"Motivar todos a darem o melhor de si.",alias:"naruto"}]},{id:4,questoe:"Se pudesse escolher uma habilidade para dominar, qual seria ?",opcoes:[{id:1,resposta:"Algo que me permita ajudar e curar as pessoas.",alias:"sakura"},{id:2,resposta:"Algo que me permita proteger aqueles que amo.",alias:"naruto"},{id:3,resposta:"Algo que me d\xEA controle sobre situa\xE7\xF5es dif\xEDceis.",alias:"kakashi"},{id:4,resposta:"Algo que me torne mais forte e independente.",alias:"sasuke"}]},{id:5,questoe:"Em um momento de descanso, o que voce gosta de fazer ?",opcoes:[{id:1,resposta:"Ler, relaxar ou explorar algo novo para aprender.",alias:"kakashi"},{id:2,resposta:"Estar com amigos, rindo e me divertindo.",alias:"naruto"},{id:3,resposta:"Ficar sozinho, refletindo ou aperfei\xE7oando algo.",alias:"sasuke"},{id:4,resposta:"Cuidar de algu\xE9m ou organizar algo produtivo.",alias:"sakura"}]}],resultado:{naruto:"Determinado, otimista e com uma energia contagiante, voc\xEA nunca desiste, mesmo diante das dificuldades. Sua for\xE7a est\xE1 na sua lealdade aos amigos e na sua vontade de proteger quem ama. Continue espalhando essa energia pelo mundo!",sasuke:"Reservado, intenso e altamente focado, voc\xEA busca superar seus limites e alcan\xE7ar seus objetivos a qualquer custo. Sua determina\xE7\xE3o \xE9 inspiradora, mas lembre-se: \xE0s vezes, compartilhar o caminho com outros pode torn\xE1-lo ainda mais forte.",sakura:"Atencioso, dedicado e resiliente, voc\xEA \xE9 o cora\xE7\xE3o de qualquer equipe. Sempre buscando ajudar os outros, voc\xEA tem uma for\xE7a interior incr\xEDvel que muitas vezes surpreende a todos. Continue mostrando que cuidar dos outros \xE9 um sinal de for\xE7a!",kakashi:"S\xE1bio, tranquilo e sempre pronto para dar os melhores conselhos, voc\xEA \xE9 um l\xEDder natural. Sua habilidade de equilibrar conhecimento e a\xE7\xE3o inspira todos ao seu redor. N\xE3o perca essa calma incr\xEDvel, mesmo em momentos dif\xEDceis!"}};var W=()=>[""];function Y(e,g){e&1&&(n(0,"div",4),s(1,"img",5),i())}function $(e,g){if(e&1){let t=S();n(0,"button",10),I("click",function(){let r=k(t).$implicit,h=z(2);return y(h.selecionarOpcao(r.alias))}),c(1),i()}if(e&2){let t=g.$implicit;a(),m(t.resposta)}}function J(e,g){if(e&1&&(n(0,"div",6)(1,"div",7)(2,"h3"),c(3),i()(),n(4,"div",8),b(5,$,2,1,"button",9),i()()),e&2){let t=z();a(3),m(t.questaoEscolhida.questoe),a(2),u("ngForOf",t.questaoEscolhida.opcoes)}}function X(e,g){if(e&1&&(n(0,"div",11),s(1,"img",12),n(2,"h1"),c(3),i(),n(4,"p"),c(5),i(),n(6,"button",13),c(7,"Voltar"),i()()),e&2){let t=z();a(),j("src",t.fotoEscolhida,E),a(2),w("Voc\xEA \xE9 como ",t.personagenEscolhido,"!"),a(2),m(t.respostaEscolhida),a(),u("routerLink",x(4,W))}}var H=(()=>{class e{constructor(){this.respostas=[],this.respostaEscolhida="",this.questaoIndex=0,this.questaoMaximaIndex=0,this.terminado=!1,this.fotoEscolhida="",this.personagenEscolhido=""}ngOnInit(){d&&(this.terminado=!1,this.questoes=d.questoes,this.questaoEscolhida=this.questoes[this.questaoIndex],this.questaoMaximaIndex=this.questoes.length)}selecionarOpcao(t){this.respostas.push(t),this.proximaQuestao()}proximaQuestao(){return M(this,null,function*(){if(this.questaoIndex+=1,this.questaoMaximaIndex>this.questaoIndex)this.questaoEscolhida=this.questoes[this.questaoIndex];else{let t=yield this.checarResultado(this.respostas);this.terminado=!0,this.respostaEscolhida=d.resultado[t],this.colocarResultado(t)}})}checarResultado(t){return M(this,null,function*(){return t.reduce((r,h,ie,P)=>P.filter(v=>v===r).length>P.filter(v=>v===h).length?r:h)})}colocarResultado(t){t==="naruto"?(this.fotoEscolhida="assets/img/Naruto.png",this.personagenEscolhido="Naruto"):t==="sasuke"?(this.fotoEscolhida="assets/img/Sasuke.png",this.personagenEscolhido="Sasuke"):t==="sakura"?(this.fotoEscolhida="assets/img/Sakura.png",this.personagenEscolhido="Sakura"):(this.fotoEscolhida="assets/img/Kakashi.png",this.personagenEscolhido="Kakashi")}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-quizz"]],decls:4,vars:3,consts:[[1,"container__quizz"],["class","quizz__logo",4,"ngIf"],["class","quizz__questionario",4,"ngIf"],["class","quizz__resultados",4,"ngIf"],[1,"quizz__logo"],["src","assets/img/logoNaruto.png","alt",""],[1,"quizz__questionario"],[1,"quizz__questoes"],[1,"quizz__opcoes"],["class","btn_opcao",3,"click",4,"ngFor","ngForOf"],[1,"btn_opcao",3,"click"],[1,"quizz__resultados"],["alt","","width","500px",3,"src"],[3,"routerLink"]],template:function(o,r){o&1&&(n(0,"div",0),b(1,Y,2,0,"div",1)(2,J,6,2,"div",2)(3,X,8,5,"div",3),i()),o&2&&(a(),u("ngIf",!r.terminado),a(),u("ngIf",!r.terminado),a(),u("ngIf",r.terminado))},dependencies:[A,N,q],styles:['@font-face{font-family:naruto-fonte;src:url("./media/njnaruto-PHNEYEGW.ttf")}.container__quizz[_ngcontent-%COMP%]{width:80%;margin:20px auto auto}.container__quizz[_ngcontent-%COMP%]   .quizz__logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.container__quizz[_ngcontent-%COMP%]   .quizz__questionario[_ngcontent-%COMP%]   .quizz__questoes[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border:1px solid #db8f00;border-radius:8px;background-color:#ffbc42;width:100%;min-height:100px;color:#000;font-size:20px;font-family:naruto-fonte;margin-bottom:20px}.container__quizz[_ngcontent-%COMP%]   .quizz__questionario[_ngcontent-%COMP%]   .quizz__opcoes[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin:auto auto 20px}.container__quizz[_ngcontent-%COMP%]   .quizz__questionario[_ngcontent-%COMP%]   .quizz__opcoes[_ngcontent-%COMP%]   .btn_opcao[_ngcontent-%COMP%]{background-color:transparent;border-radius:8px;border:2px solid #122bca;margin-right:3px;margin-top:3px;width:49%;display:inline-block;cursor:pointer;color:#000;font-family:Arial,Helvetica,sans-serif;font-size:17px;padding:16px 31px;text-decoration:none}.container__quizz[_ngcontent-%COMP%]   .quizz__questionario[_ngcontent-%COMP%]   .quizz__opcoes[_ngcontent-%COMP%]   .btn_opcao[_ngcontent-%COMP%]:hover{background-color:#1533f7;color:#fff}.container__quizz[_ngcontent-%COMP%]   .quizz__questionario[_ngcontent-%COMP%]   .quizz__opcoes[_ngcontent-%COMP%]   .btn_opcao[_ngcontent-%COMP%]:active{position:relative;top:1px}.container__quizz[_ngcontent-%COMP%]   .quizz__resultados[_ngcontent-%COMP%]{width:100%;min-height:350px;background-color:#c1c0be;border-radius:10px;padding:30px;margin-bottom:30px;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.container__quizz[_ngcontent-%COMP%]   .quizz__resultados[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:3px solid grey;border-radius:8px}.container__quizz[_ngcontent-%COMP%]   .quizz__resultados[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 200px}.container__quizz[_ngcontent-%COMP%]   .quizz__resultados[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:30px;padding:5px 10px;background-color:#fff;border:2px solid #edbb5f;border-radius:5px;cursor:pointer}.container__quizz[_ngcontent-%COMP%]   .quizz__resultados[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#edbb5f;color:#fff}.container__quizz[_ngcontent-%COMP%]   .quizz__resultados[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{position:relative;top:1px}']})}}return e})();var V=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-start"]],decls:2,vars:0,consts:[[1,"container__start"]],template:function(o,r){o&1&&(n(0,"div",0),s(1,"app-quizz"),i())},dependencies:[H]})}}return e})();var ee=()=>["quizz"],L=(()=>{class e{constructor(){this.titulo="",this.introducao=""}ngOnInit(){d&&(this.titulo=d.titulo,this.introducao=d.introducao)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-presentation"]],decls:13,vars:4,consts:[[1,"container__presentation"],[1,"presentation__logo"],["src","assets/img/logoNaruto.png","alt",""],[1,"presentation__titulo"],[1,"presentation__start"],[3,"routerLink"]],template:function(o,r){o&1&&(n(0,"div",0)(1,"div",1),s(2,"img",2),i(),n(3,"div",3)(4,"h1"),c(5),i(),n(6,"p"),c(7),i()(),n(8,"div",4)(9,"h3"),c(10,"Clique no bot\xE3o abaixo para come\xE7ar"),i(),n(11,"button",5),c(12,"Come\xE7ar"),i()()()),o&2&&(a(5),m(r.titulo),a(2),m(r.introducao),a(4),u("routerLink",x(3,ee)))},dependencies:[q],styles:['@font-face{font-family:naruto-fonte;src:url("./media/njnaruto-PHNEYEGW.ttf")}.container__presentation[_ngcontent-%COMP%]{width:80%;margin:20px auto auto}.container__presentation[_ngcontent-%COMP%]   .presentation__logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.container__presentation[_ngcontent-%COMP%]   .presentation__titulo[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:200px;background-color:#f5f5f5;border:2px solid #edbb5f;border-radius:8px}.container__presentation[_ngcontent-%COMP%]   .presentation__titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:15px;font-family:naruto-fonte}.container__presentation[_ngcontent-%COMP%]   .presentation__titulo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin-left:100px;margin-right:100px}.container__presentation[_ngcontent-%COMP%]   .presentation__start[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:30px}.container__presentation[_ngcontent-%COMP%]   .presentation__start[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:#dd9c23}.container__presentation[_ngcontent-%COMP%]   .presentation__start[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:15px;padding:5px 10px;background-color:transparent;border:2px solid #edbb5f;border-radius:5px;cursor:pointer}.container__presentation[_ngcontent-%COMP%]   .presentation__start[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#edbb5f;color:#fff}.container__presentation[_ngcontent-%COMP%]   .presentation__start[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{position:relative;top:1px}']})}}return e})();var G=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-home"]],decls:2,vars:0,consts:[[1,"container__home"]],template:function(o,r){o&1&&(n(0,"div",0),s(1,"app-presentation"),i())},dependencies:[L]})}}return e})();var oe=[{path:"",component:G,pathMatch:"full"},{path:"quizz",component:V},{path:"**",redirectTo:""}],U=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=_({imports:[O.forRoot(oe),O]})}}return e})();var C=(()=>{class e{constructor(){this.title="Quizz-QualPersonagen"}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=p({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(o,r){o&1&&s(0,"router-outlet")},dependencies:[D]})}}return e})();var K=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=f({type:e,bootstrap:[C]})}static{this.\u0275inj=_({providers:[Q()],imports:[F,U]})}}return e})();var ne=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=f({type:e,bootstrap:[C]})}static{this.\u0275inj=_({imports:[K,T]})}}return e})();export{ne as a};