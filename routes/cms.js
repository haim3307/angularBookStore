const mysql = require('mysql');
const JSON = require('circular-json');

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "aalhamdaf",
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});

const router = require('express').Router();
router.get('/',(req,res) => {
	//console.log(req.query);
	//let statement = "SELECT * FROM books";
	res.render('login');


});
router.get('/home',(req,res) => {
	//console.log(req.query);
	//let statement = "SELECT * FROM books";
	res.render('cms/index');


});
module.exports = router;