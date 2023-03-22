import {Router} from 'express';
import userController from '../controllers/userController';

const router = Router();


router.get('/api/user', userController.getUser)

router.post('/api/user/signup' , userController.postSignup)

router.post('/api/user/login' , userController.postLogin)

router.post('/api/user/delete', userController.postDelete)

router.put('/api/user/update', userController.postEdit)

export default router;
