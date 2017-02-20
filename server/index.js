var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var BATTLE_COLLECTION = "lazzaWinter";
var TEAMS_COLLECTION = "teamsWinter";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
// mongodb://<dbuser>:<dbpassword>@ds119738.mlab.com:19738/heroku_jp9vx606
var mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/lazza';

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(mongodb_uri, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.use('/', express.static('build'));

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

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


app.post("/api/finalresult", function(req, res) {
  var finalResult = req.body;

  // if (!req.body.session) {
  //   handleError(res, "Invalid user input", "Must provide a session.", 400);
  // }

  db.collection(BATTLE_COLLECTION).insertOne(finalResult, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to save final result.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});
