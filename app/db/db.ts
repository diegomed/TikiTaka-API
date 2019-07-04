var MongoClient = require('mongodb').MongoClient

var state: any = {
  db: null,
}

exports.connect = function(url: any, done: any) {
  if (state.db) return done()

  MongoClient.connect(url, function(err: any, db: any) {
    if (err) return done(err)
    state.db = db
    done()
  })
}

exports.get = function() {
  return state.db
}

exports.close = function(done: any) {
  if (state.db) {
    state.db.close(function(err: any, result: any) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}