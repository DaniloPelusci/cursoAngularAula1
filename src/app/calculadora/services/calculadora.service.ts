/**
 * Serviço responsável por execultar as operações da calculadora.
 * 
 * @author Danilo Pelusci
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /*Define as constantes utilizadas 
    para identificar as perações de cáuculo */
    static readonly SOMA: string = '+';
    static readonly SUBTRACAO: string = '-';
    static readonly DIVISAO: string = '/';
    static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  /**
   * Método que calcula uma operação matematica dando
   * dois numeros.
   * suporta as operações soma, subtração, divisão 
   * e multiplicação.
   * 
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @return number resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //armazena o restultado da operação
    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break
      default:
      resultado =0;
    }
    return resultado;
  }
}
