var express = require('express');
var router = express.Router();

const USERS_CONTROLLER = 

// let users = []

// /* GET users listing. */
// router.post('/', function(req, res, next) {
//   const user = {
//     id: users.length + 1,
//     name : req.body.name,
//     email : req.body.email,
//     password : req.body.password,
//   };
//   users.push(user);
//   res.status(201).json(user); 
// });

// router.get('/', function(req, res, next) {
//   res.json(users);
// });

// router.get('/:id', function(req, res) {
//   const userId = parseInt(req.params.id, 10);  
//   const user = users.find(u => u.id === userId); 
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).send('User not found');
//   }
// });

// router.delete('/delete/:id', function(req, res) {
//   const userId = parseInt(req.params.id, 10);  
//   const user = users.find(u => u.id === userId); 
//   if (user) {
//     const indexUser = users.indexOf(user);
//     users.splice(indexUser, 1);
//     res.status(200).send(`successfully deleted id ` + userId);
//     // console.log(user);
//   } else {
//     res.status(404).send('User not found');
//   }
// });

module.exports = router;
