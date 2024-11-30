import mongoose from "mongoose";
const url = `mongodb://127.0.0.1:27017/`
const dbName = 'myDatabase'
mongoose.connect(`${url}${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
const db = mongoose.connection
db.on('error', err => {
    console.log(err)
})

db.on('open', () => {
    console.log('')
})

export default mongoose;
