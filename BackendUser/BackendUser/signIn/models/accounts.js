const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  title: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  created: { type: Date, default: Date.now },
  updated: Date
});

accountSchema.virtual('isVerified').get(function () {
  return !!(this.verified || this.passwordReset);
});

accountSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.passwordHash;
  }
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;