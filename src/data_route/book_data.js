var express = require('express');

var bookData = require('../assets/data/my_data.json');
var books = bookData.books;

var booksRoute = express.Router();
booksRoute.get('/books', function(req, res){
  res.json({
    data: books
  })
});

exports.booksRoute = booksRoute;
