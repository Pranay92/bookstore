var books = require('../database/books'),
    _ = require('lodash');

module.exports = {
  search : Search
};

function Search(req,res){
  
  console.log(req);
  var query = req.query,
      values = [];
  
  if(!query) {
    query = {
      'from' : 0,
      'to' : 20
    }
  } else {
    query = mergeDefault(query);
  }

  console.log(query);
  

  values = _.filter(books,function(obj){
    return obj.genre.toLowerCase() == query.genre.toLowerCase();
  });

  res.end(JSON.stringify(values.slice(query.from,query.to)));
}

function mergeDefault(query){

  var obj = query;
  obj.from = obj.from || 0;
  obj.to = obj.to || 20;

  return obj;
}