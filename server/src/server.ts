import * as express from 'express';
import { Request, Response } from 'express';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

import * as cors from 'cors';

const configureStripe = require('stripe');

const stripe = configureStripe("sk_test_SNgNo6vUut1oigHxSJrSfbtl");

import * as elasticsearch from 'elasticsearch';
const db = require('./init_db');
db.sequelize.sync({force: true});
const client = new elasticsearch.Client({ host: 'localhost:9200', log: 'trace' });

client.indices.exists({ index: "advisors" })
  .then(() => client.indices.delete({ index: "advisors" }))
  .then(() => client.indices.create({ index: 'advisors' }))
  .catch(() => console.log("failed"))
  .then(() => {
    console.log("success");
    return client.bulk({
      body: [
        {
          create: {
            _index: 'users',
            _type: 'advisor',
            _id: '1',
          }
        }, {
          "name": "Kay",
          "city": "Lancaster",
          "state": "Pennsylvania",
          "colleges": ["Yale University", "Boston College", "Columbia University"],
          "about": "Having gone through the college admissions process with 4 children, I can definitely say that there is so much to learn with each child, based on their interests and the type of schools they are interested in. I am happy to share my perspective on how 4 very different children approached the process. My children can be summed up as scholar-athletes. The challenges of juggling sports and academics cannot be underestimated. My kids played varsity lacrosse, tennis, swimming as Captains and state-ranked athletes. Please reach out to me if you are interested in any of these sports.",
          "admissions": ["Where and when to start?", "Choosing the right school/program for the student", "General admissions process and timeline", "DIY test prep"],
          "highschool": ["Helping your child identify his/her interests", "Managing honors/AP class load", "Extracurricular planning"],
          "highlights": ["Economics", "History", "Neuroscience", "Psychology", "Lacrosse", "Swimming"]
        }, {
          create: {
            _index: 'users',
            _type: 'advisor',
            _id: '2'
          }
        }, {
          "name": "Lee",
          "city": "Agoura Hills",
          "state": "California",
          "colleges": ["Williams College", "Bowdoin College", "United States Naval Academy"],
          "about": "",
          "admissions": ["Where and when to start?",
            "How parents can be most helpful in the process",
            "Choosing the right school/program for the student",
            "General admissions process and timeline",
            "Early action",
            "Early decision",
            "Regular decision",
            "Application Essays",
            "Selecting/managing recommenders",
            "Touring schools",
            "Communicating with prospective schools",
            "Majoring and minoring",
            "Helping students cope with stress",
            "Preserving positive parent/child relationship",
            "Athletic recruiting"],
          "highschool": ["Helping your child identify his/her interests",
            "Choosing classes",
            "Managing honors/AP class load",
            "Study habits and organizational skills",
            "Working with your child's school, teachers, and guidance counselors",
            "Extracurricular planning",
            "Summer planning",
          ],
          "highlights": ["Humanities - General",
            "Law",
            "Sports",
            "Soccer",
            "Volleyball"]
        }, {
          create: {
            _index: 'users',
            _type: 'advisor',
            _id: '3',
          }
        }, {
          "name": "Abi",
          "city": "New York",
          "state": "New York",
          "colleges": ["Carnegie Mellon University"],
          "about": "My son has always been interested in the sciences and business. He found a great fit at Carnegie Mellon where he is studying Engineering with an eye to combine it with a career in business in the future. We are from Nigeria, and my son attended part of high school at a private school in Nigeria, and then transferred to a boarding school in New York City. As these transitions can be tough for students, I am happy to share our experiences with transfers and applying to school as an international student.",
          "admissions": ["Choosing the right school/program for the student", "General admissions process and timeline"],
          "highschool": ["Managing honors/AP class load"]
        }, {
          create: {
            _index: 'users',
            _type: 'advisor',
            _id: '4',
          }
        }, {
          "name": "Steve",
          "city": "Moraga",
          "state": "California",
          "colleges": ["Cornell University"],
          "about": "My daughter went through multiple moves during high school, starting her freshman year and completing her senior year at a public school in CA while spending her sophomore and junior year at a private school in FL. If I can shed some light on all of the facets of moves and transferring high schools, and what that means for college admissions process, I am more than happy to share my experience with others in the same boat. I am also happy to provide perspective on applying to East Coast schools from California.",
          "admissions": ["Choosing the right school/program for the student", "General admissions process and timeline", "Early action"]
        }, {
          create: {
            _index: 'users',
            _type: 'advisor',
            _id: '5',
          }
        }, {
          "name": "Catherine",
          "city": "Johnson City",
          "state": "Tennessee",
          "colleges": ["Harvard University", "University of Michigan -- Ann Arbor"],
          "about": "As a mom of 4 college students and recent grads, I have definitely amassed a lot of information when it comes to college admissions. One word of advice - definitely start the process early, and get the kids excited about college (not seeing it as a drudgery!). I have 3 kids at Harvard and one at University of Michigan. They all had different interests and pursued different activities. Some areas that I can be helpful in: Athletic recruiting (swimming), golf, math competition track, and school newspapers.",
          "admissions": ["Where and when to start?",
            "How parents can be most helpful in the process",
            "Choosing the right school/program for the student",
            "General admissions process and timeline",
            "Early action",
            "DIY test prep",
            "Application Essays",
            "Touring schools",
            "Interview guidance",
            "Athletic recruiting"],
          "highschool": ["Helping your child identify his/her interests",
            "Managing honors/AP class load",
            "Working with your child's school, teachers, and guidance counselors",
            "Golf",
            "Swimming",
            "Athletic recruiting timeline and process"],
          "highlights": ["Economics", "History", "Neuroscience", "Psychology", "Lacrosse", "Swimming"]
        }]
    });
  });





const port: number = 8000;

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.get('/', (req: Request, res: Response) => {
  console.log("received '/' get request" + req.session);
  if (req.session && req.session.page_views) {
    req.session.page_views++;
    console.log(req.session.page_views);
    res.send("You visited this page " + req.session.page_views + " times");
  } else {
    if (req.session) {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
    }
  }
  res.send("not working");
});

app.get('/auth', (req: Request, res: Response) => {
  console.log("received '/auth' GET request");
  if (req.cookies && req.cookies.authorization == "yes") {
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
  db.createNewAdvisor()
  client.create({
    index: 'users',
    type: 'advisor',
    id: '1',
    body: {
      "name": "Kay",
      "city": "Lancaster",
      "state": "Pennsylvania",
      "colleges": ["Yale University", "Boston College", "Columbia University"],
      "about": "Having gone through the college admissions process with 4 children, I can definitely say that there is so much to learn with each child, based on their interests and the type of schools they are interested in. I am happy to share my perspective on how 4 very different children approached the process. My children can be summed up as scholar-athletes. The challenges of juggling sports and academics cannot be underestimated. My kids played varsity lacrosse, tennis, swimming as Captains and state-ranked athletes. Please reach out to me if you are interested in any of these sports.",
      "admissions": ["Where and when to start?", "Choosing the right school/program for the student", "General admissions process and timeline", "DIY test prep"],
      "high-school": ["Helping your child identify his/her interests", "Managing honors/AP class load", "Extracurricular planning"],
      "highlights": ["Economics", "History", "Neuroscience", "Psychology", "Lacrosse", "Swimming"]
    }
  }).then(() => {
    console.log("great success");
    res.sendStatus(200);
  });
});

app.post('/search', (req: Request, res: Response) => {
  console.log("receieved '/search' POST request");
  console.log(req.body);
  if (req.body.query === "all") {
    client.search({
      index: "users", body: {
        "query": {
          "match_all": {}
        }
      }
    }).then((q: any) => res.send(q));
  }
  //  if (req.cookies && req.cookies.authorization == "yes") {
  else {
    req.body.filter ?
      client.search({
        index: "users",
        body: {
          "query": {
            "bool": {
              "must": [
                {
                  "query_string": {
                    "query": req.body.query
                  }
                }, {
                  "match": req.body.filter
                }]
            }
          }
        }
      }).then((q: any) => res.send(q)) :
      client.search({
        index: "users",
        body: {
          "query": {
            "query_string": {
              "query": req.body.query + "~",
            }
          },
        }
      }).then((q: any) => res.send(q))
      ;
  }
});

app.post('/newParent', (req: Request, res: Response) => {
  console.log(req.body);
  db.createNewParent(req.body, (ret: any) => {
    res.send(ret);
  });
});

app.post('/newAdvisor', (req: Request, res:Response) => {
  db.createNewAdvisor(req.body, (ret:any) => {
    res.send(ret);
  });
});

app.put('/newAdvisor', (req: Request, res:Response) => {
    db.updateAdvisor(req.body, (ret: any) => {
      res.send(ret);
    });
});

app.put('/newParent', (req: Request, res: Response) => {
  db.updateParent(req.body, (ret: any) => {
    res.send(ret);
  });
});

app.post('/parentInfo', (req: Request, res: Response) => {
  console.log(req.body);
  db.getParent(req.body, (ret:any) => res.send(ret));
});

const postStripeCharge = (res: any) => (stripeErr: Error, stripeRes: Response) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

app.post('/payment', (req: Request, res: Response) => {
  stripe.charges.create(req.body, postStripeCharge(res));
});





app.listen(port, () => console.log(`server listening on port ${port}`));
