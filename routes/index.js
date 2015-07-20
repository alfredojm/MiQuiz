var express = require('express');
var router = express.Router();
var MiQuizController =require('../controllers/MiQuiz_controller');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'MiQuiz' });
});
router.get('/quizes/question', quizController.question);  
router.get('/quizes/answer',   quizController.answer); 

module.exports = router;
