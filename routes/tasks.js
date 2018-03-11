const mysql = require('mysql');
const JSON = require('circular-json');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "aalhamdaf",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

const router = require('express').Router();
router.get('/:mainPage/initial', (req, res) => {
    const $_Params = req.params;
    console.log($_Params['mainPage']);
    const initials = {};
    con.query(`SELECT author FROM books GROUP BY author;`, (err, rows, fields) => {
        initials.authors = rows;
        con.query('SELECT category FROM books GROUP BY category', (err, rows, fields) => {
            initials.categories = rows.map((obj) => obj.category);
            con.query('SELECT yearOfPublish FROM books GROUP BY yearOfPublish', (err, rows, fields) => {
                initials.yearsOfPublish = rows.map((obj) => obj.yearOfPublish);
                res.send(initials);
            });
        });
    });
});
router.get('/items', (req, res) => {
    //console.log(req.query);
    let statement = "SELECT * FROM books";
    const $_GET = req.query;
    if ($_GET['search'] || $_GET['cates'] || $_GET['orderby'] || $_GET['type'] || $_GET['year']) {
        console.log('get:', $_GET);
        if ($_GET['search'] || $_GET['cates'] || $_GET['year'] || $_GET['type'] && $_GET['type'] !== 'a') statement += " WHERE ";
        let stateArr = [];
        if ($_GET['cates']) {
            stateArr.push("category IN('" + $_GET['cates'].split(',').join("','") + "')");
        }
        if ($_GET['type'] && $_GET['type'] !== 'a') {
            stateArr.push(`type='${$_GET['type']}'`);
        }
        if ($_GET['search']) {
            stateArr.push("name LIKE '%" + $_GET['search'] + "%'");
        }
        if ($_GET['year']) {
            stateArr.push(`yearOfPublish = '${$_GET['year']}'`);
        }
        console.log(stateArr);
        statement += stateArr.join(stateArr.length > 1 ? " AND " : '');
        console.log(statement);

        function orderBy(order) {
            if ($_GET['orderby'] === order) {

                if ($_GET[order] === '-' + order) {
                    statement += ' ORDER BY `' + order + '` DESC';
                } else {
                    statement += ' ORDER BY `' + order + '` ';
                }
            }
        }

        if ($_GET['orderby']) {
            orderBy('rating');
            orderBy('bookPrice');
            orderBy('reads');
        }
    }
    console.log($_GET);
    console.log(statement);
    res.setHeader('Content-Type', 'application/json');
    let quan = 5;
    let start = $_GET['pagenum'] ? quan * ($_GET['pagenum'] - 1) : 0;
    const q = con.query(statement, function (err, rows, fields) {
        if (rows) {
            let TotalLen = rows.length;
            con.query(`${statement} LIMIT ${start},${quan}`, function (err, rows1, fields) {
                console.log(`${statement} LIMIT ${start},${quan}`);
                res.send({items: rows1, total_len: TotalLen, quan: quan});

            });
        } else {
            res.send({items: [], total_len: 0, quan: quan});
        }
    });

});
router.get('/items/all', (req, res) => {
    //console.log(req.query);
    let statement = "SELECT * FROM books";
    const $_GET = req.query;
    res.setHeader('Content-Type', 'application/json');
    let limit = 50;
    const q = con.query(statement, function (err, rows, fields) {
        let TotalLen = rows.length;
        con.query(`${statement} LIMIT ${limit}`, function (err, rows, fields) {
            res.send({items: rows, total_len: TotalLen, limit: limit});
        });
    });

});

router.get('/items/news', (req, res) => {
    //console.log(req.query);
    let statement = "SELECT * FROM books";
    const $_GET = req.query;
    console.log($_GET);
    console.log(statement);
    res.setHeader('Content-Type', 'application/json');
    con.query(`${statement} ORDER BY addedDate LIMIT 72`, function (err, rows, fields) {
        res.send({items: rows});
    });

});
module.exports = router;