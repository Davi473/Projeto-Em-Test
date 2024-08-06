export default class Lancamento
{
  private total: number = 0;

  constructor (
    private ticket: string,
    private quantidade: number,
    private preco: number,
    private data: Date,
    private compra: boolean = true,
    private usuario: string,
    private tipo: string,
    private id: string | undefined = undefined
  )
  {
    this.total = this.quantidade * this.preco;
  }

  getUsuario()
  {
    return this.usuario;
  }
  
  getTipo()
  {
    return this.tipo
  }

  getId ()
  {
    return this.id
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