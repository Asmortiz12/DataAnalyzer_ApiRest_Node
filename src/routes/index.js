const { Router, response } = require ('express');
const router = Router();

const { getUsers, CreateStudent,getUserByid, DeleteUser, UpdateUser } = require('../controllers/index.controller')

router.get('/users', getUsers)
router.get('/users/:id', getUserByid)
router.post('/users', CreateStudent)
router.put('/users/:id', UpdateUser)
router.delete('/users/:id', DeleteUser)

module.exports = router;