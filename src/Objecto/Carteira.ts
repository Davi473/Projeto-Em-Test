import Lancamento from "./Lancamento";



export default class Carteira
{
    private tipos: any;
    private ativos: any;
    private ticket: any;
    private lancamentosCompra: any;
    constructor (
        private lancamentos: Lancamento[]
    ) {
        
    }

    getConsolidado()
    {
        this.ativos = {};
        this.tipos = {};
        this.ticket = "";
        this.addTicket();
        this.addTipo();
        return this.tipos
        
    }

    private addTicket()
    {
        for (let i = 0; i < this.lancamentos.length; i++)
        {
            this.lancamentosCompra = this.lancamentos[i];
            this.ticket = this.lancamentosCompra.getTicket();
            
            if(!this.ativos[this.ticket])
            {
                this.ativos[this.ticket] = {
                    quantidade: this.lancamentosCompra.getQuantidade(),
                    precoMedio: this.lancamentosCompra.getTotal(),
                    tipo: this.lancamentosCompra.getTipo()
                }
            }
            else 
            {
                this.compraOuVenda()
            }  
        }
    }

    private compraOuVenda()
    {
        if(this.lancamentosCompra.isCompra())
        {
            this.ativos[this.ticket].quantidade += this.lancamentosCompra.getQuantidade();
            this.ativos[this.ticket].precoMedio += this.lancamentosCompra.getTotal();
        }
        else
        {
            this.ativos[this.ticket].quantidade -= this.lancamentosCompra.getQuantidade();
            this.ativos[this.ticket].precoMedio -= this.lancamentosCompra.getTotal();
            
            this.deleteAtivoSemValor();
        }
    }

    private deleteAtivoSemValor()
    {
        if(this.ativos[this.ticket].quantidade >= 0)
        {
            delete this.ativos[this.ticket];
        }
    }

    private addTipo()
    {
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
    }
}