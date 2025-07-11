const app = require('express')
const router = app.Router()

router.get('/works', (req, res) => {
  res.send({
    status: 'works'
  })
})

module.exports = router