var express = require('express');
var router = express.Router();
var MiQuizController =require('../controllers/MiQuiz_controller');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'MiQuiz' });
});
router.get('/quizes/question', MiQuizController.question);  
router.get('/quizes/answer',   MiQuizController.answer); 
router.get('/author',MiQuizController.autor);
module.exports = router;
