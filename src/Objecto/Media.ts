import Lancamento from "./Lancamento";

export default class Media
{
  private ativos: any;
  private lancamentosCompra: any;
  private quantidade: number;
  private precoMedio: number;
  private ticket: string;
  private tipo: string;
  private usuario: string;
  constructor (private lancamentos: Lancamento[]) {
    this.quantidade = 0;
    this.precoMedio = 0;
    this.ticket = "";
    this.tipo = "";
    this.usuario = "";
    this.getConsolidado();
  }


  public getQuatidade(): number
  {
    return this.quantidade;
  }

  public getPrecoMedio(): number
  {
    return this.precoMedio;
  }

  public getTicket(): string
  {
    return this.ticket;
  }

  public getTipo(): string
  {
    return this.tipo;
  }

  public getUsuario(): string
  {
    return this.usuario;
  }

  public getTudo(): any
  {
    const tudo = {
      quantidade: this.quantidade,
      precoMedio: this.precoMedio,
      ticket: this.ticket,
      tipo: this.tipo,
      usuario: this.usuario
    };
    return tudo;
  }

  public setTipo(tipo: string): void
  {
    this.tipo = tipo;
  }

  private getConsolidado(): void
    { 
      this.ativos = {}
      this.addTicket();
      if (this.ativos["media"])
      {
        this.quantidade = this.ativos["media"].quantidade;
        this.precoMedio = this.ativos["media"].precoMedio;
        this.ticket = this.ativos["media"].ticket;
        this.usuario = this.ativos["media"].usuario;
      }
      
    }

  private addTicket(): void
  {
    for (let i = 0; i < this.lancamentos.length; i++)
    {
      this.lancamentosCompra = this.lancamentos[i];
      if(!this.ativos["media"])
      {
        this.ativos["media"] = {
          quantidade: this.lancamentosCompra.getQuantidade(),
          precoMedio: this.lancamentosCompra.getTotal(),
          ticket: this.lancamentosCompra.getTicket(),
          tipo: this.lancamentosCompra.getTipo(),
          usuario: this.lancamentosCompra.getUsuario()
        }
      }
      else
      {
        this.lancamentosCompra = this.lancamentos[i];
        this.compraOuVenda(); 
      }   
    }
  }

  private compraOuVenda(): void
  {
      if(this.lancamentosCompra.isCompra())
      {
          this.ativos["media"].quantidade += this.lancamentosCompra.getQuantidade();
          this.ativos["media"].precoMedio += this.lancamentosCompra.getTotal();
      }
      else
      {
          this.ativos["media"].quantidade -= this.lancamentosCompra.getQuantidade();
          this.ativos["media"].precoMedio -= this.lancamentosCompra.getTotal();
          
          this.deleteAtivoSemValor();
      }
  }

  private deleteAtivoSemValor(): void
  {
      if(this.ativos["media"].quantidade <= 0)
      { 
          delete this.ativos["media"];
      }
  }
}