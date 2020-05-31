const MongoDbRepo = require('../repository/mongoDbRepository')

class RecordService {
  constructor () {
    this.RecordRepository = new MongoDbRepo('plethora01')
  }

  getAllRecords () {
    return this.RecordRepository.getAll()
  }

  getRecordByISBN (isbn) {
    return this.RecordRepository.getByISBN(isbn)
  }

  updateRecord (_id, opt) {
    return this.RecordRepository.updateOne(_id, opt)
  }

  deleteRecord (_id) {
    return this.RecordRepository.deleteOne(_id)
  }

  createRecord (opt) {
    return this.RecordRepository.create(opt)
  }
}

module.exports = RecordService
