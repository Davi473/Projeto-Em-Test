export default interface LancamentosInterface
{
  id: number,
  usuario: string,
  ticket: string,
  quantidade: number,
  preco: number,
  data: Date,
  compra: boolean
}