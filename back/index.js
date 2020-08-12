const env = require('node-env-file');
env('.env');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

// Settings
app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json({limit: '10mb'}));
require("./routes")(app);
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
