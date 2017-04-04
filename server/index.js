var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var BATTLE_COLLECTION = "pagaEaster";
var TEAMS_COLLECTION = "teamPaga";

var app = express();
app.use(bodyParser.json());

var db;
var mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/lazza';

mongodb.MongoClient.connect(mongodb_uri, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = database;
  console.log("Database connection ready");

  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.use('/', express.static('build'));

app.get("/api/teams", function(req, res) {
  db.collection(TEAMS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/teams", function(req, res) {
  var teams = req.body;

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection(TEAMS_COLLECTION).insertOne(teams, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create team.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.get("/api/finalresult", function(req, res) {
  db.collection(BATTLE_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/api/renderfinalresult", function(req, res) {
  app.set('view engine', 'ejs');
  db.collection(BATTLE_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      //let names = new Set(docs);
      let results = calculateResults(docs);
      res.status(200).render('results.ejs', { results });
    }
  });
});

app.post("/api/finalresult", function(req, res) {
  var finalResult = req.body;

  // if (!req.body.session) {
  //   handleError(res, "Invalid user input", "Must provide a session.", 400);
  // }

  req.body.session = new Date().toLocaleString();

  db.collection(BATTLE_COLLECTION).insertOne(finalResult, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to save final result.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

function calculatePartial({ votes, team, startingPoint, type }) {
  let regex = new RegExp(`^${type}-${team}$`,'g');
  return votes.filter(obj => (regex.test(obj.id))).reduce((total, vote) => {
    return total + vote.value;
  }, parseFloat(startingPoint))
}

function calculateResults(docs) {
  return docs.map((doc) => {
    return calculateResult(doc);
  });
}

function calculateResult(doc) {
  return {
    info: doc.fields,
    resultsTeamA: {
      difficulty: calculatePartial({ votes: doc.votes, team: 'team-A', startingPoint: 5.0, type: 'difficulty' }),
      execution: calculatePartial({ votes: doc.votes, team: 'team-A', startingPoint: 10.0, type: 'execution' }),
      ai: {
        teamwork: calculatePartial({ votes: doc.votes, team: 'team-A', startingPoint: 0, type: 'teamwork' }),
        flow: calculatePartial({ votes: doc.votes, team: 'team-A', startingPoint: 0, type: 'flow' }),
        music: calculatePartial({ votes: doc.votes, team: 'team-A', startingPoint: 0, type: 'music' }),
        variety: calculatePartial({ votes: doc.votes, team: 'team-A', startingPoint: 0, type: 'variety' }),
        generalImpression: calculatePartial({ votes: doc.votes, team: 'team-A', startingPoint: 0, type: 'general-impression' }),
      }
    },
    resultsTeamB: {
      difficulty: calculatePartial({ votes: doc.votes, team: 'team-B', startingPoint: 5.0, type: 'difficulty' }),
      execution: calculatePartial({ votes: doc.votes, team: 'team-B', startingPoint: 10.0, type: 'execution' }),
      ai: {
        teamwork: calculatePartial({ votes: doc.votes, team: 'team-B', startingPoint: 0, type: 'teamwork' }),
        flow: calculatePartial({ votes: doc.votes, team: 'team-B', startingPoint: 0, type: 'flow' }),
        music: calculatePartial({ votes: doc.votes, team: 'team-B', startingPoint: 0, type: 'music' }),
        variety: calculatePartial({ votes: doc.votes, team: 'team-B', startingPoint: 0, type: 'variety' }),
        generalImpression: calculatePartial({ votes: doc.votes, team: 'team-B', startingPoint: 0, type: 'general-impression' }),
      }
    }
  }
}