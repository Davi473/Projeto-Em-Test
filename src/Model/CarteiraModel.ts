import Coneccao from "../Coneccao/Coneccao";
import CarteiraLancamento from "../Objecto/CarteiraLancamento";

export default class CarteiraModel
{
  constructor(private coneccao: Coneccao) {}
  
  public async getLancamentos(usuario: string)//: Carteira
  {
    const lancamentoData = await this.coneccao.query("SELECT * FROM ativo WHERE usuario = $1", [usuario]);
    const carteira = new CarteiraLancamento(lancamentoData);
    return carteira.getCarteira();
  }
}
