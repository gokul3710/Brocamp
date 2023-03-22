import {Router} from 'express';
import adminController from '../controllers/adminController';


const router = Router();

router.get('/api/admin/users' , adminController.getAdmin)

router.post('/api/admin/user' , adminController.getUser)


export default router;
