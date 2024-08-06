export default class CarteriaLancamento
{
  private carteira: any = {};
  private ativo: any;
  private tipo: string = "";
  private ticket: string = "";
  constructor(private ativosLancamento: any){ this.getConsolidado()}

  private getConsolidado(): void
  {
    for (let i = 0; i < this.ativosLancamento.length; i++)
    {
      this.ativo = this.ativosLancamento[i];
      this.tipo = this.ativosLancamento[i].tipo;
      this.ticket = this.ativosLancamento[i].ticket;
      this.addTipo();
    }
  }

  private addTipo()
  {
    if(!this.carteira[this.tipo])
    {
      this.carteira[this.tipo] = {}
      this.addTicket()
    }
    else 
    {
      this.addTicket()
    }
  }

  private addTicket()
  {
    this.carteira[this.tipo][this.ticket] = {
      quantidade: this.ativo.quantidade,
      media: this.ativo.media,
    }
  }

  public getCarteira(): CarteriaLancamento
  {
    return this.carteira
  }
}