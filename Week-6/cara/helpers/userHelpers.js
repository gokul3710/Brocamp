var db = require("../config/connection");
var collection = require("../config/collections");
const bcrypt = require("bcrypt");
const { response } = require("express");
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
        let loginStatus = false
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
        console.log("Logged in failed3");
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
      console.log(userId);
      db.get().collection(collection.USER_COLLECTION).findOne({_id:ObjectID(userId)}).then((user)=>{
        console.log("two");
        console.log(user);
        resolve(user)
      })
    })
  },
  editUser: (user)=>{
    return new Promise ((resolve,reject)=>{
      console.log(user);
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
  }
};
