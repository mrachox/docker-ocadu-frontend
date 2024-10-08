const express = require('express')
const app = express()
// const port = 3002

app.use(express.static('dist'))


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`)
// })