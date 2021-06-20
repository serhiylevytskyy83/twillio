const routes = require("./message/core/routes");
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dbConnect = require('./modules/core/db');

const PORT = +process.env.PORT || 5000;


parseResponse(app);
routes(app)
function parseResponse(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
}
app.listen(PORT, () => {
    console.log(
        `Node cluster worker ${process.pid}: listening on port ${PORT} - env: ${process.env.NODE_ENV}`,
    );
});

