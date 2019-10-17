const express = require('express')

const issueApi = require('../models/issue.js')

const issueRouter = express.Router()

issueRouter.get('/issue/new', (req, res) => {
  res.render('create')
})

issueRouter.get('/issue/edit/:id', (req,res) => {
  issueApi.getAnIssue(req.params.id)
  .then((issue) => {
    res.render('update', {issue})
  })
})

issueRouter.get('/issue', (req, res) => {
  issueApi.getAllIssues()
  .then((allIssues) =>{
    res.render('getAllIssues', {allIssues})
  })
})

issueRouter.post('/issue', (req, res) => {
  issueApi.create(req.body)
  .then(() => {
    res.redirect('/issue')
  })
})

issueRouter.get('/issue/:id', (req, res) => {
  issueApi.getAnIssue(req.params.id)
  .then((issue) =>{
    res.render('getAnIssue', {issue})
  })
})

issueRouter.put('/issue/:id', (req, res) => {
  issueApi.update(req.params.id, req.body)
  .then(() => {
    res.redirect(`/issue/${req.params.id}`)
  })
})

issueRouter.delete('/issue/:id', (req, res) => {
  issueApi.remove(req.params.id)
  .then(() => {
    res.redirect('/issue')
  })
})

module.exports = {
  issueRouter
}
