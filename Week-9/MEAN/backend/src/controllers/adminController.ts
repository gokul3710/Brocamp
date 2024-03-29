import { Request, Response } from 'express';
import userHelpers from '../database/userHelpers';
import { userModel as user } from '../models/userModel';
import { generateAdminToken } from '../middlewares/jwt';

export default {
    getAdmin: async (req: Request, res: Response) => {
        const users: user[] = await userHelpers.allUsers()
        res.status(200).json(users);
    },

    getUser: async(req: Request, res:Response)=>{
        let user = await userHelpers.userById(req.body.id)
        res.status(200).json(user)
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
    },
    getSearch: (req:Request, res:Response)=>{
        console.log(req.query.searchKey);
        
        if(req.query.searchKey){
            userHelpers.search(req.query.searchKey as string).then(
                (users)=>{
                    res.status(200).json(users)
                }
            )
        }
    }
}