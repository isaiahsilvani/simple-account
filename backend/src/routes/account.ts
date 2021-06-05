import express from 'express'
import controller from '../controllers/account'

const router = express.Router()

router.delete('/:name', controller.DeleteAccount)
router.get('/:name', controller.fetchFromAccount)
router.post('/', controller.saveToAccount)



export = router