import pgPromise, { IDatabase, IMain } from 'pg-promise';

interface Database extends IDatabase<{}> {}

export default class Connection {
  private db: Database;

  constructor () 
  {
    const pgp: IMain = pgPromise();
    this.db = pgp('postgres://postgres:1234@localhost:5432/investimentos');
  }

  public async query(statement: string, params?: any[]) //Promise<T[]> 
  {
    const saida = await this.db.query(statement, params);
    return saida;
  }
}