var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var NYT_API_KEY = process.env.NYT_API_KEY;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NYT Books List' });
});

router.get('/books', function(req, res) {
    unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + NYT_API_KEY)
      .end(function (response) {
      	var NYTBooks = response.body.results.books;
				res.render('index', {books: NYTBooks});
        console.log(NYTBooks);
      })
})


module.exports = router;
