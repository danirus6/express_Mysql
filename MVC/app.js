const db = require('./config/database.js');

const app = express();

app.use(express.json());

app.use('/posts', require('./routes/posts'));