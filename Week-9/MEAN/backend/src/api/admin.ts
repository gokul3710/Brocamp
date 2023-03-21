import {Router} from 'express';
import adminController from '../controllers/adminController';


const router = Router();

router.get('/api/admin' , adminController.getAdmin)

export default router;
