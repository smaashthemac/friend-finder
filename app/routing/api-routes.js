// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
    console.log(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
    res.json(friendsData);
    console.log(friendsData);
  });

};