var db = require("../config/connection");
var collection = require("../config/collections");
const bcrypt = require("bcrypt");
const { response } = require("express");
const collections = require("../config/collections");
const  ObjectID  = require('mongodb').ObjectID

module.exports = {
  doSignup: (userData) => {
    return new Promise(async(resolve, reject) => {
        let user = await db.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})
        if(user){
            resolve({signupErr:"Email is already regitered"})
        }
        else{
            userData.password = await bcrypt.hash(userData.password, 10);
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
                resolve(data)
            })
        }
    });
  },
  doLogin: (userData) => {
    return new Promise(async(resolve, reject) => {
        let response = {}
        let user = await db.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})
        if(user){
            bcrypt.compare(userData.password,user.password).then((status)=>{
            if(status){
                response.user = user
                response.status = true
                resolve(response)
            }else{
                resolve({status : false,loginErr: "Wrong Password"})
            }
        })
      }else{
        resolve({status : false,loginErr: "Email is not registered"})
      }
    });
  },
  getAllUsers: ()=>{
    return new Promise (async(resolve,reject)=>{
        let users = await db.get().collection(collection.USER_COLLECTION).find().toArray()
        resolve(users)
    })
  },
  getUser: (userId)=>{
    return new Promise ((resolve,reject)=>{
      db.get().collection(collection.USER_COLLECTION).findOne({_id:ObjectID(userId)}).then((user)=>{
        resolve(user)
      })
    })
  },
  editUser: (user)=>{
    return new Promise ((resolve,reject)=>{
      db.get().collection(collection.USER_COLLECTION).updateOne({_id:ObjectID(user.userId)},{
        $set:{
          firstName:user.firstName,
          lastName:user.lastName,
          email:user.email,
          phone:user.phone,
          address:{
            houseName:user.address,
            city:user.city,
            state:user.state,
            pincode:user.pincode
          }
        }
      }).then((response)=>{
        resolve()
      })
    })
  },
  searchUser: (text)=>{
    return new Promise(async(resolve,reject)=>{
      let results = db.get().collection(collections.USER_COLLECTION).find({$text: {$search : text}}).toArray()
      resolve(results)
    })
  },
  deleteUser:(userId)=>{
    return new Promise((resolve,reject) =>{
        db.get().collection(collection.USER_COLLECTION).deleteOne({_id:ObjectID(userId)}).then((response)=>{
            resolve(response)
        })
    }) 
  },
};
