import exports from "express";

const r = express.Router();
r.get('/', (req, res) => {
    res.send({sucess: true});
})

