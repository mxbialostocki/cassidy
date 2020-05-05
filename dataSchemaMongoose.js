
// model a record by specifying properties in a mongoose schema:
const recordSchema = mongoose.Schema({
  isbn: Number,
  title: String,
  authorFirst: String,
  authorLast: { type: String, trim: true },
  jacketPath: String,
  imprint: String,
  publisher: String,
  publicationYear: String,
  determination: Array,
  review: {
    reviewSlug: String,
    reviewBody: String,
    reviewerName: String
  },
  dateCreated: { type: Date, default: Date.now },
  dateModified: { type: Date, default: Date.now }
})

// create a mongoose model from the schema in the %%%%%% collection (Records)
const Record = mongoose.model('records', recordSchema)

// then populate it with data details
const windeye = new Record({
  isbn: 9780000088888,
  title: 'Windeye',
  authorFirst: 'Brian',
  authorLast: 'Evenson',
  jacketPath: 'https://cdn.shopify.com/s/files/1/1475/9808/products/Windeye3_1024x1024.jpg?v=1499211134',
  imprint: 'null',
  publisher: 'Coffee House Press',
  publicationYear: '2012',
  determination: ['short-stories', 'horror'],
  review: {
    reviewSlug: 'Demon horse',
    reviewBody: 'Real good sample review, bam! Real good sample review, bam! Real good sample review, bam! Real good sample review, bam! Real good sample review, bam! Real good sample review, bam! Real good sample review, bam! Real good sample review, bam! Real good sample review, bam! Real good sample review, bam! Real good sample review, bam! Real good sample review, bam! Real good sample review, bam! Real good sample review, bam!',
    reviewerName: 'Bam'
  },
  dateModified: Date.now()
})

// then save the record to the database
windeye.save(function (err) { if (err) console.log ('Error on save!') }).then(() => console.log('record saved to mongo database'))
