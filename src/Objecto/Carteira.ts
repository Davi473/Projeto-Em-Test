import { InvestimentosLancamentos } from "./InvestimentosLancamentos";


export class Carteira
{
    private tipos: any;
    private ativos: any;
    constructor (
        private lancamentos: InvestimentosLancamentos[]
    ) {
        
    }

    getConsolidado()
    {
        this.ativos = {};
        this.tipos = {};
        for (let i = 0; i < this.lancamentos.length; i++)
        {
            const lancamentosCompra = this.lancamentos[i];
            const ticket = lancamentosCompra.getTicket();
          
            if(!this.ativos[ticket])
            {
                this.ativos[ticket] = {
                    quantidade: lancamentosCompra.getQuantidade(),
                    precoMedio: lancamentosCompra.getTotal(),
                    tipo: lancamentosCompra.getTipo()
                }
            }
            else 
            {
                if(lancamentosCompra.isCompra())
                {
                    this.ativos[ticket].quantidade += lancamentosCompra.getQuantidade();
                    this.ativos[ticket].precoMedio += lancamentosCompra.getTotal();
                }
                else
                {
                    this.ativos[ticket].quantidade -= lancamentosCompra.getQuantidade();
                    this.ativos[ticket].precoMedio -= lancamentosCompra.getTotal();
                    
                    if(this.ativos[ticket].quantidade >= 0)
                    {
                        delete this.ativos[ticket];
                    }
                }
            }  
        }
        for (const ativo in this.ativos)
        {
            const lancamentoMedia = this.ativos[ativo];
            lancamentoMedia.precoMedio = lancamentoMedia.precoMedio / lancamentoMedia.quantidade;
            
            if(!this.tipos[lancamentoMedia.tipo])
            {
                this.tipos[lancamentoMedia.tipo] = {[ativo]:lancamentoMedia};
            }
            else
            {
                this.tipos[lancamentoMedia.tipo][ativo] = lancamentoMedia;
            }
            delete this.ativos[ativo].tipo
        }
        return this.tipos
    }
}