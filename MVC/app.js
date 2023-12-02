const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())

app.use('/db', require('./routes/db.js'))
app.use('/products', require('./routes/products.js'))
app.use('/categories', require('./routes/categories.js'))


app.listen(PORT, () =>
    console.log(`This server is started at port http://localhost:${PORT}`)
)
