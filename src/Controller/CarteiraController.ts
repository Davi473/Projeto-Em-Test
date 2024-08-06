import HttpServer from "../HttpServer/httpServer";
import InvestimentoModel from "../Model/CarteiraModel";


export default class CarteiraController
{
  constructor(private httpServer: HttpServer, private investimentoModel: InvestimentoModel)
  {
    httpServer.register("post", "/api/ativo", async function(body: any, params: Response) 
    {
      const lancamentos = investimentoModel.getLancamentos(body.usuario);
      return lancamentos;
    })
  }
}