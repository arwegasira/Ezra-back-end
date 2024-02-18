const SendVerficationEmail = require('./sendVerificationEmail')
const { attachCookies, isTokenValid } = require('./jwt')
const createPayload = require('./createpayload')
const SendpasswordResetEmail = require('./sendPasswordResetEmail')
const createHash = require('./createHash')

module.exports = {
  SendVerficationEmail,
  isTokenValid,
  attachCookies,
  createPayload,
  SendpasswordResetEmail,
  createHash,
}
