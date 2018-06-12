import * as express from 'express';
import {Request, Response} from 'express';

const port : number = 8000;

const app = express();

app.get('/', (req: Request, res: Response) => res.send("working") );

app.listen(port, () => console.log(`server listening on port ${port}`));
