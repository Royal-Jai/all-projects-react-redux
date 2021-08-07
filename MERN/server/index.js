import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from '../server/routes/posts.js'
const app = express();

app.use('/posts', postRoutes);


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb://127.0.0.1:27017';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
        .then(() => app.listen(PORT, () => console.log(`Server is runing port: ${PORT}`)))
        .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false);