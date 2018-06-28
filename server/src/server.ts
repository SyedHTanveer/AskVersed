import * as express from 'express';
import {Request, Response} from 'express';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.indices.create({
    index: 'advisors'
  }, function(err: any, resp: any, status: any) {
        if(err) {
            console.log("failed");
        }
        else {
            console.log("create");
        }
});


const port : number = 8000;

const app = express();

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.get('/', (req: Request, res: Response) => {
  console.log("received '/' get request" + req.session );
  if(req.session && req.session.page_views){
    req.session.page_views++;
    console.log(req.session.page_views);
    res.send("You visited this page " + req.session.page_views + " times");
  } else {
    if(req.session) {
     req.session.page_views = 1;
     res.send("Welcome to this page for the first time!");
    }
  }
  res.send("not working");
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

app.post('/advisors', (req: Request, res: Response) => {
  console.log("received '/advisors' POST request");
  client.create({
    index: 'users',
    type: 'advisor',
    id: '1',
    body: {
      "name": "Kunal",
      "age": 10
    }
  }).then(( ) => {
    console.log("great success");
    res.sendStatus(200);
  });
});

app.post('/search', (req: Request, res:Response) => {
  console.log("receieved '/search' POST request");
  if(req.cookies && req.cookies.authorization == "yes") {

  }
  return res.sendStatus(404);
});

app.listen(port, () => console.log(`server listening on port ${port}`));
