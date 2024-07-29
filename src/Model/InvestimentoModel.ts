import { Carteira } from "../Objecto/Carteira";
import { InvestimentosLancamentos } from "../Objecto/InvestimentosLancamentos";

export class InvestimentoModel
{
  lancamentosBanco: InvestimentosLancamentos[];

  constructor()
  {
    this.lancamentosBanco = [
      new InvestimentosLancamentos("FIIs","CACR11",1,103.88,new Date("2024-04-09")), 
      new InvestimentosLancamentos("FIIs","RZAK11",2,89.09,new Date("2024-04-09")), 
      new InvestimentosLancamentos("FIIs","CACR11",1,103.94,new Date("2024-04-09")), 
      new InvestimentosLancamentos("FIIs","RBVO11",4,14.60,new Date("2024-04-09")), 
      new InvestimentosLancamentos("ACAO","LEVE3",1,34.79,new Date("2024-04-08")), 
      new InvestimentosLancamentos("FIIs","MXRF11",5,10.44,new Date("2024-04-08")),
      new InvestimentosLancamentos("ACAO","BBDC4",1,13.73,new Date("2024-02-29"))
    ]
  }

  getLancamentos(): Carteira
  {
    const lancamentos = new Carteira(this.lancamentosBanco);
    return lancamentos.getConsolidado();
  }
}