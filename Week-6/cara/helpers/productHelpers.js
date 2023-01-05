var db = require("../config/connection");
var collection = require("../config/collections");
const bcrypt = require("bcrypt");
const { response } = require("express");
const collections = require("../config/collections");
const  ObjectID  = require('mongodb').ObjectID

module.exports= {
    addProduct: (product)=>{
        return new Promise ((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data)=>{
                resolve(data.insertedId)
            })
        })  
    },
    getAllProducts: ()=>{
        return new Promise(async(resolve,reject)=>{
            let products =await db.get().collection(collections.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    },
    getProduct: (productId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collections.PRODUCT_COLLECTION).findOne({_id:ObjectID(productId)}).then((product)=>{
                resolve(product)
            })
        })
    }
}