const {createPool} = require('mysql');
const pool=createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'veloxpro',
});

pool.getConnection((err)=>{
    if(err){
        console.log('Error connect to db');
    }
    console.log('Connected to db');
});

const executeQuery = (query, arraParms) =>{
    return new Promise((resolve,reject)=>{
        try{
            pool.query(query,arraParms,(err,data)=>{
                if(err){
                    console.log('error in executing the query')
                    reject(err)
                }
                resolve(data);
            });
        }catch(err){
            reject(err);
        }
    });
};

module.exports = {executeQuery};