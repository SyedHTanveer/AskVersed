import * as express from 'express';
import {Request, Response} from 'express';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';

const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({ host: 'localhost:9200', log: 'trace' })
.then(() =>  client.indices.exists({ index: "advisors" })
.then(() =>  client.indices.delete({ index: "advisors" })
.then(() => client.indices.create({ index: 'advisors' })
.catch(() => console.log("failed"))
.then(() => {
  console.log("success");
  client.bulk({body: [
    {
      start: {
      _index: 'users',
      _type: 'advisor',
      _id: '1',
      _body: {
        "name": "Kay",
        "city": "Lancaster",
        "state": "Pennsylvania",
        "colleges": ["Yale University", "Boston College", "Columbia University" ],
        "about": "Having gone through the college admissions process with 4 children, I can definitely say that there is so much to learn with each child, based on their interests and the type of schools they are interested in. I am happy to share my perspective on how 4 very different children approached the process. My children can be summed up as scholar-athletes. The challenges of juggling sports and academics cannot be underestimated. My kids played varsity lacrosse, tennis, swimming as Captains and state-ranked athletes. Please reach out to me if you are interested in any of these sports.",
        "admissions": ["Where and when to start?", "Choosing the right school/program for the student", "General admissions process and timeline", "DIY test prep"],
        "high-school": ["Helping your child identify his/her interests", "Managing honors/AP class load", "Extracurricular planning"],
        "highlights": ["Economics", "History", "Neuroscience", "Psychology", "Lacrosse", "Swimming"]
      }
    }
  }, {
      start: {

      }
  }]})
}))));





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
      "name": "Kay",
      "city": "Lancaster",
      "state": "Pennsylvania",
      "colleges": ["Yale University", "Boston College", "Columbia University" ],
      "about": "Having gone through the college admissions process with 4 children, I can definitely say that there is so much to learn with each child, based on their interests and the type of schools they are interested in. I am happy to share my perspective on how 4 very different children approached the process. My children can be summed up as scholar-athletes. The challenges of juggling sports and academics cannot be underestimated. My kids played varsity lacrosse, tennis, swimming as Captains and state-ranked athletes. Please reach out to me if you are interested in any of these sports.",
      "admissions": ["Where and when to start?", "Choosing the right school/program for the student", "General admissions process and timeline", "DIY test prep"],
      "high-school": ["Helping your child identify his/her interests", "Managing honors/AP class load", "Extracurricular planning"],
      "highlights": ["Economics", "History", "Neuroscience", "Psychology", "Lacrosse", "Swimming"]
    }
  }).then(( ) => {
    console.log("great success");
    res.sendStatus(200);
  });
});

app.post('/search', (req: Request, res:Response) => {
  console.log("receieved '/search' POST request");
  if(req.cookies && req.cookies.authorization == "yes") {
    client.search({

    }).then(res.)
  }
  return res.sendStatus(404);
});

app.listen(port, () => console.log(`server listening on port ${port}`));
