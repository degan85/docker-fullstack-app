const express = require('express');
const db = require('../../config/db');

const r = express.Router();

// DB lists 테이블에 있는 모든 데이터를 프론트 서버에 보내주기
r.get('/values', function (req, res) {
    // DB에서 모든 정보 가져오기
    db.pool.query('SELECT ID as \'id\', VALUE as \'value\' FROM lists;',
        (err, results, fileds) => {
            if (err)
                return res.status(500).send(err);
            else
                return res.json( results );
    });
});

// client에서 입력한 값을 DB lists 테이블에 넣어주기
r.post('/value', function (req, res, next) {

    // DB에 값 넣어주기
    db.pool.query(`INSERT INTO lists (value) VALUES("${ req.body.value }")`,
        (err, results, fileds) => {
            if (err)
                return res.status(500).send(err);
            else
                return res.json({ success: true, value: req.body.value });
        });
});

module.exports = r;