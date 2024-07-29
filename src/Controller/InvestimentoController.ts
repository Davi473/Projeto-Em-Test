import { HttpServer } from "../HttpServer/httpServer";
import { InvestimentoModel } from "../Model/InvestimentoModel";


export class InvestimentoController
{
  constructor(private httpServer: HttpServer, private investimentoModel: InvestimentoModel)
  {
    httpServer.register("get", "/api/investimentos", async function(params: Response, body: Request) 
    {
      const lancamentos = investimentoModel.getLancamentos();
      return lancamentos;
    })
  }
}