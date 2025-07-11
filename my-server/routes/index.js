const app = require('express')
const router = app.Router()

const blogsRouter = require('./blogsRouter.js')
const worksRouter = require('./worksRouter.js')

router.use(app.json())
router.use('/works', worksRouter)
router.use('/blogs', blogsRouter)

module.exports = router