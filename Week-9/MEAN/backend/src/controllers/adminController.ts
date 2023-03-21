import { Request, Response } from 'express';
import userHelpers from '../database/userHelpers';
import { userModel as user } from '../models/userModel';
import { generateAdminToken } from '../middlewares/jwt';

export default {
    getAdmin: async (req: Request, res: Response) => {
        const users: user[] = await userHelpers.allUsers()
        res.status(200).json(users);
    },
    postLogin: async (req:Request, res: Response) => {
        if(req.body){
            if(req.body.email != 'admin@admin.com'){
                res.status(401).json('Invalid Email Address')
            }

            if(req.body.password != '123'){
                res.status(401).json('Wrong Password')
            }

            // const token = generateAdminToken()

        }
    }
}