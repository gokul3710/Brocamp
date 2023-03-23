import { MongoClient } from 'mongodb'
const state = {
    db: null
}
const url = 'mongodb+srv://gokul3710:gokul3710@cara.sd3xah0.mongodb.net/?retryWrites=true&w=majority'
const dbname = 'ngrx'

export const db = {
    connection: null,
    connect: (done: any) => {
        if (db.connection) {
            done();
        } else {
            MongoClient.connect(url, {})
                .then((client: MongoClient) => {
                    db.connection =  client.db(dbname)
                    done();
                })
                .catch((err: any) => {
                    return done(err);
                });
        }
    },
    get: () => {        
        return db.connection;
    },
};
