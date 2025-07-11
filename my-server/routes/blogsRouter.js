const app = require('express')
const router = app.Router()
const models = require('../models')

router.get('/', async (req, res, next) => {
  try {
    const blogs = await models.Blog.findAll()
    res.json(blogs)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:id', async (req, res, next) => {
  const value = req.params.id
  try {
    const blogs = await models.Blog.findOne({where: { id: value}})
    res.json(blogs)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  const data = req.body
  const id = req.params.id
  try {
    const blogs = await models.Blog.update(data, { where: { id: id } })
    res.json(blogs)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const blog = await models.Blog.create(body)
    res.status(201).json(blog)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router