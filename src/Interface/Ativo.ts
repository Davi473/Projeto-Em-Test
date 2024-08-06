export interface Ativo
{
  tipo: string,
  ticket: string,
  quantidade:  number,
  preco: number,
  data: Date,
  compra: boolean,
  total: number
}