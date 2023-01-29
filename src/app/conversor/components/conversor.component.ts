import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConversorService, MoedaService } from '../services';
import { Moeda, Conversao, ConversaoResponse } from '../models';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;
  
  constructor(private moedaService: MoedaService, private conversorService: ConversorService){

  }

  ngOnInit(){
      this.moedas = this.moedaService.listarTodas();
      this.init();
  }

  /**
   * Efetua a chamada para conversão dos valores
   * @return void
   */
  init(): void{
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  /**
   * efetua a chamada para conversão dos valores 
   * @return void 
   */
  converter(): void{
    if(this.conversaoForm.form.valid){
      alert('Convertendo: ' + JSON.stringify(this.conversao));
    }
  }

}
