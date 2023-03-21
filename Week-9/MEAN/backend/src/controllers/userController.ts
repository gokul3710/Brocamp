import { Request, Response } from 'express';
import userHelpers from '../database/userHelpers';
import { userModel as user } from '../models/userModel';
import { generateUserToken, getUserFromToken } from '../middlewares/jwt';
import { filesReq, headersreq } from '../models/filesRequest';


export default {
    getUser: (req: Request, res: Response) => {
        let user: user | string = getUserFromToken(req as headersreq)
        console.log(user);
        let d = new Date()
        console.log(d.getMilliseconds());
        res.status(200).json(user)
    },

    postLogin: async (req: Request, res: Response) => {
        userHelpers.login(req.body).then((response: { user?: user, status?: boolean, loginErr?: string }) => {
            if (response.status) {
                console.log(response);
                const token = generateUserToken(response.user)
                res.status(200).json([response.user, token])
            } else {
                res.status(401).json(response.loginErr)
            }
        });
    },
    postSignup: (req: Request, res: Response) => {
        userHelpers.signup(req.body).then((response: { user?: user, status?: boolean, signupErr?: string }) => {
            if (response.signupErr) {
                res.status(401).json(response.signupErr)
            } else {
                res.status(200).json(true)
            }
        });
    },
    postEdit: (req: Request, res: Response) => {
        let image = (req as filesReq).files[0].filename
        console.log(image);
        userHelpers.edit(req.body, image).then((response: any) => {
            const token = generateUserToken(response)
            console.log('done',token);
            res.status(200).json(token)
        })
    },
    postDelete: (req: Request, res: Response) => {
        userHelpers.delete(req.body.userId).then((response) => {
            res.status(200).json(response)
        })
    },
}