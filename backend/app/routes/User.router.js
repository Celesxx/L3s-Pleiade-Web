var cors = require('cors');
module.exports = function(app) {
 
    app.use(cors());
    var userController = require('../controllers/User.controller.js');
    var dataController = require('../controllers/Data.controller.js');
    var loginController = require('../controllers/Login.controller.js')
  
    app.post('/postUser', userController.createUser);
    app.get('/getUser/:id', userController.getUser);
    app.get('/getUsers', userController.users);
    app.put('/putUser/:id', userController.updateUser);
    app.delete('/deleteUser/:id', userController.deleteUser);

    app.post('/postData', dataController.createData);
    app.get('/getData/:id', dataController.getData);
    app.get('/getDataByName/:filename', dataController.getDataByName);
    app.get('/getDatas', dataController.getDatas);
    app.get('/getDataName', dataController.getDataName);
    app.put('/putData/:id', dataController.updateData);
    app.delete('/deleteData/:id', dataController.deleteData);

    app.post('/login', loginController.getLogin)
    app.get('/userAuth', loginController.isAuth)
    }