import express, {Express, Request, Response} from "express";

export class HttpServer
{

  private app: Express;

  constructor ()
  {
    this.app = express();
  }

  register(method: "get" | "post", url: any, callback: Function): void
  {
    this.app[method](url, async function(req: Request, res: Response) 
    {
      const output = await callback(req.params, req.body);
      res.json(output);
    })
  }

  listen(port: number): void
  {
    this.app.listen(port);
  }
}
