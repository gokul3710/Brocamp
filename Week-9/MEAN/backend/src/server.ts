import express from "express";
import logger from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser';
// import fileUpload from 'express-fileupload'
import multer from 'multer'
import path from 'path'

//routes
import userRoutes from './api/user'

//mongodb
import {db} from './utils/connection'


//app and port
const app = express();
const port = 3000;


//middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(fileUpload())
app.use(cors({
  origin: ['http://localhost:4200', 'https://cara-odz2.onrender.com', 'https://cara-angular.netlify.app', 'https://carashop.shop'],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
}));
app.use((req,res,next)=>{
  res.header('Cache-Control','no-cache,private,no-Store,must-revalidate,max-scale=0,post-check=0,pre-check=0');
  next();
})

app.use('/image',express.static(path.join(__dirname, 'image')));
// app.use(fileUpload())
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/image');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const timestamp = Date.now();
    const newFilename = `${timestamp}_${path.basename(file.originalname, ext)}.jpg`;
    cb(null, newFilename);
  }
});


app.use(multer({dest: 'image',storage: fileStorage}).array('image'))


db.connect((err:any)=>{
    if(err) console.log("Connection Error");
    else console.log("Database Connected Successfully");
})

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
