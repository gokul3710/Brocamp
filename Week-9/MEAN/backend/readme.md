#1 npm init

#2 npm install express typescript ts-node @types/express --save-dev

#3 tsconfig.json 
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "esModuleInterop": true
  }
}

#4 src/server.ts
import express from 'express';
import router from './routes';

const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});


#5 scripts in packge.json
"scripts": {
  "start": "ts-node src/server.ts",
  "build": "tsc"
},


#to create a routes directory
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

export default router;

#to connect to mongodb
import { MongoClient } from 'mongodb'
const state = {
    db: null
}
const url = xxx
const dbname = xxx

export const db = {
    connection: null,
    connect: (done: any) => {
        if (db.connection) {
            done();
        } else {
            MongoClient.connect(url, {})
                .then((client: MongoClient) => {
                    db.connection = client.db(dbname);
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






