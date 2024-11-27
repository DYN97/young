import { MongoClient } from "mongodb";
const config = {
    ip: '',
    port: '27017',
    dbname: 'myDatabase',
    name: '',
    password: ""
}
const url = `mongodb://127.0.0.1:27017/`
const mongodb = MongoClient.connect(url);
export default mongodb;