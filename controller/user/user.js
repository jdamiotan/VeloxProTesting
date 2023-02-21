import { exec } from 'child_process';
import { executeQuery } from '../../config/db';
import userValidation from '../../common/userValidation';

const getAllUser = async(req, res) =>{
    try{
        let userData = await executeQuery('SELECT * FROM tbl_users', []);
        res.send(userData);
    }catch(err){
        res.status(500).json(err)
    }
};

const getUserById = async(req, res)=>{
    let username = req.query.id;
    try{
        let userData = await executeQuery(`SELECT * FROM tbl_users WHERE UserName = "${username}"`, []);
        res.status(200).json(userData);
    }catch(err){
        res.status(500).json(err);
    }
}

const saveUser = async (req, res)=>{
    try{
        const result = req.body
        const {UserName, UserEmail, UserPassword} = result;
        let {error} = userValidation(result);
        if(error){
            res.status(400).json(error.details[0].message);
        }else{
            let userData = await executeQuery(`INSERT INTO tbl_users(UserName, UserEmail, UserPassword) values(?,?,?)`,[UserName, UserEmail, UserPassword]);
            res.status(201).json(userData);    
        }
    }catch(err){
        res.status(400).json(err);
    }
};

export {getAllUser, getUserById, saveUser};