// 필요한 모듈들을 가져오기
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

// Express 서버 생성
const app = express();

// json 형태로 오는 요청의 본문을 해석해줄 수 있게 등록
app.use(bodyParser.json());

// 테이블 생성하기 -> initialize.sql로 변경
db.pool.query(`create table lists (
    ID INTEGER AUTO_INCREMENT,
    VALUE TEXT,
    PRIMARY KEY (ID)
)`, (err, results, fileds) => {
        console.log('results', results);
})

// DB lists 테이블에 있는 모든 데이터를 프론트 서버에 보내주기
app.get('/api/values', function (req, res) {
    // DB에서 모든 정보 가져오기
    db.pool.query('SELECT ID as \'id\', VALUE as \'value\' FROM lists;',
        (err, results, fileds) => {
            if (err)
                return res.status(500).send(err);
            else
                return res.json(results);
    });
});

// client에서 입력한 값을 DB lists 테이블에 넣어주기
app.post('/api/value', function (req, res, next) {
    // DB에 값 넣어주기
    db.pool.query(`INSERT INTO lists (value) VALUES("${ req.body.value }")`,
        (err, results, fileds) => {
            if (err)
                return res.status(500).send(err);
            else
                return res.json({ success: true, value: req.body.value });
        });
});

app.listen(5000, () => {
    console.log('application started 5000 port');
});
