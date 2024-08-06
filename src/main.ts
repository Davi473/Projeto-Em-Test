import HttpServer from "./HttpServer/httpServer";
import Connection from "./Coneccao/Coneccao";

import InvestimentoModel from "./Model/CarteiraModel";
import LancamentoModel from "./Model/LancamentoModel";

import InvestimentoController from "./Controller/CarteiraController";
import { LancamentoController } from "./Controller/LancamentosController";


const coneccao = new Connection();
const httpServer = new HttpServer();

const investimentoModel = new InvestimentoModel(coneccao);
const lancamentoModel = new LancamentoModel(coneccao);

new InvestimentoController(httpServer, investimentoModel);
new LancamentoController(httpServer, lancamentoModel);

httpServer.listen(3000);