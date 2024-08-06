import HttpServer from "../HttpServer/httpServer";
import lancamentoModel from "../Model/LancamentoModel";
import Lancamento from "../Objecto/Lancamento";

export class LancamentoController
{
  constructor (private httpServer: HttpServer, private lancamentoModel: lancamentoModel)
  {
    httpServer.register("post", "/api/getlancamento", async function(body: any, params: Response) 
    {
      const lancamentos = await lancamentoModel.getLancamentos(body.usuario);
      return lancamentos;
    })

    httpServer.register("post", "/api/newLancamento", async function(body: any, params: Response)
    {
      const lancamento = new Lancamento(body.ticket, body.quantidade, 
        body.preco, body.data, body.compra, body.usuario, body.tipo);
      await lancamentoModel.saveLancamento(lancamento);
    })

    httpServer.register("post", "/api/deleteLancamento", async function(body: any, params: Response)
    {
      const {id, usuario, ticket} = body;
      await lancamentoModel.deleteLancamento(id, usuario, ticket);
    })

    httpServer.register("post", "/api/getLancamentoTicket", async function(body: any, params: Response)
    {
      const ticket = await lancamentoModel.getLancamentoTicket(body.usuario, body.ticket);
      return ticket;
    })
  }
}