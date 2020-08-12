const router = require("express").Router();
const ctrl = require('../../controllers/faqsController');
router.get('/scraping', ctrl.scraping);
router.get('/jsonData', ctrl.jsonData);
module.exports = router;
