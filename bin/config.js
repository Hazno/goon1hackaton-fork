module.exports = {
    port: process.env.PORT || '1337',
    hideARDebugMode: process.env.hideAR || false
}
// heroku config:set hideAR=true