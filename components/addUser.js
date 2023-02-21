import React, {useState} from "react";
import axios from 'axios';
import Header from "./header";
import {useRouter} from 'next/router';
import Link from 'next/link';


function AddUser(){
    const [addUser, setUser] = useState({
        UserName: "",
        UserEmail: "",
        UserPassword: ""
    });

    const handleChange=(e)=>{
        const value=e.target.value;
        setUser({...addUser,[e.target.name]:value})
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        let data = await axios.post(`http://localhost:3000/api/user`,addUser);
        setUser({
            UserName: "",
            UserEmail: "",
            UserPassword: ""
        })
    }

    return(
        <>
            <Header />
            <div id='createUserForm' className="d-flex align-items-center" style={{ height: '100vh' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card border-0 shadow">
              <div className="createUserCard card-body">
                <h1 className="text-center">Create User</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Company Email</label>
                        <input
                        type="email"
                        className="form-control"
                        name="UserEmail"
                        onChange={handleChange}
                        value = {addUser.UserEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                        type="text"
                        className="form-control"
                        name="UserName"
                        onChange={handleChange}
                        value = {addUser.UserName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        className="form-control"
                        name="UserPassword"
                        onChange={handleChange}
                        value = {addUser.UserPassword}
                        />
                    </div>
                    <div className='form-group text-center'>
                        <button type="submit" href={`/userList`}  id='SubmitUser' className="btn btn-primary btn-block" style={{marginTop:'20px'}}>
                            Create User
                        </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default AddUser;