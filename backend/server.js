// 필요한 모듈들을 가져오기
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./config/db');
const rootRoutes = require('./src/routes/root');

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

app.use((req, res, next) => {
    console.log('@@@@ ========= middleware =========');
    next();
});

app.get('/', function (req, res) {
    res.send('hello');
});

app.use("/api", rootRoutes);

app.listen(5000, () => {
    console.log('application started 5000 port');
});
