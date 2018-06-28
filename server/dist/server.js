"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const elasticsearch = require("elasticsearch");
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
            }
        ]
    });
});
const port = 8000;
const app = express();
app.use(cookieParser());
app.use(bodyParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.get('/', (req, res) => {
    console.log("received '/' get request" + req.session);
    if (req.session && req.session.page_views) {
        req.session.page_views++;
        console.log(req.session.page_views);
        res.send("You visited this page " + req.session.page_views + " times");
    }
    else {
        if (req.session) {
            req.session.page_views = 1;
            res.send("Welcome to this page for the first time!");
        }
    }
    res.send("not working");
});
app.get('/auth', (req, res) => {
    console.log("received '/auth' GET request");
    if (req.cookies && req.cookies.authorization == "yes") {
        console.log("is authorized");
        return res.sendStatus(200);
    }
    else {
        console.log("is not authorized");
        return res.sendStatus(404);
    }
});
app.post('/auth', (req, res) => {
    console.log("received '/auth' POST request");
    res.cookie("authorization", "yes");
    console.log("set res.cookie");
    return res.sendStatus(200);
});
app.post('/advisors', (req, res) => {
    console.log("received '/advisors' POST request");
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
app.post('/search', (req, res) => {
    console.log("receieved '/search' POST request");
    if (req.body.query === "all") {
        client.search({
            index: "users", body: {
                "query": {
                    "match_all": {}
                }
            }
        }).then((q) => res.send(q));
    }
    //  if (req.cookies && req.cookies.authorization == "yes") {
    else {
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
                            }
                        ]
                    }
                }
            }
        }).then((q) => res.send(q));
    }
    //  } else {
    //  return res.sendStatus(404);
    //  }
});
app.listen(port, () => console.log(`server listening on port ${port}`));
//# sourceMappingURL=server.js.map