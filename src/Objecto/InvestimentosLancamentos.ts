export class InvestimentosLancamentos
{
  private total: number = 0;

  constructor (
    private tipo: string,
    private ticket: string,
    private quantidade: number,
    private preco: number,
    private data: Date,
    private compra: boolean = true
  )
  {
    this.total = this.quantidade * this.preco;
  }

  getTipo ()
  {
    return this.tipo;
  }

  getTicket ()
  {
    return this.ticket;
  }

  getQuantidade ()
  {
    return this.quantidade;
  }

  getPreco ()
  {
    return this.preco
  }

  getData ()
  {
    return this.data;
  }

  isCompra ()
  {
    return this.compra;
  }

  getTotal ()
  {
    return this.total;
  }
}