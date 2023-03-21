import * as jwt from 'jsonwebtoken';
import { userModel as user } from '../models/userModel';
import dotenv from 'dotenv';
import { headersreq } from '../models/filesRequest';
import { NextFunction, Response } from 'express';
import { jwtUser } from '../models/jwtUser';
dotenv.config();

const secret = 'secret'

export function generateUserToken(user: user): string {
    const payload : user  = {
        _id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password,
        image: user.image
    };
    const options = {
        expiresIn: '1h'
    };
    return jwt.sign(payload, secret, options);
}

export function generateAdminToken(user: user): string {
    const payload = {
        admin: true
    };
    const options = {
        expiresIn: '1h'
    };
    return jwt.sign(payload, secret, options);
}

export const authorize = (req: headersreq, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json("Authorization header not found");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json("Token not found");
    }

    try {
        const decoded= jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send("Invalid token");
    }
};

export const getUserFromToken = (req: headersreq): user| string => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return "Authorization header not found";
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return "Token not found";
    }

    try {
        const decoded= jwt.verify(token, secret);
        req.user = decoded;
        return req.user
    } catch (error) {
        return "Invalid token";
    }
};

