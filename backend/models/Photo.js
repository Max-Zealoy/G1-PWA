const [fs, path] = [require('fs'), require('path')];

const { Schema, model } = require('mongoose');
const modelName = 'Photo';

let schema = new Schema({
  url: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [String],
  description: { type: String},
  posted: { type: Date, default: Date.now },
  location: { type: String},

//a for the chat   
  


});



schema.pre('save', function (next) {
  let [type, base64] = this.url.split(',');
  let extension = type.split('/')[1].split(';')[0];
  let buffer = Buffer.from(base64, 'base64');
  let fileName = `${this.author}_${Date.now()}.${extension}`;
  let filePath = path.join(
    __dirname, '../', '../', 'public', 'uploads', fileName
  );
  this.url = fileName;
  fs.writeFile(filePath, buffer, next);


});

module.exports = model(modelName, schema);

