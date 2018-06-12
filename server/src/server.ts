import * as express from 'express';
import {Request, Response} from 'express';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';

const port : number = 8000;

const app = express();
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.get('/', (req: Request, res: Response) => {
  console.log("received '/' get request" );
  res.send("working");
});

app.get('/auth', (req: Request, res: Response) => {
  console.log("received '/auth' GET request");
  if(req.cookies && req.cookies.authorization == "yes") {
    console.log("is authorized");
    return res.sendStatus(200);
  } else {
      console.log("is not authorized");
      return res.sendStatus(404);
  }
});

app.post('/auth', (req: Request, res: Response) => {
  console.log("received '/auth' POST request");
  res.cookie("authorization", "yes");
  console.log("set res.cookie");
  return res.sendStatus(200);
});

app.listen(port, () => console.log(`server listening on port ${port}`));
