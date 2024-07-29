import { HttpServer } from "./HttpServer/httpServer";

import { InvestimentoModel } from "./Model/InvestimentoModel";

import { InvestimentoController } from "./Controller/InvestimentoController";

const investimentoModel = new InvestimentoModel();
const httpServer = new HttpServer();

new InvestimentoController(httpServer, investimentoModel);

httpServer.listen(3000);