var router = require('express').Router()

router.get('/', function(req, res, next) {
	res.sendFile(process.cwd + '/public/index.html')
})

module.exports = router