const mongoose = require('./connection.js')

global.sampleModel = [];

const IssueModelSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true
 },
 createdAt: Date,
 status: {
   type: String,
   enum: ["open", "fixing", "pending approval", "fixed"],
   required: true
 },
 priority: {
   type: String,
   enum: ["high", "medium", "low"],
   required: true
 }
})

const IssueCollection = mongoose.model('Issue', IssueModelSchema)

const getAllIssues = function() {
  return IssueCollection.find({})
}

const getAnIssue = function(id) {
  let iss = IssueCollection.findById(id)
  return iss
}

const create = function(data) {
  data.createdAt = new Date()
  return IssueCollection.create(data)
}

const update = function(id, data) {
  return IssueCollection.updateOne({"_id": id}, data)
}

const remove = function(id) {
  return IssueCollection.deleteOne({"_id": id})
}

module.exports = {
  IssueCollection,
  getAllIssues,
  getAnIssue,
  create,
  update,
  remove
}
