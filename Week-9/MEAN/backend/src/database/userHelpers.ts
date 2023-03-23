import { db } from '../utils/connection'
import { collections } from '../utils/collections';
import { ObjectId } from 'mongodb'
import { userModel as user } from '../models/userModel';
import bcrypt from 'bcrypt'

export default {
    user: (userId: string): Promise<user> => {
        return new Promise(async (resolve, reject) => {
            let user: user = await db.get().collection(collections.USER_COLLECTION).findOne({ _id: new ObjectId(userId) })
            resolve(user)
        })
    },
    allUsers: (): Promise<user[]> => {
        return new Promise(async (resolve, reject) => {
            let users: user[] = await db.get().collection(collections.USER_COLLECTION).find().toArray()
            resolve(users)
        })
    },
    signup: (userData: user) => {
        console.log(db.get());
        return new Promise(async (resolve, reject) => {
            let user: user = await db.get().collection(collections.USER_COLLECTION).findOne({ email: userData.email })
            if (user) {
                resolve({ signupErr: "Email is already registered" })
            }
            else {
                userData.password = await bcrypt.hash(userData.password, 10);
                db.get().collection(collections.USER_COLLECTION).insertOne(userData).then((data) => {
                    resolve(data)
                })
            }
        });
    },
    login: (userData: user) => {
        return new Promise(async (resolve, reject) => {
            let response = {
                user: null,
                status: false,
                loginErr: ''
            }
            let user = await db.get().collection(collections.USER_COLLECTION).findOne({ email: userData.email })
            if (user) {
                bcrypt.compare(userData.password, user.password).then((status) => {
                    if (status) {
                        response.user = user
                        response.status = true
                        console.log(response);
                        resolve(response)
                    } else {
                        response.loginErr = "Wrong Password"
                        console.log(response);
                        resolve(response)
                    }
                })
            } else {
                response.loginErr = "Email is not registered"
                resolve(response)
            }
        });
    },
    delete: (userId: string) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collections.USER_COLLECTION).deleteOne({ _id: new ObjectId(userId) }).then((response) => {
                resolve(response)
            })
        })
    },
    edit: (userData: user,image: string) => {
        return new Promise(async (resolve, reject) => {
            console.log(userData);
            let user = await db.get().collection(collections.USER_COLLECTION).findOne({ email: userData.email })
            if (user) {
                console.log(user);
                console.log(userData);
                
                if(userData.password){
                    bcrypt.compare(userData.password, user.password).then(async (status) => {
                        console.log(status);
                        
                        if (status) {
                            let a  = await bcrypt.hash(userData.newPassword, 10);
                            console.log(a);
                            console.log(userData);
                            db.get().collection(collections.USER_COLLECTION).updateOne({ _id: new ObjectId(user._id) }, {
                                $set: {
                                    name: userData.name,
                                    phone: userData.phone,
                                    email: userData.email,
                                    password: a,
                                    image: image
                                }
                            }).then((response) => {
                                resolve({name: userData.name, phone: Number(userData.phone),email: userData.email,image:image,_id: user._id})
                            })
                        } else {
                            resolve('Wrong Password')
                        }
                    })
                }else{
                    db.get().collection(collections.USER_COLLECTION).updateOne({ _id: new ObjectId(user._id) }, {
                        $set: {
                            name: userData.name,
                            phone: Number(userData.phone),
                            email: userData.email,
                            image: image
                        }
                    }).then((response) => {
                        resolve({name: userData.name, phone: Number(userData.phone),email: userData.email,image:image,_id: user._id})
                    })
                }
                
            }

        })
    },
    userById: (id: string)=>{
        return new Promise(async (resolve,reject)=>{
            let user = await db.get().collection(collections.USER_COLLECTION).findOne({ _id: new ObjectId(id) })
            console.log(user);
            
            resolve(user)
        })
    },
    search: (text: string)=>{
        console.log(text);
        
        return new Promise(async(resolve,reject)=>{
            let regex = new RegExp(text, "i");
            let users = await db.get().collection(collections.USER_COLLECTION).find({
                $or: [
                    { name: { $regex: regex } },
                    { email: { $regex: regex } },
                    { address: { $regex: regex } },
                    { mobile: { $regex: regex } }
                ]
            }).toArray();
            console.log(users);
            
            resolve(users)
        })
    }

}