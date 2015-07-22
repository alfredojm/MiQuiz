// GET /quizes/question 
exports.question = function(req, res) { 
    res.render('quizes/question', {pregunta: 'Capital de Navarra'}); 
 }; 
 
 
// GET /quizes/answer 
 exports.answer = function(req, res) { 
    if (req.query.respuesta === 'Pamplona'){ 
       res.render('quizes/answer', {respuesta: 'Correcto'}); 
    } else { 
       res.render('quizes/answer', {respuesta: 'Incorrecto'}); 
    } 
 }; 

//GET /quizes/Realizado
exports.autor=function(req,res){
	res.render('author', {autor: 'Homer Simpson'});
};