import express, {Express, Request, Response} from "express";

type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export default class HttpServer
{

  private app: Express;

  constructor ()
  {
    this.app = express();
    this.app.use(express.json());
  }

  register(method: HttpMethod, url: any, callback: Function): void
  {
    this.app[method](url, async function(req: Request, res: Response) 
    {
      const output = await callback(req.body, res);
      res.json(output);
    })
  }

  listen(port: number): void
  {
    this.app.listen(port);
  }
}
