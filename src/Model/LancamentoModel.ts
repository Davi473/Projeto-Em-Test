import Coneccao from "../Coneccao/Coneccao";
import Lancamento from "../Objecto/Lancamento";
import Media from "../Objecto/Media";


export default class lancamentoModel
{  
  constructor (private coneccao: Coneccao) {}

  public async getLancamentos(usuario: string)
  {
    const lancamentosData = await this.coneccao.query("SELECT * FROM lancamento WHERE usuario = $1", [usuario]);
    return this.organizarGetLancamento(lancamentosData);
  }

  public async saveLancamento(lancamento: Lancamento)
  {
    await this.coneccao.query(`DELETE FROM ativo WHERE ticket = $1 AND usuario = $2`, [lancamento.getTicket(), lancamento.getUsuario()]);
    const lancamentosData = await this.getLancamentoTicket(lancamento.getUsuario(), lancamento.getTicket());
    lancamentosData.push(lancamento);
    const media = new Media(lancamentosData);
    media.setTipo(lancamento.getTipo());
    await this.addLancamento(lancamento);
    await this.addAtivo(media);
  }

  public async deleteLancamento(id: number, usuario: string, ticket: string)
  {
    await this.coneccao.query(`delete from lancamento
      where id_lancamento = $1 AND usuario = $2 AND ticket = $3`, [id, usuario, ticket]);
  }

  public async getLancamentoTicket(usuario: string, ticket: string)
  {
    const lancamentosData = await this.coneccao.query("SELECT * FROM lancamento WHERE usuario = $1 AND ticket = $2", [usuario, ticket]);
    return this.organizarGetLancamento(lancamentosData);
  }

  private organizarGetLancamento(lancamentosData: any)
  {
    const lancamentos: Lancamento[] = []
    for (const lancamento of lancamentosData)
    {
      lancamentos.push(new Lancamento(
        lancamento.ticket, lancamento.quantidade, lancamento.preco, 
        lancamento.data, lancamento.compra, lancamento.usuario, 
        lancamento.tipo, lancamento.id_lancamento
      ))
    }
    return lancamentos
  }

  private async addLancamento(lancamento: Lancamento)
  {
    await this.coneccao.query(`INSERT INTO lancamento 
      (usuario, ticket, quantidade, preco, data, compra) VALUES ($1, $2, $3, $4, $5, $6)`,
      [lancamento.getUsuario(), lancamento.getTicket(), lancamento.getQuantidade(), 
        lancamento.getPreco(), lancamento.getData(), lancamento.isCompra()]);
  }

  private async addAtivo(media: Media)
  {
    if(!(media.getQuatidade() <= 0))
    {
      await this.coneccao.query(`INSERT INTO ativo 
        (usuario, tipo, ticket, quantidade, media) VALUES ($1, $2, $3, $4, $5)`,
        [media.getUsuario(), media.getTipo(), media.getTicket(), 
          media.getQuatidade(), media.getPrecoMedio()]);
    }
  }
}